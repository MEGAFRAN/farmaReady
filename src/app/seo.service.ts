import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta) {}

  generateTags(config) {
    config = {
      title: 'Farmacia y droguería online 24 horas a domicilio',
      description:
        'Farmatodo, cadena de farmacias y droguerías con productos para la salud y belleza.',
      image: './assets/logo.png',
      site_name: 'Farmatodo',
      url: 'https://www.farmatodo.com.co',
      slug: '',
      ...config,
    };

    this.meta.updateTag({ name: 'title', content: config.title });
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'site', content: config.url });
    this.meta.updateTag({ name: 'image', content: config.image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@Farmatodo' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@Farmatodo' });
    this.meta.updateTag({ name: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ name: 'og:type', content: 'Pharmacy' });
    this.meta.updateTag({ name: 'og:site_name', content: 'Farmatodo' });
    this.meta.updateTag({ name: 'og:url', content: config.url });
    this.meta.updateTag({ name: 'og:image', content: config.image });
    this.meta.updateTag({ name: 'og:title', content: config.title });
    this.meta.updateTag({
      name: 'og:description',
      content: config.description,
    });
  }
}
