# 🚀 Intergalactic Cargo Triager

## 📌 Project Overview

This is a full-stack application built as part of an evaluation project.
It processes cargo manifest data, exposes it via an API, and displays it in an interactive dashboard.

---

## 🧩 Tasks Implemented

### ✅ Task 1: Parser

* Parsed raw `manifest.txt` file
* Applied business rules:

  * Adjusted weights for specific destinations
  * Removed cargo with prime number weights
* Generated structured JSON output

---

### ✅ Task 2: API

* Built a Flask API
* Endpoint:

  * `GET /api/cargo` → returns cargo data
* Implemented Business Rule:

  * If header `X-System-Override: true` is present
    → returns **418 I'm a teapot** with message
    `"System override denied."`

---

### ✅ Task 3: Dashboard

* Built a React frontend
* Displays cargo data in a table
* Implemented Business Rule:

  * Sorted by weight (highest → lowest)
  * Cargo destined for **Earth always stays at the bottom**
* Added Sync button with 2.5s delay simulation
* Added UI improvements (hover effect, clean layout, record count)

---

## 🛠 Tech Stack

* **Backend:** Python, Flask
* **Frontend:** React
* **Version Control:** Git & GitHub

---

## ⚙️ How to Run the Project

### 🔹 Step 1: Run Backend (Flask)

Open terminal:

```bash
cd IntergalacticCargoTriager-Akula
pip install flask flask-cors
python api.py
```

Backend runs at:

```
http://127.0.0.1:5000/api/cargo
```

---

### 🔹 Step 2: Run Frontend (React)

Open a new terminal:

```bash
cd dashboard
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 📡 API Endpoint

```
GET /api/cargo
```

---

## 🔥 Key Features

* Data parsing and transformation
* REST API with conditional override logic
* Interactive dashboard UI
* Custom sorting logic with business rule exception
* Sync button with simulated delay
* Clean and responsive UI

---

## 📌 Notes

* Backend must be running before starting frontend
* Both frontend and backend run locally
* Designed with simplicity, clarity, and usability in mind

---
