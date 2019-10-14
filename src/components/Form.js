import React from "react";
import axios from 'axios';

class Form extends React.Component {
  //userInputValue = React.createRef();
  state = { userName: ''};
  submitHandler = async (e) =>{
      e.preventDefault();
      const res= await axios.get(`https://api.github.com/users/${this.state.userName}`)
      //console.log("form",res.data);
      this.props.onSubmit(res.data);
      this.setState({userName:''})
     /* console.log(
        this.userInputValue.current.value
        );
*/
  }
    
  render(){
    return(
      <form action="" onSubmit={this.submitHandler}>
       {/* <input type="text" 
        ref={this.userInputValue} 
        placeholder="Github username..."
         />
         */
       }
       <input type="text" 
       placeholder="Github UserName..." 
       value={this.state.userName}
       onChange={(e)=>this.setState({userName:e.target.value})}
       />
        <button type="submit">Add me!</button>
      </form>
    )
  }
}

export default Form;