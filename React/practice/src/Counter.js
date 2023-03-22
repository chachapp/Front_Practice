import React, {useState} from 'react'; // import 해주고, 

function Counter() {
    const [number, setNumber] = useState(0); 
    // 0은 초기값, 기본 값을 파라미터로 넣어서 호출해줌. 그럼 배열이 반환되며
    // number (첫번째원소) 는 현재 상태 값, 
    // setNumber (두번째원소) 는 Setter 함수(상태변화 펑션)이다.

    const onIncrease = () => {
        setNumber(number + 1);
    };

    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>

    );

}

export default Counter;