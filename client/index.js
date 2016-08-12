// This is the entry point of the app.
import App from './components/app.jsx';
import './styles/style.css';
import 'babel-polyfill';
// The entry point of our app must accept hot reloading in dev environment
if (module.hot) {
  module.hot.accept();
}
