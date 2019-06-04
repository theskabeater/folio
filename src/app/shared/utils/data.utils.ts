import {ProjectData} from '../models/data.model';

export const parseCredits = (credits: ProjectData["credits"]) =>
    credits.join(", ").trim();
