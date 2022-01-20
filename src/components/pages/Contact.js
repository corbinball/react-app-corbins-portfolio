import React from 'react';

export default function Contact() {
  return (
    <div>
       <h2><span>Contact Me</span></h2>
            <article id="contact-me">
                <nav className= "display: flex, justify-content: center, padding: 20px, padding-bottom: 300px">
                    <ul>
                        <a href= "https://github.com/corbinball">
                        <li className="font-family: 'Oxygen', sans-serif; font: bold 50px; text-decoration: none; background-color: #ECF87F; color: #81B622; padding: 37.5px 112.5px; border-top: 1px solid #CCCCCC; border-right: 1px solid #2fff4b; border-bottom: 1px solid #2fff4b; border-left: 1px solid #CCCCCC; display: flex;">Github</li>
                        </a>
                        <a href= "mailto:c.ball@me.com">
                        <li className="font-family: 'Oxygen', sans-serif; font: bold 50px; text-decoration: none; background-color: #ECF87F; color: #81B622; padding: 37.5px 112.5px; border-top: 1px solid #CCCCCC; border-right: 1px solid #2fff4b; border-bottom: 1px solid #2fff4b; border-left: 1px solid #CCCCCC; display: flex;">Email: c.ball@me.com</li>
                        </a>
                        <a  a href="https://www.linkedin.com/in/corbin-ball/">
                        <li className="font-family: 'Oxygen', sans-serif; font: bold 50px; text-decoration: none; background-color: #ECF87F; color: #81B622; padding: 37.5px 112.5px; border-top: 1px solid #CCCCCC; border-right: 1px solid #2fff4b; border-bottom: 1px solid #2fff4b; border-left: 1px solid #CCCCCC; display: flex;">LinkedIn</li>
                        </a>
                        <a href= "https://github.com/corbinball/corbins-portfolio/raw/main/Resume.pdf">
                        <li className="font-family: 'Oxygen', sans-serif; font: bold 50px; text-decoration: none; background-color: #ECF87F; color: #81B622; padding: 37.5px 112.5px; border-top: 1px solid #CCCCCC; border-right: 1px solid #2fff4b; border-bottom: 1px solid #2fff4b; border-left: 1px solid #CCCCCC; display: flex;">Resume</li>
                        </a>
                    </ul>
                </nav>
            </article>
    </div>
  );
}
