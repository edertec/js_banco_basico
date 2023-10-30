const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());

// Rota para adicionar uma nova tarefa.
app.post('/add-task', (req, res) => {
    const {task, date, responsible, observations, status} = req.body;
    
    if (!task || !responsible) {
        res.status(400).json({error: 'Fields task and responsible are mandatory'});
        return;
    }

    db.addTask(req.body, function(error) {
        if (error) {
            res.status(500).json({error: 'Internal error'});
            return;
        }
        res.status(200).json({message: 'Task added successfully'});
    });
});

// Rota para listar todas as tarefas.
app.get('/list-tasks', (req, res) => {
    db.getTasks(function(error, tasks) {
        if (error) {
            res.status(500).json({error: 'Internal error'});
            return;
        }
        res.status(200).json(tasks);
    });
});

app.delete('/delete-all-tasks', (req, res) => {
    db.deleteAllTasks((error) => {
        if (error) {
            res.status(500).json({error: 'Internal error'});
            return;
        }
        res.status(200).json({message: 'All tasks deleted successfully'});
    });
});


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
