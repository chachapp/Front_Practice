import React from 'react';

function Td({ item }) {


    return (
        <>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
            </tr>
        </>
    );
}

export default Td;