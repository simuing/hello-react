import React, { useReducer, createContext, useMemo, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

export const CODE = {
    MINE: -7,          //지뢰
    NORMAL: -1,        //정상
    QUESTION: -2,      //물음표
    FLAG: -3,          //깃발
    QUESTION_MINE: -4, //지뢰칸에 물음표
    FLAG_MINE: -5,     //지뢰칸에 깃발
    CLICKED_MINE: -6,  //지뢰 클릭
    OPENED: 0,         //정상적으로 연 칸 (0 이상이면 OPENED)
};

//export 해서 다른 컴포넌트에서 사용할 수 있도록 한다.
export const TableContext = createContext({ 
    tableData: [],      //배열 모양만 맞춰준다.
    halted: true,
    dispatch: () => {}, //함수 모양만 맞춰준다.
});

const initialState = {
    tableData: [],
    data: {
        row: 0,
        cell: 0,
        mine: 0,
    },
    timer: 0,
    result: '',
    halted: false,
    openedCount: 0,
};

/**
 * @function plantMine 지뢰를 심는 함수
 * @param {*} row  가로 칸 수
 * @param {*} cell 세로 칸 수
 * @param {*} mine 지뢰 수
 */
const plantMine = (row, cell, mine) => {
    console.log(row, cell, mine);

    //10x10 테이블 데이터를 추출한다.
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });

    //지뢰를 심을 위치를 담는다.
    const shuffle = []; 
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }

    //10x10을 돌고 2차원 배열 테이블이 만들어진다.
    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL);
        }
    }

    // 몇 콤마 몇인지를 계산하기 위한 코드
    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }
    return data;
};

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';

export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME: {
            return {
                ...state,
                data: {
                    row: action.row,
                    cell: action.cell,
                    mine: action.mine,
                },
                openedCount: 0,
                tableData: plantMine(action.row, action.cell, action.mine),
                halted: false,
                timer: 0,
            }
        }
        case OPEN_CELL: {
            const tableData = [...state.tableData];
            tableData.forEach((row, i) => {
                tableData[i] = [...row];
            });

            //한번 연 칸은 다시 열지 않도록 캐싱하는 변수 선언
            const checked = [];
            let openedCount = 0;
            //주변칸들을 검사하는 함수
            const checkAround = (row, cell) => {
                // console.log(row, cell);
                if (row < 0 || row >= tableData.length || cell < 0 || cell >= tableData[0].length) {
                    return;
                } // 상하좌우 없는칸은 안 열기
                if ([CODE.OPENED, CODE.FLAG, CODE.FLAG_MINE, CODE.QUESTION_MINE, CODE.QUESTION].includes(tableData[row][cell])) {
                    return;
                } // 닫힌 칸만 열기
                if (checked.includes(row + '/' + cell)) {
                    return;
                } else {
                    checked.push(row + '/' + cell);
                } // 한 번 연칸은 무시하기
                let around = [
                    tableData[row][cell - 1], tableData[row][cell + 1],
                ];
                if (tableData[row - 1]) {
                    around = around.concat([tableData[row - 1][cell - 1], tableData[row - 1][cell], tableData[row - 1][cell + 1]]);
                }
                if (tableData[row + 1]) {
                    around = around.concat([tableData[row + 1][cell - 1], tableData[row + 1][cell], tableData[row + 1][cell + 1]]);
                }
                const count = around.filter(function (v) {
                    return [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v);
                }).length;
                            
                if (count === 0) { //주변칸 오픈
                    if (row > -1) {
                        const near = [];
                        //제일 위칸이 아닐 때만 추가
                        if (row - 1 > -1) { 
                            near.push([row - 1, cell - 1]);
                            near.push([row - 1, cell]);
                            near.push([row - 1, cell + 1]);
                        }
                        near.push([row, cell - 1]);
                        near.push([row, cell + 1]);
    
                        //제일 아래칸이 아닐 때만 추가
                        if (row + 1 < tableData.length) { 
                            near.push([row + 1, cell - 1]);
                            near.push([row + 1, cell]);
                            near.push([row + 1, cell + 1]);
                        }
    
                        // 있는 칸들만 클릭filter(v => !!v).
                        near.forEach((n) => {
                            if (tableData[n[0]][n[1]] !== CODE.OPENED) { //연 칸이 아니면 재귀
                                checkAround(n[0], n[1]);
                            }
                        })
                    }
                }
                if (tableData[row][cell] === CODE.NORMAL) { // 내 칸이 닫힌 칸이면 카운트 증가
                    openedCount += 1;
                  }
                tableData[row][cell] = count;
            }; //END checkAround()
            checkAround(action.row, action.cell);
            let halted = false;
            let result = '';
            console.log(state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount)
            if (state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount) { //승리
                halted = true;
                result = `${state.timer}초만에 승리하셨습니다.`;
            }
            return {
                ...state,
                tableData,
                openedCount: state.openedCount + openedCount,
                halted,
                result,
            }
        }
        case CLICK_MINE: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;
            return {
                ...state,
                tableData,
                halted: true,
            }
        }
        case FLAG_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.MINE) {
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            return {
                ...state,
                tableData,
            }
        }
        case QUESTION_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.FLAG_MINE) {
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
            return {
                ...state,
                tableData,
            }
        }
        case NORMALIZE_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
                tableData[action.row][action.cell] = CODE.MINE;
            } else {
                tableData[action.row][action.cell] = CODE.NORMAL;
            }
            return {
                ...state,
                tableData,
            }
        }
        case INCREMENT_TIMER: {
            return {
                ...state,
                timer: state.timer + 1,
            }
        }
        default:
            return state;
    }
};

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, halted, timer, result } = state;

    // useMemo로 캐싱해주어 성능 최적화를 한다.
    // dispatch는 절대로 바뀌지 않기 때문에 바뀌는 목록엔 추가하지 않아도 된다.
    const value = useMemo(() => ({ tableData, halted, dispatch }), [tableData, halted]);

    useEffect(() => {
        let timer;
        if (halted === false) {
          timer = setInterval(() => {
            dispatch({ type: INCREMENT_TIMER });
          }, 1000);
        }
        return () => {
          clearInterval(timer);
        }
      }, [halted]);

    return (
        <TableContext.Provider value={value}>
            <Form/>
            <div>{timer}</div>
            <Table />
            <div>{result}</div>
        </TableContext.Provider>
    )
}

export default MineSearch;