import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <a key={links} href={{links: links[0]}}>{links[0]}</a>
    // <a key={links} href={{links: links[1]}}>{links[1]}</a>
    // <a key={links} href={{links: links[2]}}>{links[2]}</a>
  }</nav>;
}

export default NavBar;
