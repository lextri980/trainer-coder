import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthAction } from "./AuthReducer";
import { loginApi, registerApi } from "@/services/api/authApi";

export function* authWatcher() {
  yield all([
    takeLatest(AuthAction.loginRequest.type, loginWorker),
    takeLatest(AuthAction.registerRequest.type, registerWorker),
  ]);
}

function* loginWorker(action: any): Generator {
  try {
    const response: any = yield call(loginApi, action.payload);
    if (response.status === 200) {
      yield put(AuthAction.loginSuccess(response.data.message));
      localStorage.setItem("token", response.data.accessToken);
    }
  } catch (error: any) {
    yield put(AuthAction.loginFail(error.response.data.message));
  }
}

function* registerWorker(action: any): Generator {
  try {
    const response: any = yield call(registerApi, action.payload);
    if (response.status === 201) {
      yield put(AuthAction.registerSuccess(response.data.message));
    }
  } catch (error: any) {
    yield put(AuthAction.registerFail(error.response.data.message));
  }
}
