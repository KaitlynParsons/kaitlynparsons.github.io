import { useEffect, useState } from "react";
import { blogDateFormatter } from "../../../helpers/DateHelper";
import { IArticle, IBlog } from "../../../interfaces/IBlog";
import "./Blog.scss";

const blogs: IBlog[] = [
    {
        category: 'Technology',
        articles: [
            {
                id: 1,
                title: 'Useful Packages',
                date: blogDateFormatter('2023-04-07'),
                content: `
                <a href='https://moment.github.io/luxon/#/' target='_blank'>luxon</a>
                `
            },
            {
                id: 2,
                title: 'Useful Web Standard Tools',
                date: blogDateFormatter('2023-04-10'),
                content: `
                <a href='https://wave.webaim.org/' target='_blank'>WAVE Report</a>
                `
            }
        ]
    },
    {
        category: 'Health & Fitness',
        articles: [
            // {
            //     title: '',
            //     date: blogDateFormatter('2023-04-07'),
            //     content: ''
            // }
        ]
    },
]

const Blog = () => {
    const [allArticles, setAllArticles] = useState<IArticle[]>([]);

    const getAllArticles = async () => {
        const articles: IArticle[] = [];
        blogs.map(blog => articles.push(...blog.articles));
        setAllArticles(articles);
    }

    useEffect(() => {
        getAllArticles();
    }, []);

    return <>
        {
            allArticles.map((article, index) => {
                return (
                    <div className="blog-article" key={index}>
                        <h3>{article.title}</h3>
                        <span>{article.date}</span>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                )
            })
        }
    </>
};

export default Blog;