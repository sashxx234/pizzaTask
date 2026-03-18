import express from "express";
import mysql from "mysql2/promise"; 
import cors from "cors";


const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "pizzeriabd",
  password: "root"
});

const app = express();
app.use(cors(), express.json());


try {
  await connection.connect();
  console.log("Подключение к серверу MySQL успешно установлено");
} catch (err) {
  console.error("Ошибка: " + err.message);
}


app.get('/partners', async (req, res) => {
    try {
        const sql = "SELECT * FROM partners";
        const [results] = await connection.query(sql); // БЕЗ .promise()!
        
        res.json(results);
        
    } catch (error) {
        console.error('Ошибка сервера:', error);
        res.status(500).json({ error: 'Database error' });
    }
});


app.post("/reg", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    await connection.query(
      "INSERT INTO users (name, email, phone, password, reg_data) VALUES (?, ?, ?, ?, CURDATE())",
      [name, email, phone, password]
    );
    res.status(201).json({ Message: 'Успех' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: 'Ошибка' });
  }
});


app.post('/loginUser', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        const [results] = await connection.query(sql, [email, password]);
        
        if (results.length === 0) {
            return res.json([]);
        }
        
        res.json(results);
        
    } catch (error) {
        console.error('Ошибка сервера:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});