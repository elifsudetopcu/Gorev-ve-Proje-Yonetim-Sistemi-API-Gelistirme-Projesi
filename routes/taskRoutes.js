const express = require("express");
const router = express.Router();

const tasks = require("../data/tasks");

// Bir sonraki görev ID'si. Silinen ID'ler tekrar kullanılmaz.
let nextId =
    tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;

// Pozitif tam sayı biçimindeki ID, page ve limit değerlerini kontrol eder.
function parseId(value) {
    return /^[1-9]\d*$/.test(value) ? Number(value) : null;
}

// POST ve PUT için gövdenin JSON nesnesi olmasını zorunlu tutar.
function hasValidBody(req, res) {
    if (
        req.body === null ||
        typeof req.body !== "object" ||
        Array.isArray(req.body)
    ) {
        res.status(400).json({
            success: false,
            message: "Request body must be a JSON object."
        });

        return false;
    }

    return true;
}

const validStatuses = ["pending", "in-progress", "completed"];
const validPriorities = ["low", "medium", "high"];

const allowedFields = [
    "title",
    "description",
    "status",
    "priority",
    "assignee"
];

// GET /tasks - Görevleri sayfalayarak listele
router.get("/", (req, res) => {
    const { page, limit } = req.query;

    const currentPage = page === undefined ? 1 : parseId(page);
    const pageSize = limit === undefined ? 10 : parseId(limit);

    if (currentPage === null) {
        return res.status(400).json({
            success: false,
            message: "Page must be a positive integer."
        });
    }

    if (pageSize === null || pageSize > 100) {
        return res.status(400).json({
            success: false,
            message: "Limit must be a positive integer between 1 and 100."
        });
    }

    const totalTasks = tasks.length;
    const totalPages = Math.ceil(totalTasks / pageSize);
    const startIndex = (currentPage - 1) * pageSize;

    const pageTasks = tasks.slice(
        startIndex,
        startIndex + pageSize
    );

    return res.status(200).json({
        success: true,
        count: pageTasks.length,
        pagination: {
            page: currentPage,
            limit: pageSize,
            totalTasks,
            totalPages
        },
        data: pageTasks
    });
});

// GET /tasks/:id - ID'ye göre görev getir
router.get("/:id", (req, res) => {
    const id = parseId(req.params.id);

    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Task ID must be a positive integer."
        });
    }

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found."
        });
    }

    return res.status(200).json({
        success: true,
        data: task
    });
});

// POST /tasks - Yeni görev oluştur
router.post("/", (req, res) => {
    // Gövde kontrolü parçalama işleminden önce yapılmalıdır.
    if (!hasValidBody(req, res)) {
        return;
    }

    const {
        title,
        description,
        status,
        priority,
        assignee
    } = req.body;

    if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            success: false,
            message: "Title is required and must be a non-empty string."
        });
    }

    if (
        description !== undefined &&
        typeof description !== "string"
    ) {
        return res.status(400).json({
            success: false,
            message: "Description must be a string."
        });
    }

    if (
        assignee !== undefined &&
        typeof assignee !== "string"
    ) {
        return res.status(400).json({
            success: false,
            message: "Assignee must be a string."
        });
    }

    if (
        status !== undefined &&
        !validStatuses.includes(status)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid status.",
            allowedValues: validStatuses
        });
    }

    if (
        priority !== undefined &&
        !validPriorities.includes(priority)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid priority.",
            allowedValues: validPriorities
        });
    }

    const newTask = {
        id: nextId,
        title: title.trim(),
        description: description?.trim() || "",
        status: status || "pending",
        priority: priority || "medium",
        assignee: assignee?.trim() || ""
    };

    nextId++;
    tasks.push(newTask);

    return res.status(201).json({
        success: true,
        message: "Task created successfully.",
        data: newTask
    });
});

// PUT /tasks/:id - Gönderilen alanları güncelle
router.put("/:id", (req, res) => {
    const id = parseId(req.params.id);

    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Task ID must be a positive integer."
        });
    }

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found."
        });
    }

    // null, dizi ve ilkel JSON değerleri alanlara erişilmeden reddedilir.
    if (!hasValidBody(req, res)) {
        return;
    }

    const {
        title,
        description,
        status,
        priority,
        assignee
    } = req.body;

    const receivedFields = Object.keys(req.body);

    if (receivedFields.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Provide at least one field to update."
        });
    }

    const invalidFields = receivedFields.filter(
        (field) => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Unknown field(s) provided.",
            fields: invalidFields
        });
    }

    if (
        title !== undefined &&
        (typeof title !== "string" || !title.trim())
    ) {
        return res.status(400).json({
            success: false,
            message: "Title must be a non-empty string."
        });
    }

    if (
        description !== undefined &&
        typeof description !== "string"
    ) {
        return res.status(400).json({
            success: false,
            message: "Description must be a string."
        });
    }

    if (
        assignee !== undefined &&
        typeof assignee !== "string"
    ) {
        return res.status(400).json({
            success: false,
            message: "Assignee must be a string."
        });
    }

    if (
        status !== undefined &&
        !validStatuses.includes(status)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid status.",
            allowedValues: validStatuses
        });
    }

    if (
        priority !== undefined &&
        !validPriorities.includes(priority)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid priority.",
            allowedValues: validPriorities
        });
    }

    // Yalnızca gönderilen alanlar güncellenir.
    if (title !== undefined) {
        task.title = title.trim();
    }

    if (description !== undefined) {
        task.description = description.trim();
    }

    if (status !== undefined) {
        task.status = status;
    }

    if (priority !== undefined) {
        task.priority = priority;
    }

    if (assignee !== undefined) {
        task.assignee = assignee.trim();
    }

    return res.status(200).json({
        success: true,
        message: "Task updated successfully.",
        data: task
    });
});

// DELETE /tasks/:id - Görevi sil
router.delete("/:id", (req, res) => {
    const id = parseId(req.params.id);

    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Task ID must be a positive integer."
        });
    }

    const taskIndex = tasks.findIndex(
        (task) => task.id === id
    );

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Task not found."
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    return res.status(200).json({
        success: true,
        message: "Task deleted successfully.",
        data: deletedTask
    });
});

module.exports = router;