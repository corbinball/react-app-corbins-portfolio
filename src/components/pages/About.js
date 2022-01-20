import React from 'react';

export default function About() {
  return (
          <div>
            <h2><span>About Me</span></h2>
            <div id="About-Me">
                <img className= "width: 25%, height: auto, display: block, margin-left: auto, margin-right: auto"
                        src= "https://github.com/corbinball/corbins-portfolio/blob/main/assets/images/me.png?raw=true"
                        alt= "Corbin Ball"/>
                </div>
                <div className="color: #215007;
                            display: flex;
                            max-width: 800px;
                            margin: 0 auto;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-content: center;
                            font-size: medium;
                            line-height: 3.9;"
                            >
                    <p>Lets keep this short and sweet.</p>
                    <p> I am a new seed of a developer.</p>
                    <p> I will seek the sun and ask for water when I can't find any. </p>
                    <p> My name is Corbin Ball and I am 33 years old.</p>
                    <p> I hope to develope from a small seed to a legendary tree, in a forests of other legends.</p>
                        <h1>LETS MAKE THIS GROWTH!</h1>
                  
                </div>
          </div>
  );
}
