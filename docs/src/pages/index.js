import React from "react"

import Layout from "../layouts/documentation"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <div style={{ marginTop: "3em" }}>
      <SEO title="Home" />

      <p style={{ textAlign: "center" }}>
        <img
          src="/img/logo_pure@2x.png"
          alt="Pure CSS logo"
          style={{ width: "50%" }}
        />
      </p>

      <h2 style={{ textAlign: "center" }}>
        A set of small, responsive CSS modules that you can use in every web
        project.
      </h2>

      <pre class="code code-wrap" data-language="html" data-trimmed="true">
        <code class="rainbow">
          <span class="support tag">
            <span class="support tag">&lt;</span>
            <span class="support tag-name">link</span>
          </span>{" "}
          <span class="support attribute">rel</span>
          <span class="support operator">=</span>
          <span class="string quote">"</span>
          <span class="string value">stylesheet</span>
          <span class="string quote">"</span>{" "}
          <span class="support attribute">href</span>
          <span class="support operator">=</span>
          <span class="string quote">"</span>
          <span class="string value">
            https://unpkg.com/purecss@1.0.1/build/pure-min.css
          </span>
          <span class="string quote">"</span>{" "}
          <span class="support attribute">integrity</span>
          <span class="support operator">=</span>
          <span class="string quote">"</span>
          <span class="string value">
            sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47
          </span>
          <span class="string quote">"</span>{" "}
          <span class="support attribute">crossorigin</span>
          <span class="support operator">=</span>
          <span class="string quote">"</span>
          <span class="string value">anonymous</span>
          <span class="string quote">"</span>
          <span class="support tag close">&gt;</span>
        </code>
        <div class="preloader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </pre>

      <p style={{ textAlign: "center", fontSize: "125%" }}>
        <pure-button color="primary" class="button-cta" href="/start/">
          Get Started
        </pure-button>
        <pure-button color="secondary" href="https://github.com/pure-css/pure/">
          View on GitHub
        </pure-button>
      </p>
    </div>
  </Layout>
)

export default IndexPage
