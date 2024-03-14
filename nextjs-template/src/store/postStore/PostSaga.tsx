import { all, call, put, takeLatest } from "redux-saga/effects";
import { getPostApi } from "@/services/api/postApi";
import { PostActions } from "./PostReducer";

export function* postWatcher() {
  yield all([
    takeLatest(PostActions.getPostRequest.type, getPostWorker),
  ]);
}

function* getPostWorker(): Generator {
  try {
    const response: any = yield call(getPostApi)
    if(response.status === 200) {
      yield put(PostActions.getPostSuccess(response.data))
    }
  } catch (error) {
    yield put(PostActions.getPostFail())
  }
};