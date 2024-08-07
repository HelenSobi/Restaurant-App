import { Outlet } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <>    
          <Header/>
          <main className="py-16 ">
           <Outlet/>
          </main>
        <Footer/>
    </>
  )
}

export default App;
