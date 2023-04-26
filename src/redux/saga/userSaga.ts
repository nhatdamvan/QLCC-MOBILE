import {Alert} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import SInfo from 'react-native-sensitive-info';
import { userActions } from '../reducers/userReducer';
import jwtAxios from '../../api/jwtAxios';

export default [
  takeLatest(userActions.login, loginSaga),
  takeLatest(userActions.logout, logoutSaga),
  takeLatest(userActions.getUser, getUserSaga),
];

function* loginSaga(action: any) {
  try {
    // login data
    console.log('action.payload', action.payload);
    const {data} = yield jwtAxios.post('login', {
      Username: action.payload.username,
      Password: action.payload.password,
    });
    console.log('data login', data);
    if (data?.userInfo) {
      const bearerToken = data?.accessToken;
      console.log('bearerToken', bearerToken);
      jwtAxios.defaults.headers.common.token = bearerToken;
      yield SInfo.setItem('token', bearerToken, {});
      yield SInfo.setItem('refreshToken', data?.refreshToken, {});
      yield put(
        userActions.loginSuccess({
          user: data?.userInfo,
        }),
      );
    } else {
      Alert.alert(data?.message);
    }
  } catch (error) {
    console.log('error', error);
    Alert.alert('login failed');
  }
}

function* getUserSaga() {
  try {
  } catch (error) {}
}

function* logoutSaga() {
  try {
    SInfo.deleteItem('token', {});
    yield put(userActions.logoutSuccess({}));
  } catch (error) {
    Alert.alert('Logout failed');
  }
}
