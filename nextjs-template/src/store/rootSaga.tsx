import { all, fork } from "redux-saga/effects";
import { postWatcher } from "./postStore/PostSaga";
import { authWatcher } from "./authStore/AuthSaga";

export default function* reduxSaga() {
  yield all([
    fork(postWatcher),
    fork(authWatcher)
  ]);
}
