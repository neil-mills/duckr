import React from 'react';
import PropTypes from 'prop-types';
import { container, title, slogan } from './styles.css';

export default function Home (props) {
//const Home = ( props ) => (
  return (
    <div className={container}>
      <p className={title}>{`Duckr`}</p>
      <p className={slogan}>{`The real time, cloud based, modular, scalable, growth hack, social platform.`}</p>
    </div>
  )
}

//export default Home;