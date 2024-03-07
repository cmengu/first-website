import Footer from "@/blocks/global/Footer";
import Header from "@/blocks/global/Header";
import "@/styles/globals.css";
// import { CloseModalOnRouteChange } from '../components/CloseModalOnRouteChange';

import axios from "axios";

//this code is to ensure that if we do a request to the backend we dont always have to include this url but we ca just set it in our environemtn variables once and it will use it across the entire project
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials =true;
//it is not ideal to use getInitialProps in here for globals as it will blow up the size of every single page as the data is going into every page that gets rendered
export default function App({ Component, pageProps, }) {
  return (
    <>
      {/* <CloseModalOnRouteChange /> */}
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
