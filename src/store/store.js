import { configureStore } from '@reduxjs/toolkit';

import countries from './reducer';

const store = configureStore({
  reducer: {countries},
})

export default store;
