import { HashRouter } from 'react-router-dom'
import './App.css';
import { Header } from './components/header';
import { Routes } from './router/routes';

function App() {
  return (
    <>
      <HashRouter basename='/Frontend-ProRedes2'>
        <Header></Header>
        <Routes></Routes>
      </HashRouter>
    </>
  );
}

export default App;
