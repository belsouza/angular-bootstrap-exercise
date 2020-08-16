import { Component } from '@angular/core';

import { Course } from './course';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent{

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [

      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/icon2.png',
        price: 99.99 ,
        code: 'XE-005-3H',
        duration: 120,
        rating: 5.4,
        releaseDate: 'August, 15, 2020'
      },

      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/icon4.png',
        price: 45.99 ,
        code: 'CH-002-JP',
        duration: 80,
        rating: 4,
        releaseDate: 'August, 19, 2020'
      }
    ];

  }

}
