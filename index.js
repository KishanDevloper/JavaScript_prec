/**
 * JavaScript Zero to Mastery Roadmap
 * ---------------------------------
 * Is roadmap ko order me follow karo. Har topic par:
 * 1. Concept samjho, 2. khud code likho, 3. edge cases socho,
 * 4. apna solution explain karo, 5. Git me commit karo.
 *
 * Rule: sirf videos dekhna progress nahi hai. Har phase ka project
 * bina tutorial copy kiye banana mastery ka proof hai.
 */

const roadmap = [
  {
    phase: 1,
    title: "JavaScript aur developer setup",
    learn: [
      "JavaScript kya hai; browser vs Node.js",
      "VS Code, terminal, Node.js, npm aur DevTools basics",
      "console.log, comments, errors aur reading error messages",
      "Git basics: status, add, commit, log"
    ],
    realWorld: "Chhota script banao jo expense items ka total print kare.",
    practice: ["Numbers ko format karo", "Broken code me syntax error dhoondo"],
    checkpoint: "Apne words me batao code browser ya Node me kaise run hota hai."
  },
  {
    phase: 2,
    title: "Core language fundamentals",
    learn: [
      "let, const, data types, type conversion aur truthy/falsy",
      "Operators, comparisons, if/else, switch, loops",
      "Functions, parameters, return, scope aur arrow functions",
      "Strings, arrays, objects, destructuring, spread/rest",
      "Array methods: map, filter, find, reduce, some, every"
    ],
    realWorld: "Product list se search, category filter, price sorting aur cart total nikalo.",
    practice: [
      "Frequency counter se word/character count",
      "Duplicate items hatao aur unique values group karo",
      "Cart subtotal, discount, tax aur final total calculate karo"
    ],
    checkpoint: "Built-in methods ke saath aur loops ke saath dono solutions samjha sako."
  },
  {
    phase: 3,
    title: "Problem solving aur debugging",
    learn: [
      "Problem ko chhote steps me todna; input/output clarify karna",
      "Pseudocode, dry run, edge cases aur readable variable names",
      "Debugger breakpoints, call stack aur console inspection",
      "Big O ka intro: time aur space complexity"
    ],
    realWorld: "Support ticket data me duplicate tickets identify karke priority ke hisaab se sort karo.",
    practice: [
      "Anagram/palindrome check",
      "Array me missing number aur second largest value",
      "Frequency map, grouping aur pagination logic",
      "Har solution ke liye empty, invalid aur large input cases likho"
    ],
    checkpoint: "Solution likhne se pehle approach aur complexity explain kar pao."
  },
  {
    phase: 4,
    title: "Browser JavaScript aur DOM",
    learn: [
      "DOM select/update, events, forms aur event bubbling",
      "Input validation, accessibility basics aur localStorage",
      "Modules, import/export aur browser storage limits"
    ],
    realWorld: "Task manager banao: add, edit, complete, delete, filter; refresh ke baad data rahe.",
    practice: ["Search-as-you-type", "Form errors ko field ke paas dikhana", "Empty/loading/error UI states"],
    checkpoint: "UI ko mouse aur keyboard se use karke common edge cases check karo."
  },
  {
    phase: 5,
    title: "Asynchronous JavaScript aur APIs",
    learn: [
      "Event loop ka basic model, callbacks, promises, async/await",
      "fetch, JSON, HTTP methods/status codes aur request headers",
      "try/catch, loading/error states, timeout/retry concepts",
      "Race conditions aur stale request handling"
    ],
    realWorld: "Public API se products load karo; search, loading, retry aur error states banao.",
    practice: ["Promise.all se parallel requests", "Debounced search", "API response ke missing fields handle karo"],
    checkpoint: "Network tab se request inspect karke failure ka reason samjha sako."
  },
  {
    phase: 6,
    title: "Modern JavaScript aur maintainable code",
    learn: [
      "ES modules, classes ka use case, prototypes ka intro",
      "Closures, this, higher-order functions aur immutability",
      "Error handling, custom errors aur input validation",
      "JSDoc, lint/format tools aur code organization"
    ],
    realWorld: "Cart/business logic ko UI se alag reusable modules me refactor karo.",
    practice: ["Reusable validators", "Configurable sorting/filter helpers", "Readable refactor without behavior change"],
    checkpoint: "Kisi aur developer ko files aur functions ka purpose jaldi samajh aaye."
  },
  {
    phase: 7,
    title: "Node.js aur backend foundation",
    learn: [
      "Node runtime, npm scripts, packages aur environment variables",
      "File system, modules aur basic HTTP server concepts",
      "REST API, request/response, status codes aur validation",
      "Secrets ko code me na rakhna; logs me sensitive data na likhna"
    ],
    realWorld: "Simple task API banao jisme CRUD routes, validation aur consistent errors hon.",
    practice: ["Invalid JSON handle karo", "404/400/500 responses alag rakho", "Data ko file ya database me persist karo"],
    checkpoint: "API ko curl/Postman se test karke response contract explain karo."
  },
  {
    phase: 8,
    title: "Production quality aur testing",
    learn: [
      "Unit/integration testing aur testable function design",
      "Security basics: untrusted input, XSS, dependency hygiene",
      "Performance basics: unnecessary work, large lists, async bottlenecks",
      "Git branches/PR workflow, README, deployment aur monitoring basics"
    ],
    realWorld: "Task app/API me tests, setup README, validation, error states aur deployable config add karo.",
    practice: ["Happy path + failure tests", "Boundary cases", "Bug reproduce karo, fix karo, regression test likho"],
    checkpoint: "Fresh checkout se project run kar sako aur known limitations document kar sako."
  },
  {
    phase: 9,
    title: "Capstone: real product workflow",
    learn: ["Requirement se implementation tak ka workflow", "Tradeoffs explain karna", "Feedback ke baad iterate karna"],
    realWorld: "Inventory/order dashboard: products, search/filter, cart/order flow, API, persistence, tests aur responsive UI.",
    practice: [
      "Feature ko user stories aur acceptance criteria me todo",
      "MVP ship karo, phir validation, accessibility aur performance improve karo",
      "README me setup, features, decisions aur screenshots likho"
    ],
    checkpoint: "Project demo karke architecture, bugs found aur next improvements explain karo."
  }
];

// Har phase ko tab complete mark karo jab checkpoint bina notes dekhe kar sako.
// Apni progress yahan maintain karo: e.g. completedPhases = [1, 2];
const completedPhases = [];

console.log("JavaScript Zero to Mastery Roadmap");
roadmap.forEach(({ phase, title }) => {
  const done = completedPhases.includes(phase) ? "✅" : "⬜";
  console.log(`${done} Phase ${phase}: ${title}`);
});

// Daily routine (60–90 min):
// 10 min recall, 20 min concept, 25–45 min coding, 5–10 min review/commit.
// Har hafte ek chhota feature bina tutorial copy kiye complete karenge.

