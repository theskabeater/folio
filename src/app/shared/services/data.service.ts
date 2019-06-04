import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ProjectData, WorkData} from '../models/data.model';

@Injectable({
    providedIn: "root"
})
export class DataService {
    projects$ = this.getData<ProjectData>("projects");
    work$ = this.getData<WorkData>("work");

    constructor(private readonly http: HttpClient) {}

    private getData<T>(file: string) {
        return this.http.get(`/data/${file}.json`) as Observable<Array<T>>;
    }
}
