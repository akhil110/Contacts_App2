import { Component, OnInit }  from '@angular/core';
import { ContactService } from './contact.service';
import { IContact } from './contact';
import { SearchFilterPipe } from './contact-filter.pipe'

@Component({
    templateUrl: 'app/contact-list.component.html'
})

export class ContactListComponent implements OnInit {
    pageTitle: string = 'View all contacts';
    errorMessage: string;
    contacts: IContact[];

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
