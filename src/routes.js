const express = require("express");
const routes = express.Router();
const annotationController = require("./Controllers/AnnotaionController");
const PriorityController = require("./Controllers/PriorityController");
const ContentCrontroller = require("./Controllers/ContentCrontroller");

//Annotations
routes.post("/Annotations", annotationController.create);
routes.get("/Annotations", annotationController.read);
routes.delete("/Annotations/:id", annotationController.delete);

//priority
routes.get("/Priorities", PriorityController.read);
routes.post("/Priorities/:id", PriorityController.update);

//Conntent
routes.post("/Contents/:id", ContentCrontroller.update)


module.exports = routes;