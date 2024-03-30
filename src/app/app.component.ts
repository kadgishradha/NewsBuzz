import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { NewsApiService } from './news-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewsBuzz';
  
  mArticles$: Observable<any>;
  mSources$: Observable<any>;

  constructor(private newsapi: NewsApiService) {
    this.mArticles$ = new Observable<any>;
    this.mSources$ = new Observable<any>;
  }

  ngOnInit() {
    this.mArticles$ = this.newsapi.initArticles();
    this.mSources$ = this.newsapi.initSources();
  }

  searchArticles(source: string) {
    this.mArticles$ = this.newsapi.getArticlesByID(source);
  }
}
