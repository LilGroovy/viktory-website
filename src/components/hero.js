import * as React from "react"
import * as heroStyles from "./hero.module.css"

const Hero = () => (
  <div className={heroStyles.heroSection}>
  <div className={heroStyles.bikePicture}></div>
    <h3 className={heroStyles.bikeSlogan}>Victory One is a custom built ultra performance E Mountain Bike.</h3>
  </div>
)

export default Hero
