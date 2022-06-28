"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const async_1 = require("./async");
const tree_1 = require("./tree");
class TaskService {
    constructor() {
        this.tasks = new tree_1.Tree({
            title: 'root',
            body: ''
        });
    }
    getRoot() {
        return (0, async_1.toPromise)(this.tasks.getData());
    }
}
exports.TaskService = TaskService;
