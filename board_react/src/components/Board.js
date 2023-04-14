import React, {useEffect, useState} from 'react';
import Tr from './Tr';
import axios from 'axios';
import '../css/BoardStyle.css';

function Board() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        // todo... 
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setInfo(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div> 게시판
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>제목</th>
                        <th>이메일</th>
                        <th>웹사이트</th>
                    </tr>
                </thead>  
                <Tr info={info} />
            </table>
        </div>
    );
}

export default Board;