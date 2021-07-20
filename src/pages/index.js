import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
import Features from "../components/features"
import Techspecs from "../components/techspecs"
import Contact from "../components/contact"

const IndexPage = () => (
  <div>
    <Header />
    
    <Layout>
      <Seo title="Viktory One: A Custom High-Perfomance E-Mountain Bike | Viktory Bikes" description="The Viktory One is a custom-built lightweight high-performance E-Mountain Bike. Engineered for fun and built with love."  />
      <Hero />
      <Features />
      <Techspecs />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
