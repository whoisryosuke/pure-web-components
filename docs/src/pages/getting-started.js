import React from "react"
import DocsLayout from "../layouts/documentation"
import PageHeader from "../components/pageHeader"

export default function GettingStarted({ location }) {
  return (
    <DocsLayout location={location}>
      <div style={{ maxWidth: 960, padding: "2em", margin: "auto" }}>
        <PageHeader
          header="Get Started"
          subheader="Start your next web project with Pure."
        />
        <div class="content">
          <h2>Add Pure to Your Page</h2>
          <p>
            You can add Pure to your page via the <b>free unpkg CDN</b>. Just
            add the following <code>&lt;link&gt;</code> element into your page's{" "}
            <code>&lt;head&gt;</code>, before your project's stylesheets.
          </p>

          <aside>
            <p>
              Alternatively, you can{" "}
              <a href="https://github.com/pure-css/pure-release/archive/v1.0.1.zip">
                download Pure
              </a>
              , or <a href="/customize/">check out other CDNs</a> that host
              Pure.
            </p>
          </aside>

          <h2 id="add-the-viewport-meta-element" class="content-subhead">
            Add the Viewport Meta Element
            <a
              href="#add-the-viewport-meta-element"
              class="content-link"
              title="Heading anchor"
            ></a>
          </h2>

          <p>
            The viewport <code>meta</code> element lets you control the the
            width and scale of the viewport on mobile browsers. Since you're
            building a responsive website, you want the width to be equal to the
            device's native width. Add this into your page's{" "}
            <code>&lt;head&gt;</code>.
          </p>
        </div>
      </div>
    </DocsLayout>
  )
}
