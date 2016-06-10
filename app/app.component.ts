import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ContactListComponent } from './contact-list.component';
import { ContactAddComponent } from './contact-add.component';
import { ContactViewComponent } from './contact-view.component';
import { ContactService } from './contact.service';


@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ContactService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/allcontacts', name: 'AllContacts', component: ContactListComponent, useAsDefault: true },
    { path: '/addcontacts', name: 'AddContacts', component: ContactAddComponent },
    { path: '/editcontacts/:id', name: 'EditContacts', component: ContactAddComponent },
    { path: '/viewcontacts/:id', name: 'ViewContact', component: ContactViewComponent }
])
export class AppComponent {

}
