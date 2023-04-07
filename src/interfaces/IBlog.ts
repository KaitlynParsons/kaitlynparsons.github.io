interface IArticle {
    title: string;
    date: Date;
    content: string;
}

export interface IBlog {
    category: string;
    articles: IArticle[];
}