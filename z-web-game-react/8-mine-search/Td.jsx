import React, { useContext, useCallback, memo, useMemo } from 'react';
import { CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL, TableContext } from './MineSearch';


// 지뢰찾기 코드에 따른 스타일 조정
const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#444',
            }
        case CODE.CLICKED_MINE:
        case CODE.OPENED:
            return {
                background: 'white',
            }
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return {
                background: 'yellow',
            }
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return {
                background: 'red',
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
        case CODE.CLICKED_MINE:
            return '펑'
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return '깃발'
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return '?'
        default:
            return code || '';
    }
}

const Td = memo(({ rowIndex, cellIndex }) => {
    const { tableData, dispatch, halted } = useContext(TableContext);

    const onClickTd = useCallback(() => {
        if(halted) {
            return; //게임이 멈췄으면 아무 일도 하지 않는다.
        }
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.OPENED:
            case CODE.FLAG:
            case CODE.FLAG_MINE:
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                return; //클릭안되도록 처리
            case CODE.NORMAL: //일반
                dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex})
                return;
            case CODE.MINE:   //지뢰
                dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex})
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);

    // 우클릭 이벤트
    const onRightClickTd = useCallback((e) => {
        e.preventDefault(); //메뉴열리는 이벤트 막기
        if(halted) {
            return; //게임이 멈췄으면 아무 일도 하지 않는다.
        }
        switch (tableData[rowIndex][cellIndex]) {
            case (CODE.NORMAL):
            case (CODE.MINE):   
                dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex }); // 깃발 꽂기
                return;
            case (CODE.FLAG):
            case (CODE.FLAG_MINE):  
                dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex }); // 깃발 자리는 물음표로 전환
                return;
            case (CODE.QUESTION):
            case (CODE.QUESTION_MINE):  
                dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex }); // 정상복구
                return;
            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted])

    // Context api 최적화 방법 1 - useMemo를 사용하여 Context api 최적화
    /*
    return useMemo(()=> (
        <td 
            style={getTdStyle(tableData[rowIndex][cellIndex])}
            onClick={onClickTd}
            onContextMenu={onRightClickTd}
        >{getTdText(tableData[rowIndex][cellIndex])}</td>
    )); */

    // Context api 최적화 방법 2 - memo로 감싼 별도의 컴포넌트 생성
    
    return <RealTd onClickTd={onClickTd} onRightClickTd={onRightClickTd} data={tableData[rowIndex][cellIndex]} />
})

const RealTd = memo(({ onClickTd, onRightClickTd, data }) => {
    return (
        <td 
            style={getTdStyle(data)}
            onClick={onClickTd}
            onContextMenu={onRightClickTd}
        >{getTdText(data)}</td>
    )
})

export default Td;