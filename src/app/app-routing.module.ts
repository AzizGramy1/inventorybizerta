import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { BizertBridgeInfoComponent } from './bizert-bridge-info/bizert-bridge-info.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './template/home/home.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ProductsComponent } from './template/products/products.component';
import { MenuComponent } from './template/menu/menu.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserIndexPageComponent } from './user-index-page/user-index-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EntryVouchersIndexComponent } from './entry-vouchers-index/entry-vouchers-index.component';

const routes: Routes = [
  {path:'logIn' , component:LoginPageComponent},
  { path: 'bizerte-bridge', component:BizertBridgeInfoComponent },
  { path: 'inscription', component:InscriptionComponent },
  {  path : 'welcome', component:HomeComponent},
  { path : 'dashboard', component:DashboardComponent},
  { path : 'signUp', component:SignInPageComponent},
  { path: 'productList', component: ProductsComponent },
  { path: 'menuAdmin', component: MenuComponent },
  { path: 'inventoryMenuPage', component: InventoryComponent },
  { path: 'userMenuPage', component: UserIndexPageComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'entryVoucherMenuPage', component: EntryVouchersIndexComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
