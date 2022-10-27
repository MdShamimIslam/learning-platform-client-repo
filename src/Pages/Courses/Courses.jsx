import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Sidebar from '../Sidebar/Sidebar';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    
    return (
        <div>
            <div className='courses-info'>
                <Sidebar></Sidebar>
                <div className='course-part'>
                
                    <h3 className='text-center'>Total Courses:{courses.length}</h3>
                
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                
                </div>
            </div>
            <footer className="footer text-center">
                <h5 className='mb-0'>Learn to Programming Language from PL Education Platform</h5>
                <small>Copy-right@Shamim Islam </small>
            </footer>
        </div>
    );
};

export default Courses;