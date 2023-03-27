import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import shapeTwo from '../../assets/shape-2.png'
const Items = ({projectItems}) => {
  return (
    <>
    {projectItems.map((projectItems)=>{
        const {id, img, category, title, link, description,}=projectItems
        return(
            <div className="portfolio-items card card-two">
                <div className="portfolio-img-wrapper">
                    <a href={link}>
                    <img src={img} alt="" className="portfolio-img" />
                    </a>
                </div>

                <span className="portfolio-category text-cs">{category}</span>
                <h3 className="portfolio-title">{title}</h3>
                <p className="portfolio-description">{description}</p>

                <a href="" className="link"></a>
                {/* <img src={shapeTwo} alt="" className="shape c-shape" /> */}
            </div>
        )
    })}
    </>
  )
}

export default Items