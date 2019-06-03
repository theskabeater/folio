import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule} from '@clr/angular';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ClarityModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
