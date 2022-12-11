import React from 'react';

function Iterative() {
    return (
        <div class="about-page">
            <div class="about">
                <div class="iterative-photos">
                    <div class="photo-cap">
                        <img style={{width: '100%'}} src="./OldHome.png" alt="Figma Prototype" className="hifiFigma" />
                        <p><a href="https://www.figma.com/proto/nb0ce5cvjBXzLhELQ4G8Kt/Iterative-Design?page-id=0%3A1&node-id=62%3A2478&viewport=512%2C499%2C0.44&scaling=scale-down&starting-point-node-id=62%3A2478">Final High-Fidelity Prototype</a></p>
                    </div>
                    <div class="photo-cap">
                        <img src="./StyleGuide.png" alt="Figma Prototype"/>
                        <p>Style Guide for High-Fidelity Designs</p>
                    </div>
                </div>
                <div class="mainRight-about">
                    <h2>Iterative Design Project</h2>
                    <p>In this project, my group and I researched a startup and created mockups to encompass the main goals to the startup's concept. We chose to research the startup <b><a href="https://pyrls.com/">Pyrls</a></b> which is a website and mobile app that <b>enables healthcare providers and healthcare students to more effectively prescribe, dispense, and educate patients on their prescriptions.</b></p>
                    <br></br>
                    <p>In the process of creating mockups, we used the <b>iterative design process</b>. This included creating sketches, lo-fi mockups, and a hi-fi mockup before undergoing a design critique. At the design critique, we had the opportunity to <b>meet with an industry professional from Figma and received valuable feedback</b>. Based on this feedback, we improved our hi-fi mockups to create a final version of our mockups. Finally, we used a remote user testing service to test our mockups and analyzed the results.</p>
                    <br></br>
                    <p style={{
          marginBottom: '5rem'
        }}><b>How it relates to education:</b> This project allowed me to do work that benefited a startup who focused on better providing educational information for healthcare professionals. Additionally, by using the iterative design process, I was able to learn more about what design choices didn’t resonate with users. As a result, I was able to more effectively create a prototype that allowed users to learn the most from it by taking advantage of the different features in the prototype. </p>
                    <form action={"https://cs1300-iterative-design.pages.dev/#lofi"} method="get" target="_blank">
                        <button class="btn">View the Full Project</button>
                    </form>
                </div>
            </div> 
        </div>
    );
}

export default Iterative;