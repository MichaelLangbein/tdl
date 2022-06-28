"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUid = void 0;
let uid = -1;
function makeUid() {
    uid += 1;
    return uid;
}
exports.makeUid = makeUid;
