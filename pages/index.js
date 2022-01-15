import { useState } from "react"

import styles from "../styles/Home.module.css"

import Item from "../components/Item"

export default function Home(){
  const [textInput, setTextInput] = useState("")
  const [array, setArray] = useState(["Primeiro item", "novo item"])
  
  function adicionar(){
    setArray(array=>[...array, textInput])
    setTextInput("")
  }

  function excluir(index){
    setArray(array.filter((item, i)=>index !== i))
  }

  return (<div className={styles.Home}>

    <div className={styles.caixaDeItems}>
      {array.map((item, index)=>(
        <Item
          index={index}
          key={index}
          styles={styles}
          handleExcluir={()=>{excluir(index)}}
        >{item}</Item>
      ))}
    </div>

    <div className={styles.controls}>
      <input value={textInput} onInput={(e)=>{setTextInput(e.target.value)}}/>
      <button onClick={adicionar}>+</button>
    </div>

  </div>)
}