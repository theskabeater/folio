import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

import {AccoladeData, ExperienceData, ProjectData, WorkData} from '../models/data.model';
import {fileHash} from '../utils/app.utils';

@Injectable({
    providedIn: "root"
})
export class DataService {
    projects$ = this.getData<ProjectData>("projects");
    work$ = this.getData<WorkData>("work");
    accolades$ = this.getData<AccoladeData>("accolades");
    experience$ = this.getData<ExperienceData>("experience");
    resume$ = this.getData<ExperienceData>("resume");

    constructor(private readonly http: HttpClient) {}

    private getData<T>(file: string) {
        return this.http
            .get(`/data/${file}${fileHash}.json`)
            .pipe(shareReplay()) as Observable<Array<T>>;
    }
}
