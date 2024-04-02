import { getNoteListApi } from "@/services/api/noteApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { NoteAction } from "./NoteReducer";

export function* noteWatcher() {
  yield all([
    takeLatest(NoteAction.getNoteListRequest.type, getNoteListWorker),
  ]);
}

function* getNoteListWorker(): Generator {
  try {
    const response: any = yield call(getNoteListApi);
    if (response.status === 200) {
      yield put(NoteAction.getNoteListSuccess(response.data));
    }
  } catch (error: any) {
    yield put(NoteAction.getNoteListFail(error.response.data.message));
    console.log(error);
  }
}
