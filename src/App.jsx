import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import s from './app.module.css'

function App() {
  return (
    <div className={s.app}>
     <Header />
     <div className={s.body}>
     <Main />
     <Footer />
     </div>
     </div>
  )
}

export default App
