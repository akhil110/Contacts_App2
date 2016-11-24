import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { ContactService } from './contact.service';

@Component({
    templateUrl: 'app/contact-view.component.html'
})
export class ContactViewComponent implements OnInit, OnDestroy {
    pageTitle: string = 'View contact';
    errorMessage: string;
    contacts: any;
    private sub: Subscription;
   
 
    constructor( private _route: ActivatedRoute,
        private _router: Router,
        private _contactService: ContactService){
    }

    ngOnInit():void{
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this._contactService.getContact(id)
                .subscribe(
                    contacts => this.contacts = contacts,
                    error => this.errorMessage = <any>error
                );
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this._router.navigate(['allcontacts']);
    }

}
