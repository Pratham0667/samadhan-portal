# Samadhan

> From community problems to campus solutions.

Samadhan is a societal innovation portal for Jharkhand. Citizens report local problems, AI categorizes and routes them to the best-fit university, student and faculty teams build solutions, and industry partners help fund and deploy them. Government departments track everything on a live dashboard.

![Status](https://img.shields.io/badge/status-in%20development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## Table of Contents

- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [How It Works](#how-it-works)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## The Problem

Communities across Jharkhand face everyday challenges in education, healthcare, agriculture, water, sanitation, and public services. Citizens notice these problems first, but there is no structured way to report them and get them evaluated.

Meanwhile, universities have students and researchers who could solve them, and industries have funding and technical skills to deploy solutions. These three groups rarely collaborate in an organized way.

## The Solution

Samadhan puts citizens, universities, and industry on one platform, so real-world problems become student projects, research, startups, and deployable solutions. This supports the experiential learning and industry collaboration goals of NEP 2020.

## How It Works

```
Citizen reports a problem (photo, video, location)
        |
        v
AI categorizes, prioritizes, and de-duplicates it
        |
        v
System routes it to the best-fit university
        |
        v
University forms a student + faculty team and submits a proposal
        |
        v
Industry / startups / CSR partners fund, mentor, and prototype
        |
        v
Milestones, testing, and deployment are tracked
        |
        v
Government dashboard shows impact across districts
```

## Features

### Citizen Portal
- Submit problems with photos, videos, documents, and GPS location
- Available to citizens, community groups, Panchayati Raj Institutions, Urban Local Bodies, and government departments
- Track the status of submitted problems

### AI Problem Management
- Auto-categorization by domain (education, agriculture, healthcare, water, environment, energy, urban development, accessibility, public administration, rural livelihoods)
- Priority scoring and duplicate detection
- Routing to universities based on discipline, expertise, and facilities

### University Module
- Review assigned challenges
- Form multidisciplinary student teams and assign faculty mentors
- Submit solution proposals and manage project workflows

### Industry Module
- Startups, MSMEs, CSR organizations, and research labs can browse projects
- Offer mentorship, funding, prototyping, and pilot deployment

### Project Lifecycle Management
- Milestones, deliverables, and approvals
- Documentation and testing outcomes
- Intellectual property and implementation tracking

### Analytics Dashboard
- Challenges received and domain-wise distribution
- University and industry participation
- Project completion rates
- Patents filed and startups created
- District-wise community impact

### Notifications
- Email, SMS, and in-app updates for all stakeholders through the project lifecycle

## Tech Stack

> Update this section to match what you actually use.

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| File Storage | Cloud object storage (images and videos) |
| AI / NLP | Text classification and similarity search for categorization and de-duplication |
| Maps | Leaflet / OpenStreetMap |
| Auth | JWT with role-based access control |
| Charts | Recharts / Chart.js |

## Architecture

```
+-----------+     +---------------+     +--------------+
|  React    | --> |  Express API  | --> |  PostgreSQL  |
|  Frontend |     |  (REST + JWT) |     |              |
+-----------+     +-------+-------+     +--------------+
                          |
              +-----------+-----------+
              |                       |
      +-------v-------+       +-------v-------+
      | AI Service    |       | File Storage  |
      | (classify,    |       | (media)       |
      |  dedupe)      |       |               |
      +---------------+       +---------------+
```

### User Roles

| Role | Access |
|---|---|
| Citizen | Submit and track problems |
| University Admin | Review problems, form teams, submit proposals |
| Industry Partner | Browse projects, offer support |
| Government Officer | Dashboard and analytics |
| Platform Admin | Validation, user management |

## Getting Started

### Prerequisites

- Node.js 18 or later
- PostgreSQL 14 or later
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Pratham0667/samadhan-portal.git
cd samadhan-portal

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```


```

### Run the App

```bash
# Start the backend
cd server
npm run dev

# Start the frontend (in a new terminal)
cd client
npm run dev
```

The frontend runs at `http://localhost:5173` and the API at `http://localhost:5000`.

## Project Structure

```
samadhan-portal/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
├── server/          # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
├── docs/            # Diagrams and documentation
└── README.md
```

## Roadmap

- [ ] Citizen problem submission with media and location
- [ ] Authentication and role-based access
- [ ] AI categorization and duplicate detection
- [ ] University routing and team formation
- [ ] Industry partnership module
- [ ] Project milestone tracking
- [ ] Government analytics dashboard
- [ ] Notifications (email, SMS)
- [ ] Multi-language support (Hindi and regional languages)
- [ ] Mobile app

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


