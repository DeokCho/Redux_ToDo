import {createAction, handleActions} from 'redux-actions'
import produce from 'immer'

const CHANGE_INPUT='todos/CHANGE_INPUT'
const INSERT='todos/INSERT'
const TOGGLE='todos/TOGGLE'
const REMOVE='todos/REMOVE'

export const changeInput = createAction(CHANGE_INPUT)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

const initialState = {

}

const todos = handleActions({
    [CHANGE_INPUT]: (state, action) => ({}),
    [INSERT]: (state, action) => ({}),
    [TOGGLE]: (state, action) => ({}),
    [REMOVE]: (state, action) => ({})
    },
    initialState
)

export default handleActions