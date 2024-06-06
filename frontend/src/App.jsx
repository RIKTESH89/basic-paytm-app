import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { RecoilRoot } from 'recoil'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
import { TransactionSuccessful } from './pages/TransactionSuccessful'
import { Home } from './pages/Home'

function App() {

  return (
    <div>
      <RecoilRoot>
      <BrowserRouter>
      <Routes>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/Dashboard' element={<Dashboard />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/send' element={<SendMoney />}></Route>
      <Route path='/success' element={<TransactionSuccessful />}></Route>
      <Route path='/' element={<Home />}></Route>
    </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
