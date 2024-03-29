import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { id, cover_image, title, description, published_timestamp } = blog;

    const timestamp = (time) => {
        const blogTime = new Date(time);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            munite: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        };
        return blogTime.toLocaleString('en-US', options);
    };
    const blogDateTime = timestamp(published_timestamp);


    return (
        <NavLink to={`/details/${id}`} state={title}>
            <div className='p-6 border-2 mx-auto rounded-md hover:cursor-pointer hover:scale-[1.05] hover:border-secondary'>
                <div className=' h-[24rem]'>
                    <img className='rounded-[4px]' src={cover_image} alt="cover image" />
                    <div>
                        <h1 className='text-2xl font-medium hover:underline'>{title}</h1>
                        <p className='mt-auto mb-4'><small>{blogDateTime}</small></p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
};

export default Blog;