import './Input.css'
import {useState,useEffect} from 'react'
import Header from './Header'
 import AddButton from './AddButton'

 let persistedItems = JSON.parse(localStorage.getItem('items'))
const InputTodo = ()=>{
    const [todosItem,setTodosItem] = useState(persistedItems || [])
    const [newItem,setNewItem] = useState('')
    const [error,setError] = useState(false)

    useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(todosItem))
    },[todosItem])
    function newTodo(e){
        setNewItem(e.target.value)
    }
    function addItems(e){
        if(newItem.length === 0){
            setError(true)
        }
        else{
        setTodosItem([
            ...todosItem,
            {
                id:Math.random(),
                todo:newItem
            }
        ])
        setNewItem('')
        setError(false)

    }
}

    function deleteItem(id){
        let newItemsArray = todosItem.filter((item)=>{
            return item.id !== id
        })
        setTodosItem(newItemsArray)
    }
    return(
        <div >
            <div className = "body">
            <Header />
        <div className = "input-container">
            <input type="text" id="todo" value = {newItem} placeholder='Enter New Todo' onChange = {newTodo}></input>
           <button onClick = {addItems}>Add</button>
         
        </div>
        <p className ={`para ${!error ? 'invalid' : ''} `} >Please insert a task</p>
         <div className = "Todo-Items">
         {todosItem.length === 0 && (<p style = {{marginLeft:"15px"}}>No Tasks available...</p>)}
                {todosItem.length > 0 && todosItem.map(item=>(
                    <div className="Todo-individual-items"key = {item.id}>{item.todo}
                    <button onClick = {()=>deleteItem(item.id)} className="delete-btn">
                    Delete
                    </button></div>
                ))}
        </div> 
        </div>
        </div>
    )
}

export default InputTodo