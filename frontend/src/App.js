
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './assets/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Layout from './components/Home/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
