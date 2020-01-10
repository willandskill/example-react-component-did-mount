# Example - React componentDidMount

Ett exempel på när componentDidMount() används - en lifecycle metod i React

```
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
```

Metoden `componentDidMount()` triggas när en komponent precis har initieras. Rent tekniskt så händer detta när React lägger till noden till DOM:n (Document Object Model).

## När används componentDidMount
Metoden kan användas för att utföra allt man behöver göra innan komponenten renderas. Bland annat kan det användas till följande uppgifter:

* Hämta data från extern källa

* Manipulera data som mottagits från förälderkomponenten.

**Detta var allt för denna gång!**

Du kan läsa hela artikeln samt andra artiklar inom ämnet här: [När använder man componentDidMount](https://www.willandskill.se/sv/naer-anvaender-man-componentdidmount/)
