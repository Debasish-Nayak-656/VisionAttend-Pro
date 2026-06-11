# VisionAttend 4.0 — Setup Guide

## Prerequisites
- Python 3.10+
- Node.js 18+ (optional, for dev server)
- MySQL 8.0+ or SQLite 3
- Webcam / IP Camera
- RFID Reader (RC522 or EM18)

## Quick Start (Frontend Only)
```bash
git clone https://github.com/YOUR_USERNAME/visionattend.git
cd visionattend
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

## Backend Setup (Python + Flask)
```bash
pip install flask opencv-python face_recognition mysql-connector-python
python backend/app.py
```

## Hardware Wiring (RC522 RFID)
| RC522 Pin | Raspberry Pi Pin |
|-----------|-----------------|
| SDA       | GPIO 8 (CE0)    |
| SCK       | GPIO 11 (SCLK)  |
| MOSI      | GPIO 10 (MOSI)  |
| MISO      | GPIO 9 (MISO)   |
| GND       | GND             |
| RST       | GPIO 25         |
| 3.3V      | 3.3V            |

## Database Schema (MySQL)
```sql
CREATE DATABASE visionattend;
USE visionattend;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  department VARCHAR(10),
  section VARCHAR(5),
  rfid_tag VARCHAR(20) UNIQUE,
  face_encoding BLOB,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(20),
  gate VARCHAR(10),
  verified_by ENUM('face','rfid','both'),
  confidence FLOAT,
  status ENUM('present','late','denied'),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(student_id)
);
```
