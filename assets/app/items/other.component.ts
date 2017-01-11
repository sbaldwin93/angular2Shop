import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ItemService } from "./item.service";
import { Item } from "./item.model";

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html'
})
export class OtherComponent implements OnInit {
    item: Item;

    constructor(private itemService: ItemService) {}

    onSubmit(form: NgForm) {
        if (this.item) {
            // Edit
            this.item.name = form.value.name;
            this.item.quantity = form.value.quantity;
            this.item.type = "other";
            this.itemService.updateItem(this.item)
                .subscribe(
                    result => console.log(result)
                );
            this.item = null;
        } else {
            // Create
            const item = new Item(form.value.name, form.value.quantity, "other", null);
            this.itemService.addItem(item)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.item = null;
        form.resetForm();
    }

    ngOnInit() {
        this.itemService.itemIsEdit.subscribe(
            (item: Item) => this.item = item
        );
    }
}