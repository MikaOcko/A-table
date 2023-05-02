// // React importation
// import React, { useState, useEffect } from 'react';

// // Récupération de données sur les recettes
// function ListOfRecipes() {
//     const [recettes, setRecettes] = useState([]);

//     useEffect(() => {
//         fetch('./recettes.json')
//             .then(response => response.json())
//             .then(data => setRecettes(data))
//             .catch(err => console.log(err))
//     }, []);

//     return (
//         <div>
//             <ul>
//                 {recettes.map(recette => <li key={recette.id}>{recette.name}</li>)}
//             </ul>
//         </div>
//     );
// }

// export default ListOfRecipes;