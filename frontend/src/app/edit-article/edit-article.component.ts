import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  articleId: any;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.articleId = Number(routeParams.get('articleId'));
    console.log(this.articleId);
    this.articleService.find(this.articleId).subscribe((data: any) => {
      this.article = data;
      console.log(this.article);
    });
  }

  update(
    articleLogin: string,
    articleNome: string,
    articleCPF: string,
    articleemail: string,
    articleendereço: string,
    articlesenha: string
  ) {
    this.articleService
      .update(this.articleId, this.article)
      .subscribe((res) => {
        this.router.navigateByUrl('/');
      });
  }
}
