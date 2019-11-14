import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"

export default function documentation({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <script
          type="module"
          src="/dist/pure-web-components/pure-web-components.esm.js"
        ></script>
        <script nomodule="" src="/dist/pure-web-components.js"></script>
      </Helmet>
      <Header />
      <pure-base>{children}</pure-base>
    </React.Fragment>
  )
}
