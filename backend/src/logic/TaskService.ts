import { findInTree, Tree } from './tree';


export interface Task {
    title: string;
    body: string;
}


export class TaskService {

    private tasks: Tree<Task> = new Tree({
        title: 'root',
        body: ''
    });

    public getRoot(): Tree<Task> {
        return this.tasks;
    }

    public getTree(id: number): Tree<Task> | false {
        const tree = findInTree(this.tasks, (tr) => tr.getId() === id);
        return tree;
    }

    public updateTask(id: number, task: Task) {
        const tree = findInTree(this.tasks, (tr) => tr.getId() === id);
        if (tree) {
            tree.setData(task);
            return true;
        }
        return false;
    }

    public addChild(id: number, task: Task) {
        const tree = findInTree(this.tasks, (tr) => tr.getId() === id);
        if (tree) {
            tree.addChild(task);
            return true;
        }
        return false;
    }

    public delete(id: number) {
        const parent = this.getParent(id);
        if (parent) {
            parent.removeChild(id);
            return true;
        }
        return false;
    }

    public getParent(id: number) {
        const parent = findInTree(this.tasks, (tr) => tr.getChildren().map(c => c.getId()).includes(id));
        return parent;
    }

    move(taskId: number, newParentId: number) {
        const task = this.getTree(taskId);
        const oldParent = this.getParent(taskId);
        const newParent = this.getTree(newParentId);
        if (oldParent && newParent && task) {
            oldParent.removeChild(taskId);
            newParent.addChildTree(task);
        }
    }

    mergeTrees(userTree: Tree<Task>) {
        throw new Error('Method not implemented.');
    }
}