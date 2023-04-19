import React from 'react';
import classNames from 'classnames';
import "./Button.scss";

function Button({ children, size }) {
    return (
        <button className={classNames('Button', size)}>{children}</button> // className에 동적으로 클래스이름 넣기
    )
}

Button.defaultProps = {
    size: 'medium'
}


export default Button;