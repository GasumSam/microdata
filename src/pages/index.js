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

import CookieConsent from "react-cookie-consent"

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
        subtitle="Researching everyday life from the close proximity of the citizens. Detecting main and closer future risks based on Microsociological Artificial Intelligence (MAI)."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="IA Lab"
            content="Super-fast response times ensure your business is not affected"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Data Hub"
            content="A choice of packages to suit every business type and size"
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
                <MdDone />Arquitecture
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
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
      <CookieConsent
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#61D5E6" }}
          buttonStyle={{ background: "#ffc644", color: "#4e503b", fontSize: "13px" }}
          expires={150}
          onAccept={() => {
            alert("Accept wass triggered by clicking the Accept button");
          }}
          enableDeclineButton
          onDecline={() => {
            alert("nay!"); 
          }}
          debug={true}>
          <span style={{ fontSize: "10px", color: "#4e503b" }}>This website uses cookies to enhance the user experience.{" "}</span>
          <span style={{ fontSize: "10px", color: "#ff0000" }}>This bit of text is smaller </span>
          
      </CookieConsent>
    </>
  )
}

export default HomePage
