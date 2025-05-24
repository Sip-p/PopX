import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
// import Signin from './Signin'
// import CreateAccount from './CreateAccount'
import Page from './Page'
import Signin from './Signin'
import CreateAccount from './CreateAccount'
function App() {
 
  return (
    <div> 
     {/* <Home/>
     {/* <Signin/> */}
     {/* <CreateAccount/> */}
     {/* <Page/> */} 
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateAccount/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/user' element={<Page/>}/>
      </Routes>
     </Router>
</div>

  )
}

export default App
