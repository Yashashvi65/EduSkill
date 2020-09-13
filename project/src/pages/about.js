import React from "react"

import HeroSection from '../components/Reusable/HeroSection'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
 import Heading from "../components/Reusable/Heading"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Team from "../components/About/Team"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    
  <HeroSection
  img={data.img.childImageSharp.fluid}
  title="About the Site"
  subtitle=""
  heroclass="about-background"
  
  />  
 <Dualinfoblock heading="A Message from CEO"/>
 <Infoblock heading="About our Vision"/> 
  <Team/>
  </Layout>
    
 
 )
 export const query=graphql`
 {
  
  img: file(relativePath:{ eq: "about.png" }) {
       childImageSharp {
         fluid(maxWidth:400 ,maxHeight:250) {
          ...GatsbyImageSharpFluid_tracedSVG
         }
       }
     }
   }
  ` 

export default AboutPage
