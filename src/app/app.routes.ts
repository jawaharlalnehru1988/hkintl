import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { NgModule } from '@angular/core';
import { AudioComponent } from '../components/audio/audio.component';
import { VideoComponent } from '../components/video/video.component';
import { LectureComponent } from '../components/lecture/lecture.component';
import { EventsComponent } from '../components/events/events.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'events', component: EventsComponent
    },
    {
        path: 'article', component: ArticlesComponent
    },
    {
        path: 'audio', component: AudioComponent
    },
    {
        path: 'video', component: VideoComponent
    },
    {
        path: 'lecture', component: LectureComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }