const React = require('react');
const ReactDom = require('react-dom');
const webpack = require('webpack');

const WordRelay = require('WordRelay');

// 파일명 끝에 .js가 아닌 .jsx로 생성하면 jsx파일임을 알 수 있고, 
// 태그형으로 작성할 수 있어 명시적이다.
ReactDom.render(<WordRelay />)