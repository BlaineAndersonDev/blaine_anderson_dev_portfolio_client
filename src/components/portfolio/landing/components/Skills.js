import React, { Component } from 'react';
import './Skills.css';
// import Atom from './SkillsIcons/Atom.js';
// import Css from './SkillsIcons/Css.js';
// import Express from './SkillsIcons/Express.js';
// import Git from './SkillsIcons/Git.js';
// import Github from './SkillsIcons/Github.js';
// import Heroku from './SkillsIcons/Heroku.js';
// import Html from './SkillsIcons/Html.js';
// import Javascript from './SkillsIcons/Javascript.js';
// import Jquery from './SkillsIcons/Jquery.js';
// import Mocha from './SkillsIcons/Mocha.js';
// import MySQL from './SkillsIcons/Mysql.js';
// import Nginx from './SkillsIcons/Nginx.js';
// import Node from './SkillsIcons/Node.js';
// import PostgreSQL from './SkillsIcons/Postgresql.js';
// import Rails from './SkillsIcons/Rails.js';
// import ReactIcon from './SkillsIcons/React.js';
// import Ruby from './SkillsIcons/Ruby.js';
// import Slack from './SkillsIcons/Slack.js';
// import Trello from './SkillsIcons/Trello.js';
import ApiIcon from './SkillsIcons/Api.js';
import CodeIcon from './SkillsIcons/Code.js';
import StudentIcon from './SkillsIcons/Student.js';

class Skills extends Component {
  render() {
    return (
      <div id="skillsWrapper">
        <div id="skillsContainer">

          <div className="skillsBox skillsBoxFirst">
            <div className="skillsBoxSection">
              <div className="skillIcon"><CodeIcon /></div>
              <div className="skillTitle">Backend Developer</div>
              <div className="skillDesc">I love to code things from the ground up, and enjoy bringing great ideas to life.</div>
            </div>
            <div className="skillsBoxSection skillsBoxSectionCenter">
              <div className="skillSubTitle">Languages I speak:</div>
              <div className="skillDesc">HTML, CSS, Javascript, Ruby, React, Rails, SQL</div>
            </div>
            <div className="skillsBoxSection">
              <div className="skillSubTitle">Technologies used:</div>
              <div className="skillList">
                <li className="skillListItem">NodeJS</li>
                <li className="skillListItem">ExpressJS</li>
                <li className="skillListItem">Mocha + Chai</li>
                <li className="skillListItem">Git Version Control</li>
                <li className="skillListItem">Github</li>
                <li className="skillListItem">Slack, Trello, ect.</li>
                <li className="skillListItem">PostgreSQL, MySQL</li>
              </div>
            </div>
          </div>

          <div className="skillsBox skillsBoxSecond">
            <div className="skillsBoxSection">
            <div className="skillIcon"><ApiIcon /></div>
              <div className="skillTitle">API Architect</div>
              <div className="skillDesc">The code I write is professional, detailed and most of all, scaleable for the future.</div>
            </div>
            <div className="skillsBoxSection skillsBoxSectionCenter">
              <div className="skillSubTitle">Methodologies I enjoy:</div>
              <div className="skillDesc">RESTful Routing, CRUD, Agile Development, Daily Scrum Sessions.</div>
            </div>
            <div className="skillsBoxSection">
              <div className="skillSubTitle">DevOps Skillset:</div>
              <div className="skillList">
                <li className="skillListItem">Cloud Hosting (Heroku, Digital Ocean)</li>
                <li className="skillListItem">Authentication (Auth0)</li>
                <li className="skillListItem">Authorization (JWT)</li>
                <li className="skillListItem">Database Schema Design</li>
                <li className="skillListItem">Database Implementation</li>
                <li className="skillListItem">Critial Problem Solving</li>
                <li className="skillListItem">Scrum Master</li>
              </div>
            </div>
          </div>

          <div className="skillsBox skillsBoxThird">
            <div className="skillsBoxSection">
              <div className="skillIcon"><StudentIcon /></div>
              <div className="skillTitle">Collaborator</div>
              <div className="skillDesc">Working with fellow developers allows me to share my knowledge, and makes my skills sharper.</div>
            </div>
            <div className="skillsBoxSection skillsBoxSectionCenter">
              <div className="skillSubTitle">Experiences I draw from:</div>
              <div className="skillDesc">Multiple Startups, Lead Developer Positions, Freelancing, StackOverflow.</div>
            </div>
            <div className="skillsBoxSection">
              <div className="skillSubTitle">What I strive for:</div>
              <div className="skillList">
                <li className="skillListItem">Human Readability</li>
                <li className="skillListItem">Conventional Coding</li>
                <li className="skillListItem">Scaleability</li>
                <li className="skillListItem">Teamwork & Coordination</li>
                <li className="skillListItem">High Quality Work</li>
                <li className="skillListItem">Excellent Work Ethics</li>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
};

export default Skills;
