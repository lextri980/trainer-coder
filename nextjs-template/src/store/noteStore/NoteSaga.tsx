import { apiService } from "@/services";
import {
  createNoteApi,
  getNoteDetailApi,
  getNoteListApi,
  updateNoteApi,
} from "@/services/api/noteApi";
import {
  CallEffect,
  Effect,
  PutEffect,
  SagaReturnType,
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { NoteAction } from "./NoteReducer";
import { AxiosResponse } from "axios";

export function* noteWatcher() {
  yield all([
    takeLatest(NoteAction.getNoteListRequest.type, getNoteListWorker),
    takeLatest(NoteAction.createNoteRequest.type, createNoteWorker),
    takeLatest(NoteAction.getNoteDetailRequest.type, getNoteDetailWorker),
    takeLatest(NoteAction.updateNoteRequest.type, updateNoteWorker),
  ]);
}

type ResponseType<T extends (...arg: any) => Promise<AxiosResponse>> =
  SagaReturnType<T>;

function* getNoteListWorker(): Generator<
  CallEffect<ResponseType<typeof getNoteListApi>> | PutEffect,
  void,
  ResponseType<typeof getNoteListApi>
> {
  try {
    const response = yield call(getNoteListApi);
    if (response.status === 200) {
      yield put(NoteAction.getNoteListSuccess(response.data));
    }
  } catch (error: any) {
    console.log(error);
    yield put(NoteAction.getNoteListFail(error.response.data.message));
  }
}

function* createNoteWorker(
  action: Effect
): Generator<
  CallEffect<ResponseType<typeof createNoteApi>> | PutEffect,
  void,
  ResponseType<typeof createNoteApi>
> {
  try {
    const response = yield call(createNoteApi, action.payload);
    if (response.status === 201) {
      yield put(NoteAction.createNotSuccess(response.data));
    }
  } catch (error: any) {
    yield put(NoteAction.createNoteFail(error.response.data));
  }
}

function* getNoteDetailWorker(action: Effect): Generator {
  try {
    const response: any = yield call(getNoteDetailApi, action.payload._id);
    if (response.status === 200) {
      yield put(NoteAction.getNoteDetailSuccess(response.data));
    }
  } catch (error: any) {
    yield put(NoteAction.getNoteDetailFail(error.response.data.message));
  }
}

function* updateNoteWorker(action: Effect): Generator {
  try {
    const response: any = yield call(
      updateNoteApi,
      action.payload,
      action.payload._id
    );
    if (response.status === 201) {
      yield put(NoteAction.updateNoteSuccess(response.data));
    }
  } catch (error: any) {
    yield put(NoteAction.updateNoteFail(error.response.data));
  }
}
