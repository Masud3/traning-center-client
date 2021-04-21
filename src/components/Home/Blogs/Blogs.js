import React from 'react';
import trainer from '../../../image/trainer.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
const blogData =[
    {
        title:'Learn Programming with shamim',
        description:'We will show you how you can progress in a career in this area, and what youll learn from this play therapy training course. The Play Therapy Course is where you will learn all the types of play therapies that are used, such as sensory and embodiment play therapy, dramatic roleplaying, art and crafts, storytelling, sand-pits, and mosaics, and the techniques and applications of each.',
        author:'Shamim',
        authorImg:trainer,
        data: '23 April 2021',

    },
    {
        title:'Learn Web Design with shamim',
        description:'We will show you how you can progress in a career in this area, and what youll learn from this play therapy training course. The Play Therapy Course is where you will learn all the types of play therapies that are used, such as sensory and embodiment play therapy, dramatic roleplaying, art and crafts, storytelling, sand-pits, and mosaics, and the techniques and applications of each.',
        author:'Shamim',
        authorImg:trainer,
        data: '23 April 2021',

    },
    {
        title:'Learn Graphic with shamim',
        description:'We will show you how you can progress in a career in this area, and what youll learn from this play therapy training course. The Play Therapy Course is where you will learn all the types of play therapies that are used, such as sensory and embodiment play therapy, dramatic roleplaying, art and crafts, storytelling, sand-pits, and mosaics, and the techniques and applications of each.',
        author:'Shamim',
        authorImg:trainer,
        data: '23 April 2021',

    }
]

const Blogs = () => {
    return (
        <section className="Blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck d-flex align-items-center mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;