import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Menu = () => {
    const [name, setName] = useState('')

    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };


    const whoIS = () => {
        if(Math.floor(Math.random()*10)%2===0) {
            setName('수영');
        } else {
            setName('은영');
        }
    }

    let img;

    if(name=='수영') {
        img = <img src="http://topclass.chosun.com/news_img/1807/1807_008.jpg"></img>
    } else if(name=='은영') {
        img = <img src="https://lh3.googleusercontent.com/proxy/EC_0iqJH31j4hjKzbtczamN5I58M1lJq0Nczl44BAGzwEvEgBsk-xFfzHCVN-KYOKgIHK9qe4FHMeeGUpoz3kzP8Pue6zRT44YreYk3aGWSmvX6J5Q"></img>
    } else {
        img = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkpTuG7BAKswAknw4ieILmO8l6v4MfNjiOw&usqp=CAU"></img>
    }

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>소개</NavLink></li>
                <li><NavLink to="/about/react" activeStyle={activeStyle}>React 소개</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>포스트 목록</NavLink></li>
            </ul>

            <button type="button" onClick={whoIS}>누가 당첨될 것인가!</button>
            <button type="button" onClick={()=>{setName('')}}>리셋</button>
            <div>당첨자: {name}</div>
            {img}
        </div>
    );
};

export default withRouter(Menu);