import React, { useState } from 'react'
import List from './List'
import Items from './Items'
import { projects } from '../../Data'
import './portfolio.css'

// const allNavList = projects.map((project)=>project.category)

const Portfolio = () => {
  const [projectItems,setmenuItems] = useState(projects)
  return (
    <section className="portfolio section" id="work">
      <h2 className="section-title text-cs">Portfolio</h2>
      <p className="section-subtitle">
        My <span>Cases</span>
      </p>

      <List/>

      <div className="portfolio-container container grid">
        <Items projectItems={projectItems}/>
      </div>
    </section>
  )
}

export default Portfolio