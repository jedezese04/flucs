import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext'
import { InputSwitchModule } from 'primeng/inputswitch'
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent, CardContainerComponent, CardEditorItemComponent, GoBackButtonComponent } from './components';
import { HomeComponent, WordDisplayComponent, ResultComponent, SetDetailsComponent, CreateAndEditSetComponent } from './pages';
import { AuthenticationService, CardSetService } from './services';

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
    HttpClientModule,

    // Lib Modules
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ],
  providers: [
    AuthenticationService,
    CardSetService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
