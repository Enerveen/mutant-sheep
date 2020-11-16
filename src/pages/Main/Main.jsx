import React from 'react';
import SVG from 'react-inlinesvg';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

import logo from '../../img/logo.png';

import phone from '../../svg/phone.svg';
import loc from '../../svg/location.svg';
import email from '../../svg/email.svg';

import cvlogo from '../../img/cr/logo.png';

import s from './Main.module.css';

const Main = () => {
  const projects = [
    {
      name: 'Cube Reaction',
      logo: cvlogo,
      version: '1.8',
      released: true,
      info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.`,
      gpurl: 'https://play.google.com/store/apps/details?id=com.MutantSheep.CubeReaction',
    },
  ];

  return (
    <div className={s.container}>
      <section className={s.heading}>
        <div className={s.headingContent}>
          <h1>We are Mutant Sheep Team</h1>
          <span>We have our own view of familiar things</span>
        </div>
        <img src={logo} alt='logo' />
      </section>
      <section className={s.about} id='about'>
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </section>
      <section className={s.projects} id='projects'>
        <h1>Our projects</h1>
        <div className={s.cardsContainer}>
          {projects.map((elem, index) => (
            <ProjectCard key={index} {...elem} />
          ))}
        </div>
      </section>
      <section className={s.contacts} id='contacts'>
        <h1>Contact us</h1>
        <div className={s.contactCont}>
          <div className={s.contact}>
            <SVG src={phone} />
            <span>+375 (29) 107-54-80</span>
          </div>
          <div className={s.contact}>
            <SVG src={email} />
            <span>mutantsheepteam@gmail.com</span>
          </div>
          <div className={s.contact}>
            <SVG src={loc} />
            <span>Torzhkovskaya st., 15, Saint-Petersburg, Russia</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
