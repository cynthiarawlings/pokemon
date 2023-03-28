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
        this.maxSetId++;
        newSet.id = this.maxSetId.toString();
        this.sets.push(newSet);
        // this.storeSets(newSet);
    }

    sortAndSend() {
        // this.fetchSets();
    }

    // fetchSets function will go here

    // storeSets function will go here

    // updateSet function will go here

    // deleteSet function will go here

}