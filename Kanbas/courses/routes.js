import * as dao from "./dao.js";
import Database from "../Database/index.js";

export default function CourseRoutes(app) {

  const findCourse = async(req, res) => {
    const {id} = req.params;
    const currentCourse = await dao.findCourseById(id);
    if (!currentCourse) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(currentCourse);
  };
  const updateCourse = async(req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id, course);
    res.sendStatus(204);
  };
  const deleteCourse = async(req, res) => {
    const { id } = req.params;
    await dao.deleteCourse(id);
    res.sendStatus(204);
  };
  const createCourse = async(req, res) => {
    const course = { ...req.body,
      id: new Date().getTime().toString() };
    delete course._id;
    await dao.createCourse(course);
    const newCourse = await dao.findCourseByNumber(course.number);
    res.send(newCourse);
  };
  const getCourses = async(req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  app.get("/api/courses/:id", findCourse);

  app.put("/api/courses/:id", updateCourse);

  app.delete("/api/courses/:id", deleteCourse);

  app.post("/api/courses", createCourse);

  app.get("/api/courses", getCourses);
}
