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
  repeatNumber = [1,2,3,4];
  mArticles$: Observable<any>;
  mArticlesHalf$: Observable<any>;
  mSources$: Observable<any>;

  constructor(private newsapi: NewsApiService) {
    this.mArticles$ = new Observable<any>;
    this.mArticlesHalf$ = new Observable<any>;
    this.mSources$ = new Observable<any>;
  }

  ngOnInit() {
    this.mArticles$ = this.newsapi.initArticles();
    console.log(this.mArticles$)
    this.mArticlesHalf$ = this.mArticles$;
    this.mSources$ = this.newsapi.initSources();
  }

  searchArticles(source: string) {
    this.mArticles$ = this.newsapi.getArticlesByID(source);
  }
  onMoreButtonClick(url: any){

  }
}
