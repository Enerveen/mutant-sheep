import React from 'react';
import SVG from 'react-inlinesvg';

import play from '../../svg/play.svg';

import s from './ProjectCard.module.css';

const ProjectCard = ({ name, logo, version, released, info, gpurl }) => {
  return (
    <div className={s.container}>
      <img src={logo} alt={name} />
      <h2>{name}</h2>
      <span>Version: {version}</span>
      <span>
        Status:{' '}
        {released ? (
          <>
            <span style={{ color: '#009108' }}>released </span>
            <a href={gpurl}>
              <SVG src={play} />
            </a>
          </>
        ) : (
          <span style={{ color: '#bc0000' }}>in development</span>
        )}
      </span>
      <p>{info}</p>
    </div>
  );
};

export default ProjectCard;
