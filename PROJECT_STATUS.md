# Rangdhanu DUET Project Status

This file is the handoff record for future agents. Read it before changing
authentication, member profiles, committee submissions, or the Apps Script
backend.

## Repository and deployment

- Frontend: static GitHub Pages site (`index.html`, `script.js`, `custom.css`).
- Backend: Google Apps Script files under `backend/`.
- Repository: `razoyan420/Rangdhanu-`.
- Main branch includes the latest committee authentication fix at commit
  `b4eb8eb` (`Fix member token on committee submissions`).
- The live page was verified serving `script.js?v=20260914-1455`.
- Backend deployment is separate from GitHub Pages; backend changes must be
  deployed to the Apps Script web app before live backend behavior changes.
- Phase 1 of the unclaimed-record model was deployed to Apps Script on
  2026-09-14. It creates the `Unclaimed_Profiles` sheet on first use and
  exposes an admin-only `adminunclaimedprofiles` endpoint.
- Phase 2 was deployed to Apps Script on 2026-09-14. Membership applications
  now compare normalized Name, Series, Department, and Mobile against open
  unclaimed records. Three or four matches create a pending `Unclaimed_Matches`
  row; no automatic merge occurs.

## Completed and live-tested

### Member authentication

- Google Identity Services member sign-in.
- Member token persisted in `localStorage` under `rd_member_token`.
- Session restoration after refresh/revisit and silent renewal attempts.
- Logout removes the saved member session.
- Navigation `My Profile` dropdown contains Profile, Update profile, and Log
  out.
- Profile and update-profile flows are connected to the authenticated member
  session.
- A real member session was used to verify the live authenticated flow.

### Committee submission

- Committee submission is gated at the main CTA: signed-out users are sent to
  member sign-in; signed-in users can open the form.
- Form modes: `My information` and `Another member`.
- Existing member search and autofill.
- Own-member private contacts can populate mobile and email.
- Committee, session, position, department, series, mobile, email, message,
  and optional photo fields are supported.
- Submission records store `Submitted By`, `Submission Mode`, and
  `Target Member ID`.
- The frontend now sends `memberToken` with authenticated POST requests. This
  fixed the live error where the form opened but submission said
  "Please sign in before submitting committee information."
- Backend still validates the member token; do not bypass this check.
- Admin approval workflow is present. Approved entries appear on the public
  Committee page.

### Committee photos and privacy

- Optional JPG, PNG, and WEBP committee photos are uploaded as base64 to Apps
  Script.
- Photos are saved in Google Drive under the committee photo folder, in an
  entry-specific subfolder.
- The resulting photo URL is stored in the committee sheet and displayed
  after approval.
- Public responses omit private mobile/email data.
- Authenticated member responses can receive permitted private contacts.
- Committee redesign, committee/session tabs, leader/member cards, and
  profile/message actions are implemented.

## Partially implemented: unclaimed profile and manual merge model

The following requested model is still pending. Do not claim that it exists
until it is implemented and live-tested:

1. **Implemented:** When one member submits another person's committee
   information and an admin approves it, create one distinct `UP-####`
   unclaimed record linked to the source committee entry.
2. Keep the submitter only as internal `Submitted By`; never make the submitter
   the profile owner.
3. **Implemented:** When the named person later submits a membership
   application, normalize and compare Name, Series, Department, and Mobile.
4. **Implemented:** Flag a possible match when any 3 of those 4 fields match
   exactly after normalization.
5. Show an admin notification containing the old and new records, including
   conflicts.
6. Require an explicit admin choice: `Merge records` or `Keep separate`.
7. On merge, use the latest verified membership application for personal
   fields (name, series, department, mobile, photo, email, bio/contact data).
8. Preserve approved committee history, messages, sessions, positions, and
   original submission references.
9. Detect duplicate committee entries and send conflicts to admin review
   instead of silently duplicating or deleting data.
10. Keep an audit record of who merged, when, which records were merged, and
    the pre-merge values.
11. Provide a safe undo path for an erroneous merge.
12. Add admin UI and backend routes for match review, merge, keep-separate,
    audit, and undo.

The unclaimed record and 3-of-4 matching phases are live in Apps Script. The
admin panel now has `Unclaimed Profiles` and `Possible Matches` tabs. The
record is not yet manually mergeable from the panel; merge/review/audit/undo
remain pending.

## Validation already performed

- `node --check script.js` passed after the latest authentication fix.
- `git diff --check` passed.
- Live sign-in, profile display, committee form opening, another-member
  autofill, authenticated submission, admin approval, and Drive photo
  visibility were verified in a browser.
- The unclaimed/merge workflow has not been implemented or end-to-end tested.

## Important implementation notes

- Keep public/private contact boundaries intact.
- Keep `memberToken` separate from `adminToken`.
- Do not make a committee submitter the owner of another person's profile.
- Do not automatically merge records, even if three fields match.
- Preserve user changes already present in the worktree; inspect status before
  editing.
- After frontend changes, update the `script.js?v=...` cache-busting version.
- After backend changes, deploy the Apps Script web app and verify the live
  endpoint, not only local source.
