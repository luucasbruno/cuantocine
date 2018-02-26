import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component'
import { AppComponent } from './app.component'
import { MainFeedComponent } from './main-feed/main.component'
const routes: Routes = [
    {path: 'post/:id', component: PostPageComponent},
    {path: '', component: MainFeedComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
  })

export class AppRoutingModule { }