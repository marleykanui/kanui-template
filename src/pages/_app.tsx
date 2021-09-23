// Third Party Styles
import "../styles/tailwind.css";

// Global Styles
import "@/styles/global.scss";

// Next Types
import type { NextPage } from "next";
import type { AppProps } from "next/app";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;
