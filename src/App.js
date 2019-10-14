
import React, {Component} from "react";
import CardList from './components/CardList';
import Form from './components/Form';
//import axios from 'axios';

/*const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];*/
class App extends Component{
   state = {
    profiles:[]
  }
  addNewProfile = (profileData) =>{
    console.log("app",profileData);
    this.setState(prevState=>({
      profiles:[...prevState.profiles, profileData]
    }))
  }
  
  render() {
  return (
    <div>
      <header className="header">
        <h1>{this.props.title}</h1>
      </header>
      <main>
        <section>
          <Form onSubmit={this.addNewProfile}/>
        </section>
        <section>
          <CardList profiles={this.state.profiles} />
        </section>
      </main>
    </div>
  );
}
}
export default App;