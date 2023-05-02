// React importation
import React from 'react';

// Components importation
import Title from '../components/Title';
import Search from '../components/Search';
import Card from '../components/Card';
import { recipes } from '../data/recettes';

// Style importation
import '../style/card.css';

function Recipes() {
    return (
        <div>
            <Title text="Toutes nos recettes" />

            {/* Barre de recherche */}
            <Search />
            {/* Affichage des données sélectionnées pour chaque recette */}
            <div className="card__container">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className='card'>
                        <Card
                            title={recipe.name}
                            person={recipe.servings}
                            time={recipe.time}
                            description={recipe.description}
                            ingredients={recipe.ingredients.map((recipe) => <li>{recipe.ingredient} : {recipe.quantity} {recipe.unit}</li>)}
                            device={recipe.appliance + ", " + recipe.ustensils}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;