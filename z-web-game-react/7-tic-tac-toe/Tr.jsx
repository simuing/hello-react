import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ dispatch, rowData, rowIndex}) => {
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>

                //useMemo 적용 예시
                // useMemo(
                //     () => <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>,
                //     [rowData[i]],
                // )
            ))}
        </tr>
    )
});

export default Tr;