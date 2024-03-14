import { all, call, takeLatest } from "redux-saga/effects";
import { ExampleActions } from "./ExampleReducer";
import { getPostApi } from "@/services/api/postApi";

export function* exampleWatcher() {
  yield all([
    // takeLatest(ExampleActions.exampleAction.type, getExampleWorker),
    takeLatest(ExampleActions.exampleAction.type, getPostWorker),
    // takeLatest(ExampleActions.example.type, getExampleWorker),
  ]);
}

function* getPostWorker(): Generator {
  try {
    const response = yield call(getPostApi)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
};