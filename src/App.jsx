

import Header from './components/Header'
import ProductList from './pages/HomePage'
import './App.css'
function App() {

  return (
    <div>
      <Header />
      <main className="pt-16">
        <ProductList />
      </main>
    </div>
  )
}

export default App
