import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProgressComponent } from './progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  testForm = new FormGroup({
    food: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });
  header:any[]=[
    {title:'My title 1',subtitle:'My subtitle 1'},
    {title:'My title 2',subtitle:'My subtitle 2'},
    {title:'My title 3',subtitle:'My subtitle 3'}
  ];
  ngOnInit() {}

  

  goNext(progress: ProgressComponent) {
    progress.next();
  }

  onStateChange(event) {
    console.log(event);
  }

  ngAfterViewInit() {}
}
