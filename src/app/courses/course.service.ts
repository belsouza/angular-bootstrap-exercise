import { Injectable } from '@angular/core';

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService
{
  retrieveAll(): Course[]{
    return COURSES;
  }
}

const COURSES: Course[] =
[
  {
    id: 1,
    name: 'Angular: Forms',
    imageUrl: '/assets/images/icon2.png',
    price: 99.99 ,
    code: 'XE-005-3H',
    duration: 120,
    rating: 5.4,
    releaseDate: 'August, 15, 2020',
    description: 'Curso onde todos aprendem a chorar as mágoas'
  },
  {
    id: 2,
    name: 'Angular: HTTP',
    imageUrl: '/assets/images/icon4.png',
    price: 45.99 ,
    code: 'CH-002-JP',
    duration: 80,
    rating: 4,
    releaseDate: 'August, 19, 2020',
    description: 'Curso aonde aprendemos a não reclamar com chatos'
  },
  {
    id: 3,
    name: 'Angular: CSS',
    imageUrl: '/assets/images/icon1.png',
    price: 45.99 ,
    code: 'XS-052-PA',
    duration: 80,
    rating: 2,
    releaseDate: 'September, 05, 2020',
    description: 'Curso aonde aprendemos a não chutar o balde'
  },
  {
    id: 4,
    name: 'Angular: JS',
    imageUrl: '/assets/images/icon5.png',
    price: 45.99 ,
    code: 'AP-369-XL',
    duration: 80,
    rating: 3,
    releaseDate: 'April, 01, 2020',
    description: 'Curso aonde aprendemos a não mentir'
  },
  {
    id: 5,
    name: 'Angular: Node',
    imageUrl: '/assets/images/icon3.png',
    price: 45.99 ,
    code: 'PP-007-AS',
    duration: 80,
    rating: 5,
    releaseDate: 'December, 25, 2020',
    description: 'Curso aonde aprendemos a economizar no Natal'
  }
];
