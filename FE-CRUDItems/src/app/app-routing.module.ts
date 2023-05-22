import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListItemComponent } from './components/list-item/list-item.component';
import { ManageItemComponent } from './components/manage-item/manage-item.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'listItems', pathMatch: 'full' },
  { path: 'listItems', component: ListItemComponent },
  { path: 'addItem', component: ManageItemComponent },
  { path: 'searchItem/:id', component: SearchItemComponent },
  { path: 'editItem/:id', component: ManageItemComponent },
  { path: '**', redirectTo: 'listItems', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
