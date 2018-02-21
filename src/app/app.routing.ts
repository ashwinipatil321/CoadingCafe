import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {RegisterationComponent} from './registeration/registeration.component';
import { AppComponent } from './app.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const appRoutes: Routes = [

    { path: 'dialog', component: DialogboxComponent },
    { path: 'registeration/:uuid', component: RegisterationComponent },
    { path:'admindashboard' , component:AdmindashboardComponent},
    { path:'login' , component:LoginComponent}

    // otherwise redirect to home
    // { path: 'registeration', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
