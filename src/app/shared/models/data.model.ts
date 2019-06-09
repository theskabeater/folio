export interface WorkData {
    projectId: ProjectData["id"];
    year: string;
    role: string;
    layout: Array<LayoutData>;
}

export interface LayoutData {
    image: "string";
    description: string;
}

export interface ProjectData {
    id: string;
    name: string;
    url: string;
    urlType: string;
    credits: string;
}

export interface AccoladeData {
    name: string;
    url: string;
    awards: Array<AwardData>;
}

export interface AwardData {
    projectId: ProjectData["id"];
    accolade: string;
    data: string;
    url: string;
}

export interface ExperienceData {
    name: string;
    value: string;
}

export interface ResumeData {
    company: string;
    url: string;
    title: string;
    date: string;
    stack: string;
    description?: string;
    list?: Array<string>;
}

export interface Project {
    projectName: ProjectData["name"];
    projectUrlType: ProjectData["urlType"];
    projectUrl: ProjectData["url"];
    projectCredits: string;
}
