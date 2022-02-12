import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch']);

  // SE PASA ESTA IMPLEMENTACION A Addcategory, setcategories debera llamrse con un callback L13
  // const handleAdd = () => {
  //   /* setCategories([...categories, 'Hunter x Hunter']); */
  //   // con callback (en este ejemplo category) para acceder al estado de la variable "categories"
  //   // donde el primer argumento es el estado anterior y despues el valor a agregar
  //   setCategories( category => [...categories, 'Hunter x Hunter']);
  // }

  return (
    <>
      <h1>GIPHY</h1>
      <AddCategory setCategories={setCategories} />
      <hr />      
      <ol>
      {
        categories.map(category => 
          <GifGrid 
            key={category} 
            category={category} 
          />
        )
      }
      </ol>
    </>
  )
}

export default GifExpertApp
