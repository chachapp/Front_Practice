import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input />
            <button>초기화</button>
            <div>
                <b>값 : </b>
            </div>
        </div>

    );

}

export default InputSample;