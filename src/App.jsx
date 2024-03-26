import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import BottomTab from './components/BottomTab'
import Drawer from './components/Drawer'
import Category from './components/Category'
import Card from './components/Card'
import DrawerItem from './components/DrawerItem'
import Notification from './Screen/Notification'


function App({name}) {
  const [isOpen, setIsOpen] = useState(true);

  const cat = ["Stock", "ScienceInformation", "SomethingNew", "Sports", "Art", "Music", "NewsLimited", "Cat1", "Schools", "Event", "ScienceInformation", "SomethingNew", "Sports", "Art", "NareshSchool", "ScienceInformation", "SomethingNew", "Sports", "Art"]
  return (
    <div className='w-screen'>
      <Header name={name} />
      <Notification />

      {/* <BottomTab /> */}
      {/* <DrawerItem /> */}
    </div>
  )
}

export default App
