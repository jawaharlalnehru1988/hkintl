import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { NgModule } from '@angular/core';
import { EventsComponent } from '../components/events/events.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { AudioComponent } from '../components/audio/audio.component';
import { VideoComponent } from '../components/video/video.component';
import { LectureComponent } from '../components/lecture/lecture.component';
import { BhagavadgitaComponent } from '../components/bhagavadgita/bhagavadgita.component';



export const routes: Routes = [
    {
        path: '', component: LandingComponent,
        children: [
            { path: '', redirectTo: 'events', pathMatch: 'full' },
            { path: 'landing', component: LandingComponent },
            { path: 'events', component: EventsComponent },
            { path: 'article', component: ArticlesComponent },
            { path: 'audio', component: AudioComponent },
            { path: 'video', component: VideoComponent },
            { path: 'lecture', component: LectureComponent },
            { path: 'bhagavadgita', component: BhagavadgitaComponent}
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
