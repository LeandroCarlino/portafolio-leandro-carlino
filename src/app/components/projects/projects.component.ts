import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export interface Project {
  name: string,
  image: string,
  description: string;
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
      description: 'string'
    },
    {
      name: 'Gifs App',
      image: 'assets/img/gifs-app.png',
      description: 'string'
    },
    {
      name: 'Post and View',
      image: 'assets/img/post-and-view.png',
      description: 'string'
    },
    {
      name: 'Paises App',
      image: 'assets/img/paises-app.png',
      description: 'string'
    },
    {
      name: 'Chihiro Page',
      image: 'assets/img/chihiro-page.png',
      description: 'string'
    },
  ]

  // images = ['assets/img/paises-app.png', 'assets/img/people-generator.png', 'assets/img/post-and-view.png']

  constructor() {
    console.log(this.projects); // Verifica que el array de proyectos esté correctamente poblado
  }
}
