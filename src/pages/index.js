import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/lab.svg"
import perk2Img from "../images/hub.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="Predict the future and understand it"
        paragraph="Making decisions has never been as accurate as today. Data allows us to know which is our best possible way everytime. Therefore, Data is best compass we ever had to face the two greatest challenges as planet and society: Climate Change and the Era of Accelerations. We are the only one hybrid AI team, probably. Sociologists, political scientists, urbanists, data scientists and engineers work together for a better world. Because it's not just about predicting the future, it's about understanding it too."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="Welcome to MAI concept"
        subtitle="Researching everyday life from the close proximity of the citizens. Detecting main and closer ESG risks based on Microsociological Artificial Intelligence (MAI)."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="IA Lab"
            content="Everything is to be discovered"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Data Hub"
            content="Everything is to be shared"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Just Data Solutions"
        para="Build your own way to better world."
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Data Research">
            <ul>
              <li>
                <MdDone />Data Analysis
              </li>
              <li>
                <MdDone />
                New variables exploring
              </li>
              <li>
                <MdDone />Data Arquitecture
              </li>
            
            </ul>
            
          </Package>
          <Package title="ETL" active={true}>
            <ul>
              <li>
                <MdDone />
                Data Clean Service for AI models
              </li>
              <li>
                <MdDone />
                Data plumbing
              </li>
              <li>
                <MdDone />
                Warehousing
              </li>
          
            </ul>
          </Package>
         
          <Package title="SaaS">
            <ul>
              <li>
                <MdDone />Data Platforms Management
              </li>
              <li>
                <MdDone />
                UX Visualizations
              </li>
            </ul>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Glad to meet you"
        subtitle="Interested in getting to know Microdata.ai? It's just the first step to believing in our impact"
      />

    </>
  )
}

export default HomePage
