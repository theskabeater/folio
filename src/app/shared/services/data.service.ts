import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

import {AccoladeData, ProjectData, WorkData} from '../models/data.model';

@Injectable({
    providedIn: "root"
})
export class DataService {
    projects$ = this.getData<ProjectData>("projects");
    work$ = this.getData<WorkData>("work");
    accolades$ = this.getData<AccoladeData>("accolades");

    constructor(private readonly http: HttpClient) {}

    private getData<T>(file: string) {
        return this.http
            .get(`/data/${file}.json`)
            .pipe(shareReplay()) as Observable<Array<T>>;
    }
}
