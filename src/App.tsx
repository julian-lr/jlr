import Navbar from './components/layout/Navbar/Navbar'
import Home from './pages/Home/Home'
import './App.scss'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
    </>
  )
}

export default App