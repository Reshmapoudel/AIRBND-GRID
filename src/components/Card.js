import React from "react";
import  { AiFillStar } from "react-icons/ai";
import '../styles.scss';
export const Card = (props) => {
    let badgeText
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT'
    }
    else if(props.location === 'Online'){
        badgeText= 'ONLINE'
    }
  return (
    <div className="card">
       {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={require(`../images/${props.coverImg}`)} alt="card-img" className="card-img" />
      <div className="card-stats">
          <AiFillStar height={50}/>
          <span>{props.stats.rating}</span>
          <span>({props.stats.reviewcount})</span>
          <span>{props.location}</span>
      </div>
    <span className="card-details">
    <p >{props.title}</p>
      <p><span className="card-price">From ${props.price}</span> /person</p>
    </span>
    </div>
  );
};
