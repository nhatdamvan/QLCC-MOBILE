import React, {useEffect} from 'react';
import {useState} from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/store';
import RootNavigator from './src/routes/MainNavigator';
import {SplashScreen} from './src/screens';
import AppStack from './src/routes';
import {StatusBar} from 'react-native';

const queryClient = new QueryClient();
const App = () => {
  console.disableYellowBox = true;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {/* <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" /> */}
          {isLoading ? <SplashScreen /> : <AppStack />}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
