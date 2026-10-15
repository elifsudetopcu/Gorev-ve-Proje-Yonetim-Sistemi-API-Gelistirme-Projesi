
const tasks = [
    {
        id: 1,
        title: "Design Login Interface",
        description: "Create a responsive login page with email and password fields.",
        status: "pending",
        priority: "high",
        assignee: "Serra"
    },
    {
        id: 2,
        title: "Develop Registration Form",
        description: "Build a registration form with input validation.",
        status: "in-progress",
        priority: "high",
        assignee: "Eylül"
    },
    {
        id: 3,
        title: "Create Dashboard",
        description: "Build the main dashboard for managing projects and tasks.",
        status: "completed",
        priority: "high",
        assignee: "Sevgi"
    },
    {
        id: 4,
        title: "Implement Navigation Bar",
        description: "Create navigation links for the main application pages.",
        status: "pending",
        priority: "medium",
        assignee: "Özlem"
    },
    {
        id: 5,
        title: "Build Task Creation Form",
        description: "Allow users to create tasks with descriptions and priorities.",
        status: "in-progress",
        priority: "high",
        assignee: "Eslem"
    },
    {
        id: 6,
        title: "Add Task Editing",
        description: "Enable users to update existing task details.",
        status: "pending",
        priority: "medium",
        assignee: "Esma"
    },
    {
        id: 7,
        title: "Implement Task Deletion",
        description: "Allow users to remove tasks from their project lists.",
        status: "completed",
        priority: "medium",
        assignee: "Melisa"
    },
    {
        id: 8,
        title: "Create User Profile",
        description: "Display user information and account preferences.",
        status: "pending",
        priority: "low",
        assignee: "Sibel"
    },
    {
        id: 9,
        title: "Add Search Functionality",
        description: "Search tasks by title and relevant keywords.",
        status: "in-progress",
        priority: "medium",
        assignee: "Zeynep"
    },
    {
        id: 10,
        title: "Implement Task Filtering",
        description: "Filter tasks according to status and priority.",
        status: "pending",
        priority: "medium",
        assignee: "Merve"
    },
    {
        id: 11,
        title: "Create Deadline Calendar",
        description: "Display upcoming deadlines in a calendar interface.",
        status: "completed",
        priority: "high",
        assignee: "Ceren"
    },
    {
        id: 12,
        title: "Build Notification System",
        description: "Notify users about approaching deadlines and task updates.",
        status: "pending",
        priority: "high",
        assignee: "Buse"
    },
    {
        id: 13,
        title: "Design Project Cards",
        description: "Create reusable cards for displaying project information.",
        status: "in-progress",
        priority: "low",
        assignee: "Derya"
    },
    {
        id: 14,
        title: "Add Dark Mode",
        description: "Allow users to switch between light and dark themes.",
        status: "pending",
        priority: "medium",
        assignee: "İrem"
    },
    {
        id: 15,
        title: "Create Team Management",
        description: "Develop a page for viewing and managing team members.",
        status: "completed",
        priority: "high",
        assignee: "Kerem"
    },
    {
        id: 16,
        title: "Configure Express Server",
        description: "Set up the Express.js server and configure middleware.",
        status: "pending",
        priority: "high",
        assignee: "Serra"
    },
    {
        id: 17,
        title: "Create Task API Routes",
        description: "Define REST endpoints for task management operations.",
        status: "in-progress",
        priority: "high",
        assignee: "Eylül"
    },
    {
        id: 18,
        title: "Connect MongoDB Database",
        description: "Establish a connection between the server and MongoDB.",
        status: "pending",
        priority: "high",
        assignee: "Sevgi"
    },
    {
        id: 19,
        title: "Define User Schema",
        description: "Create a database schema for user account information.",
        status: "completed",
        priority: "medium",
        assignee: "Özlem"
    },
    {
        id: 20,
        title: "Implement Authentication",
        description: "Protect private endpoints with token-based authentication.",
        status: "pending",
        priority: "high",
        assignee: "Eslem"
    },
    {
        id: 21,
        title: "Add Password Encryption",
        description: "Hash user passwords before saving them to the database.",
        status: "in-progress",
        priority: "high",
        assignee: "Esma"
    },
    {
        id: 22,
        title: "Create Task Controller",
        description: "Separate task management logic from route definitions.",
        status: "pending",
        priority: "medium",
        assignee: "Melisa"
    },
    {
        id: 23,
        title: "Implement Input Validation",
        description: "Validate incoming request data before processing it.",
        status: "completed",
        priority: "high",
        assignee: "Sibel"
    },
    {
        id: 24,
        title: "Handle Server Errors",
        description: "Create centralized middleware for handling API errors.",
        status: "pending",
        priority: "high",
        assignee: "Zeynep"
    },
    {
        id: 25,
        title: "Add API Pagination",
        description: "Return large task collections in manageable pages.",
        status: "in-progress",
        priority: "medium",
        assignee: "Merve"
    },
    {
        id: 26,
        title: "Implement Task Sorting",
        description: "Sort tasks by creation date, deadline, or priority.",
        status: "pending",
        priority: "low",
        assignee: "Ceren"
    },
    {
        id: 27,
        title: "Build Comment Feature",
        description: "Allow team members to add comments to individual tasks.",
        status: "completed",
        priority: "medium",
        assignee: "Buse"
    },
    {
        id: 28,
        title: "Add File Attachments",
        description: "Enable users to attach supporting documents to tasks.",
        status: "pending",
        priority: "high",
        assignee: "Derya"
    },
    {
        id: 29,
        title: "Create Activity History",
        description: "Record important changes made to projects and tasks.",
        status: "in-progress",
        priority: "medium",
        assignee: "İrem"
    },
    {
        id: 30,
        title: "Implement Role Permissions",
        description: "Restrict features according to user roles and permissions.",
        status: "pending",
        priority: "high",
        assignee: "Kerem"
    },
    {
        id: 31,
        title: "Write Unit Tests",
        description: "Test individual utility functions and business logic.",
        status: "completed",
        priority: "high",
        assignee: "Serra"
    },
    {
        id: 32,
        title: "Test REST Endpoints",
        description: "Verify API responses using Postman.",
        status: "in-progress",
        priority: "medium",
        assignee: "Eylül"
    },
    {
        id: 33,
        title: "Improve Mobile Layout",
        description: "Optimize page layouts for mobile devices and tablets.",
        status: "pending",
        priority: "high",
        assignee: "Sevgi"
    },
    {
        id: 34,
        title: "Create Reusable Buttons",
        description: "Build consistent button components for different actions.",
        status: "completed",
        priority: "low",
        assignee: "Özlem"
    },
    {
        id: 35,
        title: "Add Loading Animations",
        description: "Show loading indicators while API requests are processing.",
        status: "pending",
        priority: "low",
        assignee: "Eslem"
    },
    {
        id: 36,
        title: "Implement Toast Messages",
        description: "Display temporary success and error notifications.",
        status: "in-progress",
        priority: "medium",
        assignee: "Esma"
    },
    {
        id: 37,
        title: "Build Progress Tracker",
        description: "Calculate and display the completion percentage of projects.",
        status: "pending",
        priority: "medium",
        assignee: "Melisa"
    },
    {
        id: 38,
        title: "Create Analytics Charts",
        description: "Visualize task distribution and project progress with charts.",
        status: "completed",
        priority: "high",
        assignee: "Sibel"
    },
    {
        id: 39,
        title: "Add Task Duplication",
        description: "Allow users to create copies of existing tasks.",
        status: "pending",
        priority: "low",
        assignee: "Zeynep"
    },
    {
        id: 40,
        title: "Implement Bulk Actions",
        description: "Enable users to update multiple selected tasks at once.",
        status: "in-progress",
        priority: "medium",
        assignee: "Merve"
    },
    {
        id: 41,
        title: "Create CSV Export",
        description: "Export project task lists into CSV format.",
        status: "pending",
        priority: "medium",
        assignee: "Ceren"
    },
    {
        id: 42,
        title: "Configure Environment Variables",
        description: "Store application settings and secrets in a .env file.",
        status: "completed",
        priority: "high",
        assignee: "Buse"
    },
    {
        id: 43,
        title: "Improve API Security",
        description: "Apply security middleware and restrict invalid requests.",
        status: "pending",
        priority: "high",
        assignee: "Derya"
    },
    {
        id: 44,
        title: "Optimize Database Queries",
        description: "Improve query efficiency and reduce unnecessary database operations.",
        status: "in-progress",
        priority: "high",
        assignee: "İrem"
    },
    {
        id: 45,
        title: "Write API Documentation",
        description: "Document endpoints, request parameters, and response formats.",
        status: "pending",
        priority: "medium",
        assignee: "Kerem"
    },
    {
        id: 46,
        title: "Fix UI Accessibility Issues",
        description: "Improve keyboard navigation and accessible form labels.",
        status: "completed",
        priority: "medium",
        assignee: "Serra"
    },
    {
        id: 47,
        title: "Implement Data Backup",
        description: "Create a process for backing up important project data.",
        status: "pending",
        priority: "high",
        assignee: "Eylül"
    },
    {
        id: 48,
        title: "Prepare Deployment Pipeline",
        description: "Configure automated steps for building and deploying the application.",
        status: "in-progress",
        priority: "high",
        assignee: "Sevgi"
    },
    {
        id: 49,
        title: "Review Application Performance",
        description: "Identify slow pages and optimize resource loading.",
        status: "pending",
        priority: "medium",
        assignee: "Özlem"
    },
    {
        id: 50,
        title: "Update README Documentation",
        description: "Explain installation, configuration, and project usage.",
        status: "completed",
        priority: "low",
        assignee: "Eslem"
    }
];

module.exports = tasks;
