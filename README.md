# 👁️ VisionAttend 4.0

<div align="center">

![VisionAttend Banner](https://img.shields.io/badge/VisionAttend-4.0-00e5ff?style=for-the-badge&logo=opencv&logoColor=white)
![AI](https://img.shields.io/badge/AI-Face%20Recognition-00ff9d?style=for-the-badge)
![RFID](https://img.shields.io/badge/RFID-Verified-ffb300?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**An AI-powered Smart Attendance System combining Face Recognition + RFID Technology**

[🚀 Live Demo](#) · [📄 Docs](./docs/) · [🐛 Issues](../../issues) · [⭐ Star this repo](#)

</div>

---

## 📌 Abstract

VisionAttend 4.0 is an advanced smart attendance system that integrates Artificial Intelligence and RFID technology to automate and secure student attendance processes. Traditional methods are often time-consuming, error-prone, and vulnerable to proxy attendance. This system uses real-time face detection and identification to accurately record student presence as they enter through the gate, even when multiple students arrive simultaneously. By combining computer vision with RFID verification, it ensures both accuracy and security. The system provides instant data updates and centralized monitoring, reducing manual effort for teachers while enhancing transparency, efficiency, and reliability in educational institutions.

---

## ❗ Problem Statement

In many educational institutions, attendance is still recorded manually or through basic digital systems that are inefficient and prone to human error. These traditional methods consume valuable classroom time and create opportunities for proxy attendance — where one student marks attendance for another. Managing simultaneous entry of multiple students leads to inaccuracies and bottlenecks. Existing systems lack real-time identity verification, centralized monitoring, and proper security mechanisms. There is a critical need for an intelligent, automated attendance system that can handle concurrent entries, provide reliable multi-factor identification, prevent fraud, and deliver instant data to faculty and administrators — without disrupting the natural flow of students entering campus.

---

## 💡 Proposed Solution

VisionAttend 4.0 solves these challenges through a dual-verification architecture combining **AI-based face recognition** with **RFID card scanning**. As a student enters the gate, the RFID reader captures their card ID while the camera simultaneously runs face recognition — both must match the student record for attendance to be marked. The system supports **multi-student simultaneous detection**, handles real-time data logging to a centralized dashboard, and sends instant alerts for mismatches or proxy attempts. Faculty can monitor live camera feeds, view class-wise attendance stats, and export reports — all from a single web interface. This eliminates manual errors, prevents proxy attendance, and brings full automation to institutional attendance management.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎭 **Face Recognition** | Real-time AI face detection with confidence scoring |
| 📡 **RFID Verification** | Dual-factor identity confirmation via RFID cards |
| 👥 **Multi-Person Detection** | Simultaneous detection of multiple students at a gate |
| 🚫 **Proxy Prevention** | Cross-match face + RFID to block impersonation |
| 📊 **Live Dashboard** | Real-time attendance feed, stats, and camera grid |
| 📈 **Analytics** | Weekly trends, class-wise reports, attendance percentages |
| 🔔 **Smart Alerts** | Instant notifications for mismatches, offline readers, anomalies |
| 📤 **Export Reports** | Download attendance data as CSV / PDF |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    ENTRY GATE                           │
│  ┌──────────────┐        ┌────────────────────────┐    │
│  │  RFID Reader │──────▶ │   Identity Matcher     │    │
│  └──────────────┘        │   (Face ID + RFID)     │    │
│  ┌──────────────┐──────▶ │                        │    │
│  │  IP Camera   │        └────────────┬───────────┘    │
│  └──────────────┘                     │                 │
└──────────────────────────────────────│──────────────────┘
                                        ▼
                          ┌─────────────────────────┐
                          │   Attendance Engine     │
                          │  (Python + OpenCV +     │
                          │   face_recognition)     │
                          └────────────┬────────────┘
                                        ▼
                          ┌─────────────────────────┐
                          │     Database (MySQL)    │
                          │  Students | Attendance  │
                          │  RFID Tags | Logs       │
                          └────────────┬────────────┘
                                        ▼
                          ┌─────────────────────────┐
                          │   Web Dashboard (HTML)  │
                          │  Live Feed | Analytics  │
                          │  Reports | Alerts       │
                          └─────────────────────────┘
```

---

## 🛠️ Tech Stack

**Frontend**
- HTML5, CSS3, Vanilla JavaScript
- Rajdhani + JetBrains Mono fonts
- Real-time UI with CSS animations

**Backend** *(planned / extendable)*
- Python 3.10+
- Flask / FastAPI
- OpenCV + `face_recognition` library
- MySQL / SQLite

**Hardware**
- RFID Reader (RC522 / EM18)
- IP Camera (1080p recommended)
- Raspberry Pi 4 / PC

---

## 📁 Project Structure

```
visionattend/
├── index.html              # Landing page
├── dashboard.html          # Main dashboard UI
├── pages/
│   ├── students.html       # Student management
│   ├── cameras.html        # Live camera feeds
│   ├── reports.html        # Reports & exports
│   └── settings.html       # System settings
├── css/
│   └── styles.css          # Global styles
├── js/
│   ├── dashboard.js        # Dashboard logic
│   ├── clock.js            # Real-time clock
│   └── charts.js           # Chart rendering
├── assets/
│   └── logo.svg            # Brand assets
├── docs/
│   ├── ARCHITECTURE.md     # System design docs
│   ├── SETUP.md            # Installation guide
│   └── API.md              # API reference
└── README.md
```

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/visionattend.git

# Navigate to project
cd visionattend

# Open dashboard directly in browser
open dashboard.html

# OR serve locally
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 📸 Screenshots

> Dashboard · Live Feed · Reports

The system features a dark cyberpunk-inspired UI with:
- Real-time entry feed with verification status
- 4-camera live grid with face detection overlays
- Weekly attendance trend charts
- Class-wise progress tracking

---

## 🔮 Future Roadmap

- [ ] Mobile app (React Native) for teachers
- [ ] Voice announcement on entry verification
- [ ] Emotion/health monitoring integration
- [ ] SMS/email alerts for absent students
- [ ] REST API for LMS integration
- [ ] ML model for anti-spoofing (photo attacks)

---

## 👤 Author

**Your Name**
- GitHub: (https://github.com/Debasish-Nayak-656/))
- LinkedIn: (https://www.linkedin.com/in/debasish-nayak-dn556/))

---

## 📄 License

Apache License — see [LICENSE](LICENSE) for details.

---

<div align="center">
Made with ❤️ for smarter campuses · ⭐ Star if you find it useful!
</div>
