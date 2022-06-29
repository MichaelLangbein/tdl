import { Axios } from "axios";


export interface Task {
    title: string,
    description: string,
}


export interface Tree<T> {
    id: number,
    data: T,
    children: Tree<T>[];
}


export class BackendClient {

    private httpClient: Axios = new Axios();
    constructor(private backendUrl: string) {}

    async getTree(id = 0): Promise<Tree<Task>> {
        console.log('getting tree ', id)
        const result = await this.httpClient.get(`${this.backendUrl}/tree/${id}`);
        console.log('got result: ', result.data);
        return result.data;
    }

    async updateTask(id: number, task: Task): Promise<Tree<Task>> {
        const success = await this.httpClient.post(`${this.backendUrl}/task/${id}`, task);
        return this.getTree();
    }

    async addChild(id: number, childTask: Task): Promise<Tree<Task>> {
        const success = await this.httpClient.post(`${this.backendUrl}/task/${id}/addChild`, childTask);
        return this.getTree();
    }

    async moveChild(id: number, newParentId: number): Promise<Tree<Task>> {
        const success = await this.httpClient.put(`${this.backendUrl}/task/${id}/move/${newParentId}`);
        return this.getTree();
    }

    async delete(id: number): Promise<Tree<Task>> {
        const success = await this.httpClient.delete(`${this.backendUrl}/task/${id}`);
        return this.getTree();
    }

}