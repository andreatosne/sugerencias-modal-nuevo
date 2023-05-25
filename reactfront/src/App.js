import { BrowserRouter, Route, Routes } from 'react-router-dom';




import MuestraTodo from './components/Modal'

function App() {

  // const [book, setBook] = useState({
  //   sugerencia_aprendiz: '',
  
  // })

  // const [books, setBooks] = useState([])

  // const [listUpdated, setListUpdated] = useState(false)

  // useEffect(() => {
  //   const getBooks = () => {
  //     fetch('http://localhost:5000/api')
  //     .then(res => res.json())
  //     .then(res => setBooks(res))
  //   }
  //   getBooks()
  //   setListUpdated(false)
  // }, [listUpdated])

  return (
 
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <BrowserRouter>
      <Routes>
      
        <Route path='/sugerencia'element={<MuestraTodo />}/>
      </Routes>
      </BrowserRouter>


    </div>
    
  );
}

export default App;