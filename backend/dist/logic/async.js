"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatUntil = exports.sleep = exports.toPromise = void 0;
function toPromise(o) {
    return new Promise((resolve) => resolve(o));
}
exports.toPromise = toPromise;
function sleep(timeMs) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), timeMs);
    });
}
exports.sleep = sleep;
function repeatUntil(action, predicate) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield action();
        while (!predicate(result)) {
            result = yield action();
        }
        return result;
    });
}
exports.repeatUntil = repeatUntil;
