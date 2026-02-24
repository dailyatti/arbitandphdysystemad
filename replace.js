const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Title & Meta
content = content.replace('Risk-Free Sports Investment', 'Math-Driven Sports Investment');
content = content.replace(
    'professional-grade arbitrage calculator and PhD-level betting system. Guaranteed risk-free profits through mathematical exploitation of bookmaker odds.',
    'Professional-grade arbitrage calculator and PhD-level betting system. Mathematical edge through probability and odds exploitation.'
);

// Hero Title & Subtitle
content = content.replace(
    /Stop Gambling\.<br>\s*<span class="hero__title--gradient">Start Investing\.<\/span>/,
    'Betting,<br>\n                <span class="hero__title--gradient">Engineered.</span>'
);

content = content.replace(
    /Transform sports betting into a predictable income stream using <strong>risk-free arbitrage<\/strong> and\s*<strong>PhD-level probabilistic models<\/strong>\. Our tools do the math — you collect the profit\./,
    'Transform sports betting into a structured portfolio using <strong>math-driven arbitrage</strong> and <strong>PhD-level probabilistic models</strong>. Math-driven edge for disciplined bettors.'
);

// Stats
content = content.replace('<span class="stat__number">0%</span>', '<span class="stat__number"><i class="fa-solid fa-calculator"></i></span>');
content = content.replace('<span class="stat__label">Risk with Arbitrage</span>', '<span class="stat__label">Defined-Risk Approach</span>');

// Section badges & descriptions
content = content.replace(/<span class="section__badge section__badge--blue"><i class="fa-solid fa-shield-halved"><\/i> Zero\s*Risk<\/span>/, '<span class="section__badge section__badge--blue"><i class="fa-solid fa-shield-halved"></i> Math-Driven Edge</span>');

content = content.replace(
    /<strong>Profit is mathematically guaranteed<\/strong> — regardless of who wins\./,
    '<strong>Outcomes are mathematically defined</strong> — regardless of who wins.'
);

// Arbitrage Steps
content = content.replace(
    /Place the bets\. No matter who wins, you earn a guaranteed return on your investment\./,
    'Place the bets. No matter who wins, your return is defined before the event starts.'
);

// Math Cards
content = content.replace('To guarantee equal profit regardless of outcome', 'To equalize returns regardless of outcome');
content = content.replace('<h4>Guaranteed Return on Investment</h4>', '<h4>Calculated Return on Investment</h4>');
content = content.replace('Your guaranteed profit percentage', 'Your calculated return percentage');
content = content.replace('the larger your guaranteed profit.', 'the larger your built-in edge.');

// Example Card
content = content.replace('<strong>Verify Guaranteed Payout</strong>', '<strong>Verify Calculated Payout</strong>');
content = content.replace('<span class="result-highlight__label">Guaranteed Profit</span>', '<span class="result-highlight__label">Calculated Profit</span>');
content = content.replace('No matter who wins. Zero risk. Pure mathematics.', 'No matter who wins. Execution-dependent edge. Pure mathematics.');

// Pricing Card
content = content.replace('Risk-free arbitrage calculator', 'Math-driven arbitrage calculator');

fs.writeFileSync('index.html', content);
