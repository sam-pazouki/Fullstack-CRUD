import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor(private articleService: ArticleService, private router: Router) {}

  articles: any;

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.articles = this.articleService.listArticles().subscribe((article) => {
      this.articles = article;
      console.log(this.articles);
    });
  }

  deleteArticle(login: any) {
    this.articleService.deleteArticle(login).subscribe((res) => {
      this.articles = this.articles.filter((a: any) => a.id == login);
    });
    this.router.navigateByUrl('/');
  }
}
