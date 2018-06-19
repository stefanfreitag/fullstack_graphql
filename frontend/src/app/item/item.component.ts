import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../types';
import { CourseService} from '../course.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  course: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  upvote(id: String) {
    this.courseService.upvoteCourse(id).subscribe(
      ({data}) => {console.log('upvoted', data);
        }, (error) => { console.log('failed to upvote', error);
      });
  }

  downvote(id: String) {
    this.courseService.downvoteCourse(id).subscribe(
      ({data}) => {console.log('downvoted', data);
        }, (error) => { console.log('failed to downvote', error);
      });
  }
}
