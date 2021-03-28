import React, { Component } from 'react';

class Subject extends Component {
    render() {
      console.log('Subject render');

      return (
        <header>
          <h1><a href="/" onClick={(e) => {
            e.preventDefault();
            this.props.onChangePage();
          }}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
}

export default Subject;