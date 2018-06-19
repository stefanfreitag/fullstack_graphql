import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../types';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() searchTerm: String;
  courses: Observable<Course[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getAllCourses(this.searchTerm);
  }

  ngOnChanges() {
    this.courses = this.courseService.getAllCourses(this.searchTerm);
  }

}
