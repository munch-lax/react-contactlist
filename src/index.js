import react from 'react'
import reactdom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import reducers from './reducers'
import reduxthunk from 'redux-thunk'
import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css'


const composeEnchancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnchancers(applyMiddleware(reduxthunk))
    )

reactdom.render(<Provider store={store}>
<App/>
</Provider>,document.querySelector("#root"))
