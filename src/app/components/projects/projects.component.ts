import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export interface Project {
  name: string,
  image: string,
  description: string,
  url: string,
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'People Generator',
      image: 'assets/img/people-generator.png',
      description: 'string',
      url: 'https://people-generator.vercel.app/'
    },
    {
      name: 'Gifs App',
      image: 'assets/img/gifs-app.png',
      description: 'string',
      url: 'https://gifs-app-beryl.vercel.app'
    },
    {
      name: 'Post and View',
      image: 'assets/img/post-and-view.png',
      description: 'string',
      url: 'https://post-and-view.vercel.app/home'
    },
    {
      name: 'Paises App',
      image: 'assets/img/paises-app.png',
      description: 'string',
      url: 'https://paises-app-eight.vercel.app'
    },
    {
      name: 'Chihiro Page',
      image: 'assets/img/chihiro-page.png',
      description: 'string',
      url: 'https://chihiro-page.netlify.app/'
    },
  ]

  // images = ['assets/img/paises-app.png', 'assets/img/people-generator.png', 'assets/img/post-and-view.png']

  constructor() {
    console.log(this.projects);
  }

  goToPage(url: string) {
    window.open(url, '_blank');
  }
}
