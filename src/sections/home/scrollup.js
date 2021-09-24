import React from "react";

export default function Scrollup(props) {
  const { elements } = props;

  const [counter, setCounter] = React.useState(0);

  //   setTimeout(() => {
  //     if (counter < elements.length - 1) {
  //       setCounter(counter + 1)
  //     } else {
  //       setCounter(0)
  //     }
  //   }, 1000)

  // "Hi",
  // "നമസ്കാരം",
  // "Bonjour",
  // "Hola",
  // "こんにちは",
  // "ٱلسَّلَامُ عَلَيْكُمْ",
  // "नमस्ते",

  React.useEffect(() => {
    setTimeout(() => {
      if (counter < elements.length - 1) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    }, 1000);
  }, [counter]);

  return <>{elements[counter]}</>;
}
