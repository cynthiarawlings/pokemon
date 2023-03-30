import { Subject } from "rxjs";
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Set } from "./sets.model";
// import { MOCKSETS } from "./MOCKSETS";

@Injectable({
    providedIn: 'root'
})

export class setService {
    setSelectedEvent = new EventEmitter<Set>();
    setChangedEvent = new EventEmitter<Set[]>();
    setListChangedEvent = new EventEmitter<Set[]>();

    private sets: Set[] = [];
    // private sets: Set[] = MOCKSETS;
    // private maxSetId: number;

    constructor(private http: HttpClient) {
        this.fetchSets();
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
        this.storeSets(newSet);
    }

    sortAndSend() {
        this.fetchSets();
    }

    fetchSets() {
        return this.http
        .get<Set[]>(
            "http://localhost:3000/api/sets"
        )
        .subscribe((result: any) => {
            let sets = result.sets;
            this.sets = sets;
            // console.log(sets);
            let setsListClone = this.sets.slice();
            this.setListChangedEvent.next(setsListClone);
            (error: any) => {
                console.log(error);
            }
        })
    }

    storeSets(set: Set) {
        if (!set) {
            return;
        }

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        this.http.post<{ message: string, set: Set }>("http://localhost:3000/api/sets", set, { headers: headers })
            .subscribe(
                (responseData) => {
                    // this.sets.push(responseData.set);
                    this.sortAndSend();
                }
            );
    }

    updateSet(newSet: Set) {
        let newSets: Set[] = [];
        let setId = newSet.id;
        for (let set of this.sets) {
            if (set.id == setId) {
                newSets.push(newSet);
            }
            else {
                newSets.push(set);
            }
        }
        this.sets = newSets;

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        this.http.put("http://localhost:3000/api/sets/" + setId, newSet, { headers: headers })
            .subscribe(
                (response: Response) => {
                    // this.documents[pos] = newDocument;
                    this.sortAndSend();
                }
            );
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
        
        this.http.delete("http://localhost:3000/api/sets/" + setId)
            .subscribe(
                (response: Response) => {
                    // this.documents = this.documents.splice(pos, 1);
                    this.sortAndSend();
                }
            );
    }

}