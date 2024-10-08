import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

const App = () => {
  return (
    <div className=''>
      <Routes>
        

          <Route path='/' Component={HomePage} />
        <Route path='/chat' Component={ChatPage} />
        
      </Routes>
    </div>
  )
}

export default App
