import { TaskService, type Task } from 'src/logic/TaskService';
import { writable, readable } from 'svelte/store';

const ts = new TaskService();

export const db = readable(ts);
