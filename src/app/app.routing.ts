import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {RegisterationComponent} from './registeration/registeration.component';
import { AppComponent } from './app.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [

    { path: 'dialog', component: DialogboxComponent },
    { path: 'registeration', component: RegisterationComponent },
    { path:'topnavbar' , component:TopnavbarComponent},
    { path:'login' , component:LoginComponent}

    // otherwise redirect to home
    // { path: 'registeration', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
