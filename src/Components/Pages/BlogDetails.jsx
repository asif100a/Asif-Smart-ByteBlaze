import { useLoaderData } from "react-router-dom";
import { CiBookmarkPlus } from "react-icons/ci";

const BlogDetails = () => {
    const blog = useLoaderData();
    const { id, cover_image, title, description, published_timestamp } = blog;

    return (
        <div>
            <div className="max-w-3xl px-6 py-16 mx-auto space-t-12">
                <article className="space-t-8  dark:text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                        <div className="items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                            <div className="md:space-x-2 flex justify-between mb-8">
                                <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
                                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                            </div>
                            <div className="flex gap-5 h-fit">
                                <div role="tablist" className="tabs tabs-lifted w-72 mb-8">
                                    <a role="tab" className="tab h-12">Tab 1</a>
                                    <a role="tab" className="tab h-12 tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Tab 2</a>

                                </div>
                                <div className="bg-gray-100 hover:bg-slate-200 h-fit w-fit p-3 rounded-full">
                                    <CiBookmarkPlus className="w-7 h-7 text-secondary" />
                                </div>
                            </div>

                            <img src={cover_image} alt="" className=" border dark:bg-gray-500 dark:border-gray-300" />
                            <div className="flex flex-wrap py-6 gap-2">
                                <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline ">#MambaUI</a>
                                <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline ">#TailwindCSS</a>
                                <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline ">#Angular</a>
                            </div>
                        </div>
                    </div>

                </article>
                <div>
                    <div className="space-y-2">
                        <h4 className="text-2xl font-semibold hover:underline">{title}</h4>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BlogDetails;