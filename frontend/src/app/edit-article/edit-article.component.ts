import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  articleLogin: any;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.articleLogin = Number(routeParams.get('articleLogin'));
    console.log(this.articleLogin);
    this.articleService.find(this.articleLogin).subscribe((data: any) => {
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
      .update(this.articleLogin, this.article)
      .subscribe((res) => {
        this.router.navigateByUrl('/');
      });
  }
}
