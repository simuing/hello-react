import { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    //state가 아닌 별도로 지정하는 이유는 목록 출력에 불필요한 랜더링 방지를 위함
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: {title:'WEB', sub: 'World wide web!'},
      welcome: {title: 'welcome', desc: 'Hello, React!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is HyperText...'},
        {id: 2, title: 'CSS', desc: 'CSS is HyperText...'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is HyperText...'}
      ]
    }
  }

  getReadContent(){
    let i = 0;
    while(i < this.state.contents.length) {
      let data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent(){
    let _title, _desc, _article = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if(this.state.mode === 'read') {
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>

    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(_title, _desc)=>{
        this.max_content_id = this.max_content_id+1;
        
        /* 방법1 - 리액트에서 좋은 방법은 아니다. 성능 개선에 까다롭다.
        this.state.contents.push(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        this.setState({
          contents: this.state.contents
        }); */

        // 방법2 - concat을 활용하여 기존 데이터를 수정하는 것이 아닌 데이터를 새로 추가하는 것으로 한다.
        let _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        this.setState({
          contents: _contents
        });
      }}></CreateContent>

    } else if(this.state.mode === 'update') {
      let _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={(_id, _title, _desc)=>{
        let _contents = Array.from(this.state.contents); //data copy
        let i = 0;
        while(i < _contents.length) {
          if(_contents[i].id === _id) {
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents: _contents
        })
      }}></UpdateContent>
    }
    return _article;
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({
              mode: 'welcome',
              selected_content_id: 0
            });
          }}
        >
        </Subject>
        <TOC 
          onChangePage={(id)=>{
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }}
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={(_mode)=>{
          this.setState({
            mode: _mode
          })
        }}></Control>
        {this.getContent()}
      </div>
    )
  }
}

export default App;
