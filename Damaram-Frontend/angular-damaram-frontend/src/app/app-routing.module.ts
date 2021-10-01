import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PlaceorderformComponent } from './placeorderform/placeorderform.component';
import { RequirementformComponent } from './requirementform/requirementform.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { SearchEmailComponent } from './search-email/search-email.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchNameComponent } from './search-name/search-name.component';
import { ServicesComponent } from './services/services.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserordersComponent } from './userorders/userorders.component';
import { UsersComponent } from './users/users.component';
import { ViewUserIdComponent } from './view-user-id/view-user-id.component';
import { ViewUsersContactComponent } from './view-users-contact/view-users-contact.component';
import { ViewUsersEmailComponent } from './view-users-email/view-users-email.component';
import { ViewUsersNameComponent } from './view-users-name/view-users-name.component';
import { ViewUsersComponent } from './view-users/view-users.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'login', component: LoginComponent}, 
  {path:'userhome', component: UserhomeComponent},
  {path:'home', component: HomeComponent},
  {path:'services', component: ServicesComponent},
  {path:'adminhome', component: AdminhomeComponent},
  {path:'users', component: UsersComponent},
  {path:'viewusers', component: ViewUsersComponent},
  {path:'deleteuser', component: DeleteUserComponent},
  {path:'requirementform', component: RequirementformComponent},
  {path:'adminlogin', component: AdminloginComponent},
  {path:'placeorder', component: PlaceorderComponent},
  {path:'orders', component: OrdersComponent},
  {path:'userorders', component: UserordersComponent},
  {path:'searchid', component: SearchIdComponent},
  {path:'searchname', component: SearchNameComponent},
  {path:'searchcontact', component: SearchContactComponent},
  {path:'searchemail', component: SearchEmailComponent},
  {path:'viewuserid', component: ViewUserIdComponent},
  {path:'viewusersname', component: ViewUsersNameComponent},
  {path:'viewusersemail', component: ViewUsersEmailComponent},
  {path:'viewuserscontact', component: ViewUsersContactComponent},
  {path:'placeorderform', component: PlaceorderformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
