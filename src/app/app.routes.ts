import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'article', component: ArticlesComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }