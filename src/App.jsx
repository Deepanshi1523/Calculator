import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/display'

function App() {
  let {calVal, setCalVal}=useState("");
  return (
    <div className={styles.calculator}>
        <Display/>
        <ButtonsContainer/>
    </div>
  )
}

export default App
