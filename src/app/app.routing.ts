import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'chat', component: ChatComponent},
	{path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRouting {}