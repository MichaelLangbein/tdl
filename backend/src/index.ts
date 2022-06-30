import express from 'express';
import { TaskService } from './logic/TaskService';
import cors from 'cors';

const port = 3001;
const app = express();
app.use(cors());
app.use(express.json());

const ts = new TaskService();


app.get('/tree/:id', (req, res) => {
  const id = +req.params.id;
  const tree = ts.getTree(id);
  res.send(tree);
});

app.post('/task/:id', (req, res) => {
  const id = +req.params.id;
  const newTask = req.body;
  const success = ts.updateTask(id, newTask);
  res.send(success);
});

app.post('/task/:id/addChild', (req, res) => {
  const id = +req.params.id;
  const newTask = req.body;
  const success = ts.addChild(id, newTask);
  res.send(success);
});

app.delete('/task/:id', (req, res) => {
  const id = +req.params.id;
  const success = ts.delete(id);
  res.send(success);
});

app.put('/task/:id/move/:toId', (req, res) => {
  const taskId = +req.params.id;
  const newParentId = +req.params.toId;
  const success = ts.move(taskId, newParentId);
  res.send(success);
});

app.post('/diffTrees', (req, res) => {
  const userTree = req.body;
  const mergedTree = ts.mergeTrees(userTree);
  res.send(mergedTree);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});