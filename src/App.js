import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/product-category/:product' element={<h1>home page</h1>}></Route>
                    <Route path='/abut-product' element={<h1>hi</h1>}></Route>
                    <Route path='/abut-page' element={<h1>iman</h1>}></Route>
                    <Route path='/contact-page' element={<h1>iman9</h1>}></Route>
                    <Route path='/register' element={<h1>iman9</h1>}></Route>
                    <Route path='*' element={<h1>mother public</h1>}></Route>
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
