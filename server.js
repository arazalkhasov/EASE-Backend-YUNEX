const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let sessions = []; 
let currentProfile = null; 


app.post('/api/telemetry', (req, res) => {
    const data = req.body;
    data.timestamp = new Date().toLocaleTimeString();
    sessions.push(data);
    console.log("Unity-dən yeni data gəldi:", data);
    res.status(200).send({ message: "Data uğurla qeydə alındı" });
});

app.get('/api/telemetry', (req, res) => {
    res.json(sessions);
});


app.post("/api/profile", (req, res) => {
    currentProfile = req.body; 
    console.log("Valideyn Anketi Yadda Saxlanıldı:", currentProfile);
    res.status(200).json({ message: "Profil uğurla yadda saxlanıldı", data: currentProfile });
});


app.get("/api/profile", (req, res) => {
    res.json(currentProfile);
});


app.listen(5000, () => console.log('API Server 5000 portunda işləyir 🚀'));