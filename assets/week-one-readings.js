const weekOneSections = [
  {
    label: "required reading",
    links: [
      ["What Designers Do", "https://faculty.washington.edu/ajko/books/design-methods/designers/"],
      ["Research Contributions in Human–Computer Interaction", "https://dl.acm.org/doi/10.1145/2907069"],
    ],
  },
  {
    label: "suggested readings",
    links: [
      ["Guidelines for Human–AI Interaction", "https://dl.acm.org/doi/abs/10.1145/3290605.3300233"],
      ["Understanding the LLM-ification of CHI", "https://dl.acm.org/doi/full/10.1145/3706598.3713726"],
    ],
  },
  {
    label: "notes and resources",
    links: [
      ["Fill out the Week 0 form", "https://forms.gle/ozxgxgTcy6Qv9cbd8"],
      ["Complete Quiz 1 on Canvas", "https://tulane.instructure.com/"],
    ],
  },
];

function makeSection({ label, links }) {
  const section = document.createElement("div");
  const heading = document.createElement("span");
  heading.textContent = label;
  section.append(heading);

  for (const [title, url] of links) {
    const paragraph = document.createElement("p");
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.style.color = "var(--green)";
    link.textContent = `${title} ↗`;
    paragraph.append(link);
    section.append(paragraph);
  }

  return section;
}

function patchWeekOne() {
  const details = document.querySelector(".schedule-row .schedule-details");
  if (!details || details.dataset.weekOneReadings === "true") return;

  details.replaceChildren(...weekOneSections.map(makeSection));
  details.dataset.weekOneReadings = "true";
}

function patchOfficeHours() {
  const cards = [...document.querySelectorAll(".info-card")];
  const instructorCard = cards
    .find((card) => card.textContent.includes("dr. saad hassan"));
  const instructorOfficeHours = instructorCard?.querySelector(".info-meta");
  const updatedInstructorHours = "paul hall 307 · tuesday, 3:00–4:00 pm";
  const assistantCard = cards
    .find((card) => card.textContent.includes("chaelin kim"));
  const assistantOfficeHours = assistantCard?.querySelector(".info-meta");
  const updatedAssistantHours = "paul hall 309 · tuesdays, 2:00–4:00 pm · wednesdays, 5:00–6:00 pm · thursdays, 2:00–3:00 pm";

  if (instructorOfficeHours && instructorOfficeHours.textContent !== updatedInstructorHours) {
    instructorOfficeHours.textContent = updatedInstructorHours;
  }

  if (assistantOfficeHours && assistantOfficeHours.textContent !== updatedAssistantHours) {
    assistantOfficeHours.textContent = updatedAssistantHours;
  }
}

function makeTextSection(label, text) {
  const section = document.createElement("div");
  const heading = document.createElement("span");
  const paragraph = document.createElement("p");
  heading.textContent = label;
  paragraph.textContent = text;
  section.append(heading, paragraph);
  return section;
}

function patchWeeksTwoAndThree() {
  const rows = [...document.querySelectorAll(".schedule-row")];
  const weekTwoSummary = rows[1]?.querySelector("summary");
  const weekThreeSummary = rows[2]?.querySelector("summary");

  if (weekTwoSummary) {
    const cells = weekTwoSummary.children;
    if (cells[2]?.textContent !== "vision, hearing, and motor control") cells[2].textContent = "vision, hearing, and motor control";
    if (cells[3]?.textContent !== "cognition") cells[3].textContent = "cognition";
  }

  if (weekThreeSummary) {
    const cells = weekThreeSummary.children;
    if (cells[1]?.textContent !== "needs and motivations") cells[1].textContent = "needs and motivations";
    if (cells[2]?.textContent !== "behavior and patterns") cells[2].textContent = "behavior and patterns";
    if (cells[3]?.textContent !== "communication and collaboration") cells[3].textContent = "communication and collaboration";
  }

  const weekTwoDetails = rows[1]?.querySelector(".schedule-details");
  if (weekTwoDetails && weekTwoDetails.dataset.updatedReadings !== "true") {
    weekTwoDetails.replaceChildren(
      makeTextSection("required reading", "none"),
      makeSection({
        label: "suggested readings",
        links: [[
          "Part II: Understanding People — Hornbæk et al. (2025)",
          "https://watermark02.silverchair.com/9780192679741_web.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAnEwggJtBgkqhkiG9w0BBwagggJeMIICWgIBADCCAlMGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMpq_JsJNxxAGK5LeZAgEQgIICJB1GNvy2TXxL5hNnCyCkzab6bEMKH6LvlnARieWq6BD2Muu_5b-dDixxYJOEdHU9iKrsWOJPqj_dlG-ZVs1QR0J4K77x9ne8c0J5Md_J5-I8rIQewlURwldnofWqDrsr_viLFdbnmH0_vqBtkLqDK7FyNFOp_mQi9BfbidEQYBKebE6bKJT6Op4u5P0iDOR8p20RuaKfg6dPPgZhlL4SJFfy6SpTpeJ58X3j6YFHshq6WGZCZIpVvvouvEGzO8gWu1dzvN-cDk-mwnTE9sQS8aNxdbyZxvmSpIKY_VGzipwfcnRrwJ6-VfJvAx5djHJQ4JlPzKmApVvm6MEMlfQfLXHlvEs99l3XJZBsBvpQoI7j--s9Gc8aun_L213LyTLt0C7yom7jX1mS_BAf_SEbq33O924FEuIVR176cMBrGeintELuJI1BYQedrzvvcYMxDHI9J059TPQDy57noNe7oludfF3ommPHjGSId5fLUkb1Oh_4t5Wd3RPf-754Gl53yyicibtqxFItVKktyFwI-8M80WEzYYpLLxec7jSdD6414IuI8rgEjrwE0NkaNOV6bNCo7X3turRxOEHkMC7ZIOFDGx3MEPVUmlv9YkyPaf_MAt2zNWd6hvWfTHq6eSVEzvjBRy9nGtMPLjEqQewcS2-7jUIKN2qQmNokxC8iayuax1GiYq41-BScezawYKSjhkTjaCVBtwjJHw6stpUTuGL4GoEG",
        ]],
      }),
      makeTextSection("notes and resources", "review project groups · in-class activities on both Tuesday and Thursday"),
    );
    weekTwoDetails.dataset.updatedReadings = "true";
  }
}

function patchWeeksSixAndSeven() {
  const rows = [...document.querySelectorAll(".schedule-row")];
  const weekSixCells = rows[5]?.querySelector("summary")?.children;
  const weekSevenCells = rows[6]?.querySelector("summary")?.children;

  if (weekSixCells?.[3]?.textContent !== "presentations 1") {
    weekSixCells[3].textContent = "presentations 1";
  }
  if (weekSevenCells?.[2]?.textContent !== "test 1") {
    weekSevenCells[2].textContent = "test 1";
  }
}

function patchSyllabusResources() {
  const courseResources = document.querySelector(".resource-groups section .resource-list");
  if (!courseResources || courseResources.querySelector("[data-hornbaek-book]")) return;
  const mackenzie = [...courseResources.children].find((item) => item.textContent.includes("mackenzie"));
  if (!mackenzie) return;

  const book = document.createElement("a");
  const title = document.createElement("span");
  const details = document.createElement("small");
  book.href = "https://introductiontohci.org/";
  book.target = "_blank";
  book.rel = "noreferrer";
  book.dataset.hornbaekBook = "true";
  title.textContent = "introduction to human–computer interaction";
  details.textContent = "hornbæk, kristensson & oulasvirta · 2025 · free PDF online ↗";
  book.append(title, details);
  courseResources.insertBefore(book, mackenzie);
}

function patchPage() {
  patchWeekOne();
  patchOfficeHours();
  patchWeeksTwoAndThree();
  patchWeeksSixAndSeven();
  patchSyllabusResources();
}

const observer = new MutationObserver(patchPage);
observer.observe(document.getElementById("root"), { childList: true, subtree: true });
patchPage();
