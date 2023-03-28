import { Subject } from "rxjs";
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Document } from "./document.model";

@Injectable({
    providedIn: 'root'
})

export class setService {
    // documentSelectedEvent = new EventEmitter<Document>();
    // documentChangedEvent = new EventEmitter<Document[]>();
    // documentListChangedEvent = new Subject<Document[]>();

    // private documents: Document[] = [];
    // private maxDocumentId: number;

    // constructor(private http: HttpClient) {
    //     this.fetchDocuments();
    // }

    // fetchDocuments() {
    //     return this.http
    //         .get<Document[]>(
    //             "http://localhost:3000/documents"
    //         )
    //         .subscribe((result: any) => {
    //             let documents = result.documents;
    //             this.documents = documents;
    //             // console.log(documents);
    //             this.maxDocumentId = this.getMaxId();
    //             documents = documents.sort((a, b) => {
    //                 if (a.id > b.id) {
    //                     return 1;
    //                 } else {
    //                     return -1;
    //                 }
    //             })
    //             let documentsListClone = this.documents.slice();
    //             this.documentListChangedEvent.next(documentsListClone);
    //             (error: any) => {
    //                 console.log(error);
    //             }
    //         })
    // }

    // storeDocuments(document: Document) {
    //     if (!document) {
    //         return;
    //     }

    //     // make sure id of the new Document is empty
    //     document.id = '';

    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //     // add to database
    //     this.http.post<{ message: string, document: Document }>('http://localhost:3000/documents',
    //         document,
    //         { headers: headers })
    //         .subscribe(
    //             (responseData) => {
    //                 // add new document to documents
    //                 this.documents.push(responseData.document);
    //                 this.sortAndSend();
    //             }
    //         );
    // }

    // getDocuments() {
    //     return this.documents.slice();
    // }

    // getDocument(id: string) {
    //     return this.documents[id];
    // }

    // getMaxId(): number {
    //     let maxId = 0;
    //     for (let document of this.documents) {
    //         let currentId = parseInt(document.id);
    //         if (currentId > maxId) {
    //             maxId = currentId;
    //         }
    //     }
    //     return maxId;
    // }


    // addDocument(newDocument: Document) {
    //     if (!newDocument) {
    //         return;
    //     }
    //     this.maxDocumentId++;
    //     newDocument.id = this.maxDocumentId.toString();
    //     this.documents.push(newDocument);
    //     this.storeDocuments(newDocument);
    // }

    // updateDocument(originalDocument: Document, newDocument: Document) {
    //     if (!originalDocument || !newDocument) {
    //         return;
    //     }

    //     const pos = this.documents.findIndex(d => d.id === originalDocument.id);

    //     if (pos < 0) {
    //         return;
    //     }

    //     // set the id of the new Document to the id of the old Document
    //     newDocument.id = originalDocument.id;
    //     newDocument._id = originalDocument._id;

    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //     // update database
    //     this.http.put('http://localhost:3000/documents/' + originalDocument.id,
    //         newDocument, { headers: headers })
    //         .subscribe(
    //             (response: Response) => {
    //                 this.documents[pos] = newDocument;
    //                 this.sortAndSend();
    //             }
    //         );
    // }


    // deleteDocument(document: Document) {
    //     if (!document) {
    //         return;
    //     }

    //     const pos = this.documents.findIndex(d => d.id === document.id);

    //     if (pos < 0) {
    //         return;
    //     }

    //     // delete from database
    //     this.http.delete('http://localhost:3000/documents/' + document.id)
    //         .subscribe(
    //             (response: Response) => {
    //                 this.documents = this.documents.splice(pos, 1);
    //                 this.sortAndSend();
    //             }
    //         );
    // }

    // sortAndSend() {
    //     this.fetchDocuments();
    // }

}