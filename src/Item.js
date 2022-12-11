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
            <button class="btn-sm" type="submit"> <Link to={props.item.url}>View Project</Link></button>
        </div>
    </div>



  )
}
