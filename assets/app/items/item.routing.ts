import { Routes, RouterModule } from "@angular/router";

import { AllItemsComponent } from "./allItems.component";
import { ProduceComponent } from "./produce.component";
import { MeatComponent } from "./meat.component";
import { DairyComponent } from "./dairy.component";
import { OtherComponent } from "./other.component";

const ITEM_ROUTES: Routes = [
    { path: '', redirectTo: 'items', pathMatch: 'full' },
    { path: 'items', component: AllItemsComponent },
    { path: 'produce', component: ProduceComponent },
    { path: 'meat', component: MeatComponent },
    { path: 'dairy', component: DairyComponent },
    { path: 'other', component: OtherComponent }
];

export const ItemRouting = RouterModule.forChild(ITEM_ROUTES);