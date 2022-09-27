import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: '', component:HomeComponent },
{ path: 'Articles', component: ArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
