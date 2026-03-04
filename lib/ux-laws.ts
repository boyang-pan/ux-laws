export interface UXLaw {
  id: string
  name: string
  category: "Cognitive" | "Perception" | "Behavior" | "Design" | "Memory" | "Attention" | "Emotion"
  tagline: string
  description: string
  examples: { title: string; detail: string }[]
  userImpact: string
  origin?: string
}

export const uxLaws: UXLaw[] = [
  {
    id: "fitts-law",
    name: "Fitts's Law",
    category: "Behavior",
    tagline: "The time to reach a target is a function of its size and distance.",
    description:
      "Fitts's Law states that the time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target. Larger targets that are closer are faster to interact with. This has profound implications for button sizing, placement of interactive elements, and menu design.",
    examples: [
      {
        title: "Primary CTA placement",
        detail:
          "A checkout button placed at the bottom-right of a form, near where the user's cursor naturally rests after filling in fields, reduces clicks errors and speeds up task completion versus a small button in the top-left corner.",
      },
      {
        title: "Mobile navigation tabs",
        detail:
          "In a mobile app, placing the five most-used actions in a bottom tab bar with large touch targets (48×48px) means users reach them in under 300ms. Burying those actions in a hamburger menu adds 2–3 seconds of interaction time.",
      },
      {
        title: "Screen edge advantage",
        detail:
          "A context menu that snaps to the cursor's current position reduces travel distance to zero. This is why right-click menus feel faster than toolbar buttons — the target comes to you.",
      },
    ],
    userImpact:
      "Users make fewer errors and complete tasks faster when interactive elements are large and close to their current focus. Ignoring Fitts's Law leads to missed taps, fatigue on repeated actions, and a feeling that the interface is sluggish or unresponsive.",
    origin: "Paul Fitts, 1954",
  },
  {
    id: "hicks-law",
    name: "Hick's Law",
    category: "Cognitive",
    tagline: "Decision time grows logarithmically with the number of choices.",
    description:
      "Hick's Law describes the time it takes a person to make a decision as a function of the number of choices available. More choices means more time spent deciding — but the relationship is logarithmic, not linear. The implication: ruthlessly reduce options, group related choices, and progressively disclose complexity.",
    examples: [
      {
        title: "Simplified onboarding",
        detail:
          "Instead of asking new users to configure 12 settings on signup, a SaaS product shows a single question: 'What's your main goal?' Three options. Users pick one and are taken directly to the relevant workflow. Activation rate increases significantly.",
      },
      {
        title: "Focused pricing page",
        detail:
          "A pricing page that shows 3 plans with the most popular one highlighted converts better than one showing 7 plans with equal visual weight. The pre-selection reduces decision fatigue.",
      },
      {
        title: "Progressive navigation",
        detail:
          "A settings panel that groups 40 options under 6 category headers (Appearance, Notifications, Privacy…) is processed faster than a flat list of all 40, even though the total information is identical.",
      },
    ],
    userImpact:
      "Too many choices leads to decision paralysis, longer task times, and higher abandonment. Users who feel overwhelmed often revert to a default or leave entirely. Reducing and grouping options directly translates to higher conversion and satisfaction.",
    origin: "William Edmund Hick & Ray Hyman, 1952",
  },
  {
    id: "millers-law",
    name: "Miller's Law",
    category: "Memory",
    tagline: "The average person can hold 7 (±2) items in working memory.",
    description:
      "Miller's Law, based on George Miller's 1956 paper 'The Magical Number Seven', states that the average person can hold approximately 7 items in working memory at any given time. More recent research suggests 4±1 as the true limit for meaningful chunks. The practical design takeaway: chunk information, use progressive disclosure, and never make users hold more than a handful of things in mind simultaneously.",
    examples: [
      {
        title: "Phone number formatting",
        detail:
          "Displaying '4155551234' is harder to remember than '(415) 555-1234'. Chunking the same 10 digits into three groups reduces cognitive load, making the number easier to recall while dialing on a separate device.",
      },
      {
        title: "Step-by-step wizard",
        detail:
          "A complex form that's broken into a 5-step wizard with a progress indicator keeps users focused on 4–5 fields at a time. A single page with 30 fields causes cognitive overload and increases abandonment.",
      },
      {
        title: "Navigation limit",
        detail:
          "A top navigation bar capped at 7 items with sub-menus for additional pages performs better than one with 14 top-level items. Users can hold and scan 7 labels; beyond that, they start missing items entirely.",
      },
    ],
    userImpact:
      "Interfaces that exceed working memory limits cause users to lose their place, make errors, and feel mentally exhausted. Chunking and progressive disclosure directly reduce error rates and increase perceived simplicity.",
    origin: "George Miller, 1956",
  },
  {
    id: "jakobs-law",
    name: "Jakob's Law",
    category: "Behavior",
    tagline: "Users spend most of their time on other sites, so they expect yours to work the same way.",
    description:
      "Jakob's Law, coined by UX pioneer Jakob Nielsen, states that users build mental models based on their collective experience across all products they use. When your product deviates from established conventions without good reason, users must spend cognitive effort learning new patterns — effort that could have been spent on their actual goals.",
    examples: [
      {
        title: "Logo as home link",
        detail:
          "Every major website links the logo to the homepage. A product that uses the logo to open a profile drawer breaks this deeply ingrained expectation. Even with good intentions, users click the logo repeatedly looking for 'home' before giving up.",
      },
      {
        title: "Shopping cart icon",
        detail:
          "An e-commerce redesign that replaces the cart icon with a 'bag' icon paired with a unique label sees a 20% drop in cart access. Users have a mental model of the cart — changing the icon forces relearning.",
      },
      {
        title: "Search placement",
        detail:
          "Users expect search in the top-center or top-right. A product that places search in a sidebar or footer sees lower search usage, not because users don't want it, but because they can't find it where they expect it to be.",
      },
    ],
    userImpact:
      "Violating established conventions increases time-on-task, error rates, and support requests. Familiarity is a feature — interfaces that feel 'obvious' allow users to focus on their goals rather than learning the tool.",
    origin: "Jakob Nielsen",
  },
  {
    id: "law-of-proximity",
    name: "Law of Proximity",
    category: "Perception",
    tagline: "Objects near each other are perceived as a group.",
    description:
      "One of the Gestalt principles, the Law of Proximity states that the human eye perceives elements that are close together as belonging to the same group. Proximity creates visual relationships without lines, boxes, or explicit labels — simply by managing whitespace. It is one of the most powerful and underused tools in layout design.",
    examples: [
      {
        title: "Form label grouping",
        detail:
          "A form where each label sits 4px above its input field and 24px above the next field pair creates clear visual pairs. Users instantly understand which label belongs to which field, reducing form errors.",
      },
      {
        title: "Dashboard card clustering",
        detail:
          "A dashboard that groups 'Users', 'Sessions', and 'Bounce Rate' metrics with 8px spacing between them, and 32px between that group and 'Revenue', 'Orders', 'AOV' — communicates two distinct domains of data without any header labels.",
      },
      {
        title: "Navigation section breaks",
        detail:
          "A sidebar that uses spacing alone to separate 'Main' actions from 'Settings' actions removes the need for a divider line, resulting in a cleaner, more minimal aesthetic while preserving the grouping.",
      },
    ],
    userImpact:
      "Poor proximity causes users to misread relationships between elements, fill in wrong fields, or miss related actions. Good proximity reduces scanning time and error rates by making the structure of information immediately apparent.",
    origin: "Gestalt Psychology, early 20th century",
  },
  {
    id: "peak-end-rule",
    name: "Peak-End Rule",
    category: "Cognitive",
    tagline: "Users judge an experience by its peak moment and how it ends.",
    description:
      "The Peak-End Rule, developed by Daniel Kahneman, states that people judge a past experience almost entirely based on how it felt at its most intense point (the peak) and how it ended — not on the sum or average of every moment. This means a poor experience can be redeemed by a strong ending, and a mostly-good experience can be ruined by a bad one.",
    examples: [
      {
        title: "Delightful completion state",
        detail:
          "A tax filing app makes most of the process tedious, but ends with a large, celebratory 'Filed!' screen with a personalized message: 'You'll receive your refund in 8 days.' Users recall the filing process as more pleasant than it actually was.",
      },
      {
        title: "Error recovery moment",
        detail:
          "When a user's payment fails, a checkout flow that shows a clear, calm error message with a one-click fix option creates a surprisingly positive peak. Users report higher satisfaction than those who experienced no errors — because the recovery felt empowering.",
      },
      {
        title: "Offboarding experience",
        detail:
          "A subscription cancellation flow that ends with 'Your data will be saved for 90 days — welcome back anytime' leaves users with a positive last impression. Many return. A hostile cancellation flow with no such message drives permanent churn.",
      },
    ],
    userImpact:
      "Designing for peak and end moments — not just average quality — directly affects NPS scores, return rate, and word-of-mouth. A thoughtful final state turns a forgettable flow into a memorable one.",
    origin: "Daniel Kahneman & Barbara Fredrickson, 1993",
  },
  {
    id: "von-restorff-effect",
    name: "Von Restorff Effect",
    category: "Perception",
    tagline: "Items that stand out from their surroundings are more likely to be remembered.",
    description:
      "The Von Restorff Effect (also called the Isolation Effect) predicts that when multiple similar objects are present, the one that differs from the rest is most likely to be remembered. In interface design, this is the principle behind highlighted CTAs, badges, and feature callouts. However, its power depends on rarity — if everything stands out, nothing does.",
    examples: [
      {
        title: "Highlighted pricing tier",
        detail:
          "On a pricing page with three plans displayed as identical cards, the 'Pro' plan is given a dark background while the others are white. Users spend 3x longer looking at it and select it at a disproportionately high rate — not necessarily because it's the best value, but because it's visually isolated.",
      },
      {
        title: "New feature badge",
        detail:
          "A single 'New' badge on one navigation item in a sidebar draws attention without requiring any UI rearrangement. Remove it after 30 days — once users have learned the feature, continued use of the badge loses its effect.",
      },
      {
        title: "Warning in a list",
        detail:
          "A list of 12 file names where one is displayed in amber due to a sync conflict is immediately noticed by all users in testing. The same warning buried in a status column is missed by 60% of users.",
      },
    ],
    userImpact:
      "Used well, the Von Restorff Effect directs attention exactly where it's needed. Overused, it creates visual noise and trains users to ignore highlights. The effect only works when contrast is meaningful and rare.",
    origin: "Hedwig von Restorff, 1933",
  },
  {
    id: "zeigarnik-effect",
    name: "Zeigarnik Effect",
    category: "Cognitive",
    tagline: "People remember uncompleted tasks better than completed ones.",
    description:
      "The Zeigarnik Effect is the tendency for people to remember interrupted or incomplete tasks more readily than completed tasks. The mind continues to process open loops, creating a mild psychological tension that motivates completion. In product design, this is the engine behind progress bars, streaks, profile completion meters, and onboarding checklists.",
    examples: [
      {
        title: "Profile completeness meter",
        detail:
          "A professional network shows '72% complete' on every page until a user fills in their headline and bio. Users who see this complete their profiles at 3x the rate of those shown no indicator. The incomplete state creates productive discomfort.",
      },
      {
        title: "Onboarding checklist",
        detail:
          "A project management tool shows a persistent 5-item 'Get Started' checklist. Even users who haven't touched it in a week return to check off the remaining items — the open loop stays active in memory.",
      },
      {
        title: "Streak mechanics",
        detail:
          "A language learning app shows a flame icon with '6 days' next to a user's name. The streak creates an active mental loop: completing today's lesson feels less like optional behavior and more like closing an open task.",
      },
    ],
    userImpact:
      "Strategically introducing open loops — through progress indicators, streaks, or checklists — increases engagement and return rates. However, false urgency or manufactured incompleteness erodes trust if users feel manipulated.",
    origin: "Bluma Zeigarnik, 1927",
  },
  {
    id: "aesthetic-usability",
    name: "Aesthetic-Usability Effect",
    category: "Perception",
    tagline: "Users perceive attractive designs as more usable.",
    description:
      "The Aesthetic-Usability Effect is the phenomenon in which users perceive aesthetically pleasing designs as easier to use than less attractive designs, regardless of actual usability. Beautiful interfaces create a positive emotional response that increases tolerance for minor usability issues, makes users more patient, and leads to more forgiving error recovery. Importantly, this effect can also mask genuine problems.",
    examples: [
      {
        title: "Premium onboarding forgiveness",
        detail:
          "A fintech app with a polished, minimal design receives half the support tickets of a competitor with an identical feature set but cluttered UI, despite having slightly fewer features. Users assume the elegant product is also more reliable.",
      },
      {
        title: "Error tolerance",
        detail:
          "During usability testing, participants using a visually beautiful prototype rate minor interaction friction significantly lower than participants using a wireframe with the same interactions. The aesthetic raises their baseline tolerance.",
      },
      {
        title: "Trust transfer",
        detail:
          "A checkout page with consistent typography, refined spacing, and a monochrome palette converts 18% better than a functionally identical page with mixed fonts and inconsistent button styles — even when users can't articulate why they trust one more.",
      },
    ],
    userImpact:
      "Investing in visual craft creates measurable returns in conversion, retention, and brand trust. But it also creates a risk: aesthetic appeal can mask usability problems that only surface under rigorous testing. Use it as an amplifier, not a substitute for good UX.",
    origin: "Masaaki Kurosu & Kaori Kashimura, 1995",
  },
  {
    id: "teslers-law",
    name: "Tesler's Law",
    category: "Design",
    tagline: "Every application has an irreducible amount of complexity. Someone must deal with it.",
    description:
      "Tesler's Law, also known as the Law of Conservation of Complexity, states that for any system, there is a certain amount of complexity that cannot be reduced. The question is not whether complexity exists, but who bears it: the user or the designer/developer. Good design absorbs complexity on behalf of the user. The worst interfaces externalize all complexity to the person least equipped to handle it.",
    examples: [
      {
        title: "Smart defaults in configuration",
        detail:
          "A developer tool that requires users to manually set timezone, locale, and date format on setup vs. one that infers these from the system and lets users override them later. The complexity exists in both — in the first case, every user pays the cost; in the second, only the edge cases do.",
      },
      {
        title: "Email composition",
        detail:
          "A bulk email sender that handles HTML encoding, unsubscribe footer insertion, and spam score checking automatically absorbs massive complexity. The sender just writes their message. The alternative — requiring senders to handle these manually — externalizes the complexity without removing it.",
      },
      {
        title: "Address autocomplete",
        detail:
          "Typing a partial address and having the system complete and validate it absorbs the complexity of formatting, abbreviation, and validation. Forcing users to type full addresses in a specific format externalizes that same complexity.",
      },
    ],
    userImpact:
      "When designers refuse to absorb complexity, they transfer it directly to users — resulting in errors, frustration, and support burden. Every deliberate simplification in the interface represents hours of design and engineering work that users will never see, and should never have to see.",
    origin: "Larry Tesler, 1980s",
  },
  {
    id: "law-of-common-region",
    name: "Law of Common Region",
    category: "Perception",
    tagline: "Elements within a bounded area are perceived as a group.",
    description:
      "The Law of Common Region states that when elements are enclosed within a shared boundary — a card, a box, a background color — they are perceived as belonging together, regardless of proximity or similarity. It extends the Gestalt proximity principle by adding explicit containment. Cards, panels, and grouped backgrounds all leverage this law.",
    examples: [
      {
        title: "Card-based dashboards",
        detail:
          "A dashboard where related metrics (chart + number + label) are enclosed in a card is immediately understood as a single unit. Remove the card border and the same three elements feel disconnected, requiring proximity alone to suggest grouping.",
      },
      {
        title: "Toolbar segmentation",
        detail:
          "A text editor toolbar that groups Bold/Italic/Underline in a subtle rounded rectangle, and separately groups Align Left/Center/Right in another, communicates two distinct functions even before the user reads the icons.",
      },
      {
        title: "Notification tray",
        detail:
          "A notifications dropdown that wraps each notification in a light background container makes it trivially easy to see where one notification ends and another begins, eliminating misreads even in dense lists.",
      },
    ],
    userImpact:
      "Explicit boundaries reduce scanning time and grouping errors. Users process contained groups as atomic units, which speeds up comprehension of complex layouts.",
    origin: "Gestalt Psychology",
  },
  {
    id: "serial-position-effect",
    name: "Serial Position Effect",
    category: "Memory",
    tagline: "Users best remember the first and last items in a series.",
    description:
      "The Serial Position Effect is the tendency to recall items at the beginning (primacy) and end (recency) of a list better than those in the middle. The primacy effect occurs because early items have more time for memory consolidation. The recency effect occurs because the last items are still in short-term memory. Middle items are the most forgettable — a critical insight for navigation, feature lists, and any sequential presentation.",
    examples: [
      {
        title: "Navigation ordering",
        detail:
          "A product's top navigation places the two most-used items ('Dashboard' and 'Inbox') at the left end, and the two most commercially important items ('Upgrade' and 'Help') at the right end. The middle slots are filled with less critical items that users will still find when they look.",
      },
      {
        title: "Pricing feature lists",
        detail:
          "A pricing card that lists 8 features puts the two most compelling ones first and last. 'Unlimited projects' opens the list; 'Priority support' closes it. Middle items like 'Advanced filters' and 'Custom domains' are included for completeness but aren't expected to anchor memory.",
      },
      {
        title: "Onboarding steps",
        detail:
          "A 6-step onboarding wizard places the highest-effort step (profile photo upload) in the middle, flanked by the lowest-effort steps. Users experience the hardest step as less extreme because it's buffered by the memorable first and last moments.",
      },
    ],
    userImpact:
      "Placing critical information or actions in primacy and recency positions significantly increases recall and interaction rates. Content buried in the middle of long sequences is disproportionately ignored — regardless of its inherent value.",
    origin: "Hermann Ebbinghaus, 1885",
  },
  {
    id: "goal-gradient-effect",
    name: "Goal-Gradient Effect",
    category: "Behavior",
    tagline: "People accelerate effort as they get closer to a goal.",
    description:
      "The Goal-Gradient Effect, first observed in rats and later validated extensively in human behavior, states that the tendency to work harder toward a goal increases as we get closer to achieving it. In product design, artificial progress — even simulated head-starts — can dramatically increase the likelihood of task completion. The closer users feel to 'done', the more motivated they are to continue.",
    examples: [
      {
        title: "Artificial head-start",
        detail:
          "A loyalty program that starts users at '2 out of 10 stamps' instead of '0 out of 10' — with those first two stamps given for free — sees completion rates dramatically higher than a program starting from zero. The endpoint feels more reachable from the start.",
      },
      {
        title: "Progress bar in forms",
        detail:
          "A multi-step checkout that shows 'Step 3 of 4' with a progress bar at 75% causes users to accelerate completion with fewer form-field skips than users seeing no progress indicator. Being close to done changes behavior.",
      },
      {
        title: "Streak visualization",
        detail:
          "An app that shows '6-day streak — 1 day to your first week badge' sees higher Day 7 retention than one that simply shows the streak number. Framing nearness to a milestone activates the goal-gradient mechanism.",
      },
    ],
    userImpact:
      "Progress indicators and milestone framing directly increase completion rates for multi-step flows. The effect is strongest when users can see they are close to the end. Designs that obscure progress or make goals feel distant suppress motivation.",
    origin: "Clark Hull, 1932 (rats); Ran Kivetz et al., 2006 (humans)",
  },
  {
    id: "doherty-threshold",
    name: "Doherty Threshold",
    category: "Behavior",
    tagline: "Productivity soars when a computer and its users interact at a pace of under 400ms.",
    description:
      "The Doherty Threshold states that computer response times of under 400 milliseconds keep users in a state of flow, while anything above that breaks the mental loop and causes disengagement. Responses over 400ms trigger users to shift attention elsewhere, check their phones, or question whether their action registered. Speed is a core UX dimension, not just an engineering concern.",
    examples: [
      {
        title: "Optimistic UI updates",
        detail:
          "A task manager that immediately marks a task as 'done' in the UI upon click — and syncs to the server in the background — feels instant to users. The same app waiting for server confirmation before updating the UI introduces a perceptible lag that breaks flow.",
      },
      {
        title: "Skeleton screens",
        detail:
          "A news feed that shows skeleton placeholder content instantly on load — even before data arrives — is perceived as faster than one that shows a blank screen for 600ms then renders content. The skeleton meets the Doherty Threshold even when the actual data doesn't.",
      },
      {
        title: "Type-ahead search",
        detail:
          "A search field that shows results as the user types (with debouncing at 150ms) creates a dialogue that feels conversational. A search that only responds after the full query is entered and a button is clicked breaks the interactive loop.",
      },
    ],
    userImpact:
      "Every 100ms of unnecessary latency reduces engagement and increases abandonment. Perceived speed — through optimistic UI, skeletons, and progress indicators — can be as important as actual speed. Users who feel flow complete more tasks and return more often.",
    origin: "Walter Doherty & Ahrvind Thadani, IBM, 1982",
  },
  {
    id: "postel-law",
    name: "Postel's Law",
    category: "Design",
    tagline: "Be liberal in what you accept, and conservative in what you emit.",
    description:
      "Postel's Law, originally a principle for internet protocols, states: 'Be conservative in what you send, be liberal in what you accept.' In interface design, this translates to building systems that accept a wide range of user inputs — typos, varied formats, partial information — while outputting clean, predictable, well-structured responses. It's the principle behind format forgiveness, smart input parsing, and error tolerance.",
    examples: [
      {
        title: "Phone number input",
        detail:
          "A contact form that accepts '(415) 555-1234', '4155551234', '+1-415-555-1234', and '415.555.1234' — normalizing all to the same stored format — is liberal in input. A form that rejects everything except the exact format '###-###-####' violates Postel's Law and creates friction for every user who formats it differently.",
      },
      {
        title: "Search query handling",
        detail:
          "A search that interprets 'setings' as 'settings', strips extra whitespace, and treats 'dark mode' and 'darkmode' identically is being liberal in what it accepts. It outputs clean, relevant results regardless of how the user phrased the query.",
      },
      {
        title: "Date entry",
        detail:
          "A date field that accepts 'Jan 5', '01/05/2024', '5 January', and '2024-01-05' — converting all to a canonical internal format — removes a source of friction that affects a meaningful percentage of users.",
      },
    ],
    userImpact:
      "Strict input requirements cause high form abandonment, especially on mobile. Accepting common variations while storing normalized data requires more engineering effort but dramatically reduces user error and frustration.",
    origin: "Jon Postel, RFC 793, 1980",
  },
  {
    id: "law-of-similarity",
    name: "Law of Similarity",
    category: "Perception",
    tagline: "Elements that look alike are perceived as part of the same group.",
    description:
      "The Law of Similarity, another Gestalt principle, states that objects sharing visual characteristics — color, shape, size, texture, or orientation — are perceived as related, regardless of their spatial arrangement. It is the foundation for visual consistency: buttons that look the same imply the same type of action; icons with the same stroke weight imply the same level of importance.",
    examples: [
      {
        title: "Consistent button styles",
        detail:
          "A product that uses solid-fill dark buttons exclusively for primary actions and outlined ghost buttons for secondary actions creates an immediately readable action hierarchy. Users learn the visual grammar after one interaction and apply it across the entire product.",
      },
      {
        title: "Typography hierarchy",
        detail:
          "All H1 headings in 24px semibold, all body text in 14px regular, all metadata in 12px medium gray — a consistent type system makes the information hierarchy readable without conscious effort. Users scan, not read, and similarity makes scanning reliable.",
      },
      {
        title: "Data table rows",
        detail:
          "Alternating row backgrounds in a data table work because even rows look similar to each other and odd rows look similar to each other, creating two visual groups that the eye tracks independently to avoid misreading across rows.",
      },
    ],
    userImpact:
      "Inconsistent visual treatment of similar elements — buttons that look different but do the same thing, or identical-looking elements with different behaviors — creates confusion and erodes trust. Visual consistency reduces cognitive load by making behavior predictable from appearance.",
    origin: "Gestalt Psychology",
  },
  {
    id: "law-of-uniform-connectedness",
    name: "Law of Uniform Connectedness",
    category: "Perception",
    tagline: "Elements visually connected to each other are perceived as more related than unconnected elements.",
    description:
      "The Law of Uniform Connectedness states that visual elements joined by lines, curves, or continuous backgrounds are perceived as a single unit. It is stronger than similarity or proximity — a line connecting two dissimilar, distant objects still implies they belong together. Used intentionally, it guides eye movement and establishes explicit relationships between elements.",
    examples: [
      {
        title: "Stepped process flow",
        detail:
          "An onboarding wizard that connects steps 1, 2, and 3 with a line or track (filled for completed, empty for pending) communicates the sequence and relationship between steps more powerfully than numbering alone.",
      },
      {
        title: "Relationship indicators",
        detail:
          "In a data visualization, drawing a line between a legend item and its corresponding element on a chart is more immediately understood than color-matching alone — even if the color match is perfect.",
      },
      {
        title: "Thread replies",
        detail:
          "Email or chat clients that use an indented vertical line to connect a parent message to its replies communicate thread structure at a glance. Remove the line and users must rely on indentation alone — weaker visual grouping.",
      },
    ],
    userImpact:
      "Explicit visual connections reduce misreadings of relationships in complex information architectures. They are particularly valuable in data-dense environments like dashboards, timelines, and relationship maps.",
    origin: "Gestalt Psychology",
  },
  {
    id: "occams-razor",
    name: "Occam's Razor",
    category: "Design",
    tagline: "Among competing explanations or solutions, the simplest is usually correct.",
    description:
      "Occam's Razor, attributed to 14th-century philosopher William of Ockham, is the principle that entities should not be multiplied beyond necessity. In UX, it argues for removing every element, step, or word that doesn't directly serve the user's goal. A feature exists only if it solves a real problem. An element exists only if it carries information. A word exists only if its removal would change meaning.",
    examples: [
      {
        title: "Form field reduction",
        detail:
          "A lead generation form reduced from 9 fields to 3 (name, email, company) converts at 3x the rate. The removed fields were 'nice to have' for sales — but they weren't necessary for the user's immediate goal. The simpler form respects the user's time.",
      },
      {
        title: "Removing instructional text",
        detail:
          "An interface that required a tooltip explaining how to use a filter was redesigned so the filter is self-evident from its visual presentation. The tooltip was a symptom of a design problem, not a solution to it.",
      },
      {
        title: "Feature pruning",
        detail:
          "A project management tool removed 5 configuration options that fewer than 2% of users touched. Support requests about those options disappeared, and user satisfaction with the settings panel increased — even though the panel had fewer capabilities.",
      },
    ],
    userImpact:
      "Every additional element, step, or option adds cognitive load. Simplicity is not about having few features — it's about having no unnecessary features. The products that feel most intuitive are usually those where the most work went into deciding what to leave out.",
    origin: "William of Ockham, ~1320",
  },
  {
    id: "law-of-pragnanz",
    name: "Law of Prägnanz",
    category: "Perception",
    tagline: "The mind perceives the simplest, most stable interpretation of ambiguous figures.",
    description:
      "The Law of Prägnanz (German for 'conciseness' or 'precision') is the central principle of Gestalt psychology: the mind organizes visual information into the simplest, most regular, and most stable form possible. When users encounter ambiguous visual information, their brain automatically completes it, simplifies it, and finds the 'best' interpretation. Designers can work with this tendency by suggesting rather than spelling out.",
    examples: [
      {
        title: "Icon recognition",
        detail:
          "A trash can icon with just an outline and two horizontal lines reads instantly as 'delete' because the mind completes it into a familiar object. A highly detailed, photorealistic trash can icon takes longer to process — complexity fights against Prägnanz.",
      },
      {
        title: "Cropped card peek",
        detail:
          "A horizontal scroll container that shows the edge of the next card — even just 8px visible — communicates scrollability without any arrow, label, or instruction. The mind interprets the partial element and infers the correct interaction.",
      },
      {
        title: "Logo simplification",
        detail:
          "Abstract logos built from simple geometric forms (circle, line, square) are more memorable and more legible at small sizes than complex illustrative marks. The mind stores and retrieves simpler forms more efficiently.",
      },
    ],
    userImpact:
      "Designs that fight Prägnanz — overly complex icons, ambiguous boundaries, excessive detail — slow perception and increase cognitive effort. Designs that work with it feel instantly legible, even without explanation.",
    origin: "Gestalt Psychology, Max Wertheimer, 1923",
  },
  {
    id: "paradox-of-choice",
    name: "Paradox of Choice",
    category: "Cognitive",
    tagline: "More choices can lead to less satisfaction and higher anxiety.",
    description:
      "Barry Schwartz's Paradox of Choice extends Hick's Law into emotional territory: not only does more choice slow decisions, it increases regret, anxiety, and dissatisfaction with the choice made. When users pick from 3 options, they're usually happy. When they pick from 30, they wonder if they chose correctly — even if they made the objectively best choice. The solution is curation, not comprehensiveness.",
    examples: [
      {
        title: "Template gallery",
        detail:
          "A document editor that presents 6 curated starting templates outperforms one that shows 80 templates with filters, even though the larger library technically has more useful content. The curation signals taste and removes the burden of evaluation.",
      },
      {
        title: "Curated recommendations",
        detail:
          "A streaming service that opens with 'Because you watched X, here are 3 picks' converts to plays faster than one that shows the entire 'You might like' category. The curated version removes the regret loop.",
      },
      {
        title: "Plan selection",
        detail:
          "A SaaS product with 3 pricing tiers converts better than one with 5 tiers, even when 2 of the 5 are objectively better deals. Users presented with the 5-tier version express more uncertainty and abandon the pricing page at higher rates.",
      },
    ],
    userImpact:
      "More options increase anxiety and post-decision regret, reducing satisfaction even when users make good choices. Opinionated, curated experiences — with clear defaults — produce higher conversion, satisfaction, and retention than maximalist catalogs.",
    origin: "Barry Schwartz, 2004",
  },
  {
    id: "affordance",
    name: "Affordance",
    category: "Design",
    tagline: "Objects communicate how they should be used.",
    description:
      "Affordance, introduced by psychologist James Gibson and popularized in design by Don Norman, refers to the perceived properties of an object that suggest how it should be used. A button that looks raised affords pressing. A text field affords typing. A slider affords dragging. When affordances are clear, users interact confidently without instructions. When they are hidden or misleading, users hesitate, make errors, or miss functionality entirely.",
    examples: [
      {
        title: "Button vs. flat text",
        detail:
          "A solid-filled rectangle with a slight shadow reads immediately as a pressable button. A plain text label with no border or fill reads as static content. Users who encounter a tappable flat label for the first time often miss it entirely — the affordance is absent.",
      },
      {
        title: "Drag handles",
        detail:
          "A grid of dots or three horizontal lines beside a list item communicates draggability without any label. Users encountering this pattern for the first time correctly attempt to drag it at a higher rate than a list with no such indicator.",
      },
      {
        title: "Input field depth",
        detail:
          "A text field with a sunken appearance (inset shadow, border on all sides) affords filling in — the visual metaphor of an empty container invites input. A flat rectangle with only a bottom border affords this less strongly, requiring learned behavior.",
      },
    ],
    userImpact:
      "When affordances are absent or false (an element looks interactive but isn't, or looks static but is), users lose confidence and make more errors. Discoverable affordances reduce reliance on onboarding, tooltips, and documentation.",
    origin: "James Gibson, 1977; Don Norman, 1988",
  },
  {
    id: "recognition-over-recall",
    name: "Recognition over Recall",
    category: "Cognitive",
    tagline: "Show options; don't make users remember.",
    description:
      "One of Nielsen's 10 usability heuristics, Recognition over Recall states that interfaces should minimize the user's memory load by making objects, actions, and options visible. Recognizing something from a list is far easier than recalling it from memory. Users should not have to remember information from one part of an interface to use it in another. This principle drives the case for menus over command lines, autocomplete over blank inputs, and visible navigation over hidden patterns.",
    examples: [
      {
        title: "Command palette with history",
        detail:
          "A command palette (⌘K) that shows recently used commands at the top means users don't need to remember exact command names — they recognize what they used before. A blank text input with no suggestions forces recall, which is significantly slower and more error-prone.",
      },
      {
        title: "Autocomplete in forms",
        detail:
          "An address form that shows a dropdown of matching addresses as users type replaces recall ('what's my postal code?') with recognition ('there it is'). Completion rates for these fields are dramatically higher than unassisted inputs.",
      },
      {
        title: "Breadcrumb navigation",
        detail:
          "Showing the current path (Home > Settings > Notifications) means users don't need to remember where they are or how they got there. Without breadcrumbs, users in deep navigation trees must hold the path in working memory — a task that competes with the primary task.",
      },
    ],
    userImpact:
      "Every piece of information users must hold in memory while using an interface adds cognitive load that competes with their primary task. Making options and context visible reduces errors, speeds task completion, and makes interfaces feel intuitive rather than demanding.",
    origin: "Jakob Nielsen, 1994",
  },
  {
    id: "progressive-disclosure",
    name: "Progressive Disclosure",
    category: "Design",
    tagline: "Reveal complexity only when needed.",
    description:
      "Progressive Disclosure is a design strategy that presents only the information and controls necessary for the current task, revealing additional complexity only when the user requests or requires it. It manages cognitive load by staging information delivery. The principle recognizes that most users need most things most of the time — advanced features serve a minority and should be hidden by default, not removed.",
    examples: [
      {
        title: "Advanced settings",
        detail:
          "A form that shows 3 core fields and hides 12 advanced options behind a 'Show advanced settings' toggle serves both novice users (uncluttered) and power users (accessible) without compromise. The default view covers 90% of use cases; the expanded view covers the remaining 10%.",
      },
      {
        title: "Tooltip on demand",
        detail:
          "A data visualization that shows labels on hover rather than rendering all labels simultaneously keeps the chart readable by default while still making all data accessible. Showing all labels at once often creates an illegible overlap.",
      },
      {
        title: "Onboarding steps",
        detail:
          "An app that introduces features one at a time — showing the core workflow first, then surfacing the second feature after the user completes a milestone — achieves higher feature adoption than a feature tour that shows everything on day one.",
      },
    ],
    userImpact:
      "Showing too much too early overwhelms users and increases drop-off, especially during onboarding. Progressive disclosure respects the user's context and current task, reducing cognitive load while preserving full functionality for those who need it.",
    origin: "J. M. Carroll & C. Carrithers, 1984",
  },
  {
    id: "anchoring-bias",
    name: "Anchoring Bias",
    category: "Cognitive",
    tagline: "The first value seen becomes the reference point for all subsequent judgments.",
    description:
      "Anchoring Bias is a cognitive bias where people rely heavily on the first piece of information they encounter (the 'anchor') when making decisions. Subsequent information is evaluated relative to that anchor, not in absolute terms. In UX and pricing, the anchor shapes perception of value, fairness, and scale — often more powerfully than the actual content that follows.",
    examples: [
      {
        title: "Pricing page order",
        detail:
          "Displaying the most expensive plan first on a pricing page anchors the user's value perception at that price. When they see the mid-tier plan next, it feels like a bargain in comparison — even if it's objectively expensive. Products that show the cheapest plan first see lower average contract values.",
      },
      {
        title: "Original price display",
        detail:
          "Showing a crossed-out 'was $120' next to a current price of $79 uses the original price as an anchor. Users judge the $79 price as a good deal relative to the anchor, even if they would have found $79 expensive without context.",
      },
      {
        title: "Slider default value",
        detail:
          "A donation form that opens a 'choose your amount' slider pre-set to $50 anchors expectations at that value. Users who adjust it tend to stay near the anchor. The same form with a $10 default produces a significantly different distribution of donations.",
      },
    ],
    userImpact:
      "Anchors are difficult to override consciously. The order in which options are presented, the first number shown, and default values all act as anchors that shape every subsequent judgment. Designers who understand anchoring can set frames that help users make better-aligned choices.",
    origin: "Amos Tversky & Daniel Kahneman, 1974",
  },
  {
    id: "loss-aversion",
    name: "Loss Aversion",
    category: "Behavior",
    tagline: "Losses feel approximately twice as painful as equivalent gains feel pleasurable.",
    description:
      "Loss Aversion, a cornerstone of Prospect Theory, states that the psychological pain of losing something is roughly twice as powerful as the pleasure of gaining the same thing. This asymmetry has major implications for interface design: framing an outcome as avoiding a loss is generally more motivating than framing the same outcome as achieving a gain. Users will work harder to keep something they have than to acquire the same thing they don't.",
    examples: [
      {
        title: "Trial expiry messaging",
        detail:
          "A trial expiry notification framed as 'You'll lose access to your 47 saved projects on Friday' outperforms one framed as 'Upgrade to keep all your work' — even though both mean the same thing. The loss frame is more viscerally motivating.",
      },
      {
        title: "Streak preservation",
        detail:
          "Apps like Duolingo use streak counts as a loss aversion mechanism: once a user has a 30-day streak, the fear of losing it is a powerful retention driver — often stronger than the desire to learn the language itself.",
      },
      {
        title: "Cart abandonment recovery",
        detail:
          "An abandoned cart email that says 'Your items are about to sell out' (loss frame) consistently outperforms 'Come back and shop' (neutral frame). The threat of losing the items to stock constraints activates loss aversion.",
      },
    ],
    userImpact:
      "Interfaces that help users recognize what they stand to lose — access, progress, saved data, status — can dramatically increase engagement and conversion. However, overuse of loss-framing creates anxiety and erodes trust; it should be reserved for genuinely meaningful outcomes.",
    origin: "Daniel Kahneman & Amos Tversky, 1979",
  },
  {
    id: "default-effect",
    name: "Default Effect",
    category: "Behavior",
    tagline: "People accept defaults. Defaults are not neutral — they are a design choice.",
    description:
      "The Default Effect describes the strong human tendency to accept the pre-selected option in any choice situation. Defaults require no action; changing them requires effort, attention, and often a decision. Because of loss aversion, status quo bias, and cognitive ease, most users never change defaults. This makes default settings one of the highest-leverage design decisions in any product — they determine the experience for the vast majority of users.",
    examples: [
      {
        title: "Email notification defaults",
        detail:
          "A product that defaults new users to 'receive all notifications' will have most users receive all notifications — not because they want to, but because changing it requires effort. Products that default to minimal notifications have dramatically lower unsubscribe and spam-complaint rates.",
      },
      {
        title: "Privacy settings",
        detail:
          "Research consistently shows that data-sharing settings default to 'on' result in nearly all users sharing data, while 'off' defaults result in a small minority opting in. The default effectively is the policy for most users.",
      },
      {
        title: "Recommended plan pre-selection",
        detail:
          "A SaaS pricing page with the mid-tier plan pre-selected ('Most Popular') converts a higher percentage of users to that tier than a page with no selection. The default frames the decision and reduces the cognitive work of choosing.",
      },
    ],
    userImpact:
      "Defaults determine the real-world experience for the majority of users, not the settings panel. Every default is a product decision with measurable user and business consequences. The ethical implication: defaults should serve the user's long-term interest, not just the product's conversion metrics.",
    origin: "Status quo bias research; Johnson & Goldstein, 2003",
  },
  {
    id: "social-proof",
    name: "Social Proof",
    category: "Behavior",
    tagline: "People look to others' behavior to determine the correct action.",
    description:
      "Social Proof, described by Robert Cialdini, is the psychological phenomenon where people assume that if others are doing something, it must be the correct or preferred behavior. In conditions of uncertainty, users look to the choices and reactions of others as a signal of quality, safety, and appropriateness. In UX, social proof reduces perceived risk and lowers the activation energy required to take action.",
    examples: [
      {
        title: "Review counts and ratings",
        detail:
          "A product with 4.2 stars and 1,200 reviews consistently outconverts a product with 4.8 stars and 3 reviews. The volume of social proof is as important as its valence — large numbers signal that many people found this worth evaluating.",
      },
      {
        title: "Real-time activity signals",
        detail:
          "Hotel booking sites showing '8 people viewed this room in the last hour' use real-time social proof to signal demand and reduce hesitation. The data point communicates that others have validated this choice and that delay has a cost.",
      },
      {
        title: "Testimonials in onboarding",
        detail:
          "Placing a customer quote from a recognizable company logo on a signup page reduces drop-off. New users who are uncertain see that a peer organization has already made this decision, reducing their perceived risk.",
      },
    ],
    userImpact:
      "Social proof is most powerful when users are uncertain and when the reference group is similar to them. Generic 'millions of users' claims are weaker than specific, relatable signals. Displaying authentic social proof at points of hesitation — signup, pricing, first-time features — measurably reduces abandonment.",
    origin: "Robert Cialdini, Influence, 1984",
  },
  {
    id: "parkinsons-law",
    name: "Parkinson's Law",
    category: "Design",
    tagline: "Work expands to fill available time — and interfaces expand to fill available space.",
    description:
      "Cyril Northcote Parkinson's 1955 observation that 'work expands so as to fill the time available for its completion' has a direct UX corollary: content and UI elements expand to fill the space given to them. When designers allocate generous space without constraints, interfaces accumulate clutter. When space is deliberately constrained, teams are forced to prioritize. Parkinson's Law argues for intentional space allocation as a design discipline, not just an aesthetic choice.",
    examples: [
      {
        title: "Navigation bar growth",
        detail:
          "A nav bar with room for 8 items will eventually have 8 items, as every team requests space for their feature. A nav bar constrained to 5 items forces prioritization — teams must argue for inclusion rather than simply adding to available space.",
      },
      {
        title: "Dashboard widget proliferation",
        detail:
          "A dashboard with no limit on widgets will accumulate metrics over time until no single one is readable. Designing the dashboard around a fixed grid with a maximum widget count forces curation and produces a more usable artifact.",
      },
      {
        title: "Deadline-driven form simplicity",
        detail:
          "When a landing page is built under a tight time constraint, teams ship only the essential fields. Given more time, more 'nice to have' fields are added. The constrained version often converts better — Parkinson's Law in reverse, as a forcing function for simplicity.",
      },
    ],
    userImpact:
      "Interfaces that grow unconstrained become cognitively exhausting. Applying Parkinson's Law as a design constraint — limiting navigation items, dashboard widgets, or form fields — produces focus that benefits users directly.",
    origin: "C. Northcote Parkinson, The Economist, 1955",
  },
  {
    id: "f-pattern",
    name: "F-Pattern",
    category: "Perception",
    tagline: "Users scan text-heavy pages in an F-shape: two horizontal sweeps, then a vertical scan.",
    description:
      "Eye-tracking research by Jakob Nielsen found that users reading text-heavy web pages follow an F-shaped pattern: a full horizontal scan near the top, a shorter horizontal scan further down, then a vertical scan down the left edge. The result is that content in the top-left receives the most attention, the right side receives very little, and content below the fold receives only a narrow vertical skim. The F-pattern is not a prescription — it describes how users scan when content is not well-organized.",
    examples: [
      {
        title: "Lead with the key information",
        detail:
          "The first two lines of a paragraph receive the most attention. Job postings, landing pages, and articles that bury the key value proposition below the third line lose readers who scan rather than read. Front-loading the most important content is not just copywriting advice — it's perceptual science.",
      },
      {
        title: "Left-aligned labels in forms",
        detail:
          "Form labels placed to the left of input fields are scanned during the vertical phase of the F-pattern. Top-aligned labels receive attention during horizontal scans. Studies suggest top-aligned labels reduce eye fixations and completion time for multi-field forms.",
      },
      {
        title: "Navigation placement",
        detail:
          "Left-side navigation aligns with the vertical bar of the F-pattern and receives consistent attention during scanning. Right-side content receives significantly less attention and is often missed entirely on first pass — making it a poor location for critical information.",
      },
    ],
    userImpact:
      "Knowing the F-pattern means placing critical information where eyes land, not where it's logically organized from a content creator's perspective. Designs that fight the F-pattern — with critical content in the bottom-right or buried mid-paragraph — are systematically overlooked.",
    origin: "Jakob Nielsen & Kara Pernice, Eyetracking Web Usability, 2010",
  },
  {
    id: "cognitive-load-theory",
    name: "Cognitive Load Theory",
    category: "Cognitive",
    tagline: "Total mental effort affects task success. Design should minimize unnecessary load.",
    description:
      "Cognitive Load Theory, developed by John Sweller, distinguishes three types of cognitive load: intrinsic (the inherent complexity of the task), extraneous (load created by poor design), and germane (load used for building understanding). UX design cannot reduce intrinsic load — a tax form is inherently complex. But it can aggressively eliminate extraneous load: unnecessary steps, unclear labels, inconsistent patterns, and visual noise that consume working memory without contributing to the user's goal.",
    examples: [
      {
        title: "Inline validation",
        detail:
          "A form that validates each field as the user completes it distributes feedback across the interaction, rather than presenting a list of errors at submission. This reduces extraneous load: users don't need to hold form state in memory while reading a post-submission error list.",
      },
      {
        title: "Consistent interaction patterns",
        detail:
          "When every modal in a product is dismissed the same way (ESC key or top-right X), users offload that knowledge to long-term memory and apply it automatically. Inconsistent dismissal patterns require conscious thought each time, increasing extraneous load.",
      },
      {
        title: "Contextual help placement",
        detail:
          "A tooltip or helper text placed directly next to the relevant field reduces load compared to a help article that opens in a new tab. Users don't need to hold context in memory while navigating away — the explanation and the input are in the same cognitive space.",
      },
    ],
    userImpact:
      "When total cognitive load exceeds working memory capacity, users make errors, give up, or develop negative attitudes toward the product. Every element of extraneous load — unnecessary choices, inconsistent patterns, unclear feedback — is a direct cost to task success that designers can measure and reduce.",
    origin: "John Sweller, 1988",
  },
  {
    id: "fogg-behavior-model",
    name: "Fogg Behavior Model",
    category: "Behavior",
    tagline: "Behavior = Motivation × Ability × Trigger. All three must be present simultaneously.",
    description:
      "BJ Fogg's Behavior Model states that a behavior occurs when three elements converge at the same moment: sufficient Motivation (the desire to act), sufficient Ability (the ease of acting), and a Trigger (the prompt to act now). If any element is absent or insufficient, the behavior does not occur. The model reframes design problems: if users aren't converting, the question is not just 'are they motivated?' but 'which element is missing or insufficient?'",
    examples: [
      {
        title: "Reducing friction as a substitute for motivation",
        detail:
          "A checkout flow that reduces steps from 5 to 2 increases ability. For users with moderate motivation who were previously stopped by friction, the reduced friction is enough to tip them into completing the purchase — no change in motivation required.",
      },
      {
        title: "Timing of triggers",
        detail:
          "A push notification asking users to review the app sent immediately after completing a successful transaction catches users at peak motivation. The same notification sent three days later, out of context, hits a different motivational state and converts at a fraction of the rate.",
      },
      {
        title: "Onboarding checklist as trigger",
        detail:
          "A 'getting started' checklist with an unchecked item acts as a trigger for users who have the motivation to complete setup but haven't acted. The checklist makes the next action visible and salient — providing the trigger that was missing.",
      },
    ],
    userImpact:
      "The Fogg model explains why design changes that seem logical sometimes fail: a perfectly timed trigger with a motivated user still fails if the required action is too difficult. Diagnosing which element of the triad is weak leads to more targeted and effective interventions.",
    origin: "BJ Fogg, 2009",
  },
  {
    id: "webers-law",
    name: "Weber's Law",
    category: "Perception",
    tagline: "The just-noticeable difference between stimuli is proportional to the magnitude of the original stimulus.",
    description:
      "Weber's Law states that the minimum perceptible change in a stimulus is a constant proportion of the original stimulus, not a constant absolute value. In practical terms: a 1px change to a 2px border is very noticeable, but a 1px change to a 100px image is invisible. This principle governs how users perceive changes in size, weight, spacing, and timing. It explains why design changes that seem significant in isolation are invisible in context, and vice versa.",
    examples: [
      {
        title: "Font weight differentiation",
        detail:
          "Jumping from 400 (regular) to 700 (bold) weight creates a clearly perceptible hierarchy. Jumping from 400 to 500 is often imperceptible in body text at normal sizes — the proportional change is too small. Effective typographic hierarchy requires changes that cross the perceptual threshold.",
      },
      {
        title: "Animation timing",
        detail:
          "A 50ms change in animation duration is noticeable when the base duration is 100ms (50% change) but imperceptible when the base is 500ms (10% change). Designers tuning animation speed need larger absolute changes to create perceptible differences at longer durations.",
      },
      {
        title: "Progress bar increments",
        detail:
          "A progress bar that moves from 90% to 91% feels barely different, even though it's the same absolute increment as 1% to 2%, which feels significant. The perceived size of progress is relative to the current position, not the absolute percentage.",
      },
    ],
    userImpact:
      "Weber's Law explains why some design changes 'don't register' with users despite being measurable. Changes must exceed the perceptual threshold relative to the baseline to be noticed. Understanding this prevents both invisible changes (too small to perceive) and jarring changes (disproportionately large).",
    origin: "Ernst Heinrich Weber, 1834; Gustav Fechner, 1860",
  },
  {
    id: "law-of-continuity",
    name: "Law of Continuity",
    category: "Perception",
    tagline: "Elements arranged in a line or curve are perceived as related and continuing in that direction.",
    description:
      "The Law of Continuity, a Gestalt principle, states that the human visual system prefers to perceive continuous forms over discontinuous ones. When elements are arranged along a smooth path — a line, curve, or implied trajectory — the eye follows that path and perceives the elements as a unified group. This principle drives reading direction, guides eye movement through layouts, and is the perceptual basis for connecting multi-step processes visually.",
    examples: [
      {
        title: "Progress stepper",
        detail:
          "A multi-step form with numbered steps connected by a horizontal line uses continuity to communicate sequence and relationship. The line implies that the steps continue in that direction, making the remaining path legible at a glance without reading step labels.",
      },
      {
        title: "Implied reading flow",
        detail:
          "A landing page that uses diagonal image placement or arrows creates an implied flow line that guides the user's eye toward the call-to-action. The eye follows the implied trajectory even without explicit directional cues.",
      },
      {
        title: "Chart axis alignment",
        detail:
          "In a line chart, the eye follows each line's trajectory and extrapolates its direction. This makes trends immediately readable — the principle of continuity allows users to perceive direction and momentum without reading individual data points.",
      },
    ],
    userImpact:
      "Layouts that align elements along clear paths are easier to scan and navigate. Disrupting continuity — with misaligned elements, abrupt layout changes, or inconsistent flow direction — forces users to consciously re-orient, increasing cognitive load and reducing scan speed.",
    origin: "Gestalt Psychology, Max Wertheimer, 1923",
  },
  {
    id: "pareto-principle",
    name: "Pareto Principle",
    category: "Design",
    tagline: "80% of value comes from 20% of features — focus effort where it compounds.",
    description:
      "The Pareto Principle, named after economist Vilfredo Pareto, observes that roughly 80% of effects come from 20% of causes. In UX and product design, this manifests as: 20% of features are used by 80% of users, 20% of bugs cause 80% of user complaints, and 20% of UI elements receive 80% of user attention. The principle is not a precise mathematical law but a reliable asymmetry that guides prioritization — polish and optimize the critical 20% rather than spreading effort uniformly.",
    examples: [
      {
        title: "Feature usage analytics",
        detail:
          "A product analytics audit finds that 3 of 15 features account for 78% of daily active use. Investing in the performance, polish, and discoverability of those 3 features has a disproportionately larger impact on user satisfaction than incrementally improving all 15.",
      },
      {
        title: "Bug triage",
        detail:
          "A support team finds that 4 recurring errors account for 82% of all support tickets. Fixing those 4 bugs eliminates most of the support load — more effectively than fixing 20 lower-frequency bugs that together account for the remaining 18%.",
      },
      {
        title: "Navigation prioritization",
        detail:
          "Clickstream data shows that 80% of navigation events go to 4 of the 20 items in a sidebar. Redesigning the nav to surface those 4 items prominently and deprioritize the rest reduces navigation time for the majority of users while barely affecting the minority who use other items.",
      },
    ],
    userImpact:
      "Uniform effort allocation is a trap: polishing a rarely-used feature equally with a core workflow wastes resources and delays improvements where they matter most. Data-driven application of the Pareto Principle directs design and engineering effort toward the highest-leverage improvements.",
    origin: "Vilfredo Pareto, 1896; Joseph Juran, 1941",
  },
  {
    id: "dual-process-theory",
    name: "Dual Process Theory",
    category: "Cognitive",
    tagline: "Fast intuitive thinking (System 1) and slow deliberate thinking (System 2) shape every user decision.",
    description:
      "Dual Process Theory, popularized by Daniel Kahneman in Thinking, Fast and Slow, describes two modes of cognition. System 1 is fast, automatic, emotional, and largely unconscious — it drives snap judgments, pattern recognition, and habitual behavior. System 2 is slow, deliberate, effortful, and logical — it handles novel problems, complex reasoning, and careful decision-making. Most user interactions rely heavily on System 1. When interfaces require System 2 thinking for routine tasks, they feel hard — creating friction, errors, and frustration. Good UX minimizes unnecessary System 2 load while reserving it for decisions that genuinely require deliberation.",
    examples: [
      {
        title: "Form defaults and pre-fills",
        detail:
          "A checkout form that pre-fills shipping address from account data lets System 1 handle routine confirmation — the user glances, recognizes the familiar address, and taps confirm. Forcing users to re-type it each time activates System 2, slowing completion and increasing abandonment.",
      },
      {
        title: "Warning dialog fatigue",
        detail:
          "When every destructive action (delete, archive, close) presents an identical confirmation dialog, users habituate and click through reflexively using System 1, defeating the purpose of the dialog. Reserve high-friction confirmation for irreversible high-stakes actions to keep System 2 engaged when it matters.",
      },
      {
        title: "Navigation patterns",
        detail:
          "A consistent global navigation that never changes lets returning users operate on autopilot — System 1 knows where settings live without thinking. Redesigning navigation forces System 2 re-learning, causing disorientation even among experienced users.",
      },
    ],
    userImpact:
      "Interfaces that respect System 1 feel effortless; those that fight it feel cognitively expensive. Design for automatic, pattern-based interaction for routine tasks, and use friction intentionally — only when deliberation genuinely serves the user.",
    origin: "Daniel Kahneman, 2011; Stanovich & West, 2000",
  },
  {
    id: "mental-model",
    name: "Mental Model",
    category: "Cognitive",
    tagline: "Users' internal representation of how a system works determines how they interact with it.",
    description:
      "A mental model is the internal representation a user builds of how a system, product, or process works — based on past experience, analogies, and observed behavior. Users constantly form and apply mental models when interacting with interfaces: they predict what a button will do, where a setting will be found, and what will happen after an action. When the interface's actual behavior matches the user's mental model, interaction feels natural. When it diverges — a setting is where users don't expect it, an action has an unexpected consequence — users feel confused, make errors, and lose trust. Don Norman's concept of the 'system image' describes how the designer communicates the correct mental model through interface design.",
    examples: [
      {
        title: "Desktop file metaphor",
        detail:
          "Early desktop computing adopted the physical desk metaphor — files, folders, a trash can — because users already had a mental model for organizing paper documents. The interface succeeded by mapping to an existing cognitive structure rather than requiring users to learn an entirely new one.",
      },
      {
        title: "Swipe to delete",
        detail:
          "Users who learned swipe-to-delete in one app bring that mental model to every list interface they encounter. Apps that implement the gesture behave as expected; apps that don't — or that assign swipe to a different action — violate the model and generate errors and frustration.",
      },
      {
        title: "Shopping cart persistence",
        detail:
          "Users expect a shopping cart to persist across sessions, matching their mental model of a physical cart that holds items until checkout. E-commerce sites that silently clear carts after logout violate this model, causing users to abandon when they return to find their selections gone.",
      },
    ],
    userImpact:
      "Interfaces that align with user mental models require less learning, generate fewer errors, and feel intuitive. Interfaces that violate mental models demand explicit re-education — documentation, onboarding, tooltips — and still generate persistent confusion from users who revert to their prior model.",
    origin: "Kenneth Craik, 1943; Don Norman, 1983",
  },
  {
    id: "law-of-figure-ground",
    name: "Law of Figure/Ground",
    category: "Perception",
    tagline: "The eye separates a visual scene into a foreground subject and a background — they cannot be perceived simultaneously.",
    description:
      "The Law of Figure/Ground is a Gestalt principle describing how the visual system automatically separates a scene into two regions: the figure (the focal object, perceived as being in front) and the ground (the background, perceived as behind or surrounding). The two regions are mutually exclusive — what we perceive as figure cannot simultaneously be seen as ground. This principle explains why visual hierarchy works: clearly differentiating foreground content from the background makes it immediately legible, while ambiguous figure/ground relationships create confusion. In UI design, figure/ground is manipulated through contrast, shadow, blur, and color to make interactive elements emerge from the surrounding layout.",
    examples: [
      {
        title: "Modal dialogs and overlays",
        detail:
          "A modal dialog uses a darkened, blurred, or faded background overlay to push the page content into the 'ground' role and the dialog into the 'figure' role. Without the overlay, the dialog competes with the page for attention; with it, the hierarchy is unambiguous.",
      },
      {
        title: "Card elevation and shadow",
        detail:
          "Cards with subtle drop shadows appear to float above the page surface, establishing them as figure elements against the page ground. Remove the shadow and the card flattens into the background, losing its perceived affordance as a distinct interactive object.",
      },
      {
        title: "Placeholder text legibility",
        detail:
          "An input field with very low contrast between placeholder text and background collapses the figure/ground distinction — the text blends into the field background. Increasing the contrast makes the placeholder text clearly readable as figure against the input field ground.",
      },
    ],
    userImpact:
      "Clear figure/ground separation reduces the visual effort required to identify what is interactive, what is content, and what is background. Ambiguous figure/ground relationships increase scanning time, generate errors, and make interfaces feel visually noisy even when the layout is technically uncluttered.",
    origin: "Gestalt Psychology; Edgar Rubin, 1915",
  },
  {
    id: "law-of-closure",
    name: "Law of Closure",
    category: "Perception",
    tagline: "The mind automatically completes incomplete shapes, filling in gaps to perceive a whole.",
    description:
      "The Law of Closure is a Gestalt principle stating that the human visual system tends to perceive incomplete figures as complete by mentally filling in missing parts. When presented with a shape that has gaps, the brain automatically 'closes' the contour and perceives the whole form. This cognitive shortcut allows recognition of partial or degraded visual information. In UI design, closure enables designers to imply shapes and containers without drawing every border — reducing visual clutter while maintaining perceived structure. It is also the reason partial content at the edge of a scroll container effectively communicates 'more content exists here'.",
    examples: [
      {
        title: "Carousel peek pattern",
        detail:
          "A horizontal card carousel that deliberately cuts the last visible card at the screen edge — showing only half of it — exploits closure to imply a complete card beyond the viewport. Users perceive the partial card as a whole object that continues off-screen, signaling that scrolling will reveal more without any explicit 'scroll for more' instruction.",
      },
      {
        title: "Icon recognition",
        detail:
          "Many widely-used icons (hamburger menu, share symbol, play button) are instantly recognizable despite being composed of simple geometric primitives with visible negative space between them. Closure allows the brain to perceive them as unified symbols rather than disconnected lines or shapes.",
      },
      {
        title: "Borderless grouping",
        detail:
          "A settings panel that groups related options with whitespace and a shared background, without drawing explicit dividing lines, relies on closure to create the perception of a contained section. Users perceive the group as a bounded region even though no border is drawn.",
      },
    ],
    userImpact:
      "Applying closure reduces visual noise by eliminating redundant borders, lines, and separators while maintaining perceived structure. Deliberate use of partial visibility at scroll edges effectively communicates that content continues, increasing scroll initiation without requiring explicit instructional cues.",
    origin: "Gestalt Psychology; Max Wertheimer, 1923",
  },
  {
    id: "forgetting-curve",
    name: "Forgetting Curve",
    category: "Memory",
    tagline: "Memory retention decays exponentially without reinforcement — most learning is lost within 24 hours.",
    description:
      "The Forgetting Curve, discovered by Hermann Ebbinghaus in 1885 through systematic self-experimentation, describes the exponential rate at which information is lost from memory when there is no attempt to retain it. Ebbinghaus found that roughly 50% of new information is forgotten within an hour, 70% within 24 hours, and up to 90% within a week without reinforcement. The curve flattens with each spaced repetition — re-encountering information resets the decay rate and strengthens the memory trace. For UX and product design, the forgetting curve explains why users forget how to use features they rarely encounter, why onboarding must not frontload all information, and why progressive disclosure and contextual reminders outperform comprehensive upfront tutorials.",
    examples: [
      {
        title: "Onboarding tooltip timing",
        detail:
          "A productivity app that shows all onboarding tips in a single first-launch walkthrough will find that most users have forgotten 80% of those tips by their second session. Spreading tips across the first week of use, triggered at the relevant moment of first feature encounter, aligns with the memory curve and produces dramatically higher feature adoption.",
      },
      {
        title: "Rarely-used feature discoverability",
        detail:
          "A power feature used monthly — like exporting data — will be forgotten by most users between uses. Contextual reminders or prominent affordances at the point of need (e.g., 'Export your data before your subscription ends') are more effective than assuming users remember a setting they saw in onboarding six months ago.",
      },
      {
        title: "Password and pattern re-entry",
        detail:
          "Security patterns, PIN codes, and complex passwords are subject to the forgetting curve. Users who set a pattern and return to an app three months later are statistically likely to have forgotten it. Designing recovery flows as first-class experiences — not afterthoughts — acknowledges the reality of memory decay.",
      },
    ],
    userImpact:
      "Information presented once is largely lost. Features that require memory of a past tutorial will be used by a fraction of users. Design systems that surface the right information at the right moment, repeat critical guidance at appropriate intervals, and never assume users remember what they were told during initial onboarding.",
    origin: "Hermann Ebbinghaus, 1885",
  },
  {
    id: "satisficing",
    name: "Satisficing",
    category: "Behavior",
    tagline: "Users accept the first 'good enough' option rather than searching for the optimal one.",
    description:
      "Satisficing — a portmanteau of 'satisfy' and 'suffice' coined by Herbert Simon — describes the decision strategy in which a person selects the first option that meets a minimum acceptable threshold, rather than exhaustively evaluating all options to find the best one. Simon argued that humans are bounded by limited cognitive resources, time, and information, making optimization irrational in most real-world contexts. Satisficing is rational given these constraints. In UX, satisficing explains why users click the first plausible search result rather than reading all results, why they use the feature they discovered first even if a better one exists, and why default settings are rarely changed.",
    examples: [
      {
        title: "Search result selection",
        detail:
          "Eye-tracking studies consistently show that users scan search results top-to-bottom and click the first result that seems relevant enough — not the best possible result. This is satisficing in practice: the first 'good enough' option wins, regardless of the quality of results below it.",
      },
      {
        title: "Default setting retention",
        detail:
          "The vast majority of users never change default settings. When a default is 'good enough' — even if not optimal for a given user — the satisficing heuristic kicks in: changing settings requires cognitive effort and the default already crosses the acceptable threshold, so no change is made.",
      },
      {
        title: "Navigation path persistence",
        detail:
          "A user who discovers a longer but familiar path to a feature will continue using it indefinitely if it's good enough, even after a shortcut is introduced. The known path satisfices; the effort to learn the new shortcut doesn't feel worth the marginal gain.",
      },
    ],
    userImpact:
      "Users will not hunt for your best feature if they've found one that's sufficient. Place the most valuable options first, make defaults genuinely good, and don't hide key functionality below the fold or behind menus — because users stop looking once a satisficing option is found.",
    origin: "Herbert Simon, 1956",
  },
  {
    id: "scarcity-principle",
    name: "Scarcity Principle",
    category: "Behavior",
    tagline: "Perceived scarcity increases desirability — limited availability or urgency drives action.",
    description:
      "The Scarcity Principle, documented by Robert Cialdini in Influence (1984), states that people assign greater value to things that are — or appear to be — rare, dwindling, or time-limited. Scarcity triggers loss aversion: the fear of missing out on something valuable feels psychologically stronger than the equivalent gain. This is why 'Only 3 left in stock', 'Offer ends in 2 hours', and 'Limited edition' are so effective at accelerating decisions. In UX and product design, scarcity signals can legitimately accelerate conversion for real constraints, but when fabricated or misused they erode trust and generate backlash.",
    examples: [
      {
        title: "Hotel and flight inventory indicators",
        detail:
          "Booking platforms showing 'Only 2 rooms left at this price' or 'Last 4 seats' communicate real inventory constraints while triggering the scarcity response. Users who were passively browsing shift to active decision-making when they perceive that delayed action risks losing the option entirely.",
      },
      {
        title: "Limited-time offer countdown",
        detail:
          "A countdown timer on a promotional offer — 'Price reverts in 3:42:17' — creates temporal scarcity that increases urgency. Research shows that countdowns increase conversion rates significantly versus static price displays, even when the user already intended to purchase.",
      },
      {
        title: "Beta access and waitlists",
        detail:
          "Products that launch with restricted access and public waitlists leverage scarcity to build perceived value before wide availability. Being 'selected' from a waitlist creates a sense of exclusivity — users value the product more because access was limited, even if they had no prior opinion of it.",
      },
    ],
    userImpact:
      "Scarcity signals can legitimately accelerate genuine decisions by surfacing real constraints users would want to know about. Fabricated scarcity — fake countdown timers, false low-stock warnings — generates short-term conversion at the cost of long-term trust and brand reputation.",
    origin: "Robert Cialdini, 1984",
  },
  {
    id: "endowment-effect",
    name: "Endowment Effect",
    category: "Behavior",
    tagline: "People place higher value on things they own than identical things they don't.",
    description:
      "The Endowment Effect, identified by behavioral economist Richard Thaler and later studied extensively by Kahneman, Knetsch, and Thaler, describes the tendency for people to value something more highly simply because they own or possess it. In classic experiments, participants who were given a coffee mug demanded significantly more to sell it than they would willingly pay to buy an identical one. Ownership creates an irrational attachment that inflates perceived value. In UX, the endowment effect is leveraged through free trials that allow users to 'own' a feature or service before committing, through customization that creates personal investment, and through data accumulation that makes leaving feel like a loss.",
    examples: [
      {
        title: "Free trial conversions",
        detail:
          "A 30-day free trial that gives users full product access — rather than a limited demo — allows users to become 'owners' of the experience. The data they create, the preferences they set, and the workflows they build during the trial are now possessions. Canceling means losing all of that, making conversion psychologically easier than starting fresh.",
      },
      {
        title: "Profile and customization investment",
        detail:
          "A user who has spent time customizing their profile picture, bio, notification preferences, and dashboard layout values the account more than one who signed up five minutes ago. This investment creates switching costs that are partly psychological — leaving means losing a 'possession' they've shaped.",
      },
      {
        title: "Gamification and earned status",
        detail:
          "Earned badges, streak counts, and loyalty tiers feel like possessions. A user who has maintained a 90-day reading streak values that streak — and the platform that holds it — more than a new user would value a promise of the same. The endowment effect makes earned status a powerful retention mechanism.",
      },
    ],
    userImpact:
      "Let users invest in your product — through customization, data creation, and earned status — and the endowment effect will make leaving feel like a loss. Free trials convert better than demos because ownership, even temporary, creates attachment. Design onboarding to generate investment early.",
    origin: "Richard Thaler, 1980; Kahneman, Knetsch & Thaler, 1991",
  },
  {
    id: "maya-principle",
    name: "MAYA Principle",
    category: "Design",
    tagline: "The most successful designs are the Most Advanced Yet Acceptable — too novel fails, too familiar bores.",
    description:
      "The MAYA Principle — Most Advanced Yet Acceptable — was articulated by industrial designer Raymond Loewy, who shaped some of the most iconic designs of the 20th century (the Coca-Cola bottle, the Lucky Strike pack, the Studebaker). Loewy observed that consumers are torn between two competing forces: neophilia (attraction to the novel and new) and neophobia (resistance to the unfamiliar and risky). Successful design threads this tension — it must be advanced enough to feel fresh and exciting, yet familiar enough to be immediately accepted and understood. Designs that are too novel face rejection because the cognitive gap between expectation and reality is too large. Designs that are too familiar feel stale and fail to attract attention.",
    examples: [
      {
        title: "Automotive design evolution",
        detail:
          "Successful car designs evolve incrementally — each generation advances the aesthetic but remains recognizable as a continuation of the previous model. Radically novel concepts shown at auto shows rarely reach production in that form; the market-ready version is always pulled back toward the acceptable end of the spectrum.",
      },
      {
        title: "App redesign strategy",
        detail:
          "When a major app redesigns its navigation — say, moving from a bottom tab bar to a sidebar — gradual rollout with visual continuity reduces rejection. Full overnight redesigns violate the MAYA principle by maximizing novelty at the cost of familiarity, and historically generate negative user reactions even when the new design is objectively better.",
      },
      {
        title: "Skeuomorphic to flat design transition",
        detail:
          "The design industry's shift from skeuomorphic interfaces (textured leather, paper-like calendars) to flat design (iOS 7) followed MAYA dynamics over time. Early flat design retained familiar icons and mental models while discarding the texture — the advancement was real but landed within an acceptable range of the familiar.",
      },
    ],
    userImpact:
      "Innovation that outpaces user acceptance fails at adoption even if it is technically superior. Design for the leading edge of what your current user base can absorb — and move that edge gradually. The goal is not the maximum possible novelty, but the maximum novelty that the market will accept right now.",
    origin: "Raymond Loewy, 1951",
  },
  {
    id: "principle-of-least-astonishment",
    name: "Principle of Least Astonishment",
    category: "Design",
    tagline: "Systems should behave in ways that least surprise the user — match expectations from prior experience.",
    description:
      "The Principle of Least Astonishment (also called the Principle of Least Surprise) states that a system should behave in a way that is consistent with user expectations — derived from prior experience with similar systems, conventions in the domain, and behavior established elsewhere within the same product. When a system behaves unexpectedly, cognitive resources are diverted from the user's actual task to resolving the surprise. Violations range from minor (a button icon that doesn't match its label) to severe (destructive actions that proceed without confirmation, or saving actions that silently fail). The principle is foundational to interface consistency, predictability, and trust.",
    examples: [
      {
        title: "Keyboard shortcut conventions",
        detail:
          "Users expect Ctrl+Z to undo, Ctrl+S to save, and Ctrl+C to copy across every application. An application that remaps these shortcuts to different functions — even for good reasons — violates least astonishment and generates immediate frustration. The cost of retraining ingrained reflexes is too high to justify the deviation.",
      },
      {
        title: "Form submission feedback",
        detail:
          "A form that silently succeeds — returning the user to a blank form with no confirmation message — violates the principle. Users have internalized the convention of success messages and error states. Silent success is indistinguishable from silent failure, causing users to re-submit or assume their data was lost.",
      },
      {
        title: "External link behavior",
        detail:
          "Links that open in a new tab when the user expects in-tab navigation — or vice versa — are minor violations that accumulate. A user who clicks 'Help' and is deposited in a new tab loses their sense of navigation state. Consistent and predictable link behavior across a product reduces disorientation.",
      },
    ],
    userImpact:
      "Every unexpected behavior diverts cognitive resources from the user's task to resolving their surprise. Consistent, convention-respecting interfaces let users operate on autopilot for routine interactions, reserving deliberate attention for genuinely novel challenges.",
    origin: "Computing and UX convention; widely attributed in software design literature",
  },
  {
    id: "selective-attention",
    name: "Selective Attention",
    category: "Attention",
    tagline: "The brain actively filters sensory input, focusing on relevant stimuli and suppressing the rest.",
    description:
      "Selective attention is the cognitive process by which the brain prioritizes certain environmental stimuli for conscious processing while suppressing others. The classic demonstration — Cherry's Cocktail Party Effect (1953) — showed that people can follow one conversation in a noisy room while filtering out others, yet still detect their own name mentioned in a filtered channel. The brain is not a passive recorder; it is an active filter shaped by current goals, expectations, and salience. In UI design, selective attention means users do not see everything on the screen — they see what they are looking for, and they miss what they are not. This is why 'banner blindness', unread tooltips, and ignored warning dialogs exist: the content is visible but filtered out by the attentional system.",
    examples: [
      {
        title: "Banner blindness",
        detail:
          "Users routinely fail to see advertisements and UI elements styled to look like advertisements — even when those elements are positioned prominently. The brain has learned that content in typical banner locations is irrelevant to the current task and preemptively filters it. Important UI elements placed in ad-like positions inherit this suppression.",
      },
      {
        title: "Task-focused tunnel vision",
        detail:
          "Users filling out a purchase form are focused on the form fields. Navigation menus, promotional banners, and secondary content in the surrounding layout are not processed. Eye-tracking studies show near-zero fixations on elements outside the task-relevant area during focused tasks. Critical information must be placed inside the task flow, not adjacent to it.",
      },
      {
        title: "Error message placement",
        detail:
          "An error summary displayed at the top of a long form may go entirely unnoticed by a user who has just scrolled to the bottom to click Submit. Their attention is on the button and the fields near it. Inline errors adjacent to the relevant field intercept attention where it already is, dramatically improving error resolution rates.",
      },
    ],
    userImpact:
      "Users do not see your interface — they see a filtered version shaped by their current goals. Design for attention, not visibility: place critical information inside the task flow, use motion and contrast to trigger preattentive capture for genuinely important alerts, and do not assume that visible equals seen.",
    origin: "Cherry's Cocktail Party Effect, 1953; Broadbent's Filter Model, 1958",
  },
  {
    id: "change-blindness",
    name: "Change Blindness",
    category: "Attention",
    tagline: "Users routinely miss changes to visual scenes, especially during transitions or interruptions.",
    description:
      "Change blindness is the failure to detect changes in a visual scene when those changes occur during a brief interruption, transition, or distraction — even when the changes are large and obvious in hindsight. Landmark studies by Simons and Levin (1997) demonstrated that participants in a real-world conversation failed to notice when the person they were speaking to was replaced by a different person during a brief interruption. The phenomenon arises because the visual system does not maintain a detailed internal representation of the entire scene; it samples selectively and fills in the rest. Transitions — page loads, animations, scrolling — reset this sampling and allow changes to slip through undetected.",
    examples: [
      {
        title: "Unnoticed UI state changes",
        detail:
          "A status badge that flips from 'Processing' to 'Complete' while the user is reading a paragraph elsewhere on the page will go unnoticed by most users. Without an animation or a visual signal that draws attention to the change at the moment it occurs, users will miss the transition entirely and re-check or re-submit.",
      },
      {
        title: "Page refresh content updates",
        detail:
          "A dashboard that silently refreshes data in place — prices, stock levels, notification counts — while the user is scrolling will frequently leave users looking at stale values. Changes that occur without an explicit visual event (flash, animation, badge count) are vulnerable to change blindness.",
      },
      {
        title: "A/B test invisibility",
        detail:
          "Change blindness explains why users often do not consciously notice design changes between A/B test variants — even when the changes are substantial. If the change is not in the user's current attentional focus during the transition to the new state, it goes unregistered. Users adapt to new designs faster than they report noticing the change.",
      },
    ],
    userImpact:
      "State changes must be animated, highlighted, or signaled at the moment they occur to enter conscious perception. Silent updates, reloads, and transitions that alter UI state without a corresponding visual event will be missed, causing confusion when users notice the changed state does not match their mental model of what they last saw.",
    origin: "Simons & Levin, 1997; Rensink, O'Regan & Clark, 1997",
  },
  {
    id: "stroop-effect",
    name: "Stroop Effect",
    category: "Cognitive",
    tagline: "Conflicting visual or semantic information causes interference and slows processing.",
    description:
      "The Stroop Effect, demonstrated by John Ridley Stroop in 1935, is the finding that response time increases significantly when processing a stimulus requires ignoring conflicting information. In the classic task, participants name the ink color of color words (the word 'RED' printed in blue ink) and are reliably slower than when naming the ink color of non-conflicting stimuli. The interference occurs because reading is highly automatic — it activates semantic meaning involuntarily, creating competition with the intentional task of color-naming. In UX, Stroop-like interference occurs whenever visual presentation conflicts with meaning: a red 'success' message, a disabled-looking button that is actually active, or an icon that metaphorically contradicts its label.",
    examples: [
      {
        title: "Color-meaning conflicts",
        detail:
          "A form validation message styled in green text that says 'Error: invalid email' creates Stroop-like interference — the semantic content (error) conflicts with the color association (green = success). Users take measurably longer to process the message and are more likely to misread or dismiss it. Align color convention with semantic meaning.",
      },
      {
        title: "Icon and label mismatch",
        detail:
          "A button labeled 'Delete' with an icon that resembles a save disk creates conflicting signals. The icon activates a 'save' interpretation automatically; the label says 'delete'. The conflict increases processing time and error rates — users who rely on icon scanning will click expecting one outcome and get another.",
      },
      {
        title: "Disabled styling on active elements",
        detail:
          "Interactive elements styled to look disabled — low contrast, grayed-out appearance — create Stroop-like interference between affordance (visual appearance suggests non-interactive) and behavior (the element is actually clickable). Users avoid interacting with them, reducing engagement with intended features.",
      },
    ],
    userImpact:
      "Every conflict between visual signal and semantic meaning adds processing overhead and increases error rates. Ensure that color, iconography, typography weight, and positional conventions consistently reinforce — never contradict — the meaning of interface elements.",
    origin: "John Ridley Stroop, 1935",
  },
  {
    id: "emotional-design",
    name: "Emotional Design",
    category: "Emotion",
    tagline: "Products operate on three levels — visceral (appearance), behavioral (usability), and reflective (meaning) — each shaping satisfaction differently.",
    description:
      "Emotional Design, articulated by Don Norman in his 2003 book of the same name, proposes that human response to products operates on three distinct levels. The visceral level is immediate, automatic, and sensory — it is the gut reaction to how something looks, sounds, and feels before any interaction. The behavioral level is about usability and function — the pleasure of a well-designed interaction that feels smooth and effective. The reflective level is conscious and interpretive — it involves self-image, meaning, and the story users tell themselves about what using a product says about them. All three levels operate simultaneously and influence each other. A beautiful product (visceral) is perceived as more usable (behavioral); a product that aligns with self-image (reflective) generates loyalty that tolerates behavioral shortcomings.",
    examples: [
      {
        title: "Luxury product visceral response",
        detail:
          "Apple's product packaging is a visceral design artifact — the weight of the box, the resistance of the lid, the precise fit of components. These properties generate a positive emotional response before the product is even turned on, priming users to perceive the experience favorably. Visceral design shapes expectation and sets the emotional baseline.",
      },
      {
        title: "Micro-interaction delight",
        detail:
          "A task management app's satisfying animation when a task is checked off — a brief particle burst, a smooth strikethrough — operates at the behavioral and visceral levels simultaneously. The interaction functions correctly (behavioral) but also feels rewarding (visceral), increasing the likelihood of continued engagement.",
      },
      {
        title: "Brand identity and self-image",
        detail:
          "Users who drive a Tesla or carry a Moleskine are partly purchasing a reflective design experience — the product communicates something about who they are. Digital products achieve the same effect through brand personality, voice, and values alignment. Duolingo's playful irreverence, Notion's minimalist aesthetic, and Figma's collaborative identity each target a specific reflective response.",
      },
    ],
    userImpact:
      "Products that engage all three levels — visceral beauty, behavioral fluency, and reflective meaning — generate the strongest loyalty and word-of-mouth. Optimizing only for usability (behavioral) misses two-thirds of the emotional equation. Users forgive behavioral friction in products they love at the visceral and reflective levels; they abandon functionally correct products that feel emotionally empty.",
    origin: "Don Norman, 2003",
  },
]

export const categories = Array.from(new Set(uxLaws.map((law) => law.category))) as UXLaw["category"][]
