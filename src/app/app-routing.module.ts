import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndEditSetComponent, HomeComponent, ResultComponent, SetDetailsComponent, WordDisplayComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'word-display/:cardSetId', component: WordDisplayComponent },
  { path: 'result', component: ResultComponent },
  { path: 'set-details/:cardSetId', component: SetDetailsComponent },
  { path: 'create', component: CreateAndEditSetComponent },
  { path: 'edit/:cardSetId', component: CreateAndEditSetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
