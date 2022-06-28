import { makeUid } from './uid';



interface Element<T> {
    id: number,
    data: T
}



export class Tree<T> {

    private element: Element<T>;
    private children: Element<T>[] = [];

    constructor(data: T) {
        this.element = {
            id: makeUid(),
            data: data
        }
    }

    getData(): T {
        return this.element.data;
    }
    
    getChildren(): T[] {
        return this.children.map(c => c.data);
    }

    addChild(child: T) {
        this.children.push({
            id: makeUid(),
            data: child
        });
    }
}
