const getAllTasks = (req, res) => {
    res.send('All tasks can be found here')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.send('Get a single task')
}

const updateTask = (req, res) => {
    res.send('Update a task')
}

const deleteTask = (req, res) => {
    res.send('Delete a task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}