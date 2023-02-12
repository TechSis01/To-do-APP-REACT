import './TodoContainer.css'
import HeaderImage from './HeaderImage';
import Header from './Header';
import InputTodo from './Input';
const TodoContainer = ()=>{
    return(
        <div className = "todo-container">
          
             {/* <Header /> */}

            <InputTodo />
        </div>
    )
}

export default TodoContainer;