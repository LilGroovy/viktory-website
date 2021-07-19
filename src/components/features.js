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
                        <h3 className={featuresStyles.featureHeading}>Suspension Frame for Best Driving Experience</h3>
                        <ul>
                            <li>Full Suspension MTB Alu Four-link soft tail frame</li>
                            <li>Suitable for downhil and offroad riding. Gives confidence on different surfaces.</li>
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.one}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>160 mm Front Fork</h3>
                        <ul>
                            <li>Absorbs shocks from large jumps easily.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.two}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>190 mm Rear Shock Absorber</h3>
                        <ul>
                            <li>Downhill rear shock absorber with lockout Air suspension 190mm.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.three}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>Carbon Fibre Parts</h3>
                        <ul>
                            <li>Lightweight carbon fibre parts make your bike efficient and fancy.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.four}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>Clean Cable Routing</h3>
                        <ul>
                            <li>Internally routed cables provide a clean look on the Bike.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.five}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>High Performance Transmission</h3>
                        <ul>
                            <li>SRAM X01 1x11 Speed gives you clean and quick shifting even in rough conditions.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.six}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>220mm Magura MT7 Brakes</h3>
                        <ul>
                            <li>These brakes enable ultra-quick stopping and perform during long braking periods (downhill).</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.seven}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>80Nm Mid Drive Motor for Immediate Support</h3>
                        <ul>
                            <li>Mid Drive Motor with a torque sensor gives you immediate support. With the 80Nm of torque the motor provides, you will be able to ride steep hills.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.eight}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>120km Range</h3>
                        <ul>
                            <li>The Long Range Battery of 48V and 17.5 Ah will give your bike a range of 120km under normal driving conditions.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.nine}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>High Performance Offroad Tires</h3>
                        <ul>
                            <li>Maxxi Rekon 2.6 inch tires will give you stability in curves without compromising speed and maneuvaribility.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.ten}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>Custom Built Lightweight Wheels</h3>
                        <ul>
                            <li>Custom built wheels (front 29" and  rear 27.5 inch) reduce the weight of the bike while improving the structural strength.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={featuresStyles.featureSlide}>
                    <div className={`${featuresStyles.featurePicture} ${featuresStyles.eleven}`}></div>
                    <div className={featuresStyles.featureDescription}>
                        <h3 className={featuresStyles.featureHeading}>Integrated Lighting</h3>
                        <ul>
                            <li>Integrated front and rear lights are supported from the main Battery.</li>
                            
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  </section>
)

export default Features
