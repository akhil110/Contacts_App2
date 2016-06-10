import { Component, OnInit }  from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { ContactService } from './contact.service';

@Component({
    templateUrl: 'app/contact-view.component.html'
})
export class ContactViewComponent implements OnInit {
    pageTitle: string = 'View contact';
    errorMessage: string;
    contacts: any;
   
 
    constructor( private _router: Router, private _routeParams: RouteParams, private _contactService: ContactService){
    }

    ngOnInit():void{
        let id = this._routeParams.get('id');
        this._contactService.getContact(id)
            .subscribe(
                contacts => this.contacts = contacts,
                error => this.errorMessage = <any>error
            );
    }

    onBack(): void {
        this._router.navigate(['AllContacts']);
    }

}
