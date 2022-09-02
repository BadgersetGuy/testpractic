import { configureStore } from '@reduxjs/toolkit';
const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
