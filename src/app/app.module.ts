import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './dashboard/search/search.component';
import { SortComponent } from './dashboard/sort/sort.component';
import { CreateKeyComponent } from './dashboard/create-key/create-key.component';
import { KeyListComponent } from './dashboard/key-list/key-list.component';
import { KeyListItemComponent } from './dashboard/key-list/key-list-item/key-list-item.component';
import { KeyComponent } from './dashboard/key-list/key-list-item/key/key.component';
import { ButtonComponent } from './dashboard/key-list/key-list-item/button/button.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { CreateKeyPopupComponent } from './dashboard/create-key-popup/create-key-popup.component';
import { CreateKeyPopupContentComponent } from './dashboard/create-key-popup/create-key-popup-content/create-key-popup-content.component';
import { CreateKeyAlertComponent } from './dashboard/create-key-popup/create-key-alert/create-key-alert.component';
import { DialogueComponent } from './dashboard/key-list/key-list-item/dialogue/dialogue.component';
import { StatusAlertComponent } from './dashboard/key-list/key-list-item/status-alert/status-alert.component';

const routes: Routes = [
  {path: 'createkey', component:Dashboard2Component},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    SortComponent,
    CreateKeyComponent,
    KeyListComponent,
    KeyListItemComponent,
    KeyComponent,
    ButtonComponent,
    HeaderComponent,
    Dashboard2Component,
    CreateKeyPopupComponent,
    CreateKeyPopupContentComponent,
    CreateKeyAlertComponent,
    DialogueComponent,
    StatusAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
