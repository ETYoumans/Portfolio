import React from 'react'
import Info from './info.json'
import './css/skills.css'
import './css/panel.css'

const { languages = [], technologies = [], concepts = [] } = Info.skills || {}

const sections = [
	{ title: 'Languages', items: languages },
	{ title: 'Technologies', items: technologies },
	{ title: 'Concepts', items: concepts },
]

function Skills() {
	return (
		<section className="skills" id="skills">
			<div className="skills-grid">
				{sections.map(({ title, items }) => (
					<div key={title} className="panel skills-panel">
						<h3 className="skills-title">{title}</h3>
						<ul className="skills-list">
							{items && items.length > 0 ? (
								items.map((skill, idx) => (
									<li key={idx} className="skills-item">{skill}</li>
								))
							) : (
								<li className="skills-item empty">Coming soon</li>
							)}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Skills
