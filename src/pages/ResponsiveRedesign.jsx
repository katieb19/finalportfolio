import React from 'react';

function ResponsiveRedesign() {
    return (
        <div class="about-page">
            <div class="about">
                <div class="photos">
                    <video width="400" height="240" controls>
                        <source src="oldSite.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <p>Original Providence Promise Website</p>
                    <video width="400" height="240" controls>
                        <source src="newSite.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <p>Redesigned Providence Promise Website</p>
                </div>
                <div class="mainRight-about">
                    <h2>Responsive Redesign</h2>
                    <p>In this project, I redesigned the <a href="https://pvdpromise.org/how-you-can-help">“How You Can Help” page</a> on Providence Promise’s website. You can view the redesigned site <a href="https://excitedelephant401.github.io/redesignedSite/">here</a>. Providence Promise is a program to support Providence students in preparing for college. In redesigning the website, I focused on two things: increasing accessibility and improving usability of the website. Furthermore, I was able to do this while making sure the website was responsive to different screen size dimensions.</p>
                    <br></br>
                    <p><b>How it relates to education:</b> This project allowed me to apply best practices in designing an interface directly to an education organization. Additionally, this project allowed me to focus on centering the perspective of students and parents as those are the primary users of the website.</p>
                    <form action={"https://excitedelephant401.github.io/responsiveRedesign/"} method="get" target="_blank">
                        <button class="btn">View the Full Project</button>
                    </form>
                </div>
            </div>  
        </div>
    );
}

export default ResponsiveRedesign;