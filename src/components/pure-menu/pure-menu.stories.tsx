import { storiesOf } from "@storybook/html";

storiesOf("Pure Menu", module)
  .add("Default", () => {
    function init() {
      const list = [
        {
          name: "News",
          url: "#",
          selected: true
        },
        {
          name: "Contact",
          url: "#",
          dropdown: [
            {
              name: "Email",
              url: "#"
            },
            {
              name: "Twitter",
              url: "#"
            }
          ]
        }
      ];
      var cmp = document.querySelector("pure-menu");
      cmp.list = list;
    }
    setTimeout(init, 1500);
    return `
    <pure-menu 
      horizontal 
      heading="Title" 
      headingUrl="#">
    </pure-menu>
  `;
  })
  .add(
    "Nested children",
    () => `
    <pure-menu>
        <a href="#" class="pure-menu-heading">Title</a>
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a></li>
            <li class="pure-menu-item pure-menu-has-children">
                <a href="#" class="pure-menu-link">Blog</a>
                <ul class="pure-menu-children">
                    <li class="pure-menu-item"><a class="pure-menu-link" href="/handlebars">Handlebars Helpers</a></li>
                    <li class="pure-menu-item"><a class="pure-menu-link" href="/dust">Dust Helpers</a></li>
                    <li class="pure-menu-item"><a class="pure-menu-link" href="/react">React Mixins</a></li>
                    <li class="pure-menu-item"><a class="pure-menu-link" href="/javascript">Intl Message Format</a></li>
                </ul>
            </li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">GitHub</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Twitter</a></li>
        </ul>
      </pure-menu>
`
  )
  .add(
    "Horizontal with Nested Dropdown and Separater",
    () => `
      <pure-menu horizontal>
        <a href="#" class="pure-menu-link pure-menu-heading">Title</a>
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Blog</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">GitHub</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Twitter</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Wang</a></li>
            <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                <a href="#" class="pure-menu-link">Yahoo</a>
                <ul class="pure-menu-children">
                    <li class="pure-menu-item"><a class="pure-menu-link" href="/handlebars">Foo</a></li>
                    <li class="pure-menu-separator"></li>
                    <li class="pure-menu-item"><a class="pure-menu-link" href="/dust">Bar</a></li>
                    <li class="pure-menu-item"><a class="pure-menu-link" href="/react">Baz</a></li>
                </ul>
            </li>
        </ul>
      </pure-menu>
  `
  )
  .add(
    "Horizontal Scrollable",
    () => `
      <pure-menu horizontal scrollable>
        <a href="#" class="pure-menu-link pure-menu-heading">Title</a>
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Blog</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">GitHub</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Twitter</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Google</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Apple</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Borland</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Wang</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Yahoo</a></li>
        </ul>
      </pure-menu>
  `
  );
