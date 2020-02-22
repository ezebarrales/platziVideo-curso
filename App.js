import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/store'
import Loader from './src/sections/components/Loader'
import AppNavigator from './src/app-navigator';

const App = () => {

  return (
    <Provider
      store={store}
    >
      <PersistGate loading={<Loader />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App