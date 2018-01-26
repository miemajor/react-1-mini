import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={friends:[],picture:"",name:""}
}
  updatePicture(value){
    this.setState({picture:value});
    }

  updateName(value){
    this.setState({name:value});
  }

  addFriend(){
    const{friends, picture, name}= this.state;
    let newFriend = friends.slice();
    newFriend.push({picture, name});

    this.setState({friends:newFriend, picture:'',name: ''});
  }

  render() {
    const friends = this.state.friends.map( ( friend, index ) => (
      <div key={ `friend-${ index }-${ friend.name }` }>
        <img width="100px" src={ friend.picture } />
        <span>{ friend.name }</span>
      </div>
    ));
    return (
      <div>
        <span>Picture:</span>
        <input onChange={event=>this.updatePicture(event.target.value)} value={this.state.picture}/>
        <span>Name:</span>
        <input onChange={event=>this.updateName(event.target.value)} value={this.state.name}/>

        <button onClick={()=>this.addFriend()}>Add Friend</button>

        {friends}
        
      </div>
    );
  }
}

export default App;
