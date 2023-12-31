import express from 'express';
import { getAllUserInWorkspace, createWorkspace, getWorkspaceByName, addUserToWorkspace, createTaskInWorkspace , getWorkspaceByUid, getDocumentByWorkspaceId, getTaskByWorkspaceId, getTaskByWorkspaceIdAndStatus, updateTask, deleteTask } from '../controllers/workspace.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const workspaceRouter = express.Router();

workspaceRouter.use(authenticate);

workspaceRouter.post("/create", createWorkspace); // http://localhost:5000/xiuu/api/v1/workspace/create
workspaceRouter.get("/", getWorkspaceByName)
workspaceRouter.get("/user_id", getWorkspaceByUid);
workspaceRouter.get("/users", getAllUserInWorkspace);
workspaceRouter.post("/users/add", addUserToWorkspace);
workspaceRouter.get("/document", getDocumentByWorkspaceId);
workspaceRouter.get("/task", getTaskByWorkspaceId);
workspaceRouter.post("/task/create", createTaskInWorkspace);
workspaceRouter.post("/task/update",updateTask )
workspaceRouter.post("/task/delete",deleteTask )
workspaceRouter.get("/board");

export default workspaceRouter;