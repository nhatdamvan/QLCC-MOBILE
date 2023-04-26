import React from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default function AppStack() {
  const checkLogin = useSelector((state) => state.userReducer.isLoggedIn);
  return <>{checkLogin ? <MainNavigator /> : <AuthNavigator />}</>;
}
