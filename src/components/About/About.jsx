import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details= 'Student | Developer | Tech Enthusiast | Leader | On a journey of Self Exploration '
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Developer</h3>
                    <p className='about-details'>
                        I am proficient in several programming languages like c++, python and java. I am currently honing my skills in front-end web development by building various projects using html,css , javascript and React framework.I am also inclined towards to the  recent prowess of machine learning and love to find newer algorithms and approaches of this technology in real life projects. {' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/SiddharthS0703'
                        >
                           Check out my Github Profile!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Leadership</h3>
                    <p className='about-details'>
                        I have a decent work experience that I got by doing several internships ranging over different domains.Want to know more? Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://drive.google.com/file/d/1AYMr8noeK-Dizi5GxXfXIyH3LPBefALP/view?usp=sharing'
                        >
                            my Resume!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Learner</h3>
                    <p className='about-details'>
                        I am always excited to take up new challenges and learn new skills across various domains. I aim to work and prosper towards developing my skills for the growth of the organisation.
                        I intend to put forward an all round effort rather than to stick to one domain. {' '}
                      
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out '
                link='my projects!'
                toAdress='/projects'
            
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;