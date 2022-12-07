import React from 'react';
import "./App.css";


export default function Item(props) {
  return (
    <div class="Item">
        <img src={props.item.image} alt=""></img>
        <div class="description">
            <h4>{props.item.name}</h4>
            <p>{props.item.description}</p>
            <form action={props.item.url} method="get" target="_blank">
              <button class="btn-sm" type="submit">View Project</button>
            </form>
        </div>
    </div>



  )
}
