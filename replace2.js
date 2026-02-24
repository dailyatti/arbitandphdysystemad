const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1) Meta description
content = content.replace(
    'Professional-grade arbitrage calculator and PhD-level betting system. Mathematical edge through probability and odds exploitation.',
    'Arbitrage calculator + PhD-level models to identify pricing inefficiencies and +EV spots. Execution-dependent.'
);

// 2) Used by badge
content = content.replace(
    '<i class="fa-solid fa-bolt"></i> Used by 500+ Professional Bettors',
    '<i class="fa-solid fa-bolt"></i> Built for disciplined bettors'
);

// 4) Hero subtitle ending
content = content.replace(
    'Math-driven edge for disciplined bettors.',
    'Math-driven edge. Executed right.'
);

// 3) Stats
content = content.replace(
    '<span class="stat__number" data-target="6.2">6.2%</span>',
    '<span class="stat__number" data-target="0.5-3">0.5-3%</span>'
);
content = content.replace(
    '<span class="stat__label">Avg. ROI per Arb</span>',
    '<span class="stat__label">Typical Arb Edge</span>'
);

// Replace the +EV stat
const evStatRe = /<div class="stat">\s*<span class="stat__number">\+EV<\/span>\s*<span class="stat__label">Every Single Bet<\/span>\s*<\/div>/;
content = content.replace(evStatRe, '<div class="stat">\n                    <span class="stat__number">Edge > 0</span>\n                    <span class="stat__label">Model-validated picks</span>\n                </div>');

// Replace the 24/7 scanning stat
const scanStatRe = /<div class="stat">\s*<span class="stat__number">24\/7<\/span>\s*<span class="stat__label">Market Scanning<\/span>\s*<\/div>/;
content = content.replace(scanStatRe, '<div class="stat">\n                    <span class="stat__number">Fast</span>\n                    <span class="stat__label">Rapid Workflow</span>\n                </div>');

fs.writeFileSync('index.html', content);
