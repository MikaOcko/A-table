import React from 'react';

// Components importation
import Title from '../components/Title';
import Form from '../components/Form';

const Contact = () => {
    return (
        <div style={{ height: 68 + 'vh' }}>
            <Title text="Pour nous contacter" />
            <Form />
        </div>
    );
};

export default Contact;