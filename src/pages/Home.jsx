import React from 'react';
import {useRef} from 'react';
import itemData from "../assets/item-data.json";
import Item from "../Item.js";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
itemData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
}); 
/* ############################################################## */

function Home() {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div class="home">
            <div class="intro">
                <img src="./teacher.png" alt="" />
                <div class="mainRight">
                    <p>Hi,<br></br>
                        My name is Katie! I’m based in <b>Washington DC</b> and have been supporting government clients in adopting new technologies through human-centered design and data-driven tools. <br></br>
    I'm passionate about the intersection of <b>UX, technology, and mission-driven work</b>, especially where it supports community impact and social change. <br></br>
    This site was originally created as part of my <b>final project for a UI/UX course</b> at Brown University.
                        </p>
                    <button class="btn" onClick={handleClick}>View My Work!</button>
                </div>
            </div>
            <div class="projects" ref={ref}>
                <h2>Selected Projects</h2>
                <div class="grid">
                {itemData.map((item, index) => ( 
                    <Item item={item} key={index}>
        
                    </Item>
          ))}
          </div>
          </div>
        </div>

    );
}

export default Home;