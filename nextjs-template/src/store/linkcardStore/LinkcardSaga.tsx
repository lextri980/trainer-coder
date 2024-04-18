import {
  createLinkcardApi,
  getLinkcardListApi,
} from "@/services/api/linkCardApi";
import { AxiosError } from "axios";
import { Effect, all, call, put, takeLatest } from "redux-saga/effects";
import { LinkcardAction } from "./LinkcardReducer";

export function* linkcardWatcher() {
  yield all([
    takeLatest(
      LinkcardAction.getLinkcardListRequest.type,
      getLinkcardListWorker
    ),
    takeLatest(LinkcardAction.createLinkcardRequest.type, createLinkcardWorker),
  ]);
}

function* getLinkcardListWorker(): Generator {
  try {
    const response: any = yield call(getLinkcardListApi);
    if (response.status === 200) {
      yield put(LinkcardAction.getLinkcardListSuccess(response.data));
    }
  } catch (error: any) {
    yield put(LinkcardAction.getLinkcardListFail(error.response.data.message));
  }
}

function* createLinkcardWorker(action: Effect): Generator {
  try {
    const response: any = yield call(createLinkcardApi, action.payload);
    if (response.status === 201) {
      yield put(LinkcardAction.createNotSuccess(response.data));
    }
  } catch (error: any) {
    yield put(LinkcardAction.createLinkcardFail(error.response.data.message));
  }
}
