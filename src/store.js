
/**
 * @author Suryasnata Nayak
 * This is a redux store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers';

/**
 * redux-persist related
 */
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// configuration for redux persist
const persistConfig = { key: 'root', storage: storage };
const rootPersistReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

/**
 * Creating store and enabling redux devtools in the browser
 * @param rootPersistReducer
 */
const store = createStore(
    rootPersistReducer,
    compose(
        applyMiddleware(...middleware),
        //Required for running redux devtools in browser
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
//so change
const persistor = persistStore(store);

export { store, persistor };