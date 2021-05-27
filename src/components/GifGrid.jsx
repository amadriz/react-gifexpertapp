import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );

    

    // useEffect( () => {
    //     // cuando se abre el componete obtenga los gifs y coloque las imagenes
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ])

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate_animated animate__flash">loading</p>}
        <div className="card-grid">
                {
                    data.map( img => (
                        // <li key={img.id}>{ img.title }</li>
                        <GifGridItem key={ img.id } { ...img }/>
                    ))
                }
        </div>
        </>
    )
}

export default GifGrid
