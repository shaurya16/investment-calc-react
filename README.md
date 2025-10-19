# React Investment Calculator

An interactive React application for exploring how a recurring investment grows over time. Users can adjust the starting amount, yearly contribution, expected return, and duration to see a yearly breakdown of returns.

## Features
- Live recalculation of investment growth as inputs change.
- Year-by-year table showing investment value, yearly interest, cumulative interest, and invested capital.
- Currency formatting powered by the browser `Intl.NumberFormat` API.

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm 9 or newer (bundled with recent Node.js releases)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open the URL printed in the terminal (default: http://localhost:5173) to use the app.

### Production Build
```bash
npm run build
npm run preview
```
`npm run build` outputs an optimized production bundle in `dist/`. `npm run preview` serves that bundle locally for verification.

## Project Structure
- `src/App.jsx` – Root component that owns calculator state and wires the UI together.
- `src/components/Header.jsx` – App header with branding.
- `src/components/UserInput.jsx` – Controlled inputs for investment parameters.
- `src/components/Results.jsx` – Renders the yearly results table derived from the current inputs.
- `src/util/investment.js` – Core logic for calculating yearly investment growth and a currency formatter helper.
- `src/index.jsx` – Vite/React entry point.

## Customization Tips
- Adjust the default investment values in `src/App.jsx` (`initialState`) to change the starting scenario.
- Tweak the styling in `src/index.css` to match your branding, or swap the logo in `src/assets/investment-calculator-logo.png`.
- Extend `calculateInvestmentResults` if you need additional metrics (e.g., inflation-adjusted values or different compounding frequencies).

## Testing
There are no automated tests yet. Consider adding component tests with your preferred framework (e.g., Vitest with React Testing Library) if you plan to evolve the calculator further.

## License
No license has been specified. Add one if you intend to distribute or open-source this project.
