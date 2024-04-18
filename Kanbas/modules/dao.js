import model from "./model.js";
export const createModule = (module) => model.create(module);
//export const findAllCourses = () => model.find();
export const findModuleByCourse = (courseID) => model.find({course:courseID});
export const findModuleByName =  (name) => model.findOne({name: name});
//export const findUserByUsername = (username) =>  model.findOne({ username: username });
//export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const updateModule = (moduleID, module) =>  model.updateOne({ _id: moduleID }, { $set: module });
export const deleteModule = (moduleID) => model.deleteOne({ _id: moduleID });

