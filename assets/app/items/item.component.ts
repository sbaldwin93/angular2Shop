import { Component, Input, OnInit } from "@angular/core";
import { Item } from "./item.model";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";

import { User } from "../auth/user.model";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-items',
    templateUrl: './item.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class ItemComponent {
    @Input() item: Item;
    
    constructor(private itemService: ItemService, private authService: AuthService, private router: Router) {}

    onEdit() {
        this.itemService.editItem(this.item);
    }

    onDelete() {
        this.itemService.deleteItem(this.item)
            .subscribe(
                result => console.log(result)
            );
    }
    belongsToUser() {
        return localStorage.getItem('userId') == this.item.userId;
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }    
}