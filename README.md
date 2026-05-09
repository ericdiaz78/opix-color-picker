# OPIX Color Picker

A browser extension for quick access to the OPIX brand color palette. Click any value (HEX, RGB, or CMYK) to copy it to your clipboard.

## What's inside

27 shades organized into 4 brand-color families:

| Family | Shades |
|---|---|
| **OPIX Green** | Whisper, Soft, Muted, **Brand `#729F99`**, Bold, Deep, Ink |
| **OPIX Tan** | Whisper, Soft, Muted, **Brand `#AA8639`**, Bold, Deep, Ink |
| **OPIX Dark Green** | Whisper, Soft, Muted, Sage, Bold, **Brand `#28301B`** |
| **OPIX Gray** | **Brand `#F0ECEC`**, Stone, Mist, Slate, Bold, Deep, Ink |

Each shade includes a short suggested-use note (e.g., "Card or panel background. Room for dark text.") so you can pick by scenario, not by guesswork.

## Install

This is a Manifest V3 extension. The same files work in any Chromium-based browser. Firefox needs a slightly different load step.

### Chrome, Edge, Brave, Arc, Opera

1. Download or clone this repo:
   ```
   git clone https://github.com/ericdiaz78/opix-color-picker.git
   ```
2. Open the extensions page in your browser:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
   - Brave: `brave://extensions`
   - Arc: `arc://extensions`
   - Opera: `opera://extensions`
3. Toggle **Developer mode** on (top right).
4. Click **Load unpacked** and select the cloned `opix-color-picker` folder.
5. Pin the extension to your toolbar (puzzle-piece icon, then click the pin next to OPIX Color Picker).

### Firefox

1. Download or clone this repo as above.
2. Open `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on...**
4. Select the `manifest.json` file inside the cloned folder.

Note: Firefox temporary add-ons are removed when you close the browser. For a persistent install, the extension would need to be signed and published to addons.mozilla.org.

## Usage

1. Click the OPIX icon in your toolbar to open the palette.
2. Browse families (Green, Tan, Dark Green, Gray) grouped under colored section bars.
3. Click any swatch or any value (HEX / RGB / CMYK) to copy it to your clipboard. A confirmation toast appears at the bottom.

## Updating

If you pull new changes, just hit the reload button on the extension card in your browser's extensions page. No reinstall needed.

## License

Private brand-color reference for OPIX. Use within your own projects.
