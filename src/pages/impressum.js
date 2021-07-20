import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"

const ImpressumPage = () => (
  <div>
    <Layout>
      <Seo title="Impressum | Viktory Bikes" />
      <Nav />
      <div style={{
        padding: `4rem 0rem`,
      }}>
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Viktor Altergott
        
          
          <br />
          Lange &Auml;cker 1<br />
          71543 W&uuml;stenrot
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 152 09118684
          <br />
          E-Mail: altergott.viktor@gmail.com
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </Layout>
  </div>
)

export default ImpressumPage
