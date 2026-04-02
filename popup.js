const COLORS = [
  {
    name: "OPIX Light Green",
    hex: "#729F99",
    rgb: "114, 159, 153",
    cmyk: "59, 22, 40, 5"
  },
  {
    name: "OPIX Tan",
    hex: "#AA8639",
    rgb: "170, 134, 57",
    cmyk: "28, 40, 83, 18"
  },
  {
    name: "OPIX Dark Green",
    hex: "#28301B",
    rgb: "40, 48, 27",
    cmyk: "75, 56, 85, 69"
  },
  {
    name: "OPIX Gray",
    hex: "#F0ECEC",
    rgb: "240, 236, 236",
    cmyk: "7, 7, 7, 0"
  }
];

function renderColors() {
  const container = document.getElementById("colors");

  COLORS.forEach(color => {
    const card = document.createElement("div");
    card.className = "color-card";
    card.innerHTML = `
      <div class="swatch-row">
        <div class="swatch" style="background: ${color.hex}" data-copy="${color.hex}" title="Click to copy ${color.hex}"></div>
        <div class="color-info">
          <div class="color-name">${color.name}</div>
          <div class="color-value" data-copy="${color.hex}"><span class="label">HEX</span>${color.hex}</div>
          <div class="color-value" data-copy="rgb(${color.rgb})"><span class="label">RGB</span>${color.rgb}</div>
          <div class="color-value" data-copy="cmyk(${color.cmyk})"><span class="label">CMYK</span>${color.cmyk}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
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
    // Fallback
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
