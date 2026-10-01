# Accendora logo files

The mark is a sharp apex — ascent, and the "A" of Accendora — crossed by a bronze
bar that runs on past the form: the pathway continuing outward. The lockup sets
**Accendora** over a widely tracked **CONSULTING** in bronze.

All artwork is pure vector. The wordmark is **Source Serif 4 Semibold** and the
CONSULTING line **Inter Medium**, both converted to outlines, so nothing depends on
a font being installed anywhere — safe for print, signage and third-party use.

| File | Use |
| --- | --- |
| `accendora-logo.svg` | Primary horizontal lockup. Light backgrounds. |
| `accendora-logo-reversed.svg` | Same lockup for dark/ink backgrounds. |
| `accendora-logo-mono.svg` | One colour, painted with `currentColor` — inherits the surrounding text colour in HTML; set a single fill for print. |
| `accendora-logo-stacked.svg` | Stacked lockup with the People \| Capability \| Opportunity line. Covers, title slides, documents. |
| `accendora-mark.svg` | Mark alone, on a transparent field. |
| `accendora-mark-enclosed.svg` | Mark in an ink tile — avatars, favicons, app icons. Also copied to `src/app/icon.svg`. |

## Colours

| Token | Hex |
| --- | --- |
| Ink | `#0a1a28` |
| Bronze (accent) | `#b9813c` |
| Bronze soft (on ink) | `#d9ab6c` |
| Paper | `#fbf9f6` |

## Rules

- Clear space on every side: the height of the apex's crossbar (roughly 1/8 of the
  mark's height).
- Minimum sizes: horizontal lockup **24 px** tall — below that the CONSULTING line
  closes up and stops being legible, so use the mark or the enclosed mark instead.
  Enclosed mark: **16 px**.
- Do not recolour the bar, stretch the lockup, retrack the CONSULTING line, add
  effects, or set the wordmark in another face. For a single-colour application use
  `accendora-logo-mono.svg`.

The in-app header logo lives in `src/components/Logo.tsx`. It repeats the same mark
path data and sets the two text lines live rather than as outlines — change both
together.

## PNG exports

`png/` holds raster versions of the same artwork, rendered from these SVGs at
device-scale 1. **Every PNG has a transparent background** (RGBA), so they drop onto
any colour. Use the SVGs wherever the medium allows them — the PNGs exist for places
that will not take vector: email signatures, Word and PowerPoint, social profiles,
third-party portals.

| Pattern | Sizes |
| --- | --- |
| `accendora-logo-{600,1200,2400}w.png` | Horizontal lockup, ink on transparent |
| `accendora-logo-reversed-{600,1200,2400}w.png` | Horizontal lockup, paper on transparent — for dark backgrounds |
| `accendora-logo-mono-ink-{600,1200,2400}w.png` | Single-colour ink |
| `accendora-logo-mono-white-{600,1200,2400}w.png` | Single-colour white — over photography |
| `accendora-logo-stacked-{800,1600,3200}w.png` | Stacked lockup |
| `accendora-mark-{128,256,512,1024}.png` | Mark alone |
| `accendora-mark-enclosed-{16,32,48,64,128,180,192,256,512,1024}.png` | Ink tile — favicons, avatars, app icons (180 = iOS, 192 = Android) |

Pick a file at or above the size you will display it at; never scale a PNG up. To
regenerate or add a size, re-render from the SVG rather than resampling a PNG.

## JPG exports

`jpg/` holds the same artwork for places that will only accept `.jpg`. Reach for these
last: **JPG carries no transparency and its compression is lossy.** Use the SVG where
the medium allows it, the PNG where it does not, and the JPG only when something
refuses both.

Because there is no alpha, every file is flattened onto a solid ground, named in the
filename — pick the one matching where it is going:

| Suffix | Ground | Use |
| --- | --- | --- |
| `-on-paper` | `#fbf9f6` warm paper | Brand documents on the paper tone |
| `-on-white` | `#ffffff` pure white | Platforms expecting true white — upload forms, print templates |
| `-on-ink` | `#0a1a28` deep navy | The reversed (light) logo on its dark ground |

| Pattern | |
| --- | --- |
| `accendora-logo-on-{paper,white}-{1200,2400}w.jpg` | Horizontal lockup |
| `accendora-logo-reversed-on-ink-{1200,2400}w.jpg` | Reversed horizontal lockup |
| `accendora-logo-stacked-on-{paper,white}-{1200,2400}w.jpg` | Stacked lockup |
| `accendora-mark-on-{paper,white}-{512,1024}w.jpg` | Mark alone |
| `accendora-mark-enclosed-on-paper-{512,1024}w.jpg` | Mark in its ink tile |

Each carries clear space on all four sides, so the stated pixel dimensions are larger
than the logo itself. Quality 92, chroma subsampling off, so the bronze and the fine
CONSULTING letterforms stay clean.
