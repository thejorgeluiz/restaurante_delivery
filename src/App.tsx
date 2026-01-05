
import { BrowserRouter, useLocation } from 'react-router-dom'

import Header from './components/Header'
import HeaderCategories from './components/HeaderCategories'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function AppWrapper() {
  const location = useLocation()

  // Header normal apenas na Home
  const isHomePage = location.pathname === '/'

  return (
    <>
      <GlobalCss />
      {isHomePage ? <Header /> : <HeaderCategories />}
      <Rotas />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  )
}

export default App
