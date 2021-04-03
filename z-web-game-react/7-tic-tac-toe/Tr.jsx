import React from 'react';
import Td from './Td';

const Tr = ({ dispatch, rowData, rowIndex}) => {
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>
            ))}
        </tr>
    )
}

export default Tr;