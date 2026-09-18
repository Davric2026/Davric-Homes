---
name: dav-ric-homes-website
description: Canonical brand voice, approved copy, factual reference data, and visual language for the Dav-Ric Homes website (the real estate arm of the Dav-Ric Group — Pebblebrooks Estate, Grand Verdantia, Project Sigma, Guzape, Alalubosa). Use this skill whenever the task touches the Dav-Ric Homes or Dav-Ric Group website in any way — building pages, writing or rewriting marketing copy, adding a project or development page, writing meta tags, generating components, drafting a brochure or landing page, or answering questions about the company's projects, team, values, or contact details. Use it even when the request doesn't mention "copy" or "content" (e.g. "build the developments page", "add a hero section", "make a site for Dav-Ric"). Never write Dav-Ric Homes marketing text from memory or invent project facts — pull them from this skill.
---

# Dav-Ric Homes — Website Content & Brand Skill

Everything needed to build or extend the Dav-Ric Homes website without inventing anything.

## How to use this skill

1. **Read the relevant copy section below before writing any user-facing text.** All page copy here is approved. Use it verbatim where possible; adapt tone, never facts.
2. **Never invent facts.** Unit counts, square metres, guest capacities, names, titles, addresses, dates — if it isn't in §3–§8, it isn't known. Ask rather than guess.
3. **Respect project status.** Several developments are at carcass or concept stage. Status lines are mandatory on those pages (see §6.3, §6.2). Renders must not be presented as finished stock.
4. **Check §10 (Open Decisions) before shipping.** Eight things are genuinely undecided. If a task depends on one, surface it instead of picking silently.
5. **Reuse the CTA vocabulary in §2.3.** Don't invent new button labels per page.

### Hard rules

- The company is **Dav-Ric Homes**, the Real Estate Development arm of the **Dav-Ric Group**. Never present it as a standalone company.
- Hyphenation: **Dav-Ric Homes**, **Dav-Ric Group**, but **Dav Ric Towers** (no hyphen — that's the building).
- Tagline: **Crafting Homes. Building Legacies.** Never reworded.
- Group motto, footer only: *Our Word is Bond and Our Bond links the World.*
- British spelling throughout (realise, neighbourhood, centre, organisational).
- Never claim a completion date, price, payment plan, or testimonial. None exist in the source material.

### Voice

Assured, plain, and specific. Sell with facts — "seven 4-bedroom terrace houses, each with a maid's room" beats "luxurious living". Avoid property-marketing filler ("nestled", "boasts", "unparalleled", "dream home", "your oasis"). One idea per sentence. Short paragraphs. The brand's confidence comes from two decades of delivery, so state the record and let it carry itself.

---

## 1. Visual language

Derived from the company profile deck. Confirm exact hex values with the client before launch.

| Token | Value | Use |
|---|---|---|
| `--maroon` | `#6B1D28` | Primary brand. Section backgrounds, headings on light. |
| `--maroon-deep` | `#4A131B` | Diagonal overlays, hover states. |
| `--red` | `#D81E2C` | Accent only — eyebrows, rules, numerals, icons. Never body text. |
| `--ink` | `#1A1A1A` | Dark sections, primary text. |
| `--paper` | `#FAF9F8` | Light page background. |
| `--panel` | `#F4F2F2` | Stat cards, image frames. |
| `--gold` | `#C9A44C` | Sparingly — cover eyebrow only. |

**Typography:** a high-contrast serif for display (headings, stat numerals) against a humanist sans for body and labels. Eyebrow labels are uppercase, letterspaced wide (~0.18em), small, in `--red` or `--maroon`.

**Signature motifs** — these are the brand, carry them into the UI:
- **Red lattice** — a diagonal cross-hatch screen. Works as a section divider, hero overlay, or card hover texture.
- **Sharp diagonal cuts** — the deck splits panels on a steep angle rather than a straight edge. Reuse for hero and band transitions.
- **Sculpted volumes** — layered rectangular blocks, generous whitespace, no rounded corners beyond ~4px.

**Layout:** alternating dark (`--ink` / `--maroon`) and light (`--paper`) full-bleed bands. Stat trios in `--panel` cards with a large serif numeral over a small sans label. Images sit in generous `--panel` frames, never bleeding to the text edge on project pages.

---

## 2. Site structure & global elements

### 2.1 Sitemap

```
/                       Home
/about                  Story, vision, mission, values
/philosophy             Design Philosophy + Dav Ric Towers milestone
/developments           Index of all five
  /developments/pebblebrooks-estate
  /developments/project-beta            [see §10.1]
  /developments/guzape                  [see §10.1]
  /developments/grand-verdantia
  /developments/project-sigma           [see §10.1]
/legacy                 Earlier & ongoing communities
/team                   Leadership & delivery team
/contact
/privacy
/404
```

### 2.2 Navigation

Primary: **Developments · About · Design Philosophy · Team · Contact**
Nav button: **Enquire About a Home**
Optional top bar: *An Ibadan- and Abuja-based developer. Part of the Dav-Ric Group.* → `+234 803 915 4016`

### 2.3 CTA vocabulary — use these exact labels

| Context | Label |
|---|---|
| Homepage hero, primary | Explore Our Developments |
| Homepage hero, secondary | Speak to a Property Consultant |
| Project card | View This Development |
| End of project section | Register Your Interest |
| Project Sigma (land) | Book a Site Visit |
| Grand Verdantia (venue) | Enquire About the Venue |
| Generic / footer | Start a Conversation |

### 2.4 Footer

**Brand column:** Dav-Ric Homes — Crafting Homes. Building Legacies. *The Real Estate Development arm of the Dav-Ric Group.*

**Developments:** Pebblebrooks Estate · Alalubosa Estate · Guzape, Abuja · Grand Verdantia · Project Sigma · Our Growing Legacy

**Company:** About Us · Design Philosophy · Our Team · Contact · Privacy Policy

**Reach Us:** +234-803-915-4016 · info@davricgroup.com · www.davricgroup.com

**Nigeria Office:** 26a, Block 27, Alaafin Avenue, Oluyole, Ibadan, Nigeria.
**Canada Office:** 305, King Street, West Suite, Kitchener, Ontario. N2G 1B9, Canada.

**Strip:** © 2026 Dav-Ric Homes, a member of the Dav-Ric Group. All rights reserved. — *Our Word is Bond and Our Bond links the World.*

---

## 3. Home page copy

### Hero
**Eyebrow:** Dav-Ric Homes
**H1:** Crafting Homes. Building Legacies.
**Subhead:** Modern homes and mixed-use developments across Ibadan, Abuja and Ontario — built by the real estate arm of a group that has been delivering on its word since 2008.
**CTAs:** Explore Our Developments · Speak to a Property Consultant

### Proof strip (counters, animate on scroll)

| Figure | Label |
|---|---|
| 5 | Active Developments |
| 2 | Cities — Ibadan & Abuja |
| 40,000+ | sqm Under Development |
| 2008 | Group Founded |

### Introduction
**H2:** We handle every step, from land to homeowner.

Dav-Ric Homes delivers modern homes and mixed-use properties in thriving communities. We acquire the land, market each unit, construct the homes and stay with each homeowner afterwards — with competent expertise at every stage of the cycle.

That focus on Competence and Excellence is what sits behind our results, from our earliest communities to the five developments now underway across Ibadan and Abuja.

**Link:** More about who we are →

### Design philosophy teaser
**Eyebrow:** Design Intent
**H2:** One continuous vision, carried across every address.

A signature red-lattice facade. Sculpted stone volumes. Rooftop pergolas. The architectural language first realised at Dav Ric Towers — the Group's own headquarters in Oluyole — now runs through every Dav-Ric Homes development.

**Link:** See how we design →

### Developments preview
**Eyebrow:** Current Developments
**H2:** Five projects. One design language.
**Intro:** From a thirteen-unit gated estate in Jericho to a forty-four-plot serviced land development on Ring Road, here is what we are building right now.
*Cards use the one-liners in §5.2.*
**Link:** View all developments →

### Milestone band (full-bleed, Dav Ric Towers imagery)
**Eyebrow:** Milestone
**H2:** Dav Ric Towers — a foundation realised.

Commissioned in August 2026 in Oluyole, Ibadan, the Group's head office is the architectural benchmark for everything that follows. Its material palette, massing discipline and detailing set the standard now carried into every estate we build.

**Link:** Read the story →

### Values cards
**H2:** What we hold ourselves to

- **Focus on Detail** — The difference between a house and a home is in the details, and we don't delegate them.
- **Partnership** — We treat every client, contractor and consultant as a partner in the outcome.
- **Excellence** — Delivering above expectation is the standard, not the stretch goal.
- **Safety** — Every site, every crew, every stage — safety is non-negotiable.
- **Innovation** — We keep looking for better ways to build, specify and serve.
- **Competence** — The right expertise at every stage of the development cycle.

### Group credibility band
**H2:** Backed by two decades of the Dav-Ric Group.

What began in 2008 as a petroleum trading and distribution business has grown into a group of four companies operating across seven industries — Energy, Telecoms, Construction and Real Estate. Dav-Ric Homes carries that record into every home we build.

**Link:** Visit davricgroup.com →

### Closing CTA
**H2:** Let's talk about your next address.
Whether you're buying a home, securing a serviced plot or planning an event venue, our property consultants will walk you through what's available and what's coming.
**CTAs:** Enquire About a Home · Call +234 803 915 4016

---

## 4. About page copy

**Eyebrow:** About Us
**H1:** Who We Are
**Standfirst:** The Real Estate Development arm of the Dav-Ric Group — committed to delivering modern homes and mixed-use properties in thriving communities.

**Body:**
We handle every step of the development cycle. We acquire the land. We market each unit. We construct new homes diligently, and we care for each homeowner long after handover — bringing competent expertise to every stage.

This focus on Competence and Excellence has been the key driver behind our consistent achievement of exceptional outcomes, from our earliest communities to the five developments currently underway across Ibadan and Abuja.

### Message from the Group CEO

> Our origins at Dav-Ric Group have birthed our firmly held values of Competence, Resourcefulness and Surpassing Expectations. We approach opportunities seeking to add value first — this is how we have grown from a small logistics company leasing fleet assets to a conglomerate of four companies operating in seven industries over two decades.

**Attribution:** Iyke Agwu — Group Chief Executive Officer, Dav-Ric Group

**Our commitment:** Our commitment to serving clients across multiple industries has become our compass — reinforcing the passion to deliver above expectations and guiding us to new heights of Innovation, Resilience and Excellence. We give confidence and direction to those we serve.

### Our Story — timeline

**H2:** Two decades of building with purpose

**Intro:** In 2008, the Dav-Ric Group journey began with a dedication to pursue purpose and an undeterred determination to build businesses into institutions. What started as a trading business sourcing and distributing petroleum products has grown, over almost two decades, into a diversified group spanning Energy, Telecoms, Construction and Real Estate.

| Year | Milestone | Copy |
|---|---|---|
| 2008 | Foundation | Dav-Ric Group is founded as a petroleum trading and distribution business. |
| 2010s | Diversification | The Group expands into Telecoms Managed Services and Civil Construction. |
| *TBC — see §10.2* | Homes is Born | Dav-Ric Homes launches as the Group's dedicated Real Estate Development arm, delivering homes across Nigeria and Canada. |
| 2026 | New Chapter | Strategic design leadership joins Dav-Ric Homes, guiding five new developments across Ibadan and Abuja. |

### Vision, Mission & Values

**Our Vision:** To be the First and Preferred Choice for ensuring a legacy of timeless beauty and durability in homes and spaces.

**Our Mission:** We enrich lives by crafting exceptional homes and living spaces that become places of comfort, style and quality — exceeding expectations and providing protection.

**Our Core Values:** Focus on Detail · Partnership · Excellence · Safety · Innovation · Competence
*(Reuse the one-liners from §3 "Values cards" — do not write new ones.)*

**Page CTA:** *Come and see what we're building.* → Explore Our Developments

---

## 5. Design Philosophy page & Developments index

### 5.1 Design Philosophy

**Eyebrow:** Philosophy
**H1:** Design Intent, One Continuous Vision

**Body:** Our in-house design leadership guides one continuous design vision across the Dav-Ric Group's portfolio of developments. Dav-Ric Homes is currently advancing five distinct projects across Ibadan and Abuja — each shaped by the same design philosophy realised in Dav Ric Towers, the Group's own headquarters.

> A signature red-lattice facade, sculpted stone volumes and rooftop pergolas — the architectural language now carried across every Dav-Ric Homes address.

**Three signature-element cards:**
- **The Red Lattice** — A structural screen that has become the brand's most recognisable gesture. It filters light, shades glazing and gives every Dav-Ric building a face you can identify from the street.
- **Sculpted Stone Volumes** — Massing handled as solid form rather than applied decoration, so the architecture reads clearly in daylight and holds its presence at night.
- **Rooftop Pergolas** — The roof treated as habitable ground. Shade, structure and a defined silhouette against the skyline.

**Milestone section — H2:** Dav Ric Towers — A Foundation Realised

The head office of the Dav-Ric Group, completed in Oluyole, Ibadan, stands as the architectural benchmark for the wider Dav-Ric Homes portfolio. Its material palette, massing discipline and detailing set the standard now carried into every estate that follows.

| | |
|---|---|
| **HQ** | Corporate Headquarters |
| **Aug 2026** | Commissioned |
| **Oluyole** | Ibadan, Nigeria |

**Gallery caption:** Real construction photographs of the Dav-Ric Group headquarters, captured as the building took shape on site.

**Page CTA:** *See the philosophy in built form.* → View Our Developments

### 5.2 Developments index

**Eyebrow:** Portfolio
**H1:** Portfolio at a Glance
**Standfirst:** Five developments, one design language — currently underway across Ibadan and Abuja.

| Project | Location | Site Area | Typology | Height |
|---|---|---|---|---|
| Pebblebrooks Estate | Jericho, Ibadan | 3,218 sqm | 13-unit terrace / semi-detached estate | G+2 |
| Project Beta | Alalubosa, Ibadan | 3,023 sqm | Terrace / semi-detached estate | G+2 |
| Guzape Main Project | Guzape, Abuja | 1,667 sqm | Luxury terrace development | G+2 |
| Grand Verdantia | Onireke, Ibadan | 8,000 sqm | Hotel & grand event centre | — |
| Project Sigma | Ring Road, Ibadan | 2.4 Ha (24,000 sqm) | 44 serviced plots + open house | — |

**Card one-liners:**
- **Pebblebrooks Estate** — Thirteen gated homes around a central landscaped mall in Jericho.
- **Project Beta** — An evolving Alalubosa estate stepping toward the street with a taller, more refined massing.
- **Guzape** — Our most exclusive address: luxury terraces in one of Abuja's most prestigious neighbourhoods.
- **Grand Verdantia** — A hotel and grand event marquee on eight thousand square metres in Onireke.
- **Project Sigma** — Forty-four fully serviced plots on 2.4 hectares, infrastructure first.

**Filter labels:** All · Residential · Land · Hospitality · Ibadan · Abuja

---

## 6. Project pages

Template for each: header → narrative → stat trio → gallery → at-a-glance list → enquiry CTA → next-development link.

### 6.1 Pebblebrooks Estate — `/developments/pebblebrooks-estate`

**Eyebrow:** Current Developments — Project 01
**H1:** Pebblebrooks Estate
**Meta line:** Jericho, Ibadan · ±3,218 sqm

A 13-unit gated apartment estate combining terrace and semi-detached typologies around a central landscaped mall — conceived as a self-contained residential community: luxury, serene, elegant, modern.

Seven 4-bedroom terrace houses, each with a maid's room, sit alongside six 4-bedroom semi-detached houses with a 1-bedroom basement apartment. The whole estate is anchored by a central badminton court and supported by an ancillary recreation building and gate house.

**Stats:** 13 Total Units · G+2 Building Height · 4 Building Types

**At a glance:** 7 × 4-bedroom terrace houses with maid's room · 6 × 4-bedroom semi-detached houses with 1-bedroom basement apartment · Central landscaped mall · Central badminton court · Ancillary recreation building · Gate house

**Status:** Structural works ongoing on site.
**Gallery caption:** Structural works ongoing on site — real progress photographs from the most recent site visit.
**CTA:** Register Your Interest in Pebblebrooks

### 6.2 Project Beta — `/developments/project-beta` *(name TBC, §10.1)*

**Eyebrow:** Current Developments — Project 02
**H1:** Project Beta
**Meta line:** Alalubosa Estate, Ibadan · ±3,023 sqm

An evolving estate currently at carcass stage to the rear, now extending toward the street frontage with a new phase of terrace and semi-detached residences built to a taller, more refined massing.

Five existing 4-bedroom terrace units, built to carcass, sit at the rear of the plot. Four semi-detached units plus a self-compound unit front the main road at the Group's newest building height.

**Stats:** 5 Existing Terrace (4-bed) · 4+1 New Semi-Detached + Compound · G+2 New Building Height

**At a glance:** 5 × 4-bedroom terrace units (existing, at carcass stage) · 4 × new semi-detached units fronting the main road · 1 × self-compound unit · G+2 — the Group's newest building height

**Required status note:** *Rear units at carcass stage. Street-frontage phase in development.*
**CTA:** Register Your Interest

### 6.3 Guzape Main Project — `/developments/guzape` *(name TBC, §10.1)*

**Eyebrow:** Current Developments — Project 03
**H1:** Guzape Main Project
**Meta line:** Guzape, Abuja, FCT · ±1,667 sqm

The newest addition to the portfolio and its most exclusive: a luxury terrace development within one of Abuja's most prestigious residential neighbourhoods, designed to match the calibre of its address.

The project is currently at concept design stage, with five distinct design directions under consideration before a final direction is selected and developed into full working drawings.

**Stats:** G+2 Building Height · Luxury Design Tier · Concept Current Stage

**Required status note, displayed prominently:** *Concept design stage. Imagery shown is indicative of design direction and subject to change.*
**CTA:** Join the Guzape Interest List

### 6.4 Grand Verdantia — `/developments/grand-verdantia`

**Eyebrow:** Current Developments — Project 04
**H1:** Grand Verdantia
**Meta line:** Onireke, Ibadan · ±8,000 sqm

A departure into hospitality and events: a landmark development combining a full-service hotel with a grand event marquee, positioning Dav-Ric Homes within the hospitality sector for the first time.

The aluminium-orangery event hall — complete with administrative and security buildings, colonnades, fountains and gardens — is specified and under procurement, while hotel design concepts remain under review.

**Stats:** 2 Building Programmes · 25×52.5m Event Marquee Footprint · 1,500 Guest Capacity

**At a glance:** Full-service hotel (design concepts under review) · Aluminium-orangery grand event marquee, 25 × 52.5 m · Seated capacity of 1,500 guests · Administrative and security buildings · Colonnades, fountains and gardens

**CTA:** Enquire About the Venue

### 6.5 Project Sigma — `/developments/project-sigma` *(name TBC, §10.1)*

**Eyebrow:** Current Developments — Project 05
**H1:** Project Sigma
**Meta line:** Adeoyo Road, Ring Road, Ibadan · 2.4 Hectares

The portfolio's largest undertaking: a fully serviced, infrastructure-first land development. Forty-four individually numbered plots are arranged around a fully serviced internal road network complete with drainage, central sewage and central gas reticulation.

An open house on site lets prospective clients see exactly what's achievable before each individually sized plot is sold.

**Stats:** 44 Serviced Plots · 405 sqm Typical Plot Size · 4 Infrastructure Systems

**The four systems:** Fully serviced internal road network · Drainage · Central sewage · Central gas reticulation
**CTA:** Book a Site Visit

---

## 7. Legacy & Team

### 7.1 Legacy — `/legacy`

**Eyebrow:** Our Growing Legacy
**H1:** Beyond the Five — Our Wider Footprint
**Standfirst:** Dav-Ric Homes' journey includes earlier and ongoing communities that continue to shape the brand's reputation for quality and durability.

**Model Homes & Offices** — *Ontario, Canada*
A pioneering mixed-use development offering luxurious living spaces and state-of-the-art offices — the Group's North American flagship, featuring one elegant townhouse and one sophisticated office space with contemporary architecture and premium finishes.

**Rose Vine Estate** — *Oluyole, Ibadan, Nigeria*
An upcoming residential haven set against a backdrop of natural beauty — ten elegant semi-detached bungalows, each with private vineyard-styled compounds, alongside five luxurious detached homes with courtyards, in a lush, tranquil community.

**Closing line:** From Pebblebrooks to Project Sigma, every development carries forward the design discipline realised at Dav Ric Towers.

### 7.2 Team — `/team`

**Eyebrow:** Our People
**H1:** The People Behind Every Address
**Standfirst:** Executive leadership guiding the Dav-Ric Group, and the specialists driving design, construction and client delivery across Dav-Ric Homes.

**Corporate Leadership**
- **Iyke Agwu — Chairman** *(title conflict, see §10.3)* — Sets the strategic vision and governance direction for the Dav-Ric Group, guiding growth across all four subsidiaries with a focus on competence and excellence.
- **Joyce Igheghe — Group Chief Operating Officer** — Oversees day-to-day operations across the Group, ensuring every subsidiary — including Dav-Ric Homes — runs with efficiency, discipline and accountability.
- **Chinyere Adeniji — Group Head, Human Resources** — Leads people strategy and organisational development across the Group, building and nurturing the teams that bring every project to life.

**Project & Delivery Team**
- **Arc. Olajubutu Gbenga — Project Director** — Oversees design and construction delivery across Dav-Ric Homes' active developments, ensuring quality at every stage.
- **Arc. Olayinka Oni — Strategic Design & Development Partner** — Guides the architectural direction and design vision behind every Dav-Ric Homes development, from concept through construction supervision.
- **QS Esther Olasemiji — Head, Quantity Surveying & Cost Management** — Manages cost planning and value engineering, safeguarding project viability from concept to completion.
- **Engr. Kolade Onaolapo — Project Manager** — Coordinates on-site execution and schedules, keeping projects on track from groundbreaking to handover.
- **Akinwale Desmond — Property Consultant** — Advises clients and prospective homeowners, matching them with the right Dav-Ric Homes property.
- **Oluwaseun Adeniyi — Admin/Procurement Executive** — Manages administrative operations and procurement, keeping every project properly resourced.

**Page CTA:** *Talk to the people who'll build your home.* → Contact Our Team

---

## 8. Contact, forms & utility copy

### 8.1 Contact page

**Eyebrow:** Contact Us
**H1:** Building the Next Chapter of Dav-Ric Homes
**Standfirst:** Tell us what you're looking for — a home, a serviced plot, or a venue — and a property consultant will be in touch.

Phone **+234-803-915-4016** · Email **info@davricgroup.com** · Web **www.davricgroup.com**
Nigeria Office: 26a, Block 27, Alaafin Avenue, Oluyole, Ibadan, Nigeria.
Canada Office: 305, King Street, West Suite, Kitchener, Ontario. N2G 1B9, Canada.

*Office hours are not in the source material — omit the field or ask the client.*

### 8.2 Enquiry form

**Heading:** Register Your Interest
**Sub:** No obligation. We'll come back to you with availability, pricing and next steps.

| Field | Label | Placeholder / options |
|---|---|---|
| name | Full Name | Your name |
| email | Email Address | you@example.com |
| phone | Phone Number | +234 … |
| interest | I'm interested in | Pebblebrooks Estate / Alalubosa Estate / Guzape, Abuja / Grand Verdantia / Project Sigma (serviced plots) / Something else |
| intent | I'm looking to | Buy a home / Buy a serviced plot / Book an event venue / Partner or invest / Just exploring |
| message | Tell us more (optional) | Bedrooms, budget range, timeline — whatever helps. |

**Submit:** Send My Enquiry
**Consent:** By submitting, you agree that Dav-Ric Homes may contact you about this enquiry. We don't share your details with third parties.
**Success:** Thank you — your enquiry is with our property consultants. Expect a response within one business day.
**Error:** Something went wrong on our end. Please try again, or call us directly on +234 803 915 4016.

### 8.3 Newsletter (footer, optional)

**Heading:** New releases, first.
**Sub:** Occasional updates on unit availability, new launches and site progress. No noise.
**Button:** Keep Me Posted

### 8.4 404

**H1:** This address doesn't exist yet.
**Body:** The page you're looking for has moved or was never built. Our developments, however, are very real.
**CTA:** View Our Developments

---

## 9. SEO metadata

| Page | Title tag (≤60) | Meta description (≤158) |
|---|---|---|
| Home | Dav-Ric Homes \| Modern Homes in Ibadan & Abuja | Crafting homes, building legacies. Five developments underway across Ibadan and Abuja from the real estate arm of the Dav-Ric Group. |
| About | About Dav-Ric Homes \| Our Story & Values | The real estate development arm of the Dav-Ric Group. Two decades of building with purpose, from land acquisition to homeowner care. |
| Philosophy | Design Philosophy \| Dav-Ric Homes | One continuous design vision — red-lattice facades, sculpted stone volumes and rooftop pergolas across every Dav-Ric Homes address. |
| Developments | Our Developments \| Dav-Ric Homes | Five developments, one design language. Gated estates, luxury terraces, serviced plots and hospitality across Ibadan and Abuja. |
| Pebblebrooks | Pebblebrooks Estate, Jericho Ibadan \| Dav-Ric Homes | A 13-unit gated estate of 4-bedroom terrace and semi-detached homes around a central landscaped mall in Jericho, Ibadan. |
| Project Beta | Alalubosa Estate, Ibadan \| Dav-Ric Homes | Terrace and semi-detached residences in Alalubosa Estate, Ibadan, built to the Dav-Ric Group's newest G+2 building height. |
| Guzape | Luxury Terraces in Guzape, Abuja \| Dav-Ric Homes | A luxury terrace development in one of Abuja's most prestigious residential neighbourhoods. Currently at concept design stage. |
| Grand Verdantia | Grand Verdantia Hotel & Event Centre, Ibadan | A full-service hotel and 1,500-guest aluminium-orangery event marquee on 8,000 sqm in Onireke, Ibadan. |
| Project Sigma | 44 Serviced Plots, Ring Road Ibadan \| Dav-Ric Homes | Fully serviced 405 sqm plots on 2.4 hectares with road network, drainage, central sewage and gas reticulation. Open house on site. |
| Legacy | Our Growing Legacy \| Dav-Ric Homes | Earlier and ongoing communities in Oluyole, Ibadan and Ontario, Canada that shaped our reputation for quality and durability. |
| Team | Our Team \| Dav-Ric Homes | Meet the leadership and delivery specialists behind every Dav-Ric Homes development. |
| Contact | Contact Dav-Ric Homes \| Ibadan & Ontario | Speak to a property consultant about homes, serviced plots or event venues. Offices in Oluyole, Ibadan and Kitchener, Ontario. |

**Schema:** `Organization` — name `Dav-Ric Homes`, `parentOrganization` `Dav-Ric Group`, `foundingDate` `2008` (Group), telephone, email, two `PostalAddress` entries, `sameAs` → davricgroup.com. Project pages carry `RealEstateListing` or `Residence` with `address`, `floorSize`, `numberOfRooms` where applicable.

---

## 10. Open decisions — check before shipping

1. **Public project names.** "Project Beta", "Guzape Main Project" and "Project Sigma" are internal working titles. Holding names used above: *Alalubosa Estate*, *Guzape*, and for Sigma something like *Adeoyo Gardens* or *Sigma Court*. Needs a client naming call.
2. **Dav-Ric Homes founding year.** The source timeline shows "Est." with no year. Don't invent one.
3. **Iyke Agwu's title.** Listed as Group Chief Executive Officer on one page and Chairman on another. Pick one, or show both if he holds both.
4. **Project status honesty.** Guzape is concept-stage and Beta's rear units are carcass. Renders are persuasive enough to be mistaken for finished stock — keep the status lines visible.
5. **Grand Verdantia audience split.** A hotel and event centre draws a different visitor than a homebuyer. May need its own enquiry route or microsite.
6. **Contact identity.** Every contact detail is Group-level. Decide whether Homes gets its own domain and inbox or lives as a section of the Group site.
7. **Missing commercial content.** No pricing, payment plans, completion dates, or testimonials exist. Homebuyers look for all four — gather before launch.
8. **Third-party imagery.** The Grand Verdantia reference image in the source deck carries another firm's watermark. Do not use it on the live site.
