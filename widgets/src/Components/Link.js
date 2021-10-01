import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);
    // window.history .pushState({}, '', '/urltag') this changes the Url, w/out updating the page.
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    //this is an event listener that tells the Route componenet that the url has changed so render diff components
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;
