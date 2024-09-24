import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  age: number | undefined;
  openPdf: boolean = false;

  ngOnInit() {
    this.age = this.calculateAge(new Date('1998-07-06'));
  }

  calculateAge(birthday: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }

  openClosePDF() {
    this.openPdf = !this.openPdf;

    console.log('jola')
  }
}

