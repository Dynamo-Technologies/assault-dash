# Assault Dash

**WARSIM to Altitude Assault Dashboard** — a configuration and orchestration UI that bridges constructive Army simulation scenarios (WARSIM) with the Altitude Assault drone-operations training environment.

> **Classification:** UNCLASSIFIED. Do not enter or commit classified information into this repository or any running instance.
>
> **Status:** Frontend prototype. The UI surfaces the full integration workflow, but all data is currently held in component state — there is no backend, no live WARSIM connector, and no persistence layer yet.

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-gahz6cev)

---

## Overview

Assault Dash gives an Exercise Controller (EXCON) and supporting staff a single-pane workspace to:

- Pick a WARSIM scenario from a library and stage it for an exercise.
- Capture EXCON master notes — MSEL, BDA parameters, comms environment, intelligence picture, special instructions — and run them through a pluggable AI assistant for extraction and mapping.
- Build out the friendly force structure across **Brigade → Battalion → Company** echelons, including supporting elements, specialized teams, and OPFOR.
- Define the operating environment: terrain, weather, civilian considerations, electronic warfare posture, and WARSIM environmental data hooks.
- Phase the operation on a timeline with STARTEX / ENDEX anchors and time-compression ratios.
- Specify victory conditions, failure conditions, and the assessment method that will score the run.
- Codify rules of engagement, coordination requirements, resource constraints, and the WARSIM export contract.

The intended outcome is a single, internally consistent configuration that can be handed to Altitude Assault as the seed for a drone-operations training run aligned to the WARSIM-driven exercise.

## Audience

- **Exercise Controllers (EXCON / White Cell)** building scenarios for unit training.
- **WARSIM / Altitude Assault integrators** who need a structured front-end to capture cross-system parameters.
- **Trainers and observer-controllers** who need to inspect or tune the scenario before STARTEX.

## Features

The dashboard is organized as a left-rail tab set. Each tab is a self-contained configuration surface.

| Tab | Purpose | Highlights |
| --- | --- | --- |
| **WARSIM Scenario** | Select the source scenario from a WARSIM library. | Date-range filter, name/ID search, status badges (`new`, `existing`, `modified`), single-select with handoff to EXCON Master. |
| **EXCON Master** | Capture exercise-controller notes and run them through an AI model. | Pre-populated MSEL / BDA / comms / intel / SPINS template, multi-select model picker (ChatGPT 4, Claude 4, Llama 75b), simulated processing flow, classification banner. |
| **Brigade Level** | Strategic command configuration. | Brigade type and size, staff sections (S1–S6), supporting elements (artillery, air, logistics), WARSIM UIC and C-rating, OPFOR composition. |
| **Battalion Level** | Operational control. | Battalion CRUD (up to 4), strength/equipment/role, specialized assets (SIGINT, EW, CBRN, sustainment), WARSIM Battle Tracking Number, adjudication mode. |
| **Company Level** | Tactical execution. | Company CRUD (up to 6) with weapons, vehicles, special equipment, mission, and grid location; specialized team toggles. |
| **Environmental Factors** | Operating environment. | Terrain features, obstacles, cover/concealment, weather and time of day, population density and infrastructure, comms / surveillance / EW posture, WARSIM env integration fields. |
| **Execution Timeline** | Phase the operation. | Phase CRUD (up to 6) with brigade / battalion / company actions per phase, STARTEX / ENDEX anchors, time-compression ratio (1:1 → 12:1). |
| **Victory Conditions** | Success and failure criteria. | Primary and secondary objectives with completion toggles, configurable failure conditions, assessment method (auto WARSIM, manual, hybrid), success metrics, data-collection points. |
| **Special Instructions** | ROE and integration details. | Free-text ROE, FPCON level, joint/coalition coordination, resource constraints, innovation opportunities, WARSIM export path / version / compatibility notes. |

A top-bar **Import WARSIM** action simulates ingest progress, and **Save Configuration** is the intended commit point for the assembled scenario.

## Tech Stack

- **React 18** with **TypeScript 5** (strict mode)
- **Vite 5** for dev server and build
- **Tailwind CSS 3** with a small custom navy palette
- **React Router DOM 6** (currently a single `/` route, wired for future expansion)
- **lucide-react** for iconography
- **class-variance-authority**, **clsx**, **tailwind-merge** for the `Button` variant system and the `cn()` class merger
- **date-fns** for date utilities
- **ESLint** (typescript-eslint, react-hooks, react-refresh)

The project was bootstrapped from the `bolt-vite-react-ts` template (see `.bolt/`).

## Getting Started

### Prerequisites

- **Node.js 18+** (Vite 5 requires Node 18.0+ or 20.0+)
- **npm** (ships with Node) — or your package manager of choice

### Install

```bash
git clone https://github.com/Dynamo-Technologies/assault-dash.git
cd assault-dash
npm install
```

### Run the dev server

```bash
npm run dev
```

Vite will print a local URL (default `http://localhost:5173`). The app hot-reloads on file changes.

### Build for production

```bash
npm run build
npm run preview   # serves the built bundle locally
```

The production bundle is emitted to `dist/`.

### Lint

```bash
npm run lint
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR. |
| `npm run build` | Type-check (via the bundler) and build the production bundle to `dist/`. |
| `npm run preview` | Serve the production build locally for smoke-testing. |
| `npm run lint` | Run ESLint across the project. |

## Project Structure

```
assault-dash/
├── index.html                     # Vite entry HTML
├── package.json                   # Scripts and dependencies
├── tailwind.config.js             # Tailwind config (custom navy palette)
├── postcss.config.js              # PostCSS pipeline
├── vite.config.ts                 # Vite + React plugin config
├── eslint.config.js               # Flat ESLint config
├── tsconfig*.json                 # TypeScript project references
├── .bolt/                         # Bolt template metadata
└── src/
    ├── main.tsx                   # React root
    ├── App.tsx                    # ThemeProvider + Router + layout shell
    ├── index.css                  # Tailwind directives
    ├── vite-env.d.ts
    ├── context/
    │   └── ThemeContext.tsx       # Dark/light theme provider (state)
    ├── lib/
    │   └── utils.ts               # `cn()` — clsx + tailwind-merge
    └── components/
        ├── Header.tsx             # App bar with theme toggle
        ├── Dashboard.tsx          # Tab orchestrator
        ├── ui/
        │   ├── Button.tsx         # CVA-based button variants
        │   └── FormField.tsx      # Labeled input with optional icon
        ├── scenarios/
        │   └── ScenarioSelector.tsx
        ├── excon/
        │   └── ExconMaster.tsx
        ├── operational/
        │   ├── BrigadeLevel.tsx
        │   ├── BattalionLevel.tsx
        │   └── CompanyLevel.tsx
        ├── environment/
        │   └── EnvironmentalFactors.tsx
        ├── execution/
        │   └── ExecutionTimeline.tsx
        ├── assessment/
        │   └── VictoryConditions.tsx
        └── instructions/
            └── SpecialInstructions.tsx
```

## Glossary

A few terms used throughout the UI:

- **WARSIM** — Warfighter Simulation, a US Army-grade constructive simulation used to drive scenarios and adjudicate effects.
- **Altitude Assault** — the drone-operations training environment this dashboard feeds into.
- **EXCON** — Exercise Control / Exercise Controller, the white-cell staff running the exercise.
- **MSEL** — Master Scenario Event List.
- **BDA** — Battle Damage Assessment.
- **STARTEX / ENDEX** — Exercise start and end times.
- **ORBAT** — Order of Battle.
- **UIC / BTN** — Unit Identification Code / Battle Tracking Number from WARSIM.
- **OPFOR** — Opposing Force.
- **FPCON** — Force Protection Condition.
- **ROE** — Rules of Engagement.
- **C-Rating (C1–C4)** — Training/combat readiness rating.

## Current Status and Limitations

This is a UI-first prototype. The following are **not yet implemented**:

- WARSIM ingest is simulated (animated progress bar; no parser or connector).
- AI processing of EXCON notes is stubbed with a `setTimeout`; no model is actually called.
- "Save Configuration" / per-tab save buttons do not persist to a backend or to local storage.
- The scenario library is mock data hard-coded in `ScenarioSelector.tsx`.
- The dark/light theme toggle in the header updates context but does not yet rewire Tailwind class trees — the app currently renders dark.
- There is a single route (`/`); routing is wired but unused beyond the dashboard.
- There are no automated tests.

These are the natural next milestones for the project.

## Contributing

External contributions are not yet accepted. Internal contributors should:

1. Open a feature branch off `main`.
2. Run `npm run lint` and `npm run build` before opening a PR.
3. Keep all content in the repo and any deployed instance **UNCLASSIFIED**. Use code names or unclassified summaries when referencing classified material.

## License

No license has been declared for this repository yet. Until a `LICENSE` file is added, all rights are reserved by the copyright holder. Consumers should treat the source as proprietary and obtain explicit permission before reuse.

## Maintainers

Maintained by **Dynamo Technologies**.
