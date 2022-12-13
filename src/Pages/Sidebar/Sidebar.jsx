import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [categories,setCategories] = useState([])
    console.log(categories);

    useEffect(()=>{
        fetch('https://pl-education-server.vercel.app/categories')
        .then(res=>res.json())
        .then(data => setCategories(data))
    },[]);

    return (
        <div className='sidebar'>
            <h4>All Categories</h4>
            <div>
                
               {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
               }

            </div>
        </div>
    );
};

export default Sidebar;