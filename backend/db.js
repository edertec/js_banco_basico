const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tasks.db');

// Cria a tabela de tarefas, se ela não existir.
db.run(`CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY,
    task TEXT,
    date TEXT,
    responsible TEXT,
    observations TEXT,
    status TEXT
)`);

exports.addTask = function(taskData, callback) {
    const {task, date, responsible, observations, status} = taskData;
    const stmt = db.prepare('INSERT INTO tasks (task, date, responsible, observations, status) VALUES (?, ?, ?, ?, ?)');
    stmt.run(task, date, responsible, observations, status, callback);
    stmt.finalize();
};

exports.getTasks = function(callback) {
    db.all('SELECT * FROM tasks', [], callback);
};
