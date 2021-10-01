import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocatioChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocatioChange);
    //this is listening for the event from Link comp, it then calls "onLocationChange".
    //callback is defined as a seperate fxn ^^ so that we can remove it easier later on.
    return () => {
      window.removeEventListener("popstate", onLocatioChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
  //return currentPath/state === path ? children : null;
};
//add state of current pathname in address bar. sole purpose of the route component to rerender itself.

export default Route;
