const express = require("express");
const logger = require("./middleware/logger");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Gelen JSON verilerini okuyabilmek için
app.use(express.json());

// Express 5'te body gönderilmezse req.body undefined olur.
// Route'ların hata vermemesi için boş nesneye çeviriyoruz.
app.use((req, res, next) => {
    if (req.body === undefined) {
        req.body = {};
    }

    next();
});

// İstekleri terminale kaydet
app.use(logger);

// Ana sayfa
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to TaskFlow API!",
        endpoints: {
            getAllTasks: "GET /tasks",
            getTaskById: "GET /tasks/:id",
            createTask: "POST /tasks",
            updateTask: "PUT /tasks/:id",
            deleteTask: "DELETE /tasks/:id"
        }
    });
});

// Task route'larını bağla
app.use("/tasks", taskRoutes);

// Bulunamayan endpoint'ler için
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found."
    });
});

// Geçersiz JSON ve diğer beklenmeyen hatalar için
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON format."
        });
    }

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal server error."
    });
});

// Sunucuyu başlat
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`TaskFlow API is running at http://localhost:${PORT}`);
    });
}

module.exports = app;