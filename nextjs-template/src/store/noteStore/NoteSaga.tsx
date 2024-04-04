import {
  createNoteApi,
  getNoteDetailApi,
  getNoteListApi,
} from "@/services/api/noteApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { NoteAction } from "./NoteReducer";

export function* noteWatcher() {
  yield all([
    takeLatest(NoteAction.getNoteListRequest.type, getNoteListWorker),
    takeLatest(NoteAction.createNoteRequest.type, createNoteWorker),
    takeLatest(NoteAction.getNoteDetailRequest.type, getNoteDetailWorker),
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
  }
}

function* createNoteWorker(action: any): Generator {
  try {
    const response: any = yield call(createNoteApi, action.payload);
    console.log(response);
    if (response.status === 201) {
      yield put(NoteAction.createNotSuccess(response.data));
    }
  } catch (error: any) {
    yield put(NoteAction.createNoteFail(error.response.data.message));
  }
}

function* getNoteDetailWorker(action: any): Generator {
  try {
    const response: any = yield call(getNoteDetailApi, action.payload._id);
    if (response.status === 200) {
      yield put(NoteAction.getNoteDetailSuccess(response.data));
    }
  } catch (error: any) {
    yield put(NoteAction.getNoteDetailFail(error.response.data.message));
  }
}
