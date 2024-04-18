import mongoose, { Collection } from "mongoose";

const courseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: {type: String, required: true},
    number: {type:String, required: true},
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
}, { collection: "courses" });