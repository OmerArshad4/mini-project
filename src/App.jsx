import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './components/Forms/SignUpForm'
import UserListing from './components/UserListing/Index'
import { useSelector } from 'react-redux'

function App() {
  const [showListing, setShowListing] = useState(false)
  const { user } = useSelector((state) => state.user);
  return (
    <div className='bg-amber-950 h-screen w-screen'>
          <div className="flex flex-col justify-center items-center h-full gap-6">
        {/* Agar form toggle true hai to form show karo */}
        {showListing ? (
          <SignupForm setShowListing={setShowListing} />
        ) : (
          user && <UserListing setShowListing={setShowListing} />
        )}

        {/* Agar user hi nahi hai to force form dikhado */}
        {!user && <SignupForm setShowListing={setShowListing} />}
      </div>
      



    </div>
  )
}

export default App
