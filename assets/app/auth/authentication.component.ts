import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-authentication',
    template: `
        <div class="color-con">
            <header class="row spacing">
                <nav class="col-md-8 col-md-offset-2">
                    <ul class="nav nav-tabs">
                        <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']" id="no-border">Login</a></li>
                        <li routerLinkActive="active"><a [routerLink]="['signup']">Sign up</a></li>
                        <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>
                    </ul>
                </nav>
            </header>
            <div class="row spacing">
            <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    ngOnInit() {
        return this.authService.loggedIn()
    }
}