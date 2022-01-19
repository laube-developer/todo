import { useState } from "react"
import styles from "../styles/Home.module.css"
import Item from "../components/Item"

export default function Home(){
  const [textInput, setTextInput] = useState("")
  const [array, setArray] = useState([{value: "Primeiro item", checked: true}, {value: "Segundo", checked: false}])
  
  function adicionar(){
    setArray(array=>[...array, {value: textInput, checked: false}])
    setTextInput("")
  }

  function excluir(index){
    setArray(array.filter((item, i)=>index !== i))
  }

  function marcar(index){
    setArray([
        ...array.filter((item, i)=>i < index),
        {
            value: array[index].value,
            checked: !array[index].checked
        },
        ...array.filter((item, i)=>i>index)
    ])
  }

  return (<div className={styles.Home}>

    <div className={styles.caixaDeItems}>
        <h3>Novos itens</h3>
        {array.map((item, index)=>(
        !item.checked &&
        <Item
          index={index}
          key={index}
          styles={styles}
          checked={item.checked}
          handleExcluir={()=>{excluir(index)}}
          handleMarcar={()=>{marcar(index)}}
        >{item.value}</Item>
      ))}
      <h3>Itens concluídos</h3>
      {array.map((item, index)=>(
        item.checked &&
        <Item
          index={index}
          key={index}
          styles={styles}
          checked={item.checked}
          handleExcluir={()=>{excluir(index)}}
          handleMarcar={()=>{marcar(index)}}
        >{item.value}</Item>
      ))}
    </div>
    
    <div className={styles.controls}>
      <input
        value={textInput}
        onInput={(e)=>{setTextInput(e.target.value)}}
        placeholder="Nova meta..."
        />
      <button onClick={adicionar}>+</button>
    </div>
  </div>)
}