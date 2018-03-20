import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { PostsListService } from './posts-list.service';
import {MainFeedComponent} from './main-feed/main.component';
import { AppComponent } from './app.component';
import {PostComponent} from './post/post.component';
import { AppRoutingModule }     from './app-routing.module';
import { PostPageComponent } from './post-page/post-page.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './post.service';
import {FilmService} from './film.service';
import {FilmComponent} from './film/film.component';
import {HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { PopularFeedComponent } from './popular-feed/popular-feed.component'
@NgModule({
  declarations: [
    AppComponent,
    MainFeedComponent,
    PostComponent,
    PostPageComponent,
    FilmComponent,
    HeaderComponent,
    FilterComponent,
    PopularFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PostsListService,PostService, FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
