import React from 'react';
import image from '../../asset/pro.png';
import './Home.css';

const Home = () => {
    return (
        <div className='home-info mt-5'>
            <div className='head'>
            <h2 className='mb-4 text-primary'>Programming Language (PL) Education</h2>
            <p>
                There’s no question that software programming is a hot career right now. The U.S. Bureau of Labor Statistics projects 21 percent growth for programming jobs from 2018 to 2028, which is more than four times the average for all occupations. What’s more, the median annual pay for a software programmer is about $106,000, which nearly three times the median pay for all U.S. workers.
            </p>
            <p>
                Not all programming jobs are the same, however. Different roles, companies, and types of    software require knowing and understanding different programming languages—and it’s often    beneficial to know multiple languages. Trying to break into the field of software programming can be a daunting experience, especially for professionals with no prior programming experience.
            </p>
            </div>
            <div className='home-image'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;