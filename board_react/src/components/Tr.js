import React from 'react';
import Td from './Td';

function Tr({ info }) {


    return (
        <tbody>
            {
                info.map(item =><Td key={item.id} item={item} />)
            }
        </tbody>
    );
}

export default Tr;