import {Component, OnInit} from "@angular/core";

@Component({
    selector: "contact-app",
    templateUrl: "./app/app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
