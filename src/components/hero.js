import * as React from "react"
import * as heroStyles from "./hero.module.css"

const Hero = () => (
  <div className={heroStyles.heroSection}>
  <div className={heroStyles.bikePicture}></div>
    <h3 className={heroStyles.bikeSlogan}>Viktory One is a high-performance Electric Mountain Bike built with love.</h3>
  </div>
)

export default Hero
