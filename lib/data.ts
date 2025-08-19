export const siteData = {
  "testSuites": [
    {
      "id": 1,
      "name": "Unit Tests",
      "status": "passed",
      "testsCount": 24,
      "passedCount": 24,
      "failedCount": 0,
      "duration": "2.4s"
    },
    {
      "id": 2,
      "name": "Integration Tests",
      "status": "passed",
      "testsCount": 12,
      "passedCount": 12,
      "failedCount": 0,
      "duration": "8.7s"
    },
    {
      "id": 3,
      "name": "E2E Tests",
      "status": "pending",
      "testsCount": 8,
      "passedCount": 0,
      "failedCount": 0,
      "duration": "0s"
    }
  ],
  "testResults": [
    {
      "id": 1,
      "name": "Button Component Test",
      "suite": "Unit Tests",
      "status": "passed",
      "duration": "0.08s",
      "timestamp": "2024-01-10T10:30:00Z",
      "message": ""
    },
    {
      "id": 2,
      "name": "Form Validation Test",
      "suite": "Unit Tests",
      "status": "passed",
      "duration": "0.15s",
      "timestamp": "2024-01-10T10:30:05Z",
      "message": ""
    },
    {
      "id": 3,
      "name": "API Error Handling",
      "suite": "Integration Tests",
      "status": "failed",
      "duration": "1.2s",
      "timestamp": "2024-01-10T10:31:00Z",
      "message": "Expected status 400, received 500"
    }
  ],
  "settings": {
    "testEnvironment": "development",
    "timeout": 30,
    "verbose": true,
    "parallel": false,
    "coverage": true,
    "browser": "chrome"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Test Results",
      "route": "/tests",
      "icon": "clipboard-list"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "cog"
    }
  ],
  "footer": [
    {
      "label": "Documentation",
      "route": "/docs",
      "external": true
    },
    {
      "label": "Support",
      "route": "/support",
      "external": true
    }
  ]
};