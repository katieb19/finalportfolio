import React from 'react';

function Personas() {
    return (
        <div class="about-page">
            <div class="about">
                <div class="personas-photos">
                    <img src="./IMG_4556.jpg" alt="" />
                    <p>An image of the printer that I analyzed for this project</p>
                    <img src="./EmpathyMap1.JPG" alt="" />
                    <p>An example of one of the empathy maps I made to break down a user's perspective</p>
                </div>
                <div class="mainRight-about">
                    <h2>Personas Project</h2>
                    <p>In this project, I analyzed users' interactions with a printer at our university library. I conducted user research to understand users perspectives and experiences with using the printer. Based on this research, I was able to summarize users' experiences into empathy maps and a storyboard.</p>
                    <br></br>
                    <p style={{
          marginBottom: '5rem'
        }}><b>How it relates to education:</b> This project allowed me to investigate closely an important educational tool for many students. By conducting user research with students, it allowed me to understand student’s perspectives with using and navigating technology in relation to their schoolwork. </p>
                    <form action={"https://excitedelephant401.github.io/personas/"} method="get" target="_blank">
                        <button class="btn">View the Full Project</button>
                    </form>
                </div>
            </div> 
        </div>
    );
}

export default Personas;