import { all, fork } from "redux-saga/effects";
import { postWatcher } from "./postStore/PostSaga";

export default function* reduxSaga() {
  yield all([
    fork(postWatcher),
  ]);
}
