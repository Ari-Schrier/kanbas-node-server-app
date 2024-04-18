import model from "./model.js";
export const createCourse = (course) => model.create(course);
export const findAllCourses = () => model.find();
export const findCourseById = (courseID) => model.findById(courseID);
export const findCourseByNumber =  (number) => model.findOne({number: number});
//export const findUserByUsername = (username) =>  model.findOne({ username: username });
//export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const updateCourse = (courseID, course) =>  model.updateOne({ _id: courseID }, { $set: course });
export const deleteCourse = (courseID) => model.deleteOne({ _id: courseID });
