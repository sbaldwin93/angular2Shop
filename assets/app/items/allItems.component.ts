import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ItemService } from "./item.service";
import { Item } from "./item.model";

@Component({
    selector: 'app-allItems',
    templateUrl: './allItems.component.html'
})
export class AllItemsComponent  implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) {}

    ngOnInit() {
        this.itemService.getItems()
            .subscribe(
                (items: Item[]) => {
                    this.items = items;
                }
            );
    }
}