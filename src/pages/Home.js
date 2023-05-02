import React from 'react';

// Components importation
import Title from '../components/Title';
import Category from '../components/Category';

// Style importation
import '../style/category.css';

const Home = () => {
    return (
        <div style={{ height: 68 + 'vh' }}>
            < Title text="Bienvenue aux fins gourmets" />

            <div className="category__container">
                <Category title="Salé" />
                <Category title="Sucré" />
                <Category title="Surpise" />
            </div>
        </div >
    );
};

export default Home;