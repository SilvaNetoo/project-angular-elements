import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { FrameworkPollComponent } from './framework-poll/framework-poll.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { createCustomElement } from '@angular/elements';

var firebaseConfig = {
  apiKey: "AIzaSyBSApouHS61KYmLI2JQQs-mhDZyp-YUEz8",
  authDomain: "angular-elements-f8a44.firebaseapp.com",
  databaseURL: "https://angular-elements-f8a44.firebaseio.com",
  projectId: "angular-elements-f8a44",
  storageBucket: "",
  messagingSenderId: "672491159341"
};

@NgModule({
  declarations: [
    FrameworkPollComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [FrameworkPollComponent],
  entryComponents: [
    FrameworkPollComponent
  ]
})
export class AppModule { 

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FrameworkPollComponent, { injector: this.injector });
    customElements.define('framework-poll', el);
  }
  
}
