import React from 'react';
import { Link } from "react-router-dom";
import "./App.css";


export default function Item(props) {
  return (
    <div class="Item">
        <img src={props.item.image} alt=""></img>
        <div class="description">
            <h4>{props.item.name}</h4>
            <p>{props.item.description}</p>
            <Link to={props.item.url}><button class="btn-sm" type="submit">View Project</button></Link>
        </div>
    </div>



  )
}
