import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField: ''
    };
    //this.handlechange=this.handlechange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}));
  }
  handlechange = (e)=>
  //here e is a synthetic event,React defines these synthetic events 
  //according to the W3C spec, 
  //so you don’t need to worry about cross-browser compatibility.
  {
    this.setState({searchField: e.target.value})
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
         <SearchBox
           placeholder='search monsters'
           handlechange={this.handlechange}
         />
        <CardList monsters={filteredMonsters}>
        </CardList>
        
      </div>
    );
  }
}
export default App;
