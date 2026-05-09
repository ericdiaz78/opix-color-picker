const FAMILIES = [
  {
    family: "OPIX GREEN",
    colors: [
      { name: "OPIX Green Whisper", description: "Faintest tint. Large background washes.",       hex: "#EBEFEF", rgb: "235, 239, 239", cmyk: "2, 0, 0, 6" },
      { name: "OPIX Green Soft",    description: "Card or panel background. Room for dark text.",  hex: "#D1DCDA", rgb: "209, 220, 218", cmyk: "5, 0, 1, 14" },
      { name: "OPIX Green Muted",   description: "Dividers, low-emphasis fills, disabled states.", hex: "#ADC2C0", rgb: "173, 194, 192", cmyk: "11, 0, 1, 24" },
      { name: "OPIX Green Brand",   description: "The brand color itself. Primary buttons, logo.", hex: "#729F99", rgb: "114, 159, 153", cmyk: "28, 0, 4, 38" },
      { name: "OPIX Green Bold",    description: "Hover or pressed state. Stronger emphasis.",     hex: "#517B76", rgb: "81, 123, 118",  cmyk: "34, 0, 4, 52" },
      { name: "OPIX Green Deep",    description: "Strong accent. Badge fills with white text.",    hex: "#375853", rgb: "55, 88, 83",    cmyk: "37, 0, 6, 65" },
      { name: "OPIX Green Ink",     description: "Darkest. Text on light backgrounds.",            hex: "#1F3330", rgb: "31, 51, 48",    cmyk: "39, 0, 6, 80" }
    ]
  },
  {
    family: "OPIX TAN",
    colors: [
      { name: "OPIX Tan Whisper", description: "Faintest tint. Large background washes.",       hex: "#F2EFE8", rgb: "242, 239, 232", cmyk: "0, 1, 4, 5" },
      { name: "OPIX Tan Soft",    description: "Card or panel background. Room for dark text.",  hex: "#E4DBC8", rgb: "228, 219, 200", cmyk: "0, 4, 12, 11" },
      { name: "OPIX Tan Muted",   description: "Dividers, low-emphasis fills, disabled states.", hex: "#D4C29B", rgb: "212, 194, 155", cmyk: "0, 8, 27, 17" },
      { name: "OPIX Tan Brand",   description: "The brand color itself. Primary buttons, logo.", hex: "#AA8639", rgb: "170, 134, 57",  cmyk: "0, 21, 66, 33" },
      { name: "OPIX Tan Bold",    description: "Hover or pressed state. Stronger emphasis.",     hex: "#9E7A2E", rgb: "158, 122, 46",  cmyk: "0, 23, 71, 38" },
      { name: "OPIX Tan Deep",    description: "Strong accent. Badge fills with white text.",    hex: "#72571D", rgb: "114, 87, 29",   cmyk: "0, 24, 75, 55" },
      { name: "OPIX Tan Ink",     description: "Darkest. Text on light backgrounds.",            hex: "#43320E", rgb: "67, 50, 14",    cmyk: "0, 25, 79, 74" }
    ]
  },
  {
    family: "OPIX DARK GREEN",
    colors: [
      { name: "OPIX Dark Green Whisper", description: "Faintest olive tint. Large background washes.", hex: "#EBEDE8", rgb: "235, 237, 232", cmyk: "1, 0, 2, 7" },
      { name: "OPIX Dark Green Soft",    description: "Card background. Earthy, room for dark text.",  hex: "#D3D8CA", rgb: "211, 216, 202", cmyk: "2, 0, 6, 15" },
      { name: "OPIX Dark Green Muted",   description: "Dividers, low-emphasis olive fills.",           hex: "#B1BC9F", rgb: "177, 188, 159", cmyk: "6, 0, 15, 26" },
      { name: "OPIX Dark Green Sage",    description: "Mid olive. Accents, chips, secondary buttons.", hex: "#869C63", rgb: "134, 156, 99",  cmyk: "14, 0, 37, 39" },
      { name: "OPIX Dark Green Bold",    description: "Hover or pressed state for olive accents.",     hex: "#5C6E40", rgb: "92, 110, 64",   cmyk: "16, 0, 42, 57" },
      { name: "OPIX Dark Green Brand",   description: "The dark olive brand color itself.",            hex: "#28301B", rgb: "40, 48, 27",    cmyk: "17, 0, 44, 81" }
    ]
  },
  {
    family: "OPIX GRAY",
    colors: [
      { name: "OPIX Gray Brand", description: "The off-white brand gray itself.",          hex: "#F0ECEC", rgb: "240, 236, 236", cmyk: "0, 2, 2, 6" },
      { name: "OPIX Gray Stone", description: "Soft neutral. Card backgrounds, surfaces.", hex: "#D2C6C6", rgb: "210, 198, 198", cmyk: "0, 6, 6, 18" },
      { name: "OPIX Gray Mist",  description: "Subtle dividers, borders.",                 hex: "#B09B9B", rgb: "176, 155, 155", cmyk: "0, 12, 12, 31" },
      { name: "OPIX Gray Slate", description: "Mid neutral. Secondary text, icons.",       hex: "#896C6C", rgb: "137, 108, 108", cmyk: "0, 21, 21, 46" },
      { name: "OPIX Gray Bold",  description: "Hover state, stronger neutral fills.",      hex: "#5B4848", rgb: "91, 72, 72",    cmyk: "0, 21, 21, 64" },
      { name: "OPIX Gray Deep",  description: "Strong neutral. Footer, dark surfaces.",    hex: "#392D2D", rgb: "57, 45, 45",    cmyk: "0, 21, 21, 78" },
      { name: "OPIX Gray Ink",   description: "Darkest neutral. Body text on light bg.",   hex: "#1C1717", rgb: "28, 23, 23",    cmyk: "0, 18, 18, 89" }
    ]
  }
];

// Accent color for each family's section bar (avoids using too-dark or too-light brand swatches)
const FAMILY_ACCENTS = {
  "OPIX GREEN":      "#729F99",
  "OPIX TAN":        "#AA8639",
  "OPIX DARK GREEN": "#869C63",
  "OPIX GRAY":       "#896C6C"
};

function renderColors() {
  const container = document.getElementById("colors");

  FAMILIES.forEach(group => {
    const section = document.createElement("section");
    section.className = "family-section";
    section.style.borderLeftColor = FAMILY_ACCENTS[group.family] || "#729F99";

    const header = document.createElement("div");
    header.className = "family-header";
    header.textContent = group.family;
    section.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "family-cards";

    group.colors.forEach(color => {
      const card = document.createElement("div");
      card.className = "color-card";
      card.innerHTML = `
        <div class="swatch-row">
          <div class="swatch" style="background: ${color.hex}" data-copy="${color.hex}" title="Click to copy ${color.hex}"></div>
          <div class="color-info">
            <div class="color-name">${color.name}</div>
            <div class="color-description">${color.description}</div>
            <div class="color-value" data-copy="${color.hex}"><span class="label">HEX</span>${color.hex}</div>
            <div class="color-value" data-copy="rgb(${color.rgb})"><span class="label">RGB</span>${color.rgb}</div>
            <div class="color-value" data-copy="cmyk(${color.cmyk})"><span class="label">CMYK</span>${color.cmyk}</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 1500);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`Copied: ${text}`);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast(`Copied: ${text}`);
  }
}

document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-copy]");
  if (target) {
    copyToClipboard(target.dataset.copy);
  }
});

renderColors();
