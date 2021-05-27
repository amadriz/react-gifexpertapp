import React, { useState  } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        // Para que el form no  recargue 
        e.preventDefault();

        // console.log('submit hecho');
        setcategories(categories => [ inputValue, ...categories ]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange } 
            />
        </form>
    )
}

export default AddCategory


AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}