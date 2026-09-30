# Image generation prompts

Prompts for replacing the twelve placeholder SVGs in `public/placeholders/`.

Read the credibility rules in [CLAUDE.md](../CLAUDE.md) first. Two of them bind image choice
directly: **no organisation names, logos, lanyards, signage or branded uniforms may appear in any
image**, and nothing may imply an existing client relationship. Generic, unbranded environments
only.

---

## 1. House style — prepend to every prompt

Paste this block ahead of each individual prompt. It carries the site palette and keeps the twelve
images looking like one set rather than twelve unrelated stock choices.

> Editorial corporate photography for a UK management consultancy. Restrained, intelligent,
> confident. Natural window light, soft directional shadows, muted contrast, slight film grain.
> Colour palette: deep navy (#0a1a28), warm off-white paper (#fbf9f6), warm sand (#f2ede5),
> a single muted bronze accent (#b9813c), occasional deep teal (#2c6e6b). Desaturated overall —
> colour restricted to the palette, no bright or saturated tones. Generous negative space, calm
> composition, shallow depth of field. Shot on a full-frame camera, 35mm or 50mm lens, f/2.
> No text, no logos, no signage, no branding.

**Negative prompt** (for any tool that takes one):

```
text, letters, words, signage, logos, branding, lanyards, ID badges, uniforms, watermarks,
stock-photo handshake, thumbs up, pointing at charts, staged smiling at camera, group jumping,
clip-art, 3D render, illustration, HDR, oversaturated colours, teal-and-orange grade,
lens flare, fisheye, cluttered background, deformed hands, extra fingers, garbled faces
```

**Aspect-ratio flags:** Midjourney `--ar 16:9` / `--ar 3:2` / `--ar 4:5`. Add `--style raw --v 7`
on Midjourney for the documentary look; avoid `--stylize` above 100.

---

## 2. Where each image is used, and what size to generate

Several images appear in both landscape and portrait crops. For those, generate at **3:2
landscape** and keep the subject inside the central square so the 4:5 crop still works — or
generate the asset twice and save a `-portrait` variant.

| File | Used on | Crops needed | Generate at |
| --- | --- | --- | --- |
| `hero-01.svg` | Home hero, slide 1 | full-bleed 16:9 | 2560 × 1440 |
| `hero-02.svg` | Home hero, slide 2 | full-bleed 16:9 | 2560 × 1440 |
| `hero-03.svg` | Home hero, slide 3 | full-bleed 16:9 | 2560 × 1440 |
| `people.svg` | Home pillar, What We Do, Young People, About carousel | 16:10, 5:4 | 2400 × 1600 |
| `capability.svg` | Home pillar, What We Do, Quality, About carousel | 16:10, 5:4 | 2400 × 1600 |
| `opportunity.svg` | Home pillar, About carousel | 16:10 | 2400 × 1600 |
| `quality.svg` | Quality page hero, What We Do, Young People, About | **4:5 and 5:4** | 2400 × 1600 + portrait |
| `workplace.svg` | What We Do page hero, Young People | **4:5 and 5:4** | 2400 × 1600 + portrait |
| `young-people.svg` | Young People page hero, About carousel | **4:5** | 1600 × 2000 |
| `programmes.svg` | What We Do, About carousel | 5:4 | 2400 × 1600 |
| `conversation.svg` | Contact, About carousel | 4:3 | 2000 × 1500 |
| `founder.svg` | Home founder teaser, About | 4:5 | 1200 × 1500 — **see §5** |

---

## 3. Hero carousel — the three most important images

The hero overlays white type over the left two-thirds of the frame and darkens that side with a
navy gradient. So every hero prompt asks for **the subject on the right and open, uncluttered
space on the left**. Slides should read as a sequence: people, then capability, then structure.

### `hero-01.svg` — positioning slide

> [house style] A wide, quiet modern workplace interior shortly after sunrise. Tall windows on the
> right throw long bands of warm light across a pale concrete floor. Two people in dark tailoring
> stand at a distance in the right third of the frame, mid-conversation, seen from behind and
> slightly out of focus — anonymous, no faces visible. The left two-thirds of the frame is empty
> wall and floor in soft shadow. A single warm bronze reflection on the window frame. Deep navy
> shadows, warm off-white highlights. Architectural, calm, cinematic. `--ar 16:9`

### `hero-02.svg` — capability slide

> [house style] Close editorial detail of a strategy session in progress, photographed from a low
> oblique angle. In the right third: a hand in a dark sleeve moving a card across a pale desk
> beside a stack of plain unmarked documents and a matte black pen. No text or writing is legible
> on any page. The left of the frame falls away into soft navy shadow with empty desk surface.
> Warm sand tones, one bronze metallic accent, extremely shallow depth of field. `--ar 16:9`

### `hero-03.svg` — opportunity slide

> [house style] Wide architectural interior of a modern atrium staircase, shot from below. Clean
> pale stone treads ascend from the lower left toward warm daylight in the upper right. One
> anonymous figure in dark clothing climbs, small in frame, motion-blurred. Strong diagonal
> geometry, deep navy structure against a warm off-white sky through glass. Left third is open
> shadow. No signage anywhere. `--ar 16:9`

---

## 4. Section images

### `people.svg` — People pillar / People & Future Talent

> [house style] Three or four people of mixed ages and ethnicities seated around the corner of a
> pale table in a bright unbranded meeting room, mid-discussion. Photographed candidly from the
> side at eye level — nobody looks at the camera, nobody is performing enthusiasm. Natural
> expressions, attentive listening. Plain walls, no whiteboard text, no laptops in focus. Warm
> off-white and navy, one bronze note in the background. `--ar 3:2`

### `capability.svg` — Capability / organisational development / continuous improvement

> [house style] Two colleagues standing at a large pale wall covered with plain unmarked index
> cards and blank sticky notes arranged in a clear grid of columns. Seen from behind at three-
> quarter angle, one reaching to reposition a card. Absolutely no writing or symbols on any card.
> Warm sand wall, navy clothing, soft raking window light from the left. `--ar 3:2`

### `opportunity.svg` — Opportunity / progression / partnerships

> [house style] Two people walking together along a bright glazed corridor, seen from behind,
> receding toward warm daylight at the far end. Converging perspective lines, clean modern
> architecture, pale floor, deep navy window mullions, a bronze handrail catching the light.
> Anonymous, unhurried, purposeful. `--ar 3:2`

### `quality.svg` — Quality & accreditation support

Avoid anything that reads as certification, stamps, seals, rosettes or awards — Accendia is not an
accrediting body.

> [house style] Overhead editorial still life on a warm sand desk surface: a neat overlapping stack
> of plain unprinted document sheets, a slim matte navy folder, a bronze paperclip, and a pair of
> reading glasses set to one side. Every page is blank. Ordered, precise, uncluttered, generous
> empty space around the arrangement. Soft top-left window light, long gentle shadows. `--ar 3:2`
> *(also generate `--ar 4:5` for the Quality page hero)*

### `workplace.svg` — the world of work

> [house style] A modern light-industrial workspace or studio interior, unbranded: pale walls, high
> windows, a clean workbench, plain tools and materials arranged in order. One anonymous figure in
> dark workwear at the far side of the frame, out of focus, absorbed in a task. No company
> markings, no printed safety signage. Navy, warm off-white, one bronze surface highlight.
> `--ar 3:2` *(also generate `--ar 4:5` for the What We Do page hero)*

### `young-people.svg` — Young People & Future Talent

Age-appropriate and safeguarding-conscious: no school uniforms, no identifiable settings, no child
faces sharply in focus. Read as late-teen / early-twenties, engaged in real work.

> [house style] Portrait-orientation editorial photograph of two people in their late teens
> standing beside an older colleague in a bright modern workplace, all three looking down at
> something on a workbench out of frame. Seen from a respectful middle distance, three-quarter
> profile, faces partly turned away. Casual smart clothing, no uniforms, no lanyards. Attentive,
> unposed, a moment of genuine instruction. Warm daylight, pale walls, navy and sand tones.
> `--ar 4:5`

### `programmes.svg` — Programmes & partnerships

> [house style] Overhead view of a long pale table during a working session, shot from directly
> above. Plain sheets of paper, a simple hand-drawn diagram of connected boxes and lines in soft
> pencil with no legible words, two coffee cups, a navy notebook, three pairs of hands at the
> edges of the frame. Ordered but clearly in progress. Warm sand and off-white, one bronze
> accent. `--ar 3:2`

### `conversation.svg` — Contact

The brief's framing is *"Let's explore what could be possible"* — this should feel like the start of
a conversation, not a transaction.

> [house style] Two people sitting at right angles in comfortable low chairs beside a tall window,
> talking. Photographed from a discreet distance, one in profile and one three-quarters away from
> camera. Relaxed, attentive posture, notebooks closed on the table between them. Soft backlight
> from the window, warm off-white walls, deep navy upholstery, a bronze lamp out of focus behind.
> Calm, human, unhurried. `--ar 4:3`

---

## 5. The founder portrait — do not generate this one

`founder.svg` must be replaced with a **real commissioned photograph of Abiola Madubata**. A
generated face on an About page is a misrepresentation, and the same verification rule that governs
the founder biography applies to her likeness.

Brief for the photographer, matched to the rest of the set:

> Portrait, 4:5, three-quarter body or head-and-shoulders. Plain warm off-white or sand background,
> or a softly defocused modern interior. Single soft window light from one side, gentle fall-off,
> no hard studio flash. Dark tailoring. Direct eye contact, composed and warm rather than smiling
> broadly. Shallow depth of field, 85mm, f/2. Deliver 1200 × 1500 minimum, plus a wider frame for
> future use.

---

## 6. If you would rather stay abstract

The current placeholders are abstract geometric compositions, and that route stays defensible: it
carries no risk of implying clients, needs no model releases, and sidesteps the uniform and
safeguarding questions entirely. For a generated-but-abstract set:

> Minimal abstract editorial graphic. Layered geometric forms — thin precise lines, soft
> overlapping planes, a gentle rising diagonal. Deep navy on warm off-white, single muted bronze
> accent, occasional deep teal. Flat vector aesthetic with subtle paper grain, generous negative
> space, Swiss editorial restraint. No text, no icons, no gradients beyond a single soft wash.

Vary the underlying idea per slot: *people* — clustered forms of differing weight; *capability* —
a measured grid with one rising plotted line; *opportunity* — converging paths meeting a bronze
point; *quality* — layered offset sheets; *programmes* — parallel tracks with connecting nodes;
*conversation* — two overlapping arcs.

---

## 7. Dropping them in

Save real images as `.jpg` (photography) or `.svg`/`.webp` (graphics) in `public/placeholders/`,
then update the `src` and `alt` values at the call sites listed in §2. Every image on the site
renders through one component — `Figure` in [src/components/ui.tsx](../src/components/ui.tsx),
plus `HeroCarousel` and `PageHero` — so no layout work is needed.

Once no SVGs remain, remove `dangerouslyAllowSVG` from [next.config.ts](../next.config.ts).

**Rewrite the `alt` text as you go.** The current values describe abstract shapes
("Abstract grouping of figures…"); photographs need descriptions of what is actually shown.
