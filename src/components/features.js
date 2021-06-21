import * as React from "react"
import * as featuresStyles from "./features.module.css"
import Carousel from "react-bootstrap/Carousel"

const Features = () => (
  <section>
    <h2>Features</h2>
    <div>
        <Carousel fade>
            <Carousel.Item>
                <div className={featuresStyles.featureSlide}>
                    <div className={featuresStyles.featurePicture}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>Best Bremsen</h3>
                        <ul>
                            <li>spec 1</li>
                            <li>spec 2</li>
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.one}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>Schnellster Antrieb</h3>
                        <ul>
                            <li>spec 1</li>
                            <li>spec 2</li>
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.two}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>Längste Reichweite</h3>
                        <ul>
                            <li>spec 1</li>
                            <li>spec 2</li>
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  </section>
)

export default Features
