import { Component } from '@angular/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent, IntroductionComponent, NavbarComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
