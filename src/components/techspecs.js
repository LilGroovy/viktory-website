import * as React from "react"
import * as techStyles from "./techspecs.module.css"

const Techspecs = () => (
  <section>
    <h2>Technical Specs Component</h2>
    <div className={techStyles.grid}>
    <p className={techStyles.category}>Bremsen</p>
    <p className={techStyles.spec}>10 Zoll Mikuni Schikuni Scheibenbremsen mit drei Bremsbacken</p>
    <p className={techStyles.category}>Bremsen</p>
    <p className={techStyles.spec}>10 Zoll Scheibenbremsen</p>
    <p className={techStyles.category}>Bremsen</p>
    <p className={techStyles.spec}>10 Zoll Scheibenbremsen</p>
    <p className={techStyles.category}>Bremsen</p>
    <p className={techStyles.spec}>10 Zoll Scheibenbremsen</p>
    <p className={techStyles.category}>Bremsen</p>
    <p className={techStyles.spec}>10 Zoll Scheibenbremsen</p>
    <p className={techStyles.category}>Bremsen</p>
    <p className={techStyles.spec}>10 Zoll Scheibenbremsen</p>

    </div>
  </section>
)

export default Techspecs
