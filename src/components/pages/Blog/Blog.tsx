import { IBlog } from "../../../interfaces/IBlog";
import "./Blog.scss";

const blogs: IBlog[] = [
    {
        category: 'Technology',
        articles: [
            {
                title: '',
                date: new Date(),
                content: ''
            }
        ]
    },
    {
        category: 'Health & Fitness',
        articles: [
            {
                title: '',
                date: new Date(),
                content: ''
            }
        ]
    },
]

const Blog = () => {
    return <>

    </>
};

export default Blog;