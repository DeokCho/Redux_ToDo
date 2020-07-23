import React from 'react'
import {useSelector} from "react-redux";
import useActions from "./store/user.action.velopert";
import {changeInput, insert, toggle, remove} from "./store/todos.reducer";
import Todos from './Todos'

const TodosApp = () => {
    const {input, todos} =
        useSelector(({todosReducer})=>{
            if(typeof(todosReducer.input)=='undefined'){
                alert(`todos.input은 undefinded 입니다`)
            } else {
                alert(`todos.input은 객체입니다.`)
                return {input : todosReducer.input, todos:todosReducer.todos}
            }
        })
    // todos 에서 만든 것을 가져올 것이다.
    // useSelector를 통해 가지고 올 것이고, 방법은 콜백이다.
    // () => {} 는 리턴안할때 쓰는 함수
    // () => () 는 리턴할때 쓰는 함수
    //     -> () => {return ({})} 인데, {return은 생략 가능}
    //     -> () => ({})가 되는 것
    // todos에서 받아올 것이고, 이때 selector로 받아온 todos에서 input과 todos에서
    // 프로퍼티를 리턴할 것이다.
    // 만약 todos에 input과 todos가 없으면 undefine 에러가 발생한다.

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
        //user.action.veloper.js의 리턴값이 배열이기 떄문에 [ ] 로 선언
    )
    return (
        <Todos input={input} todos={todos} onChangeInput={onChangeInput}
               onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}/>)
}
export default React.memo(TodosApp)

