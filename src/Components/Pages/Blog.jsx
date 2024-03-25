import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover_image,title, description, published_timestamp} = blog;

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
    const blogDateTime = timestamp(published_timestamp)

    return (
        <div className='p-6 border-2 mx-auto rounded-md'>
            <div className=' h-[24rem]'>
                <img className='rounded-[4px]' src={cover_image} alt="cover image" />
                <div>
                    <h1 className='text-2xl font-medium'>{title}</h1>
                    <p className='mt-auto mb-4'><small>{blogDateTime}</small></p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
};

export default Blog;