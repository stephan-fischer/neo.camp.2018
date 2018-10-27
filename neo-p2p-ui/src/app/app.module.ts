import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { NeonServiceTestComponent } from './components/neon-service-test/neon-service-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MAT_DATE_LOCALE,
    MatNativeDateModule,
    MatSliderModule
} from '@angular/material';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        NeonServiceTestComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
