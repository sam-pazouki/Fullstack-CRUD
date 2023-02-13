import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  url: string = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  listArticles() {
    return this.http.get<any>(this.url + `/api/articles`);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  addArticle(article: any): Observable<any> {
    return this.http.post<any>(
      this.url + `/api/articles`,
      article,
      this.httpOptions
    );
  }
  find(login: number): Observable<any> {
    return this.http.get(this.url + `/api/article/` + login);
  }

  update(login: number, article: any): Observable<any> {
    return this.http.put(
      this.url + `/api/article/` + login,
      article.this.httpOptions
    );
  }
  deleteArticle(login: any): Observable<any> {
    return this.http.delete<any>(
      this.url + `/api/article/` + login,
      this.httpOptions
    );
  }
}
