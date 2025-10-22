import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

function About() {
    return (
        <div class="about-page">
            <div class="about">
                <img src="./school.png" alt="" />
                <div class="mainRight-about">
                    <h2>About</h2>
                    <p>My name is Katie Baumgarten, and I graduated from <b>Brown University</b> in 2023 with a degree in <b>Computer Science and International & Public Affairs</b>. I’m passionate about using technology, design, and data to drive social impact. <br></br>
<br></br>I’ve worked across a range of mission-driven organizations, including a <b>government consulting firm, an educational nonprofit, and a local policy think tank</b>. These experiences have shaped my interest in how user-centered design can improve access, equity, and outcomes in public-serving work. <br></br>
<br></br>This portfolio was originally created as part of my <b>final project for a UI/UX course</b>, and it highlights projects that explore how thoughtful design can support learning, engagement, and adoption of new tools—especially in impact-oriented environments.</p>
                    <div class="connect">
                        <h3>Connect with me!</h3>
                            <div class="about-item">
                                <MdEmail/>
                                <a href="mailto:katiedb21@gmail.com">katiedb21@gmail.com</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;