import React from 'react';

const BookList = ({book, setBook, books, setListUpdated}) => {


   
    // let{titulo, autor, edicion} = book
    // const handleUpdate = id => {
    //     edicion = parseInt(edicion, 10)
    //     //validación de los datos
    //     if (titulo === '' || autor === '' || edicion <= 0 ) {
    //         alert('Todos los campos son obligatorios')
    //         return
    //     }
    //     const requestInit = {
    //         method: 'PUT',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(book)
    //     }
    //     fetch('http://localhost:9000/api/' + id, requestInit)
    //     .then(res => res.text())
    //     .then(res => console.log(res))

    //     //reiniciando state de libro
    //     setBook({
    //         titulo: '',
    //         autor: '',
    //         edicion: 0
    //     })

    //     setListUpdated(true)
    // }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>sugerencias</th>
                  
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.idSugerencia}>
                        <td>{book.sugerencia_aprendiz}</td>
                  

                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default BookList;