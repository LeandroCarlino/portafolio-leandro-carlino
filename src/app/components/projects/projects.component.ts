import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ NgbCarouselModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

images = ['assets/img/paises-app.png', 'assets/img/people-generator.png', 'assets/img/post-and-view.png' ]
}
