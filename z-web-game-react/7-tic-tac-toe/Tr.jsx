import React from 'react';
import Td from './Td';

const Tr = () => {
    return (
        <tr>
            {Array(tableData.length).fill().map((td) => (
                <Td>{''}</Td>
            ))}
        </tr>
    )
}

export default Tr;