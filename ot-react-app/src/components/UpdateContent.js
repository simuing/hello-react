
import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    let _content = props.data;
    this.state = {
      id: _content.id,
      title: _content.title,
      desc: _content.desc
    }
    // 함수 this 정의
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log('UpdateContent render');
    return (
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post"
          onSubmit={(e)=>{
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            ); 
          }}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title" 
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
            </p>
          <p>
            <textarea 
              name="desc" 
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;