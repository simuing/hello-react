import React from 'react';
import Tr from './Tr';

const Table = ({ onClick }) => {
    return (
        <table>
            {Array(tableData.length).fill().map((tr, i) => (
                <Tr rowData={tableData[i]}></Tr>
            ))}
        </table>
    )
}

export default Table;