import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './head/about/about.component';
import { ContactComponent } from './head/contact/contact.component';
import { GalleryComponent } from './head/gallery/gallery.component';
import { HomeComponent } from './head/home/home.component';
import { SidenavComponent } from './viewport/sidenav/sidenav.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { CourseComponent } from './sidenav/course/course.component';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { BatchComponent } from './sidenav/batch/batch.component';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:'home',component:DashboardComponent},
  {path:'about', component:AboutComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'profile',component:ProfileComponent},
  {path:'course',component:CourseComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'batch', component:BatchComponent},
  {path:'u_profile',component:UpdateProfileComponent},
  {path:'login_page',component:LoginPageComponent},
  // {path:'sidenav', component:SidenavComponent}
  {path:'**',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
