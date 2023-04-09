import { useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch Man']);

    const onAddCategory = ( newCategory) => {

        if ( categories.includes(newCategory) ) {
            return;
        }
        // La función onAddCategory es una función que se llama cuando se hace clic en el botón "Agregar" en tu aplicación GifExpertApp. Esta función utiliza el hook useState de React para actualizar el estado del componente con una nueva categoría.
        //  console.log('newCategory');
         setCategories( [ newCategory, ...categories ]);
      
    }

    return (
        <>
            
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
                current
            />

            {
                categories.map(( category ) => (
                    <GifGrid 
                        key={category } 
                        category={ category} 
                    />
                ))
            }

        </>
  )
}
