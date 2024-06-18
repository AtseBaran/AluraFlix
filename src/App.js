import React from 'react';
import { useParams, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContext, { AppProvider } from './Components/Contexto';
import Banner from './Components/Banner';
import Categoria from './Components/Categoria';
import Footer from './Components/Footer';
import Header from './Components/Header';
import FormOverlay from './Components/Overlay';
import NuevoVideo from './Components/NuevoVideo';
import './App.css';

function Content() {
  const { categoria, videos } = React.useContext(AppContext);
  const { id } = useParams();
  const idCategoria = Number(id);

  const filteredCategories = categoria.filter(categoria => !idCategoria || idCategoria === 0 || categoria.id === idCategoria);

  if (filteredCategories.length === 0) {
    return <h1>Pagina 404 - Not Found</h1>;
  }

  return (
    filteredCategories.map((categoria) => (
      <Categoria key={categoria.id} id={categoria.id} titulo={categoria.title} color={categoria.color} videos={videos} />
    ))
  );
}

function App() {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={ <><Banner/><Content/><FormOverlay/></> } />
          <Route path="/NuevoVideo" element={ <NuevoVideo /> } />
          <Route path="/Categoria/:id" element={ <><Content/><FormOverlay/></> } />
          <Route path="*" element={<h1>Pagina 404 - Not Found</h1>} />
        </Routes>
        <Footer />
      </AppProvider>
    </Router>
  );
}

export default App;