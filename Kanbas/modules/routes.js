import db from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString()
    };
    await dao.createModule(newModule);
    const newest = await dao.findModuleByName(newModule.name);
    console.log(newest);
    res.send(newest);

  }

  const getModules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleByCourse(cid);
    res.send(modules);
  }

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  }

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  }

  app.post("/api/courses/:cid/modules", createModule);

  
  app.get("/api/courses/:cid/modules", getModules);

  app.put("/api/modules/:mid", updateModule);

  app.delete("/api/modules/:mid", deleteModule);
}
export default ModuleRoutes;