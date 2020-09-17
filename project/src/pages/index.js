import React from "react"

import HeroSection from '../components/Reusable/HeroSection'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
 import Heading from "../components/Reusable/Heading"
import Infoblock from "../components/Reusable/Infoblock"
import Coursecart from "../components/Cart/Coursecart"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
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
 <Coursecart courses={data.courses}/>
  <Dualinfoblock heading="Our Team"/>
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
     courses:allContentfulCourses{
      edges{
        node{
        id
        title
        price
        category
        description{
          description
        }
          image{
            fixed(width:200,height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
      
    }
   
   }
  ` 

export default IndexPage
