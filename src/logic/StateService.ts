import { TaskService } from "./TaskService";


export class StateService {
    private db = new TaskService();

    constructor() {}

    getCurrentTask(): Task {}
}