// React importation
import React from 'react';
import { useState, useEffect } from 'react';

// Components importation
import { recipes } from '../data/recettes';

// Style importation
import '../style/search.css';

function Search() {
    // const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => setDatas(json))
    // }, []);

    // Récupération de la valeur du champ de recherche
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        // A partir de + 2 caractères dans le champ de recherhche
        value.length > 2 && setSearchTerm(value);
    };
    console.log(searchTerm);

    return (
        <>
            <div className='searchBar'>
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder='Rechercher'
                    onChange={handleSearchTerm}
                />
            </div>

            <div className="search__results">
                {/* {recipes.length < 0 ?
                    return (
                        <p>No results found</p>
                    );
                    
                    :null
                    } */}
                {
                    recipes.filter((val) => {
                        {/*
                            Filtre de recherche :
                            comparaison de la chaine de caractère (terme) recherché avec les caractères composant le titre des post

                            /!\ comparaison exacte entre les caractères : /!\
                            si on tape un terme en minuscule dans la barre de recherche, recherchera le même terme en minuscule dans les titres de post

                            => c'est pourquoi ajout de ".toLowerCase"
                        */ }
                        return val.name.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                        .map((val) => {
                            return <>
                                <div className="search__result card" key={val.id}>{val.name}</div>
                            </>
                        })
                }
            </div>
        </>
    );
}

export default Search;