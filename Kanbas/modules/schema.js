import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: {type: String, required: true},
    description: String,
    course: {type:String, required: true},
},
{ collection: "courses" });

export default courseSchema;