import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllItemsComponent } from "./allItems.component";
import { ProduceComponent } from "./produce.component";
import { MeatComponent } from "./meat.component";
import { DairyComponent } from "./dairy.component";
import { OtherComponent } from "./other.component";
import { ItemRouting } from "./item.routing";
//import { ItemService } from "./item.service";

@NgModule({
    declarations: [
        AllItemsComponent,
        ProduceComponent,
        MeatComponent,
        DairyComponent,
        OtherComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ItemRouting
    ]
//    providers: [ItemService]
})
export class ItemModule {
    
}