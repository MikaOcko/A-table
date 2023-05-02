// React importation
import React from 'react';

// Style importation
import "../style/form.css";


function Form() {
    return (
        <div className='form__container'>
            <form action="#" method='post' className='form'>
                <>
                    <label htmlFor="name">Prénom</label>
                    <input type="text" name="firstname" id="firstname" placeholder='Jacques' />
                </>
                <>
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" id="name" placeholder='Dupond' />
                </>
                <>
                    <label htmlFor="email">Adresse email</label>
                    <input type="email" name="email" id="email" placeholder='jacques.dupond@xyz.com' />
                </>

                <textarea name="message" id="" cols="30" rows="10" placeholder='Tapez votre message ici'></textarea>

                <input className="form__button" type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

export default Form;