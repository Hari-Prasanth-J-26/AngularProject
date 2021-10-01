import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './main.service';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UsersComponent } from './users/users.component';
import { RequirementformComponent } from './requirementform/requirementform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrdersComponent } from './orders/orders.component';
import { UserordersComponent } from './userorders/userorders.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchNameComponent } from './search-name/search-name.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { SearchEmailComponent } from './search-email/search-email.component';
import { ViewUserIdComponent } from './view-user-id/view-user-id.component';
import { ViewUsersNameComponent } from './view-users-name/view-users-name.component';
import { ViewUsersContactComponent } from './view-users-contact/view-users-contact.component';
import { ViewUsersEmailComponent } from './view-users-email/view-users-email.component';
import { PlaceorderformComponent } from './placeorderform/placeorderform.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    HomeComponent,
    ServicesComponent,
    AdminhomeComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ViewUsersComponent,
    UsersComponent,
    RequirementformComponent,
    AdminloginComponent,
    PlaceorderComponent,
    OrdersComponent,
    UserordersComponent,
    SearchIdComponent,
    SearchNameComponent,
    SearchContactComponent,
    SearchEmailComponent,
    ViewUserIdComponent,
    ViewUsersNameComponent,
    ViewUsersContactComponent,
    ViewUsersEmailComponent,
    PlaceorderformComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
