import "../styles/globals.css";

/**
 * This is a functional component in JavaScript that returns a component with its props.
 * @returns The function `MyApp` is returning the `Component` with the `pageProps` passed as props.
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
