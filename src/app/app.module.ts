import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext'
import { InputSwitchModule } from 'primeng/inputswitch'
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent, CardContainerComponent, CardEditorItemComponent } from './components';
import { HomeComponent, WordDisplayComponent, ResultComponent, SetDetailsComponent, CreateAndEditSetComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    HomeComponent,
    WordDisplayComponent,
    ResultComponent,
    SetDetailsComponent,
    CreateAndEditSetComponent,

    // Components
    TopBarComponent,
    CardContainerComponent,
    CardEditorItemComponent,

    // Directives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Lib Modules
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
