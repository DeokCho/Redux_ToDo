import React, {useState} from 'react'
// { useState } 을 넣는 이유 -> Hook
// Hook 함수의 종류 총 13가지,
// Hook 함수는 2개의 라이브러리('React'와 'React-Redux')에 나눠 담겨져있음.
const TodoItem = ({todo, onToggle, onRemove}) => {
    return <>
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
    {todo.text}
  </span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    </>
}

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove}) => {
    const onSubmit = e => {
        e.preventDefault()
        // 캡처링, 프로퍼티가 내려가는 것을 방지하기 위해 -> 버블링만 남는다.
        onInsert(input)
        onChangeInput('')
    }
    const onChange = e => {
        e.preventDefault()
        onChangeInput(e.target.value)
        // 이벤트를 걸어서
    }

    return <>
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <div>
                        <input
                            value={input}
                            onChange={onChange}
                        />
                    </div>
                        <button type="submit">
                           등록
                        </button>
                    </div>
            </form>
            <div>
                {
                    todos.map(todo => (<TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}/>))
                }
                {/*조건이 맞아야 보이는 구간 */}

            </div>
        </div>
    </>
}

export default Todos

