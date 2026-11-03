# Kingdom Education — design and conversion contract

Status: revision 2, based on the React/Vite implementation now present. This deliverable updates the brief; website source remains unchanged. The revision-2 section below supersedes conflicting earlier visual and motion restrictions.
Audited: 6 October 2026. Mode: Persuade. All courses receive equal priority, as requested by the owner.

## Purpose and audience

Help students, parents and adult learners in Tashkent find a suitable course, understand why Kingdom is credible, and call or request a callback. Corporate visitors retain a separate route. Optimize qualified inquiries and successful contact, rather than maximizing time on site. Additional engagement should come from useful information.

## Evidence from the current site

Sources: [homepage](https://kingdomedu.uz/), [course directory](https://kingdomedu.uz/kurses.html). Reviewed through the live browser; the text-fetch service returned 502, but the browser loaded the site. Visual observation was at a narrow viewport; desktop layout and runtime animation behavior were not audited.

| Observed | Consequence / proposed correction |
| --- | --- |
| Hero promises to change lives without specifying the learning offer | Lead with courses, Tashkent, and help choosing a course |
| Homepage test/enrollment and course links use `#` destinations | Give every control a working, specific destination; do not claim the test is broken without interaction testing |
| All directory course links target the same `kurs-single.html` URL | Build distinct course destinations with correct content; do not infer distinct pages already exist |
| Phone `+998 55 500 22 02` appears in the footer | Make it a visible header, hero and mobile contact action |
| Email is `contact@codingninjas.com` | Remove this unrelated contact; obtain Kingdom's verified email |
| Long About block and eight benefits precede course selection | Move course selection directly after the hero; reduce institutional copy |
| Homepage branch blocks repeat Friendship of Peoples; footer lists both Furkat 11-A and 15-A | Verify branches and deduplicate; do not resolve the addresses by guessing |
| Claims include 7 years, 4,000 graduates and teacher IELTS credentials | Treat as published historical claims; verify date, scope and current accuracy before reuse |
| Benefits claim all teachers have over four years' experience; featured teacher says three years | Replace blanket claims with verified individual credentials |
| Mobile screenshot uses capitalized text, purple photo tint and orange buttons | Keep recognizable logo/colors, improve readability and real photography visibility |

These are conversion hypotheses, not measured abandonment causes. No analytics, call quality, backend delivery, full mobile interaction or accessibility audit was available.

## Reference choice and visual direction

Selected Refero reference: [Intercom — warm cream editorial spread](https://styles.refero.design/style/12255b63-e506-4bc1-a4cd-d05487de32f3).

Borrow only its warm canvas, restrained surfaces, generous spacing and editorial organization. This fits an education center because information and real people can lead. The following Kingdom tokens, typography, layout and interactions are original adaptations; this file is not a copied Refero export. Do not import Intercom branding or its product-marketing page structure.

Keep Kingdom's existing geometric logo and purple/gold recognition. Use deep purple consistently for actions; gold belongs to the logo and small decorative accents. The current palette is visually observed, not sampled: the proposed hex values below require brand approval if official tokens differ.

Design read: a welcoming education directory and inquiry site for Tashkent learners and families, with a warm, precise editorial language.
`DESIGN_VARIANCE: 7` / `MOTION_INTENSITY: 6` / `VISUAL_DENSITY: 4`. Revision 2 adds visible, purposeful scroll motion and varied section compositions.

## Proposed tokens

| Token | Value | Role |
| --- | --- | --- |
| `--canvas` | `#FAF9F6` | Page background |
| `--surface` | `#FFFFFF` | Form and interactive content |
| `--surface-muted` | `#F1EEE9` | Selected section backgrounds |
| `--text` | `#201B27` | Headings and body |
| `--text-muted` | `#625A68` | Supporting copy |
| `--border` | `#DAD4DF` | Inputs and functional separators |
| `--action` | `#62269C` | All primary actions and active controls |
| `--action-hover` | `#4C1C7A` | Action hover state |
| `--brand-gold` | `#DFA13D` | Logo/decorative accents, never small text on cream |
| `--focus` | `#62269C` | 3px outline, 3px offset |
| `--error` | `#B42318` | Error text paired with an icon/message |

Verify actual foreground/background combinations: 4.5:1 normal text, 3:1 large text and essential UI. Never use gold as white-text button fill without measured contrast.

Typography: self-host Noto Sans, weights 400/500/600/700, with Latin/Cyrillic coverage and verified Uzbek apostrophe rendering. Use one family; system sans fallback. Mobile H1 34–40px/1.12; desktop 52–64px/1.08; H2 28–40px/1.2; body 16–18px/1.6; labels 14–16px/1.4. No all-caps paragraphs, ultralight small type or gratuitous serif emphasis. Test long Russian and Uzbek strings.

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Max container 1200px; side padding 20px mobile, 32px tablet, 48px desktop. Sections 48–64px mobile and 72–96px desktop. Controls 8px radius; content/image panels 12px radius. No decorative shadows; use spacing, borders and surface tones. Minimum interactive target 44×44px; contact buttons at least 48px tall.

## Homepage order and behavior

1. **Header:** logo, Courses, Teachers, Results, Branches; explicit RU/UZ language labels, visible phone and Call button. Corporate information, vacancies and kindergarten retain reachable secondary navigation. Logo links home. No fake flag-only language switch. On mobile use a compact accessible menu and a bottom contact bar.
2. **Hero:** left-aligned offer, short explanation, primary Call and secondary Request callback; right-side authentic classroom photo. Mobile order is offer → actions → photo. Draft Russian headline: «Курсы в Ташкенте для учёбы, работы и новых целей». Supporting line: «Языки, подготовка к экзаменам и школьные предметы. Поможем выбрать курс и уточнить расписание». CTA labels: «Позвонить» and «Перезвоните мне». Show the number alongside the label. Publish only verified services and availability. Do not promise a free class, guaranteed result or callback time without approval.
3. **Course finder:** immediately useful, with visible categories: Languages, Exam preparation, School subjects, Children. Category order must not imply commercial preference. Default All view uses equal-sized entries ordered alphabetically in the active language; show all verified courses and let users filter. No oversized IELTS tile, featured course, auto-selected recommendation or premium treatment. Each entry shows course name, purpose, verified age/level/format, and a specific details link. Desktop 2–3 columns; mobile one column. No interactive quiz required before viewing courses. Avoid orphan rows with excessive blank space.
4. **Results:** publish a few consented, documented outcomes with exam date, score, course and context. Display them as readable stories, not a looping carousel. Clearly distinguish one student's score from expected outcomes. The existing Amirkhon 7.5 result is a verification candidate, not permission to republish personal records.
5. **Teachers and learning:** selected real portraits, teaching subject and verified credentials; show the practical process of choosing a level, joining a suitable group and studying. Avoid a wall of generic benefits. Keep all subject families represented rather than showing only language teachers.
6. **Branches:** concise verified address, landmark, phone and directions link per location. Lazy-load maps only when useful; the address and directions remain available if embeds fail. No geolocation prompt needed.
7. **FAQ:** answer prices, lesson frequency, age/level suitability, group format, branch choice and enrollment. Use approved answers; do not invent prices or schedules. If price is unknown, explicitly offer a call to clarify rather than fabricate «от» pricing. Content sections must still work without motion.
8. **Final contact:** inline callback form alongside the phone and approved hours. Footer has valid course/site links, verified social profiles and contact details. Remove placeholder links and unrelated email.

Course detail pages: unique title and description; audience, syllabus summary, prerequisites, format, duration, schedule, price and teachers wherever verified; local contextual contact actions. If a fact is unavailable, omit the assertion and offer clarification. Use subject-specific content, never identical cloned pages. Maintain existing useful routes through redirects when appropriate.

## Contact conversion contract

Phone default from the current site: `+998 55 500 22 02`, canonical href `tel:+998555002202`; business must confirm ownership/current validity before launch. Track tap as contact intent, not a completed call or enrollment.

Mobile bottom bar: Call as the filled primary action; Callback as outlined secondary. Provide visible labels, safe-area inset, reserved bottom page padding and no overlap with form errors or keyboard. Keep both immediately actionable. Hide the bar while a contact dialog is open. On desktop, keep visible phone contact in the header; avoid excessive sticky layers.

Callback fields: phone required; name optional; course optional, prefilled from course context with an editable value. No date of birth, school name, exam score or long questionnaire. Accept user-friendly Uzbek number entry, normalize and validate carefully, allow pasting, use `autocomplete="tel"` and `inputmode="tel"`. Provide accessible labels, concise data-use notice linked to the approved privacy policy, and any consent required by the approved policy.

States: idle → inline validation → submitting → confirmed delivery or actionable failure. Keep entered values on failure. Disable duplicate submission while pending; prevent duplicates on the server. Focus the first invalid field; announce success/failure politely. Success copy only after the endpoint acknowledges receipt: «Заявка отправлена. Мы свяжемся с вами». Error: «Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам». Do not promise a response deadline unless operationally verified. Never show fake success if no backend is connected; retain working phone contact and identify integration as blocked in the handoff.

Use an inline form as the baseline. If CTA opens a dialog, implement focus trapping, Escape, focus restoration, accessible title and a visible close button. No automatic popup, exit-intent popup, forced account, countdown, notification opt-in or floating WhatsApp/Telegram action without a verified channel.

## Content and assets

Russian is observed on the live site. Plan complete Russian and Uzbek versions, including navigation, errors, labels and metadata; obtain fluent human review of Uzbek copy. Do not imply both languages already work. Preserve selection across routes and label it explicitly. All courses have equal visual priority in both locales.

Use everyday language, short paragraphs and concrete benefits. Replace «инновационный», «лучшие», «уникальная программа» with verifiable particulars. Fix typos such as «Ташкете». No motivational filler or inflated promises. Copy drafts are proposals, not verified operating facts.

Use licensed/approved Kingdom classroom, campus and teacher photos, naturally graded with faces visible. Keep the logo geometry intact. No generated student results, fake testimonials, stock certificate images or AI people presented as Kingdom students. If approved photos are unavailable, use a clean text-led hero and report the missing asset; do not hide placeholders in production.

Verification register before launch: full course inventory and availability; contact ownership and hours; email/social accounts; branch addresses; current fees, formats and schedules; teacher credentials; permission and dates for student results; privacy policy and lead processing destination. Current directory includes Pochemuchka, English, Russian, Turkish, Korean, Chinese, biology, history, SAT, chess, mathematics and chemistry; footer also lists IELTS. Treat this as source inventory requiring reconciliation, not confirmation all courses are currently offered.

## Responsive, accessibility and performance

No horizontal overflow at 320px. At 390px the offer and call action should be visible before the hero image, with no fixed hero height. Tablet stacks where needed; desktop uses a balanced text/photo split. One H1 per page, sequential headings, semantic links/buttons, keyboard-visible focus, proper tab behavior for filters, and non-color status cues. FAQ can use native details/summary with no height animation. Avoid text embedded in images.

Optimize responsive images with explicit width/height, modern formats and sensible crops. Eager-load only the LCP image; lazy-load lower imagery/maps. Minimize scripts and avoid an animation dependency for simple transitions. Target field p75 LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; lab reports are provisional until field data exists. Retain SEO-visible course content, language metadata and accurate local-business structured data.

## Motion specification and Emil Kowalski review

Source: local `review-animations` skill and its STANDARDS.md. The original table is retained for contact controls; revision 2 below specifies marketing scroll motion and reviews the implementation now present.

| Before / risk | Required after | Why |
| --- | --- | --- |
| Decorative entrance can delay offer or call control | Hero, course finder and contact bar visible immediately; no entrance gating | The primary job is choosing and contacting |
| FAQ height tween | Instant native expansion | Avoid layout animation and interaction delay |
| Possible pulsing call button / looping carousel | Static contact action and readable results | Motion must serve feedback or spatial understanding |
| Generic `transition: all` | Named transform/opacity properties only | Prevent unintended animation and layout work |
| Callback/menu opening | 200ms enter, 150ms exit; dialog scale .97→1 + opacity; drawer small translation + opacity | Responsive, under 300ms and asymmetric |
| Hover/press effects | Fine-pointer hover only; pointer press scale .98, 120ms press and 100ms release; no movement for keyboard input | Appropriate frequency and immediate keyboard response |
| Generic easing / restarted keyframes | `cubic-bezier(0.23, 1, 0.32, 1)`; interruptible CSS transitions | Responsive easing, reversible interaction |
| Movement for reduced-motion users | Remove translation/scale; optional short opacity feedback; all controls available immediately | Preserve comprehension and access |

Menu/popover origin must match its trigger; centered dialogs can use center origin. No `scale(0)`, `ease-in`, scroll hijacking, magnetic buttons or auto-playing video. Revision 2 permits bounded decorative image parallax and progressive-enhancement scroll reveals. Under rapid open/close, retarget from the current state. Final code review must inspect exact files/lines and test keyboard, touch, reduced motion and interruption.

Verdict: motion specification is ready for implementation; runtime approval is deferred until working code is reviewed. Block launch on motion that delays actions, missing reduced-motion handling, layout-property animation or broken focus management.

## Measurement

With approved analytics, track `course_view`, `course_filter`, `click_call`, `callback_start`, `callback_submit_success`, and `callback_submit_error` with route, locale, CTA placement and course identifier. Never send entered phone/name or form contents to analytics. Track form success only after confirmed delivery. Use CRM/telephony data, if available, for qualified leads and connected calls; clicks alone do not prove business outcomes.

Establish a baseline before redesign and compare comparable traffic sources and periods. Primary metrics: qualified inquiries per session, connected calls and callback delivery success. Diagnostic metrics: course-detail visits, form abandonment and error rate. Do not claim a conversion lift before measuring it.

## Tool provenance and scope

Applied Impeccable principles for hierarchy, clarity and accessibility, design-taste-frontend for brand preservation and restrained composition, and review-animations for the motion contract. User's explicit two-file scope takes precedence over additional skill artifacts, workshops or implementation. 21st MCP was not exposed among available tools; no Humanizer skill was found in the listed local skill roots. Their use is not claimed. Plain-language copy guidance is a manual substitute. No website code, external edits, form submissions or deployment are included.

## Revision 2 — expressive design, scroll motion and responsive audit

### Diagnosis and evidence limits

The implementation has changed information architecture and routing, but its art direction remains conventional: a rectangular campus image beside a long headline, repeated cream/white sections, bordered cards for nearly everything, small portraits and a very long 13-course grid before results. Motion is limited mainly to image loading and menu/dialog entry. Adding fades alone will not fix the visual sameness.

Reviewed source, saved screenshots at 1440/320px, and local preview at 320/768/1024px. The saved 320px image visibly clips the right side; the current 320px DOM check found no overflow among sampled header/main elements and rendered usable contact controls. Do not treat the old capture as current proof. At 1024px the current header callback extends to approximately x=1050, and the phone wraps into a vertical column. The screenshot interface returned an inconsistent narrow crop during the 768px check, so tablet visual approval is pending. Full-page responsive, Uzbek, keyboard and reduced-motion acceptance still require fresh captures/tests.

### New visual thesis: a learning journey with a geometric thread

Keep the logo and purple/gold identity. Connect sections with a thin geometric line inspired by the logo's connected planes, using static CSS/SVG geometry and a scroll-linked decorative indicator. Geometry is decoration with `aria-hidden`, never a fake progress metric. It expresses continuity from choosing a subject to contacting a teacher. Use no new commercial claims.

- **Hero:** an asymmetric 7/5 desktop grid. Increase desktop type to 64–76px with deliberate line breaks and a short approved headline, e.g. «Новые знания. Ваш следующий шаг». Add a concrete Tashkent/course descriptor immediately underneath. Keep both contact actions visible from the first paint. Use an approved campus/classroom photo in a generous cropped panel with an offset purple backing plane and a small gold geometric stroke; no washed-out image or photo load fade. The supporting geometry may move gently on scroll; the heading and buttons remain still.
- **Courses:** compact equal-sized entries with large subject names, one sentence, and a clear detail link. Remove repeated long format/level rows from the homepage; retain those details on course pages. Keep all courses visible in the default alphabetical listing and equal in visual weight. Use consistent category iconography, not unique colors or sizes that privilege a subject. Search and filters stay static while browsing.
- **Results:** switch from another small boxed card to a broad split editorial composition with consented portrait, large static verified score and explanatory text. If only one result is approved, show one story intentionally; never fabricate additional stories to fill a grid. Move typography/photography, never count up exam scores.
- **Learning process:** use one dark-purple chapter with three readable steps on desktop, an accessible vertical sequence on mobile. The geometric connector progresses beside the steps as they enter view; step text remains legible throughout. The sticky element is the decorative rail alone, not a screen-filling pinned section. Remove the generic three-card treatment.
- **Teachers:** larger real portraits paired with concise credentials in alternating rows. Preserve factual content; do not turn generic faculty descriptions into fictional named teachers. If there is one approved teacher photo, use one deliberate feature and keep other factual subject information text-based.
- **Branches and FAQ:** quieter surfaces to recover scanning speed. Branch address and directions must remain readable without animated maps. Keep FAQ instant and native.
- **Final contact:** a confident purple surface framing a white, accessible form and direct phone block. Remove reviewer/sandbox switches from the public customer flow. Missing callback integration must be communicated honestly in plain language, with phone as the available alternative.

The selected Refero source remains a spacing/material reference, not a ceiling on expression. Kingdom's geometry, stronger type scale, portrait scale and dark process chapter create the new identity. Avoid making every section a card grid. Use the same purple action color throughout; white text and outlined white controls are allowed on the dark chapter with measured contrast.

### Scroll choreography — mandatory, not an optional polish task

| Area | Effect | Exact bounds and behavior |
| --- | --- | --- |
| Hero photo backing/decoration | Scroll-linked separation of planes | Desktop ≥1024px only; translateY from +16px to -16px across the hero's exit, progress clamped 0–1; no text movement; image container reserves its dimensions |
| Lower section titles and portrait panels | One-time entrance establishing the next chapter | translateY 16px→0, opacity .85→1, 500ms strong ease-out; trigger shortly before viewport entry; ≤60ms stagger, ≤180ms total delay per group |
| Course directory | Equal one-time row/group reveal | 12px→0 and .9→1, 400ms; at most 3 items staggered 50ms within each entering row; no filter/search replay, no delayed focus or click targets |
| Learning process connector | Scroll progress indicating sequence | ScaleY 0→1 on a decorative line, top origin; steps remain static; no animation of actual height or width |
| Teacher photo | Subtle reveal of portrait panel | 16px→0 and .85→1, 500ms; no face distortion, tilt, zoom bounce or continuous oscillation |
| Final contact | Heading/outer decorative plane only | 16px→0, 500ms once; form fields and phone always stationary and immediately usable |

Marketing sequences may use 400–500ms because they introduce occasional chapters; menu/dialog/press feedback retains the shorter budgets above. Use `cubic-bezier(0.23, 1, 0.32, 1)` for entrances; direct scroll progress uses linear mapping without easing lag. The page must visibly exhibit at least two distinct effects: section entrances and a decorative scroll-linked sequence. Do not add ambient loops or hide readable content until the visitor waits.

Implement a shared reveal primitive with IntersectionObserver and CSS transitions. Base markup is visible, and off-screen elements may be enhanced only after observer setup succeeds. No-JS/unsupported browsers display everything. Reveal immediately on `focusin`, fragment navigation and restored scroll position. Disconnect observers/RAF on unmount and mark once-revealed nodes complete. Do not put React state updates on every scroll frame. Prefer native CSS scroll timelines with feature detection for the connector; otherwise use a scoped passive listener and one RAF that updates the actual decoration's transform only, while its section is near the viewport. Never hijack wheel/touch scrolling. No new motion dependency is necessary.

At <768px: entrances use ≤8px displacement, 400ms, no stagger, no hero parallax or sticky connector. At 768–1023px: ≤12px entrances; process stays in ordinary document flow. At ≥1024px: full choreography. Reduced motion disables all spatial/scroll effects, disconnects scroll work and leaves content visible; optional opacity feedback ≤150ms. Motion preference changes must update behavior during the session. Back navigation must never reset already-visible content to hidden.

### Responsive corrections and acceptance matrix

| Width / state | Required composition and checks |
| --- | --- |
| 320–390px | 16–20px gutters, compact wrapping location label; 34–40px H1; hero actions stack, call label can be short with number on a separate line; one-column courses; no desktop decoration; bottom bar buttons use short translated labels and `min-width:0` |
| 540–767px | Two course columns only if titles/actions genuinely fit; otherwise one; hero actions may wrap; account for bottom bar height plus safe area |
| 768–1023px | Compact header/menu; no squeezed full desktop nav; hero stacked or true balanced grid based on content; two course columns and vertical process if needed |
| 1024–1279px | Compact navigation until measured space permits expansion; hero children `min-width:0`; shorten/wrap action layout deliberately; no clipped header callback or vertical phone number |
| ≥1280px | Full nav only when both locales fit; phone and nav labels do not wrap; intentional 7/5 hero; three equal course columns; decorative process rail may be sticky within its section |
| 200% zoom / landscape / keyboard | Navigation collapses by available space; dialogs fit `100dvh` and scroll internally; sticky elements never obscure focused controls; software keyboard does not trap the form |

Fix intrinsic sizing rather than masking overflow: grid columns `minmax(0,1fr)`, flex/grid children `min-width:0`, long labels wrapping, and explicit shrink rules. `overflow-x:hidden` is not evidence of responsive correctness. Position sticky-header anchor targets with `scroll-margin-top`. Reserve bottom-bar height including `env(safe-area-inset-bottom)`. Replace the global reduced-motion `transform:none!important` rule with component-specific overrides so centering transforms (e.g. the search clear button) survive. Self-host the font; the current Google Fonts CSS import does not meet the earlier contract.

### Review findings against current implementation

| Before | After | Why |
| --- | --- | --- |
| `src/components/Header.module.css` enables full nav at 900px and callback at 1024px | Keep compact header until ≥1280px, then validate both locales and zoom | Current 1024px CTA exceeds viewport and phone wraps excessively |
| `src/components/Header.module.css:239` keyframed drawer entrance and conditional unmount in Header.tsx | Interruptible transition with retained exit state, trigger focus restoration and actual focus trap | Rapid toggling restarts entry; current Escape handler alone is not a focus trap |
| `src/App.tsx:27` hardcodes smooth fragment scrolling | Respect reduced-motion preference and offset sticky header | CSS media query does not override an explicit JS smooth request |
| `src/index.css:295` blanket reduced-motion transform reset | Remove movement only from animated components | Global reset can destroy structural positioning |
| Repeated ordinary cards and no chapter choreography | Implement bounded reveal, decorative hero planes and process rail above | Current interaction-only motion does not satisfy the requested scroll experience |

Motion verdict: **Block current implementation approval** for interrupted drawer behavior and incomplete keyboard/reduced-motion handling. New choreography is a specification, not tested code. Antigravity must review the final changed code with exact current line numbers; source positions can shift.

Also resolve non-motion blockers: CallbackForm simulates success after a timeout with sandbox enabled by default; it is not server delivery. Duplicate inline/modal IDs and missing actual focus trapping must be corrected. Source content asserts unverified course ranges, opening hours and that conflicting branch addresses identify one building; those assertions are not supported by the original audit. Keep missing-fact/integration notes in the review handoff, while customer-facing copy stays simple and truthful.

Completion proof: fresh full-page desktop/mobile screenshots plus an 8–12 second scroll recording or a runnable preview showing both choreography effects; test RU/UZ at 320/390/768/1024/1280/1440px, zoom and reduced motion. A static screenshot cannot prove animation quality. Preserve course parity and contact usability throughout.

## Implemented revision — 6 October 2026

The redesign is now implemented in the React/Vite source: large asymmetric hero with geometric backing, compact equal-priority directory, editorial results, purple learning chapter with scroll-linked rail, large teacher presentation and purple final contact section. ScrollMotion provides visible-first, one-time entrances and desktop decorative scroll movement; it cleans up observers/listeners and responds to reduced-motion preference changes. Drawer and callback opening are intentionally instant rather than restarted keyframes. Both use focus trapping and restoration; callback IDs are unique, and timed mock delivery success was removed.

| Before | After | Why |
| --- | --- | --- |
| Replayed/absent scroll animation | `src/components/ScrollMotion.tsx` observes off-screen elements once; base content is visible | Progressive enhancement without blocking content |
| Scroll-driven React rendering risk | Scoped RAF writes transform on decorative plane/rail only | No per-frame React state or layout animation |
| `src/App.tsx` explicit smooth scroll | Honors reduced-motion preference | Keyboard/anchor navigation remains accessible |
| Drawer/dialog restarted entrance | Instant opening with `useDialogFocus.ts` and unique IDs | Interruptible access without animation delay |
| Hidden horizontal overflow | Actual intrinsic layout corrected; rotated geometry contained | Contact controls fit intermediate widths |

Motion review verdict: **Approve implemented motion structure**, with observed progressive reveals and connector transform updates in the browser. This is not a claim of real-device frame-rate or reduced-motion runtime certification. Callback delivery, business fact verification, self-hosted fonts, full accessibility audit and field performance measurement remain separate launch work.

Validation: production build succeeds; lint succeeds with existing Fast Refresh and header effect warnings. Browser DOM checks report scrollWidth equal to viewport width at 320/390/768/1024/1280/1440px in RU and UZ. Dialog focus is inside the open dialog and duplicate IDs are absent. Local preview provides live scroll review. No deployment or production contact submission performed.

### Course finder update

The shared homepage/directory finder now uses equal-size lavender subject tiles at ≥768px, with typographic subject marks, clear detail links and enrollment buttons. Below 768px it uses keyboard-operable expandable rows; opening reveals the description, format, level and actions. Expansion is instant; one-time scroll entrances remain subtle. Filters/search preserve alphabetical ordering and equal course priority. Verified mobile expansion, 13 default courses, 5 language-filter results, empty search rendering, and no overflow at 320/390/768/1024/1440px with Uzbek content. Production build and lint pass with the same two existing warnings.

### Moving course preview

At the owner's request, the homepage now presents all courses in an equal-weight, alphabetically ordered horizontal moving strip. The «Все курсы» link opens the full `/courses` directory with desktop tiles/mobile expandable rows. Motion uses a slow linear transform loop, pauses outside the viewport and on desktop hover, and has an explicit stop/start control. Keyboard focus, explicit stop and reduced-motion mode expose a stationary, manually scrollable list. Duplicate loop items are excluded from keyboard order and the accessibility tree. This requested preview supersedes the earlier prohibition on continuous course motion; it does not replace the static directory.

The moving preview now uses a two-column composition: encouraging goal-based copy and the full-directory action on the left, with a vertically moving course list on the right. No achievement counts, discounts or guarantees were added. Below 768px the copy stacks above a 400px course viewport. The 85-second linear vertical loop retains pause, hover/focus and reduced-motion fallbacks. Verified no horizontal overflow at 320/390/768/1440px and explicit pause behavior; production build passes.
# Mobile navigation and contact fix — October 6, 2026

Follow-up: the bottom contact bar is contextual. An IntersectionObserver watches page phone/support links and callback actions, excluding the sticky bar itself. It hides when a contact action is at least half visible in the usable viewport, and returns when none are visible. Route/content changes refresh observation; callback dialogs continue to suppress the bar. Verified hidden at hero/course actions and inline phone form, visible away from contact actions. Production build passes.

- Render navigation drawer and persistent contact bar through body portals. Header backdrop-filter previously constrained the fixed drawer to the 76px header instead of the viewport.
- Drawer uses dynamic viewport height, scrollable navigation, 44px links, focus trapping, Escape dismissal, and closes when any navigation link is selected.
- Persistent Call / Write actions appear below 1024px, including phone landscape and tablets; Write opens the existing Telegram support bot. Reserve bottom space and enable viewport safe areas.
- Verified all eight main routes at 320, 390, 768, 844 landscape, 1024 and 1440px with no horizontal overflow. Checked Uzbek home, courses and contacts at 320, 390 and landscape. Confirmed full-height drawer, navigation, Escape, restored scroll locking and bottom-bar placement during scroll. Build passes; physical-device verification remains with the owner.
