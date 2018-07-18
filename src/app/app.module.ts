import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MnFullpageModule} from 'ngx-fullpage';
import { TermsComponent } from './terms/terms.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';


@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
