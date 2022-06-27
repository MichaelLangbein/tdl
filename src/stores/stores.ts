import type { Task } from 'src/logic/TaskService';
import { writable, readable } from 'svelte/store';



export const currentTask = writable<Task>({
    title: 'root',
    body: ''
});