"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const uid_1 = require("./uid");
class Tree {
    constructor(data) {
        this.children = [];
        this.element = {
            id: (0, uid_1.makeUid)(),
            data: data
        };
    }
    getData() {
        return this.element.data;
    }
    getChildren() {
        return this.children.map(c => c.data);
    }
    addChild(child) {
        this.children.push({
            id: (0, uid_1.makeUid)(),
            data: child
        });
    }
}
exports.Tree = Tree;
