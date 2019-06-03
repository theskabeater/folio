import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {WorkData} from './data.model';

@Injectable({
    providedIn: "root"
})
export class DataService {
    work$ = this.getData<WorkData>("work");

    constructor(private readonly http: HttpClient) {}

    private getData<T>(file: string) {
        return this.http.get(`/data/${file}.json`) as Observable<Array<T>>;
    }
}
