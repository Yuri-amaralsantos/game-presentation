import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { CharacterListComponent } from './pages/characters/character-list.component';
import { CharacterDetailComponent } from './pages/characters/character-detail.component';

export const routes: Routes = [  // Add 'export' here
  { path: '', component: HomeComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailComponent } 
];
