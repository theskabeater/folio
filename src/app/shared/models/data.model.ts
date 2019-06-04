export interface WorkData {
    projectId: ProjectData["id"];
    year: string;
    role: string;
    awards: Array<string>;
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
    credits: Array<string>;
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
