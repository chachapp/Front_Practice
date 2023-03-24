import React, { useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const getData = async () => {
    const res = await fetch().then((res) => {res.json()});

    console.log(res);

    const iniData = res.slice(0, 20).map((it) => {
        return {
            author : it.email,
            content : it.body,
        }
    });

};


function TodoList() {
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <TodoListBlock>
                <TodoItem text='프로젝트 생성하기' done={true}></TodoItem>
                <TodoItem text="컴포넌트 스타일링 하기" done={true} />
                <TodoItem text="Context 만들기" done={false} />
                <TodoItem text="기능 구현하기" done={false} />
            </TodoListBlock>
        </div>
    );
    
}

export default TodoList;