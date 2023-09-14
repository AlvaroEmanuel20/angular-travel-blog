import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { SocialIconButtonComponent } from './pages/components/social-icon-button/social-icon-button.component';
import { TopPostCardComponent } from './pages/home/components/top-post-card/top-post-card.component';
import { PostCardComponent } from './pages/home/components/post-card/post-card.component';
import { SmallPostCardComponent } from './pages/home/components/small-post-card/small-post-card.component';
import { NavbarSearchComponent } from './pages/components/navbar/components/navbar-search/navbar-search.component';
import { SidebarComponent } from './pages/home/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SocialIconButtonComponent,
    TopPostCardComponent,
    PostCardComponent,
    SmallPostCardComponent,
    NavbarSearchComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
