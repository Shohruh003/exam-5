
import { Route, Routes } from "react-router-dom"
import { AddAuthor } from "./pages/AddAuthor/AddAuthor"
import { AddBooks } from "./pages/AddBooks/AddBooks"
import { Author } from "./pages/Author/Author"
import { SingleAuth } from "./pages/Author/SingleAuth"
import { Books } from "./pages/Books/Books"
import { SingleBooks } from "./pages/Books/SingleBooks"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { SetAccaunt} from "./pages/settings/SetAccaunt"



export const Private = () => {
  return (
    <div>
      <div className="private">
      <Routes>
      <Route path="/*" element={<Author/>}/>
      <Route path="/books/*" element={<Books/>}/>
      <Route path={'/author/:id'} element={<SingleAuth/>}/>
      <Route path={'/books/:id'} element={<SingleBooks/>}/>
      <Route path='/addBooks' element={<AddBooks/>}/>
      <Route path='/addAuthor' element={<AddAuthor/>}/>
      <Route path='/setAccaunt/*' element={<SetAccaunt/>}/>
      <Route path='/login/*' element={<Login/>}/>
      <Route path='/register/*' element={<Register/>}/>
    </Routes>
    </div>
    </div>
  )
}