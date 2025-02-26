import "@/styles/globals.css";
import ProdProvider from "./loading_api/context";
import { Provider } from 'react-redux';
import store from './fetchRedux/store';

export default function App({ Component, pageProps }) {
  return(
   <ProdProvider>
    <Provider store = {store}>

    <Component {...pageProps} />;
    </Provider>
  </ProdProvider>
  )
  
  
}
