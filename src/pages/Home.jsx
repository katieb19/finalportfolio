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
                        I’m an aspiring <b>UX Designer</b> <br></br>
                        based in <b>Providence</b>. I’m <br></br>
                        interested in working in intersection <br></br> between <b>UX design</b> and <b>education</b>. 
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