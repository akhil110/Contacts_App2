import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import 'rxjs/Rx'

import { AppComponent } from "./app.component";
import { ContactListComponent } from './contact-list.component';
import { ContactAddComponent } from './contact-add.component';
import { ContactViewComponent } from './contact-view.component';
import { SearchFilterPipe } from './contact-filter.pipe';
import { ContactService } from './contact.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'allcontacts', component: ContactListComponent},
            { path: 'addcontacts', component: ContactAddComponent},
            { path: 'viewcontact/:id', component: ContactViewComponent },
            { path: 'editcontact/:id',component: ContactAddComponent },
            { path: '', redirectTo: 'allcontacts', pathMatch: 'full' },
            { path: '**', redirectTo: 'allcontacts', pathMatch: 'full' }
        ])
    ],
    declarations: [
        AppComponent,
        ContactListComponent,
        ContactAddComponent,
        ContactViewComponent,
        SearchFilterPipe
    ],
    providers: [
        ContactService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
