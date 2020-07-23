import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import {useMemo} from 'react'

export default function useActions(actions, deps){
    const dispatch = useDispatch()
    // 리듀서 만들려고 하는 것이기에 dispatch 사용
    return useMemo(
        // useMemo가 무엇인가?
        ()=>{
        // 이 함수는 리턴은 하지않고 실행만 한다 ( ) => { } 로 작성
            if(Array.isArray(actions)){
                return actions.map(a=>bindActionCreators(a, dispatch))
            }
            // map = 배열
            return bindActionCreators(actions, dispatch)
            // 여기서의 action은 State를 반드시 갖고 있어야함.
            // 현재는 없어도 되지만 사용할때는 State가 있어야 함
        }, deps ? [dispatch, ...deps] : deps
                // ...state의 뜻, dispatch는 그대로, 외부의 deps를 ...deps에 넣어서
    )
}