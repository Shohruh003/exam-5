import {Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';

export const Public = () => {
  return (
    <Routes>
      <Route path='/*' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<>Error 404 bunday page topilmadi</>}/>
    </Routes>
  )
}