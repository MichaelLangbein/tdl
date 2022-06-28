import { toPromise } from './async';
import { Tree } from './tree';


export interface Task {
    title: string;
    body: string;
}


export class TaskService {

    private tasks: Tree<Task> = new Tree({
        title: 'root',
        body: ''
    });

    public getRoot(): Promise<Task> {
        return toPromise(this.tasks.getData());
    }

}