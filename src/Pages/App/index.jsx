//importamos nuestro hook use routes, antes debimos haber instalado npm intall react-routes-dom. Tambien 
//importamos browserRouter dentro del hook
import { useRoutes, BrowserRouter } from 'react-router-dom'
//Traemos nuestro wrapper de Provider que creamos en index.jsx de Context para proveer este componente a los demas compponentes d ela App
import { ShoppingCartProvider } from '../../Context'
//importamos nuestro Home, el .. significa salir de esta carpeta y ahi encontrara carpeta Home
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../SingnIn'
//importar componente Navbar, ..salimos de esa carpeta/..salimos de nuevo ahora entramos /Navbar
import Navbar from '../../Components/Navbar'

import './App.css'

//aqui creamos una funcion con esta estructura, antes de armar el return. La vamos a encapsular mas abajo 
const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home /> },
    { path:'/my-account', element:<MyAccount /> },
    { path:'/my-order', element:<MyOrder /> },
    { path:'/my-orders', element:<MyOrders /> },
    { path:'/sign-in', element:<Signin /> },
    //not found, se escribe con asterisco ya que representa: "Cualquier otra ruta q no este aca arriba"
    { path:'/*', element:<NotFound /> },

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
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
