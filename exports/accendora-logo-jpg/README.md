# Accendora logo — JPG exports

The **Accendora Consulting** identity, exported as JPG. This name is not the one the
site currently uses — the site is Accendia Consulting. These files were rendered from
the Accendora SVGs recovered from commit `0ec002d`, which is the only place that
artwork still exists.

Nothing here is wired into the site. The folder sits outside `public/`, so the build
does not touch it and it will not deploy.

**JPG carries no transparency.** Every file is flattened onto a solid ground, named in
the filename — pick the one that matches where it is going:

| Suffix | Ground | Use |
| --- | --- | --- |
| `-on-paper` | `#fbf9f6` warm paper | Brand documents, anything on the Accendora/Accendia paper tone |
| `-on-white` | `#ffffff` pure white | Platforms that expect true white — most upload forms, print templates |
| `-on-ink` | `#0a1a28` deep navy | The reversed (light) logo on its dark ground |

| File | |
| --- | --- |
| `accendora-logo-on-{paper,white}-{1200,2400}w.jpg` | Horizontal lockup |
| `accendora-logo-reversed-on-ink-{1200,2400}w.jpg` | Reversed horizontal lockup |
| `accendora-logo-stacked-on-{paper,white}-{1200,2400}w.jpg` | Stacked lockup with the pillars line |
| `accendora-mark-on-{paper,white}-{512,1024}w.jpg` | Mark alone |
| `accendora-mark-enclosed-on-paper-{512,1024}w.jpg` | Mark in its ink tile |

Each carries clear space on all four sides (the crossbar's height), so the stated pixel
dimensions are larger than the logo itself. Quality 92, no chroma subsampling — the
bronze and the fine CONSULTING letterforms stay clean.

**Prefer PNG or SVG wherever the destination accepts them.** JPG cannot do a
transparent background and its compression is lossy; these exist only for places that
insist on `.jpg`.
