export type Course = {
    id: string;
    title: string;
    author: string;
    description: string;
    topic: string;
    url: string;
    voteCounte: number;
};

export type Query = {

    allCourses: Course[];
};