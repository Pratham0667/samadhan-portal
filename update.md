# Samadhan Portal Update

## Current status
- React + Vite frontend is implemented and builds successfully.
- Landing page has been redesigned as a trust-first civic-service portal with light and dark system themes.
- Fabricated impact metrics, issue examples, and AI rankings are no longer shown on the landing page.
- Login, privacy policy, and not-found pages are implemented.
- No backend or authentication service exists in this workspace yet.

## Completed
- `/` - Samadhan landing page.
- `/login` - validated email/password form. It does not send credentials or pretend to sign in; it reports that authentication is not connected.
- `/privacy-policy` - development-stage policy describing current frontend behavior and identifying service/operator details that must be supplied before launch.
- Unknown paths display a 404 page with a link home.
- Report submissions are disabled and clearly identified as unavailable until a backend is connected.
- Hero uses an illustrative external stock photo with an explicit caption that it is not a Samadhan program image.
- Responsive layout was checked at desktop and 375px mobile widths, with no horizontal overflow. System light and dark themes were checked.
- Browser tab title and search description are set for Samadhan.

## Verification
Run from `client/`:

```powershell
npm run lint
npm run build
```

Both checks passed on October 1, 2026. Browser checks confirmed the login, privacy, and 404 routes; verified the login form does not send credentials or show a fake success; and confirmed the hero image loads.

The development server was started at <http://127.0.0.1:5173/>. To start it again from the repository root:

```powershell
cd client
npm run dev
```

## Current limitations
- There is no `server/` directory or API, so accounts, authentication, problem submissions, and live dashboard data are not connected.
- The landing page's stock image is temporary and should be replaced with approved Samadhan/Jharkhand imagery when supplied.
- The landing page does not display live district activity because no verified data source is connected.
- The privacy policy is accurate for this development frontend, but it is not a finished production policy. The responsible operator must provide their identity/contact, data practices, retention, sharing, and user-rights details before launch.
- The requested asset website link has not been provided yet.

## Future steps

### Immediate decisions and assets
1. Provide the asset website link, approved logo, brand colors, and local photography. Replace the temporary stock photo after assets are approved.
2. Confirm the service owner/operator, user roles, launch districts, and which teams are responsible for reviewing reports.
3. Choose the backend, database, hosting environment, and API contract before connecting frontend forms.

### Backend and data
4. Create the server and database schema for accounts, roles, reports, attachments, status history, and district-level views.
5. Implement authentication and role-based authorization. Store password hashes on the server and use secure sessions or tokens; never store raw passwords in the frontend.
6. Add report submission with server-side validation, upload limits, spam protection, and clear handling of location and personal information.
7. Add report status tracking and connect the district activity area to verified API data. Include loading, empty, and error states.

### Product capabilities
8. Build separate review workflows for public teams, universities, and industry/CSR partners, with permissions appropriate to each role.
9. Define how categorization and prioritization will work. If AI triage is added, provide human review and a way to correct classifications before routing.
10. Add notifications and audit history after the report lifecycle and responsible recipients are agreed.

### Launch readiness
11. Replace the development privacy policy with one approved by the service operator, including contact details, data purposes, sharing, retention, user choices, and applicable legal requirements.
12. Add automated tests for authentication, authorization, report submission, and key page flows. Recheck accessibility, mobile layouts, and error handling.
13. Configure production secrets, HTTPS, backups, monitoring, retention controls, and deployment procedures before accepting real reports.
