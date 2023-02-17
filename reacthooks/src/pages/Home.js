import React from 'react'
import HookUseEffect from '../Components/HookUseEffect'
import HookUseReducer from '../Components/HookUseReducer'
import HookUseState from '../Components/HookUseState'

const Home = () => {
  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
    </div>
  )
}

export default Home