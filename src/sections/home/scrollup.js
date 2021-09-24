import React from "react";
import Fade from "react-reveal/Fade";

export default function Scrollup(props) {
  const { elements } = props;

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const cb = setTimeout(() => {
      if (counter < elements.length - 1) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    }, 1000);
    return () => clearTimeout(cb);
  }, [counter]);

  return (
    <>
      {/* <Fade bottom duration={1000} delay={10} distance="30px"> */}
      {elements[counter]}
      {/* </Fade> */}
    </>
  );
}
