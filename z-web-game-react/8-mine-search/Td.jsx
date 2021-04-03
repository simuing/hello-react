import React, { useContext } from 'react';
import { CODE, TableContext } from './MineSearch';


// 지뢰찾기 코드에 따른 스타일 조정
const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#444',
            }
        case CODE.OPENED:
            return {
                background: 'white',
            }
        default:
            return {
                background: 'white',
            }
    }
};

// 지뢰찾기 코드에 따른 출력 텍스트 조정
const getTdText = (code) => {
    switch (code) {
        case CODE.NORMAL:
            return ''
        case CODE.MINE:
            return 'X'
        default:
            return ''
    }
}

const Td = ({ rowIndex, cellIndex }) => {
    const { tableData } = useContext(TableContext);

    return (
        <td style={getTdStyle(tableData[rowIndex][cellIndex])}
        >{getTdText(tableData[rowIndex][cellIndex])}</td>
    )
}

export default Td;