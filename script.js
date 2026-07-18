const chapters = {
  screening: {
    title: "Daily slate screening",
    intro: "Start wide, then narrow the slate before spending time on individual matches.",
    inputs: ["Today’s eligible tennis matches", "Current decimal odds and surface", "Recent form and availability notes"],
    output: "A ranked shortlist, skip list, key uncertainty and the next research question for each match."
  },
  match: {
    title: "Single-match analysis",
    intro: "Build a fair probability estimate from relevant evidence before looking for value.",
    inputs: ["Surface-adjusted form and matchup", "Serve and return performance", "Fitness, schedule and market context"],
    output: "Fair win probability for each player, confidence level, main drivers and unresolved risks."
  },
  ev: {
    title: "Expected value calculation",
    intro: "Translate the difference between your estimate and the offered price into a comparable edge.",
    inputs: ["Estimated fair probability", "Verified decimal odds", "Thresholds and uncertainty margin"],
    output: "Implied probability, estimated edge, sensitivity range and a clear pass-or-skip decision."
  },
  kelly: {
    title: "Fractional Kelly staking",
    intro: "Size exposure with a conservative, capped approach instead of betting from conviction.",
    inputs: ["Estimated edge and decimal odds", "Current bankroll units", "Kelly fraction and maximum cap"],
    output: "Suggested unit range, capped fractional-Kelly size and explicit risk notes."
  },
  redteam: {
    title: "Red-team review",
    intro: "Ask a second model to challenge the thesis, assumptions and missing information.",
    inputs: ["The full original analysis", "Your probability and price", "Evidence that could falsify the thesis"],
    output: "Strongest counter-case, missing data, model disagreement and a revised confidence level."
  },
  shopping: {
    title: "Line shopping",
    intro: "Compare verified prices because a sound analysis can still be a poor decision at the wrong number.",
    inputs: ["The exact market and rules", "Current prices from verified sources", "Time-stamped availability"],
    output: "Best verified price, implied-probability comparison and any execution caveats."
  },
  review: {
    title: "Weekly process review",
    intro: "Separate decision quality from short-term outcomes and improve the workflow over time.",
    inputs: ["Every graded decision", "Closing price and result", "Notes on process adherence"],
    output: "Band-level results, recurring errors, process changes and next week’s testing priorities."
  }
};

const title = document.querySelector("#chapter-title");
const intro = document.querySelector("#chapter-intro");
const inputs = document.querySelector("#chapter-inputs");
const output = document.querySelector("#chapter-output");
const tabs = [...document.querySelectorAll(".content-tab")];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const chapter = chapters[tab.dataset.chapter];
    if (!chapter) return;

    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    title.textContent = chapter.title;
    intro.textContent = chapter.intro;
    inputs.replaceChildren(...chapter.inputs.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }));
    output.textContent = chapter.output;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const header = document.querySelector(".site-header");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 120);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
