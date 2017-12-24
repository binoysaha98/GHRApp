import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { PhoneComponent } from './phone/phone.component';
import { OtpComponent } from './otp/otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NearbyComponent } from './nearby/nearby.component';
import { ExampleComponent } from './example/example.component';
import { NpoliceComponent } from './nearby/npolice/npolice.component';
import { NpharmacyComponent } from './nearby/npharmacy/npharmacy.component';
import {NclinicsComponent} from './nearby/nclinics/nclinics.component';
import {NhospitalComponent} from './nearby/nhospital/nhospital.component';

export const routes:Routes=[

  {path:'register',component:RegisterComponent},
  {path:'email',component:EmailComponent},
  {path:'phone',component:PhoneComponent},
  {path:'',redirectTo:'/register',pathMatch:'full'},
  {path:'otp',component:OtpComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'nearby',component:NearbyComponent},
  {path:'example',component:ExampleComponent},
  {path:'nearby/npharmacy',component:NpharmacyComponent},
  {path:'nearby/npolice',component:NpoliceComponent},
  {path:'nearby/nclinics',component:NclinicsComponent},
  {path:'nearby/nhospital',component:NhospitalComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EmailComponent,
    PhoneComponent,
    OtpComponent,
    DashboardComponent,
    NearbyComponent,
    ExampleComponent,
    NpoliceComponent,
    NpharmacyComponent,
    NclinicsComponent,
    NhospitalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
