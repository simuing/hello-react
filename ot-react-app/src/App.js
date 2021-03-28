import { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
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
  render() {
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        console.log(data);
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
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
        >
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
