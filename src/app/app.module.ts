import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AppRouting } from './app.routing';

import { HttpModule } from '@angular/http';
import { ChatComponent } from './components/chat/chat.component';

import { RouterModule, Routes } from '@angular/router';
import { ConversesComponent } from './components/converses/converses.component';
import { ConversaComponent } from './components/conversa/conversa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    ConversesComponent,
    ConversaComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
