import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data=> setCategories(data)) 
    },[])
    return (
        <div>
            <h3>All Categories:{categories.length}</h3>
            {
                categories.map(cate => <Link to={`/categories/${cate.id}`} ><p key={cate.id}>{cate.name}</p></Link> )
            }
        </div>
    );
};

export default LeftSideNav;