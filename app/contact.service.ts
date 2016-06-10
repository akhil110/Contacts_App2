import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
    constructor(private _http: Http) { }

    getContact(id) {
        return this._http.get('http://localhost/contact-app/contacts.cfc?method=getContacts&contactid=' + id)
            .map((response: Response) =>  response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getContacts() {
        return this._http.get('http://localhost/contact-app/contacts.cfc?method=getContacts')
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    addContact(objContact) {
        return this._http.get('http://localhost/contact-app/contacts.cfc?method=newContact&jsStruct=' + JSON.stringify(objContact))
        .catch(this.handleError);
    }

    editContact(objContact, id) {
        return this._http.get('http://localhost/contact-app/contacts.cfc?method=editContact&contactid=' + id + '&jsStruct=' + JSON.stringify(objContact))
        .catch(this.handleError);
    }

    delContact(id){
        return this._http.get('http://localhost/contact-app/contacts.cfc?method=delContact&contactid=' + id)
        .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
