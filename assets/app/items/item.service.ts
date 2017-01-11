import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Item } from "./item.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ItemService {
    private items: Item[] = [];
    itemIsEdit = new EventEmitter<Item>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addItem(item: Item) {
        const body = JSON.stringify(item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/item' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const item = new Item(
                    result.obj.name,
                    result.obj.quantity,
                    result.obj.type,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.items.push(item);
                return item;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getItems() {
        return this.http.get('http://localhost:3000/item')
            .map((response: Response) => {
                const items = response.json().obj;
                let transformedItems: Item[] = [];
                for (let item of items) {
                    transformedItems.push(new Item(
                        item.name,
                        item.quantity,
                        item.type,
                        item.user.firstName,
                        item._id,
                        item.user._id)
                    );
                }
                this.items = transformedItems;
                return transformedItems;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editItem(item: Item) {
        this.itemIsEdit.emit(item);
    }

    updateItem(item: Item) {
        const body = JSON.stringify(item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/item/' + item.itemId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteItem(item: Item) {
        this.items.splice(this.items.indexOf(item), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/item/' + item.itemId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}