import React, {useState}  from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['uno', 'dos', 'tres', 'cuatro'];

    const [categories, setcategories] = useState(['Metallica']);

    // const handleAdd = () => {
    //         setcategories([...categories, 'cinco']);
    //         console.log(categories);
    // }

    return (
        <>
            <h1>Gif Expert</h1>
            <AddCategory setcategories={setcategories} />
            <hr />
            {/* <button onClick={ handleAdd }>Agregar</button> */}

              <ol>
                  { 
                    categories.map( category => (
                        // return <li key={index}>{category}</li>
                        <GifGrid key={category} category={ category } />
                    ))
                  }
              </ol>  
            
        </>
    )
}

export default GifExpertApp

