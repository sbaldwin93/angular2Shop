import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { ItemComponent } from "./items/item.component";

import { Router } from "@angular/router";

import { User } from "./auth/user.model";
import { AuthService } from "./auth/auth.service";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'items', component: ItemComponent, loadChildren: './items/item.module#ItemModule' },
];

export const routing = RouterModule.forRoot(APP_ROUTES);