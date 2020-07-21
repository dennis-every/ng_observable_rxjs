import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3000/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-observable-rxjs';
  inputChangeLog: string[] = [];
  inputForm: FormGroup;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      name: new FormControl()
    });
    this.loginInputChange();

  }

  loginInputChange(): void {
    const nameControl = this.inputForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => {
        this.inputChangeLog.push(value);
        console.log(this.inputChangeLog);
      }
    );
  }










}

