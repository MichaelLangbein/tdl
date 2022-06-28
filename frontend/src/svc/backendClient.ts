import { Axios } from "axios";


export interface Task {
    title: string,
    description: string,
}


export interface Tree<T> {
    data: T,
    children: Tree<T>[];
}


export class BackendClient {

    private httpClient: Axios = new Axios();
    constructor(private backendUrl: string) {}

    getTree(id?: number): Promise<Tree<Task>> {
        return this.httpClient.get(`${this.backendUrl}/`);
    }
}