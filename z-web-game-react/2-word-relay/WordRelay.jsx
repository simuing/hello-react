const React = require('react');
const { useState, useRef } = require('react');

const WordRelay = () => {
    const [word, setWord] = useState('시뮝')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={onRefInput} value={value} onChange={onChangeInput} />
                <button>클릭!!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = WordRelay;