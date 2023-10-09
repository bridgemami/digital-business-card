import Header from './components/header/Header';
import About from './components/about/About';
import Interest from './components/interest/Interest';
import Footer from './components/footer/Footer';
import s from './app.module.css'

function App() {
  return (
    <div className={s.app}>
     <Header />
     <div className={s.body}>
      <main>
     <About />
     <Interest />
     </main>
     <Footer />
     </div>
     </div>
  )
}

export default App
