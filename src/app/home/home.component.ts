import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private seo: SeoService) {}

  ngOnInit() {
    let t: string =
      'Farmatodo | Farmacia y droguería online | 24 horas a domicilio';
    this.title.setTitle(t);

    this.seo.generateTags({
      title: 'Farmatodo Farmacia y droguería online 24 horas a domicilio',
      description:
        'Farmatodo, cadena de farmacias y droguerías con productos para la salud y belleza.',
      url: 'https://www.farmatodo.com.co',
      image: './assets/logo.png',
      slug: '',
    });
  }
}
