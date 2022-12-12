import React from 'react';

function Development() {
    return (
        <div class="about-page">
            <div class="about">
                <div class="dev-photos">
                    <img src="./development.png" alt="" />
                    <p>An image of the website I made using React</p>
                </div>
                <div class="mainRight-about">
                    <h2>React Interface Development</h2>
                    <p>In this project, I created an <b>interface for a fake toy store shopping website</b>. In creating this interface, I was able to make it interactive by adding functionality to <b>filter</b> and <b>sort</b> the different toys, as well as <b>add and remove them to a cart</b>. Based on the items in the cart, the total price would be displayed. To create this project, I worked on <b>incorporating state variables into components, breaking an interface into components, and working with data imported from a json file</b>.</p>
                    <br></br>
                    <p style={{
          marginBottom: '2rem'
        }}><b>How it relates to education:</b> This project allowed me to work on coding complex websites under a context, such as a toy store, that relate to kids. Given that parents and kids would potentially be using this interface, I made sure to make my filter and sort categories intuitive. Also, I wanted to make the ways to add and remove items intuitive. Overall, by focusing on an audience of parents and children, I was able to incorporate my interest in education in the project. </p>
                    <form action={"https://excitedelephant401.github.io/reactSite/"} method="get" target="_blank">
                        <button class="btn">View the Final Website</button>
                    </form>
                </div>
            </div> 
        </div>
    );
}

export default Development;