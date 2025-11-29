

<h1 align="center">IMENA MOVES – React Management System</h1>

<p align="center">
  A complete management system for Members, Attendance,
 Collaboration, Entertainment, and Settings — built with React +
 Global Context + LocalStorage Persistence.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-blue" />
  <img src="https://img.shields.io/badge/Vite-5-purple" />
  <img src="https://img.shields.io/badge/LocalStorage-Persistent-green" />
  <img src="https://img.shields.io/badge/State-ContextAPI-orange" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey" />
</p><img width="1322" height="641" alt="dash_090801" src="https://github.com/user-attachments/assets/c9571c73-4370-4c42-9dc3-ab68dcacf0d6" />
<img width="1345" height="650" alt="im_090825" src="https://github.com/user-attachments/assets/541075de-b7ce-4306-92e7-240f7825ba4b" />


### Landing page 
[Dashboard](public/screenshots/landing.png)

### Dashboard Page
![Members](public/screenshots/dashboard.png)
## ✨ Features Overview

| Module | Description |
|--------|-------------|
| *Members* | Add, edit, delete, list all members with auto-generated IDs |
| *Attendance* | Mark attendance per member & track dates |
| *Collaboration* | Group messages, announcements & notes |
| *Entertainment* | Music, videos, dance routines, playlists |
| *History* | Auto-record everything: "added member", "updated", "attendance recorded" |
| *Settings* | Themes, username preferences, personalization |
| *Global State* | Entire app powered by one global AppContext |
| *Persistence* | All modules save to LocalStorage permanently |

---

## 🏗 Project Structure

src/ │── context/ │     └── AppContext.jsx │ │── utils/ │     └── local.js │ │── pages/ │     ├── Dashboard.jsx │     ├── Members.jsx │     ├── Attendance.jsx │     ├── Collaboration.jsx │     ├── Entertainment.jsx │     ├── History.jsx │     └── Settings.jsx │ │── components/ │     ├── Navbar.jsx │     ├── Footer.jsx │     └── MemberCard.jsx │ │── App.jsx └── main.jsx

---

## 🧠 Global State Architecture (AppContext)

AppContext ifasha app yose:

- Stores:
  - members
  - attendance
  - collaboration
  - entertainment
  - history
  - settings

- Functions:
  - addMember()
  - updateMember()
  - deleteMember()
  - markAttendance()
  - addCollaboration()
  - addEntertainment()
  - pushHistory()
  - saveToLocal() / loadFromLocal()

- Automatic persistence using:
```js
localStorage.setItem("imena_data", JSON.stringify(state));


---

🚀 Installation & Running

1️⃣ Clone repo

git clone <your-repo-url>
cd imenamoves

2️⃣ Install dependencies

npm install

3️⃣ Run the project

npm run dev

4️⃣ Build for production

npm run build


---

📦 Technologies Used

Frontend

React 18

Vite 5

Context API

JavaScript ES2023

CSS3 / Tailwind (depending on your styling)

React Icons


Storage

LocalStorage Sync



---

🔌 Example: Adding Member via Global Context

addMember({
  id: crypto.randomUUID(),
  fullName: "John Doe",
  gender: "Male",
  phone: "+250788...",
  joinDate: "2025-01-01"
});




📜 License

This project is licensed under the MIT License.



👩‍💻 Author

Umugwaneza Aline
Full-stack Developer | 
📍 Kigali – Rwanda
GitHub: https://github.com/AlineHub-tech
<img width="1345" height="650" alt="im" src="https://github.com/user-attachments/assets/53347cd6-9e0a-4c34-b421-3d27c25993c6" />
<img width="1322" height="641" alt="dash" src="https://github.com/user-attachments/assets/a3457a33-daa3-4699-a375-e177e32f75bc" />
