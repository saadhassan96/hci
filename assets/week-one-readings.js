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
  const assistantCard = [...document.querySelectorAll(".info-card")]
    .find((card) => card.textContent.includes("chaelin kim"));
  const officeHours = assistantCard?.querySelector(".info-meta");
  const updatedHours = "paul hall 309 · tuesdays, 2:00–4:00 pm · wednesdays, 5:00–6:00 pm · thursdays, 2:00–3:00 pm";

  if (officeHours && officeHours.textContent !== updatedHours) {
    officeHours.textContent = updatedHours;
  }
}

function patchPage() {
  patchWeekOne();
  patchOfficeHours();
}

const observer = new MutationObserver(patchPage);
observer.observe(document.getElementById("root"), { childList: true, subtree: true });
patchPage();
