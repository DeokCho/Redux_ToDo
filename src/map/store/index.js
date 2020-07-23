import React, {useState} from 'react'
const Map = () => {
    const [address, setAddress] = useState('')
    const onClick = e => {
        e.preventDefault()
    }
    // 이벤트는 리듀서까지 만들어야 한다. 1) 4번 라인으로 가시오

    return <>
        <div>
            <span>주소 : {address}</span>
            <button onClick={onClick}>주소찾기</button>
        </div>
    </>
}

export default Map
