//importamos nuestro hook use routes, antes debimos haber instalado npm intall react-routes-dom. Tambien 
//importamos browserRouter dentro del hook
import { useRoutes, BrowserRouter } from 'react-router-dom'
//importamos nuestro Home, el .. significa salir de esta carpeta y ahi encontrara carpeta Home
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../SingnIn'

import './App.css'

//aqui creamos una funcion con esta estructura, antes de armar el return. La vamos a encapsular mas abajo 
const AppRoutes = () => {
  let routes = useRoutes([
    {
      path:'/',
      element:<Home />
    }
  ])
  return routes
}

//en lugar de function trabajamos con const App y le pasamos con un arrow function
//antiguamente habiamos colocado las sub-paginas aqui, pero las eliminamos porque necesitamos ahora q 
//tengan funcionalidad
//aqui encapsularemos la funcion que creamos arriba
const App = () => {
  return (
//aqui encapsulamos la funcion "AppRoutes"    
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
