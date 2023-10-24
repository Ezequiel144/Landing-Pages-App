import './App.css';
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import PagesMain from './views/PagesMain/PagesMain';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SidebarContext from './context/SidebarContext';


function App() {


  return (
      <BrowserRouter>
        <SidebarContext>
          <Header/>
          <Routes>
            <Route path='/' Component={PagesMain}/>
          </Routes>
          <Footer />
        </SidebarContext>
      </BrowserRouter>
  )
}

export default App;
