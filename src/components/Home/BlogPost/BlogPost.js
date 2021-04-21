import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, authorImg, data } = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="ms-5 d-flex align-items-center">
                <img style={{height:'50px'}} className="mx-3" src={authorImg} alt="" />
                <div>
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{data}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;