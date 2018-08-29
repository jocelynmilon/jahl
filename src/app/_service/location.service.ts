import { Injectable } from '@angular/core';
import { Location } from '../_models/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  appartement: Location[] = [
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 4, image: '/assets/losangeles.jpg', qualité: '',
      title: 'Guadeloupe', description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 5, image: '/assets/losangeles.jpg', qualité: '', title: 'guadeloupe',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 6, image: '/assets/losangeles.jpg', qualité: '', title: 'guadeloupe',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'paris',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'paris', description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'paris', description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    }
  ];

  villa: Location[] = [
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 4, image: '/assets/losangeles.jpg', qualité: '',
      title: 'Guadeloupe', description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 5, image: '/assets/losangeles.jpg', qualité: '', title: 'guadeloupe',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 6, image: '/assets/losangeles.jpg', qualité: '', title: 'guadeloupe',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'paris',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'paris', description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'paris', description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    }
  ];
  maison: Location[] = [
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'Los Angeles',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 4, image: '/assets/losangeles.jpg', qualité: '',
      title: 'Guadeloupe', description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 5, image: '/assets/losangeles.jpg', qualité: '', title: 'guadeloupe',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 6, image: '/assets/losangeles.jpg', qualité: '', title: 'guadeloupe',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'paris',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'paris', description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'paris', description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    },
    {
      id: 1, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 3 pieces centre ville de Los angeles',
      price: 450
    },
    {
      id: 2, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 4 pieces centre ville de Los angeles',
      price: 550
    },
    {
      id: 3, image: '/assets/losangeles.jpg', qualité: '', title: 'Martinique',
      description: 'appartement 2 pieces centre ville de Los angels',
      price: 450
    }
  ];
  constructor() { }

  getAppartement(): Location[]  {
    return this.appartement;
  }
  getVilla(): Location[] {
    return this.villa;

  }
  getMaison(): Location[] {
    return this.villa;
  }
}

