import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {

    const { theme, toggleTheme } = useTheme();

    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Chidera Ulu, </span>frontend developer based in Nigeria.</h1>
      <p>I am a frontend developer, with 3 
        years of experience in designing websites like Tesla, Amazon, Disney and Apple.
      </p>
        <div className='hero-links'>
            <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Twitter-icon" />
            </a>
            <a href="https://github.com/DeraJudy/" target="_blank">
                <img src={githubIcon} alt="Github-icon" />
            </a>
            <a href="https://www.linkedin.com/in/chidera-ulu-48023327a/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin-icon" />
            </a>
        </div>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <a className='hero-resume' href="" download>
            <button className="hover" >
              My Resume
            </button>
        </a>
      </div>
    </div>
  )
}

export default Hero

