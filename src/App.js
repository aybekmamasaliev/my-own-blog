import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Header from './components/Header/Header';
import Notfound from './pages/Notfound/Notfound';
import Catalog from './pages/Catalog/Catalog';


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main userName="aibek"/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts />} />
            <Route path="/catalog" element={<Catalog/>}>
              <Route path ="/iphone" element={<Iphones/>}/>
              <Route path ="/mackbook" element={<Mackbooks/>}/>
            </Route>
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
 
  );
}

export default App;
