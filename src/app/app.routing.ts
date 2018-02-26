import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {RegisterationComponent} from './registeration/registeration.component';
import { AppComponent } from './app.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const appRoutes: Routes = [
    { path:'',redirectTo:'admindashboard',pathMatch:'full'},
    { path: 'dialog', component: DialogboxComponent },
    { path: 'registeration/:uuid', component: RegisterationComponent },
    { path:'admindashboard' , component:AdmindashboardComponent},
    { path:'login' , component:LoginComponent},
    { path:'userdetails' , component:UserdetailsComponent}


    // otherwise redirect to home
    // { path: 'registeration', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
