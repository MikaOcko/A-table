// React importation
import React from 'react';

// Style importation
import '../style/category.css';

function Category(props) {
    return (
        <div className='category'>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Category;