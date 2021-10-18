import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './Footer.css';

const Footer = () => {
  const tags = useSelector(state => Object.values(state.tags));
  return (
    <div className='footer-container'>
      <div className='footer-tags-container'>
        <div className='footer-categories'>
        {
          tags.map(tag => {
            return <NavLink className='footer-category-item underline' to={`/discover?title=${tag.title}`}>
              {tag.title}
            </NavLink>
          })
        }
        </div>
      </div>
      <div className='flex-center'>
        <div className='footer-item-container'>
          <h4>Kekoa Boromeo</h4>
          <span><a className='footer-item underline' href='https://github.com/boromeot' target="_blank" rel="noreferrer">Github</a></span>
          <span><a className='underline' href='https://www.linkedin.com/in/kekoa-boromeo/' target="_blank" rel="noreferrer">Linkedin</a></span>
        </div>
        <div className='footer-item-container'>
          <h4>Eric Mahoney</h4>
          <span><a className='underline' href='https://github.com/langston7' target="_blank" rel="noreferrer" >Github</a></span>
          <span><a className='underline' href='https://www.linkedin.com/in/eric-mahoney-34a389204/' target="_blank" rel="noreferrer" >Linkedin</a></span>
        </div>
        <div className='footer-item-container'>
          <h4>Trevin Woods</h4>
          <span><a className='underline' href='https://github.com/Woods-Trevin' target="_blank" rel="noreferrer">Github</a></span>
          <span><a className='underline' href='https://www.linkedin.com/in/trevinwoods4778661aa/' target="_blank" rel="noreferrer">Linkedin</a></span>
        </div>
      </div>
      <div className='footer-legal-container'>
        <div className='footer-categories'>
          <NavLink to='#' className='footer-category-item underline'>{'Trust & Safety'}</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Terms of Use</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Private Policy</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Cookie Policy</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Accessibility Statement</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Notice of Consent</NavLink >
        </div>
      </div>
    </div>
  )
}

export default Footer;
