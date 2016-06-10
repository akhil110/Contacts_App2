import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ContactService } from './contact.service';
import { SearchFilterPipe } from './contact-filter.pipe'

@Component({
    templateUrl: 'app/contact-list.component.html',
    pipes: [SearchFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class ContactListComponent implements OnInit {
    pageTitle: string = 'View all contacts';
    errorMessage: string;
    contacts: any;

    constructor(private _contactService: ContactService){}

    ngOnInit():void{
        this._contactService.getContacts()
            .subscribe(
                contacts => this.contacts = contacts,
                error => this.errorMessage = <any>error
            );
    }

    confirmDel(id):void{
       if(confirm('Do you really want to delete this contact?')){
			this._contactService.delContact(id)
            .subscribe(() => {
                alert('Contact removed successfully');
                this._contactService.getContacts()
                   .subscribe(
                        contacts => this.contacts = contacts,
                         error =>  this.errorMessage = <any>error
                    );
            });
		} 
    }
}
