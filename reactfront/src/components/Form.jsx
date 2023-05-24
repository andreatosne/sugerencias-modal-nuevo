import React from 'react';

const Form = ({book, setBook}) => {


  //cambios
    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let{sugerencia_aprendiz} = book

    const handleSubmit = () => {
    
        //validación de los datos
        if (book.sugerencia_aprendiz === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:5000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro queden vacios
        setBook({
          sugerencia_aprendiz: ''
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">sugerencias</label>
                <input value={sugerencia_aprendiz} name="sugerencia_aprendiz" onChange={handleChange} type="text" id="sugerencia_aprendiz" className="form-control"/>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;