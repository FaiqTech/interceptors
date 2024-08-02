import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Provider} from 'react-redux'
import {store} from "./store/index.js";

ReactDOM.createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
