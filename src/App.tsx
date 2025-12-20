// App.tsx
import { BrowserRouter, useLocation } from 'react-router-dom'

import Header from './components/Header'
import HeaderCategories from './components/HeaderCategories'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function AppWrapper() {
  const location = useLocation()

  // Se estiver em /categories, usa o HeaderCategories
  const isCategoriesPage = location.pathname === '/categories'

  return (
    <>
      <GlobalCss />
      {isCategoriesPage ? <HeaderCategories /> : <Header />}
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
