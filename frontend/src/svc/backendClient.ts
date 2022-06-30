import axios from "axios";


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

    private httpClient = axios.create({
        timeout: 100
    });
    constructor(private backendUrl: string) {}

    async getTree(id = 0): Promise<Tree<Task>> {
        const result = await this.httpClient.get(`${this.backendUrl}/tree/${id}`);
        return result.data;
    }

    async updateTask(id: number, task: Task): Promise<Tree<Task>> {
        await this.httpClient.post(`${this.backendUrl}/task/${id}`, task);
        return this.getTree();
    }

    async addChild(id: number, childTask: Task): Promise<Tree<Task>> {
        await this.httpClient.post(`${this.backendUrl}/task/${id}/addChild`, childTask);
        return this.getTree();
    }

    async moveChild(id: number, newParentId: number): Promise<Tree<Task>> {
        await this.httpClient.put(`${this.backendUrl}/task/${id}/move/${newParentId}`);
        return this.getTree();
    }

    async delete(id: number): Promise<Tree<Task>> {
        await this.httpClient.delete(`${this.backendUrl}/task/${id}`);
        return this.getTree();
    }

    setTree(tree: Tree<Task>): any {
        throw new Error("Method not implemented.");
    }

}