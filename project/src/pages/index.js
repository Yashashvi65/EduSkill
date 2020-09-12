import React from "react"

import HeroSection from '../components/Reusable/HeroSection'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
 import Heading from "../components/Reusable/Heading"
import Infoblock from "../components/Reusable/infoblock"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    
  <HeroSection
  img={data.imgg.childImageSharp.fluid}
  title="I write Code"
  subtitle="LearnCodeOnline.in"
  heroclass="hero-background"
  
  />  
 <Infoblock heading="About Us"/> 
  
  </Layout>
    
 
 )
 export const query=graphql`
 {
  
  imgg: file(relativePath:{ eq: "heromain.png" }) {
       childImageSharp {
         fluid(maxWidth:400 ,maxHeight:250) {
          ...GatsbyImageSharpFluid_tracedSVG
         }
       }
     }
   }
  ` 

export default IndexPage
