import React, { useState, useEffect } from 'react';

import '../styles/mobile/aboutMe.css';
import '../styles/desktop/aboutMe.css';

import circles from '../img/Component 6 – 1@2x.png';
import stairs from '../img/Component 7 – 1@2x.png';

import { useHasScrolled } from '../hooks/useHasScrolled';

function AboutMe() {
	const [ classContainer, setClassContainer ] = useState('');

	const scrollAboutMe = useHasScrolled(440);

	useEffect(
		() => {
			const { innerWidth } = window;
			if (innerWidth >= 1440) {
				if (scrollAboutMe) {
					setClassContainer('active');
				} else if (!scrollAboutMe) {
					setClassContainer('');
				}
			}
		},
		[ document.documentElement.scrollTop ]
	);
	return (
		<div className="aboutMe">
			<div className={`container ${classContainer}`}>
				<span>History</span>
				<p>
					I've been learning frontend development since October 2017 and have applied my knowledge by working
					on various projects. My goal was to add more dynamic elements to my pages, so I decided to learn my
					first language, which was JavaScript and used it to create a basic game. Afterwards, I explored the
					powerful library React, and after six months of studying it, I created my first React project, which
					was an online store, also learning Git and Adobe XD in the process. Then, I moved on to Typescript
					and used it to build this website. To enhance the site further, I added a 3D component using React
					Three Fiber, requiring me to learn Blender as well. In early 2023, as team member DeveloArt, I
					worked on developing mobile applications for restaurants using React Native.
				</p>
			</div>
			<div className={`container skill ${classContainer}`}>
				<span>Skill</span>
				<ul>
					<li>Very good knowledge of HTML5, CSS3 and JavaScript (ES6)</li>
					<li>Good knowledge of React 17</li>
					<li>Ability to build an application with React 17</li>
					<li>Ability to use TypeScript</li>
					<li>Ability to use the Git version control system</li>
					<li>Ability to use Sass</li>
					<li>Basic knowledge of PHP and MySQL</li>
					<li>Basic design skills in Adobe XD</li>
					<li>Basic design skills in Blender</li>
					<li>Ability to use React Three Fiber</li>
					<li>Ability to use the tool: Webpack, Babel</li>
					<li>Knowledge of React Native</li>
					<li>Ability to using the styled components library</li>
					<li>Familiarity with Jira Software</li>
					<li>
						I have experience conducting code reviews, including evaluating the quality and readability of
						code, identifying potential issues, and making suggestions for code improvement. This allows me
						to ensure high-quality and reliable code and assist my fellow programmers in developing their
						skills.
					</li>
					<li>
						I have the ability and experience to work in a team of programmers, collaborating with them on
						common projects and delivering solutions that meet the client's requirements and expectations.
					</li>
				</ul>
			</div>
			<img className="circle1" src={circles} alt="background element" />
			<img className="circle2" src={circles} alt="background element" />
			<img className="stairs1 stairs" src={stairs} alt="background element" />
			<img className="stairs2 stairs" src={stairs} alt="background element" />
		</div>
	);
}

export default AboutMe;
