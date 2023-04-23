export interface IArticle {
    id: number;
    title: string;
    date: string;
    content: string;
}

export interface IBlog {
    category: string;
    articles: IArticle[];
}