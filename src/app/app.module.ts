import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext'
import { InputSwitchModule } from 'primeng/inputswitch'
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent, CardContainerComponent, CardEditorItemComponent, GoBackButtonComponent } from './components';
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
    GoBackButtonComponent,

    // Directives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

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
