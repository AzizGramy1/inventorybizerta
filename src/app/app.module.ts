import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 
import { FormsModule } from '@angular/forms'; // <-- importe FormsModule ici

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BizertBridgeInfoComponent } from './bizert-bridge-info/bizert-bridge-info.component';
import { AllTemplateFrontComponent } from './all-template-front/all-template-front.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './template/home/home.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { StatisticsPageComponent } from './template/statistics-page/statistics-page.component';
import { ProductsComponent } from './template/products/products.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { MenuComponent } from './template/menu/menu.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserIndexPageComponent } from './user-index-page/user-index-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EntryVouchersIndexComponent } from './entry-vouchers-index/entry-vouchers-index.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BizertBridgeInfoComponent,
    AllTemplateFrontComponent,
    InscriptionComponent,
    HomeComponent,
    DashboardComponent,
    StatisticsPageComponent,
    ProductsComponent,
    SignInPageComponent,
    MenuComponent,
    InventoryComponent,
    UserIndexPageComponent,
    UserDetailsComponent,
    EntryVouchersIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
