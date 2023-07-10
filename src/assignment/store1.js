import {  createStore} from "redux";
import { CustomReducer1 } from "./reducer1";

export var DefaultStore1 = createStore(CustomReducer1)