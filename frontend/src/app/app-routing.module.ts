import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdiArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  {
    path: 'add',
    component: NewArticleComponent,
  },
  {
    path: 'edit/:articleId',
    component: EdiArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
