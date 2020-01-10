import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Will & Skill'
    }
  }

  fetchData(){
    setTimeout(() => {
      console.log('Fetch successful');
      this.setState({
        data: 'Hello Långholmsgatan'
      })
    }, 1000)
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {
    return(
      <div>
      {this.state.data}
    </div>
    )
  }
}

export default App;
