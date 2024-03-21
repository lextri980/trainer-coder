import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthAction } from "./AuthReducer";
import { loginApi } from "@/services/api/authApi";

export function* authWatcher() {
  yield all([
    takeLatest(AuthAction.loginRequest.type, loginWorker),
  ]);
}

function* loginWorker(action: any): Generator {
  try {
    const response: any = yield call(loginApi, action.payload);
    yield put(AuthAction.loginSuccess(response.data.message))
    console.log(response)
  } catch (error: any) {
    yield put(AuthAction.loginFail(error.response.data.message))
  }
}
