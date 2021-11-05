import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Header } from './components/header';
import { Routes } from './router/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
