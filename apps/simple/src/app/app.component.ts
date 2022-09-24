import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@simple-test/api-interfaces';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'simple-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http
    .get<Message>('http://localhost:3333/api/hello')
    .pipe(catchError((err) => of(err.message)));
  constructor(private http: HttpClient) {}
}
