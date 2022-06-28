import { makeUid } from './uid';




export class Tree<T> {

    private id: number = makeUid();
    private children: Tree<T>[] = [];

    constructor(private data: T) {}

    getId(): number {
        return this.id;
    }

    getData(): T {
        return this.data;
    }

    setData(data: T) {
        this.data = data;
    }
    
    getChildren(): Tree<T>[] {
        return this.children;
    }

    addChild(child: T) {
        this.children.push(new Tree<T>(child));
    }

    removeChild(childId: number) {
        this.children = this.children.filter(c => c.getId() !== childId);
    }
}


export function findInTree<T>(tree: Tree<T>, predicate: (tree: Tree<T>) => boolean): Tree<T> | false {
    if (predicate(tree)) {
        return tree;
    }
    for (const child of tree.getChildren()) {
        const foundIt = findInTree(child, predicate);
        if (foundIt) return child;
    }
    return false;
}