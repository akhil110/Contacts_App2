import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IContact } from './contact';
import { ContactService } from './contact.service';


@Component({
    templateUrl: 'app/contact-add.component.html'
})

export class ContactAddComponent {
    pageTitle: string = "Add Contact";
    
    contact: IContact = {
        id:0,
        name: '',
        email: '',
        phone: '',
        add1: '',
        add2: '',
        city: '',
        state: '',
        country: '',
        zip: ''
    }
    errorMessage: string;
    id:number;

    constructor( private _route: ActivatedRoute,
        private _router: Router,
        private _contactService: ContactService){
    }

    
    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
       
        if(this.id != null){
           this.pageTitle = "Edit Contact"
           this._contactService.getContact(this.id)
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
           });
        }
    }
    
    saveContact(form: NgForm) {
        if (form.dirty && form.valid) {
           
           if(this.id == null){
              this._contactService.addContact(form.value)
                .subscribe(() => {
                    form = null;
                    alert('Contact saved successfully');
                    this._router.navigate(['allcontacts']);
                }); 
           }else{
               this._contactService.editContact(form.value, this.id)
               .subscribe(()=>{
                   alert("Contact updated successfully");
               })
           }
        }
    }

}
