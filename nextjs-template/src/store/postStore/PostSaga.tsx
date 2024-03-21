import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { getCommentApi, getPostApi } from "@/services/api/postApi";
import { PostActions } from "./PostReducer";

export function* postWatcher() {
  yield all([
    takeLatest(PostActions.getPostRequest.type, getPostWorker),
    takeLatest(PostActions.getCommentRequest.type, getCommentWorker),
  ]);
}

function* getPostWorker(): Generator {
  try {
    const response: any = yield call(getPostApi);
    delay(5000)
    if (response.status === 200) {
      yield put(PostActions.getPostSuccess(response.data));
    }
  } catch (error) {
    yield put(PostActions.getPostFail());
  }
}

function* getCommentWorker(): Generator {
  try {
    const response: any = yield call(getCommentApi);
    if (response.status === 200) {
      yield put(PostActions.getCommentSuccess(response.data));
    }
  } catch (error: any) {
    yield put(PostActions.getCommentFail(error.message));
  }
}
