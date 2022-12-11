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
                    <p>My name is Excited Elephant and I'm currently a <b>senior at Brown University</b>. I'm studying <b>Computer Science and International & Public Affairs</b>. I'm also <b>interested in education</b> and have worked in a variety of educational settings including classrooms, research, and policy. <br></br>
                    <br></br>In this portfolio, I will show how these projects have allowed me to better understand how people best learn new information. These projects have allowed me to expand upon the interest I have for education and understanding how design can facilitate learning.</p>
                    <div class="connect">
                        <h3>Connect with me!</h3>
                            <div class="about-item">
                                <MdEmail/>
                                <p>excitedelephant401@gmail.com</p>
                            </div>
                            <div class="about-item">
                                <FaGithub/>
                                <p>excitedelephant401</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;