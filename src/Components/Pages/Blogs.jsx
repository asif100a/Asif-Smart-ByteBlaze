import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const blogs = useLoaderData();

    const displayBlog = blogs[0];
    const timestamp = displayBlog.edited_at;

    const blogTime = (time) => {
        const date = new Date(time);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            munite: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        };
        return date.toLocaleString('en-US', options);
    };
    const blogDateTime = blogTime(timestamp);

    return (
        <div className="w-[80%] mx-auto mt-16">
            <div className="flex gap-8">
                <img className="rounded-md" src={displayBlog.cover_image} alt="Cover image" />
                <div className="mt-8">
                    <h1 className="text-4xl font-medium">{displayBlog.title}</h1>
                    <p className="mt-2 mb-4"><small>{blogDateTime}</small></p>
                    <p>{displayBlog.description}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16">
                {
                    blogs.slice(1, blogs.length).map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;