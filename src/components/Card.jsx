// React importation
import React from "react";

// Style importation
import '../style/card.css';

function Card(props) {
    return (
        <>
            <h2>{props.title}</h2>
            {/* <img className="card__image" src="https://picsum.photos/300/200" alt="photo d'illustation du plat" /> */}
            <img className="card__image" alt={props.name} src={process.env.PUBLIC_URL + "/assets/img/" + props.title + ".jpg"} />
            <p>Pour {props.person} personne(s)</p>
            <p>Temps de préparation : {props.time} min</p>

            <>
                <h4>Ingrédients</h4>
                <ul>
                    {props.ingredients}
                </ul>
            </>
            <>
                <h4>Instructions</h4>
                <p>{props.description}</p>
            </>
            <>
                <h4>Appareils et ustensiles nécessaires</h4>
                <p>{props.device}</p>
            </>
        </>
    );
}

export default Card;