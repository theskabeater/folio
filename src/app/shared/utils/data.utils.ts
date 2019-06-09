import * as _ from 'lodash';

import {Project, ProjectData, WorkData} from '../models/data.model';

export const getProject = (
    projectId: string,
    rawProjectData: Array<ProjectData>
): Project => {
    const projectData = _.find(rawProjectData, {
        id: projectId
    }) as ProjectData;

    return {
        projectName: projectData.name,
        projectUrlType: projectData.urlType,
        projectUrl: projectData.url,
        projectCredits: projectData.credits
    };
};

export const getWork = (
    projectId: string,
    rawWorkData: Array<WorkData>
): WorkData => {
    const workData = _.find(rawWorkData, {
        projectId
    }) as WorkData;

    return workData;
};
