import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
   {/* will remain default fized */}
    <Header/> 

   {/* where outlet use it date can be chaged */}
    <Outlet/>
    
    {/* will remain default fized */}
    <Footer />
    </>
  )
}

export default Layout
