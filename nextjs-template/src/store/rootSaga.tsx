import { all, fork } from "redux-saga/effects";
import { authWatcher } from "./authStore/AuthSaga";
import { noteWatcher } from "./noteStore/NoteSaga";
import { linkcardWatcher } from "./linkcardStore/LinkcardSaga";

export default function* reduxSaga() {
  yield all([fork(authWatcher), fork(noteWatcher), fork(linkcardWatcher)]);
}
