export interface WorkData {
    projectId: ProjectData["id"];
    year: string;
    role: string;
    awards: Array<string>;
    layout: Array<LayoutItem>;
}

export interface LayoutItem {
    image: "string";
    description: string;
}

export interface ProjectData {
    id: string;
    name: string;
    url: string;
    credits: Array<string>;
}
