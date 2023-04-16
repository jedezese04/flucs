import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent, CardContainerComponent } from './components';
import { HomeComponent, WordDisplayComponent, ResultComponent, SetDetailsComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    HomeComponent,
    WordDisplayComponent,
    ResultComponent,
    SetDetailsComponent,

    // Components
    TopBarComponent,
    CardContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
