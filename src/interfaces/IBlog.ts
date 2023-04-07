export interface IArticle {
    title: string;
    date: string;
    content: string;
}

export interface IBlog {
    category: string;
    articles: IArticle[];
}