const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const projectController = require('./controllers/projectController')
const tasktController = require('./controllers/taskController')
const cors = require("cors")

router.use(cors())
//home route
router.get('/', userController.home)
//fetch all of collection
router.get('/all-users', userController.fetchUsers)
router.get('/all-projects', projectController.fetchProjects)
router.get('/all-tasks', tasktController.fetchTasks)
//project statuses
router.get("/projects-new", projectController.fetchNew)
router.get("/projects-inprogress", projectController.fetchInProgress)
router.get("/projects-completed", projectController.fetchCompleted)
//task statuses
router.get("/tasks-backlog", tasktController.fetchBacklog)
router.get("/tasks-todo", tasktController.fetchTodo)
router.get("/tasks-inprogress", tasktController.fetchInprogress)
router.get("/tasks-testing", tasktController.fetchTesting)
router.get("/tasks-done", tasktController.fetchDone)


router.post("/checkToken", userController.checkToken)
router.post("/login", userController.apiLogin)
router.post('/register', userController.apiRegister)
router.post("/create-project", projectController.createProject)
router.post("/project-statuss-update", projectController.updateStatuss)
router.post("/project-access-update", projectController.updateAccess)
router.post("/project-access", projectController.getAccess)

router.post("/create-task", tasktController.createTask)
router.post("/task-statuss-update", tasktController.updateStatuss)


module.exports = router