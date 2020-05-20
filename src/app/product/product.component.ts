import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  quantity = 1;
  showText = false;
  constructor(private title: Title, private seo: SeoService) {}

  ngOnInit() {
    let t: string =
      'Farmatodo | Dolex Gripa 12 Tabs | Congestión nasal | Dolor cabeza y fiebre';
    this.title.setTitle(t);

    this.seo.generateTags({
      title: 'Dolex Gripa 12 Tabs Congestión nasal, Dolor cabeza y fiebre.',
      description:
        'Encuentra Dolex Gripa 12 Tabs en Farmatodo.com.co, Ingresa ahora, compra todos los medicamentos y productos para el cuidado de tu salud y recibe a Domicilio: rápido, fácil y seguro.',
      url: 'https://www.farmatodo.com.co/0000001-dolex-gripa-12-tabs',
      image: './assets/dolex-gripa.jpg',
      slug: '',
    });
  }
}
