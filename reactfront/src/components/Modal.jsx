import React, { useState, useEffect} from 'react';

import  FormSugerencia from './Form'

function MuestraTodo() {


    const [book, setBook] = useState({
      
      
      })
    
      const [books, setBooks] = useState([])
    
      const [listUpdated, setListUpdated] = useState(false)
    
      useEffect(() => {
        const getBooks = () => {
          fetch('http://localhost:5000/api')
          .then(res => res.json())
          .then(res => setBooks(res))
        }
        getBooks()
        setListUpdated(false)
      }, [listUpdated]) 
      return (


        <div className="col-5">
        
       <FormSugerencia book={book} setBook={setBook}/>
      </div>
    
  );
}

export default MuestraTodo;