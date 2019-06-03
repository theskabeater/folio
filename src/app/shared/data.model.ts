export interface WorkData {
    slug: string;
    name: string;
    url: string;
    company: string;
    year: string;
    role: string;
    awards: Array<string>;
    layout: Array<LayoutItem>;
}

export interface LayoutItem {
    image: "string";
    description: string;
}
