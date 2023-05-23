// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FootComponent } from './foot/foot.component';
import { ViewportComponent } from './viewport/viewport.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EventComponent } from './demo/event/event.component';
import { CounterComponent } from './demo/counter/counter.component';
import {MatMenuModule} from '@angular/material/menu';
import { SidenavComponent } from './viewport/sidenav/sidenav.component';
import { ProfileComponent } from './admin/profile/profile.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CourseComponent } from './sidenav/course/course.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { BatchComponent } from './sidenav/batch/batch.component';
import { FeesComponent } from './sidenav/fees/fees.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './demo/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    ViewportComponent,
    EventComponent,
    CounterComponent,
    SidenavComponent,
    ProfileComponent,
    CourseComponent,
    DashboardComponent,
    BatchComponent,
    FeesComponent,
    UpdateProfileComponent,
    LoginPageComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
