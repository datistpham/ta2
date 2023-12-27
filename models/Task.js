import mongoose from "mongoose";

const enumPriority = ["High", "Medium", "Low"];
const enumStatus = ["Done", "In Progress", "To Do"];

const taskSchema = new mongoose.Schema({
    deadline: {
        type: Date,
        require: true,
    },
    starting_time: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        enum: enumStatus,
        default: "To Do",
    },
    priority: {
        type: String,
        enum: enumPriority,
    },
    description: {
        type: String,
        require: false,
    },
    timeRemaining: {
        type: String, 
        require: false
    },
    title: {
        type: String, 
        require: false
    },
    end_time: {
        type: String,
        require: false
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    workspace: {
        type: String,
        require: false,
    },
    assignee: {
        type: String,
        require: false
    }
});

export default mongoose.model("Task", taskSchema);