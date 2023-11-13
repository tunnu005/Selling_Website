import { Route,Routes } from 'react-router-dom'

import Login from './screens/login'
import Register from './screens/register'
import Home from './screens/Home';
import Produt from './screens/product';
import Admin from './Admin/admin';






function App() {

  return (
  
    <>
      
      <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/product' element={<Produt/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </>
   
  )
}

export default App;
