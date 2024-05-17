import React from 'react';
import appointMe from '../../assets/projects/appoint-me.png';
import jate from '../../assets/projects/jate.png';
import social from '../../assets/projects/social-network-api.jpg';
import regex from '../../assets/projects/regex.jpg';
import infinite from '../../assets/projects/infinite-disc.png';
import tech from '../../assets/projects/the-tech-blog.png';
import random from '../../assets/projects/the-random-blog.png';
import eCommerce from '../../assets/projects/e-commerce.jpg';
import employee from '../../assets/projects/employee-tracker.jpg';
import notes from '../../assets/projects/note-taker.png';
import team from '../../assets/projects/team-profile-generator.png';
import readme from '../../assets/projects/readme-generator.jpg';
import drink from '../../assets/projects/drink.png';
import flags from '../../assets/projects/flags-r-us.png';
import weather from '../../assets/projects/weather-dashboard.png';
import workday from '../../assets/projects/work-day-scheduler.png';
import quiz from '../../assets/projects/coding-quiz.png';
import password from '../../assets/projects/password-generator.png';
import soon from '../../assets/projects/coming-soon.png';


function Portfolio() {

	return (
	<main>
        <h2>Portfolio</h2>
        <div className="projects">
        {projectData.map((project) => (
                <div style={{background: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '3px solid white', height: '300px', width: '300px', marginTop: '40px'}}>
                    <div className="cardTitle">
                        <h3>{`${project.title}`}</h3>
                        <div className='row'>
                            <div>
                                <a className='app' href={`${project.app}`} target="_blank"><i className="fa-regular fa-link"></i></a>
                                <p>App</p>
                            </div>
                            <div>
                                <a className='repo' href={`${project.repo}`} target="_blank"><i className="fa fa-github"></i></a>
                                <p>Repo</p>
                            </div>
                        </div>
                        <h4>{`${project.info}`}</h4>
                    </div>
                </div>
        ))} 
        </div>
    </main>
	);
}

export default Portfolio;

const projectData = [
    {
      img: appointMe,
      title: 'AppointMe!',
      app: 'https://appoint-me.herokuapp.com/',
      repo: 'https://github.com/mrgreen12375/appoint-me',
      info: 'MERN Stack',
    },
    {
      img: drink,
      title: 'Drink',
      app: 'https://mrgreen12375.github.io/drink2.0/',
      repo: 'https://github.com/mrgreen12375/drink2.0',
      info: 'A Drinking App',
    },
    {
      img: infinite,
      title: 'Infinite Disc',
      app: 'https://infinite-disc.herokuapp.com/',
      repo: 'https://github.com/mrgreen12375/infinite-disc',
      info: 'Record Store Invantory',
    },
    {
      img: tech,
      title: 'The Tech Blog',
      app: 'https://green-tech-blog.herokuapp.com/',
      repo: 'https://github.com/mrgreen12375/green-tech-blog',
      info: 'Create Personal Posts on Blog',
    },
    {
      img: random,
      title: 'The Random Blog',
      app: 'https://the-random-blog-4cd09b62d1ef.herokuapp.com/',
      repo: 'https://github.com/mrgreen12375/the-random-blog',
      info: 'Post Random Blogs',
    },
    {
      img: flags,
      title: 'Flags "R" Us',
      app: 'https://mrgreen12375.github.io/flags-r-us/',
      repo: 'https://github.com/mrgreen12375/flags-r-us',
      info: 'Search Flags by Country',
    }, 
    {
      img: weather,
      title: 'Weather Dashboard',
      app: 'https://mrgreen12375.github.io/green-weather/',
      repo: 'https://github.com/mrgreen12375/green-weather',
      info: 'Server Side API',
    }, 
    {
      img: social,
      title: 'Social Network API',
      app: 'https://drive.google.com/file/d/1IMxe3VFSFfbu1wcxsSiY_v4-pvEV5Mck/view',
      repo: 'https://github.com/mrgreen12375/green-social-network-api',
      info: 'MongoDB and Mongoose Demo',
    },
    {
      img: eCommerce,
      title: 'E-Commerce',
      app: 'https://drive.google.com/file/d/1doMh152Xa486DoWxq28nRBZEa2YC7Qja/view',
      repo: 'https://github.com/mrgreen12375/green-e-commerce',
      info: 'MySQL and Sequelize Demo',
    },
    {
      img: employee,
      title: 'Employee Tracker',
      app: 'https://drive.google.com/file/d/1sHQ2o0dyDrQp-DhCHNIpf_eTgqVM3aTs/view',
      repo: 'https://github.com/mrgreen12375/green-employee-tracker',
      info: 'MySQL',
    },
    {
      img: notes,
      title: 'Note Taker',
      app: 'https://green-note.herokuapp.com/',
      repo: 'https://github.com/mrgreen12375/green-notes',
      info: 'Create and Save Notes',
    },
    {
      img: team,
      title: 'Team Profile Generator',
      app: 'https://drive.google.com/file/d/1dlw3_pU60sS7NXjp5brb5RcdLK49NlAD/view',
      repo: 'https://github.com/mrgreen12375/green-team-generator',
      info: 'Object Oriented Programming',
    }, 
    {
      img: readme,
      title: 'Readme Generator',
      app: 'https://drive.google.com/file/d/1w09OKSpE92B0jTqyTqFDlDGEDFtMDOSQ/view',
      repo: 'https://github.com/mrgreen12375/green-readme-generator',
      info: 'Create Readme with Command Line',
    },     
    {
      img: workday,
      title: 'Work Day Scheduler',
      app: 'https://mrgreen12375.github.io/green-day-calendar/',
      repo: 'https://github.com/mrgreen12375/green-day-calendar',
      info: 'JQuery & Bootstrap',
    }, 
    {
      img: quiz,
      title: 'Coding Quiz',
      app: 'https://mrgreen12375.github.io/green-quiz-time/',
      repo: 'https://github.com/mrgreen12375/green-quiz-time',
      info: 'Web API',
    }, 
    {
      img: password,
      title: 'Password Generator',
      app: 'https://mrgreen12375.github.io/green-passwords/',
      repo: 'https://github.com/mrgreen12375/green-passwords',
      info: 'Create Randomized Password',
    }, 
    {
      img: jate,
      title: 'J.A.T.E',
      app: 'https://green-text-editor-pwa.herokuapp.com/',
      repo: 'https://github.com/mrgreen12375/green-text-editor-pwa',
      info: 'Progressive Web Application',
    },
    {
      img: regex,
      title: 'Regex Tutorial',
      app: 'https://gist.github.com/mrgreen12375',
      repo: 'https://github.com/mrgreen12375/green-regex',
      info: 'URL Regex Gist',
    },
    {
      img: soon,
      title: 'Comming Soon',
      app: 'https://mrgreen12375.github.io/green-portfolio/',
      repo: 'https://github.com/mrgreen12375',
      info: 'Working on the next project',
    }, 
  ];