interface ITimeline {
    title: string;
    duration: string;
    description: string;
}

export interface IExperience {
    company: string;
    url: string;
    timeline: ITimeline[];
    skills: string;
}