// pages/_app.js
// _app.js is a special file in Next.js that allows you to control page initialization. 
// You can use this file to add global CSS, import JavaScript modules, and more.
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/checkout.css';

// The MyApp component is the root component for all pages application.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
