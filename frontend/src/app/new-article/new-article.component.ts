import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  constructor(private articleService: ArticleService, private router: Router) {}

  articles: any;

  ngOnInit(): void {}

  add(
    articleLogin: string,
    articleNome: string,
    articleCPF: string,
    articleemail: string,
    articleendereço: string,
    articlesenha: string
  ) {
    this.articles = {
      login: articleLogin,
      nome: articleNome,
      cpf: articleCPF,
      email: articleemail,
      endereço: articleendereço,
      senha: articlesenha,
    };
    this.articleService
      .addArticle(this.articles as any)
      .subscribe((article) => {
        this.articles = article;
      });
    console.log(this.articles);

    this.router.navigateByUrl('/');
  }
}
