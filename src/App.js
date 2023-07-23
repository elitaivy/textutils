
import './App.css';
import FormField from './Components/FormField';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';


// function App() {
//   return (
//     <>
//     <Navbar/>
//     <div className='container'>
//       <FormField/>
//     </div>
//     </>
//   );
// }


function App() {
return (
  <>
    <BrowserRouter>
      <Navbar/>
      <div className="container my-4">
        <Routes>
        <Route exact path="/" element={ <FormField/> }></Route>
          <Route exact path="/about" element={<About />}></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  </>
);
}


export default App;
