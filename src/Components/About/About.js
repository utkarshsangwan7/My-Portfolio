import React from 'react';
import Photo from './me.jpeg';
import git from './git.png';
import lin from './in.png';
import './About.css';
import '../scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const About = ()=>{
    return(
        <div className="about-wrapper show-on-scroll" id='about'>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' offset={50}>
            <h1 className='head'>ABOUT ME</h1>
            <div className="row-wrapper">
                    <div className='right-row-wrapper'>
                        <img alt='' src={Photo} id="photo"></img>
                        <div className='info'> 
                            <p className='info'>I'm Utkarsh Sangwan, a full stack Web Developer from Gurgaon.<br/> My curiosity to learn new skills and goal-oriented mindset is what encourages me to enhance my skill set.<br/></p>
                            <a href='https://drive.google.com/file/d/1NFsFa3ix6Lgvfz39uGjTCSeXe0BFqwjD/view?usp=sharing' target='_Blank' rel="noreferrer"><button className='button-special'>View Resume</button></a>
                        </div>
                    </div>
                    <div className='right-row-wrapper'>
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>SQL</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                        <div className='icons'>
                            <a href='https://github.com/utkarshsangwan7' target='_Blank' rel="noreferrer"><img className='icon' src={git} alt=''></img></a>
                            <a href='https://www.linkedin.com/in/utkarsh-sangwan-056a071b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUn20yTGlSR2DOC8p8ssEqw%3D%3D' target='_Blank' rel="noreferrer"><img clasName='icon' src={lin} alt=''></img></a>
                        </div>
                    </div>
            </div>
            </ScrollAnimation>
        </div>
    );
}

export default About;