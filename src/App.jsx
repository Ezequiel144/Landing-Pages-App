import './App.css';
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import PagesMain from './views/PagesMain/PagesMain';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={PagesMain}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;
