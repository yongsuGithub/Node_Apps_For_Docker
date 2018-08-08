import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TableComponent } from './table/table.component';
import{ Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component'
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './table/EmployeeService';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DialogComponent } from './dialog/dialog.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  {path: 'contactus', component:ContactusComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    TableComponent,
    SearchComponent,
    AddEmployeeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule,
      HttpModule,
      AccordionModule,
      DialogModule,
      BrowserAnimationsModule,
     
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
