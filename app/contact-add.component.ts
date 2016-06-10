import { Component, OnInit }  from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { ControlGroup } from '@angular/common';
import { ContactService } from './contact.service';


@Component({
    templateUrl: 'app/contact-add.component.html'
})
export class ContactAddComponent {
    pageTitle: string = "Add Contact";
    
    contact: any;
    errorMessage: string;
  
 
    constructor(private _router : Router, private _routeParams: RouteParams, private _contactService: ContactService){}  
    
    ngOnInit(): void {
        let id = this._routeParams.get('id');
        this.contact={
            'id':0,
            'name': '',
            'email':'',
            'phone': '',
            'add1': '',
            'add2': '',
            'city': '',
            'state': '',
            'country': '',
            'zip': ''
        };
        
        if(id != null){
           this.pageTitle = "Edit Contact"
           this._contactService.getContact(id)
           .subscribe((data) => {
               this.contact.id = data[0].id;
               this.contact.name = data[0].name;
               this.contact.email = data[0].email;
               this.contact.phone = data[0].phone;
               this.contact.add1 = data[0].add1;
               this.contact.add2 = data[0].add2;
               this.contact.city = data[0].city;
               this.contact.state = data[0].state;
               this.contact.country = data[0].country;
               this.contact.zip = data[0].zip;
           })
        }
    }
    
    saveContact(contactForm: ControlGroup) {
        if (contactForm.dirty && contactForm.valid) {
           
           if(this.contact.id == 0){
              this._contactService.addContact(contactForm.value)
                .subscribe(() => {
                    contactForm = null;
                    alert('Contact saved successfully');
                    this._router.navigate(['AllContacts']);
                }); 
           }else{
               this._contactService.editContact(contactForm.value, this.contact.id)
               .subscribe(()=>{
                   alert("Contact updated successfully");
               })
           }
        }
    }

}
