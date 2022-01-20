import React from 'react';

export default function Projects() {
  return (
    <div>
     <h2><span>Projects</span></h2>
            <article id="Work">
                <nav className="display: block; justify-content: center; align-content: center; align-items: row; padding: 20px; padding-left: 22%; padding-bottom: 220px; line-height: 1.9; margin: 20px 20px;">
                    <ul>
                        <a href="https://zachrojas.github.io/Youpedia/">
                            <li className="font-family: 'Oxygen', sans-serif; font: bold 50px; text-decoration: none; background-color: #ECF87F; color: #81B622; padding: 37.5px 112.5px; border-top: 1px solid #CCCCCC; border-right: 1px solid #2fff4b; border-bottom: 1px solid #2fff4b; border-left: 1px solid #CCCCCC; display: flex;">YouPedia</li>
                        </a>
                        <a href="https://coolexpressnotes.herokuapp.com/">
                        <li className="font-family: 'Oxygen', sans-serif; font: bold 50px; text-decoration: none; background-color: #ECF87F; color: #81B622; padding: 37.5px 112.5px; border-top: 1px solid #CCCCCC; border-right: 1px solid #2fff4b; border-bottom: 1px solid #2fff4b; border-left: 1px solid #CCCCCC; display: flex;">Easy Note Taker</li>
                        </a>
                        <a href="https://naughty-by-nature.herokuapp.com/">
                            <li className="font-family: 'Oxygen', sans-serif; font: bold 50px; text-decoration: none; background-color: #ECF87F; color: #81B622; padding: 37.5px 112.5px; border-top: 1px solid #CCCCCC; border-right: 1px solid #2fff4b; border-bottom: 1px solid #2fff4b; border-left: 1px solid #CCCCCC; display: flex;">Naughty By Nature</li>
                        </a>
                        
                    </ul>
                </nav>
            </article>
    </div>
  );
}
