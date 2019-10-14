import React, {Component} from "react";
import '../styles.css';



class Card extends Component{
  
  render(props){
    const profile = this.props;
    return(
      <div className="github-profile">
    	  <img src={profile.avatar_url} alt="profile"/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}
export default Card;