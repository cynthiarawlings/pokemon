import { Subject } from "rxjs";
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Set } from "./sets.model";
import { MOCKSETS } from "./MOCKSETS";

@Injectable({
    providedIn: 'root'
})

export class setService {
    setSelectedEvent = new EventEmitter<Set>();
    setChangedEvent = new EventEmitter<Set[]>();
    setListChangedEvent = new EventEmitter<Set[]>();

    // private sets: Set[] = [];
    private sets: Set[] = MOCKSETS;
    private maxSetId: number;

    constructor(private http: HttpClient) {
        // this.fetchSets();
    }

    getSets() {
        return this.sets.slice();
    }

    getSet(id: string) {
        return this.sets[id];
    }

    getMaxId(): number {
        let maxId = 0;
        for (let set of this.sets) {
            let currentId = parseInt(set.id);
            if (currentId > maxId) {
                maxId = currentId;
            }
        }
        return maxId;
    }

    addSet(newSet: Set) {
        if (!newSet) {
            return;
        }
        this.sets.push(newSet);
        console.log(this.sets);
        // this.storeSets(newSet);
    }

    sortAndSend() {
        // this.fetchSets();
    }

    // fetchSets function will go here
    fetchSets() {

    }

    // storeSets function will go here
    storeSets(set: Set) {

    }

    updateSet(newSet: Set) {
        let newSets: Set[] = [];
        let setId = newSet.id;
        for (let set of this.sets) {
            if (set.id == setId) {
                // console.log(newSets);
                newSets.push(newSet);
            }
            else {
                newSets.push(set);
            }
        }
        this.sets = newSets;
        console.log(this.sets);
        // Connect to DB
    }

    // deleteSet function will go here
    deleteSet(id: string) {
        let newSets: Set[] = [];
        let setId = id;
        for (let set of this.sets) {
            if (set.id != setId) {
                newSets.push(set);
            }
        }
        this.sets = newSets;
        console.log(this.sets);
        // Connect to DB
    }

}