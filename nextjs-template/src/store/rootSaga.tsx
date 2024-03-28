import { all, fork } from "redux-saga/effects";
import { authWatcher } from "./authStore/AuthSaga";

export default function* reduxSaga() {
  yield all([fork(authWatcher)]);
}
