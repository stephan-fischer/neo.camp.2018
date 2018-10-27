import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    MatSliderModule,
    MatCardModule
} from '@angular/material';
import { ListComponent } from './components/list/list.component';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        NeonServiceTestComponent,
        ListComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatCardModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
