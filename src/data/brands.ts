import { Brand } from "../typeinterfaces";

const brands: Brand[] = [
  {
    id: "snippp",
    name: "Snippp.io",
    desc: "A simple and intuitive code toolkit organizer.",
    tagline: "Snippet Manager",
    mission:
      "To provide a simple platform for developers to organize and share code toolkits, accessible to anyone.",
    tone: "Professional, Crisp, Efficient, Open",
    logo: {
      path: "/public/logos/snipppLogo.svg",

      variants: [
        {
          name: "Extended Logo",
          imagePath: "/public/logos/snippp.svg",
        },
        {
          name: "Favicon",
          imagePath: "/public/logos/snipppFavicon.svg",
        },
      ],
    },
    colors: [
      { name: "Byzantine Blue", hex: "#1d4ed8" },
      { name: "French Violet", hex: "#7e22ce" },
      { name: "Rojo", hex: "#dc2626" },
      { name: "Pigment Green", hex: "#16a34a" },
    ],
    fonts: [
      {
        name: "Satoshi",
        url: "/public/fonts/Satoshi-Variable.ttf",
        usage: "Headings, interactive elements, paragraphs",
        desc: "Satoshi is a clean, modern font that feels like a mix between a monospace and a sans-serif. It pairs well with monospace fonts like Neue Montreal Mono, which is used in the Snippp logo and code blocks.",
      },
    ],
    links: {
      github: " ",
    },
    colorUsage:
      "The interface should remain as grayscale as possible. Color is used only to identify major information types. Red for errors, green for success, blue for information, and purple to identify platform features such as curation, auto-categorizing, etc.",
  },
  {
    id: "cocoon",
    name: "Cocoon Tools",
    coverImage: "/public/cocoonLanding.png",
    brandingPhilisophy:
      "Cocoon is a drafting space for ideas, so the brand should feel like it. A place free from distraction, to keep the user on track. Tools should be easily available and intuitive to navigate, allowing the creative process to flow.",
    tone: "Professional, Clear, and Supportive",
    tagline:
      "Discover real problems from real people, and build a product that matters",
    mission:
      "Establish an easy to use product development pipeline for startups and small businesses.",
    logo: {
      path: "/public/logos/cocoonSimpleLogo.svg",
      variants: [
        {
          name: "Abberated Logo",
          imagePath: "/public/logos/cocoonLogo.svg",
        },
        {
          name: "Favicon",
          imagePath: "/public/logos/cocoonFavicon.svg",
        },
      ],
      desc: "Cocoon's butterfly wing logo reminds the user that the idea they're nurturing in this space will eventually become realized. The abberation provides a subtle way for the logo to stand out against an otherwise grayscale interface.",
    },
    colors: [
      { name: "Neon Pothos", hex: "#94FE6A" },
      { name: "Pigment Green", hex: "#16a34a" },
      { name: "Byzantine Blue", hex: "#1d4ed8" },
      { name: "French Violet", hex: "#7e22ce" },
      { name: "Rojo", hex: "#dc2626" },
      { name: "Pumpkin", hex: "#f97316" },
    ],
    colorUsage: `Colors are defined for each step of product development. 
    
    Byzantine Blue for Ideation, Pumpkin for Validation, French Violet for Resource Analysis, Rojo for Pitch. 
    Colors may be used outside of this context when blurred behind text. 
      
      Green is used for platform elements outside of those denoting development steps.`,
    fonts: [
      {
        name: "Overused Grotesk",
        url: "/public/OverusedGrotesk-VF.ttf",
        usage:
          "All text, headings, and interactive elements. All text is contained to a width of 60 characters.",
        desc: "Overused is a Helvetica-like typeface that's clean and easy to read. Usually associated with Swiss design, this helps users feel like they're in a professional and creative space.",
      },
    ],
    elements: [
      {
        name: "Background",
        imagePath: ["/public/cocoonLanding.png"],
        desc: "A subtle grid brackground is used behind a page's main content, padded away from the edge with inner shadow. A simple addition that helps users feel that they're in a drafting space.",
      },
      {
        name: "Tooltips",
        imagePath: [
          "/public/elements/cocoon/cocoonTooltipClearData.png",
          "/public/elements/cocoon/cocoonTooltipDownvote.png",
          "/public/elements/cocoon/cocoonScannerTooltip.png",
        ],
        desc: "Tooltips should accompany any interactive element that has no text label. They should be brief and to the point, with a clear description of what will happen if that icon is pressed. They should appear immediately on hover, and not cover any other interactive elements.",
      },
      {
        name: "Project Cards",
        imagePath: ["/public/elements/cocoon/cocoonProjectCard.png"],
        desc: "Project cards contain only necessary information: the project name, a brief description, and an icon denoting its current stage of development. They should be easy to scan and click, with a clear call to action. Hovering the stage icon should follow tooltip guidelines.",
      },
      {
        name: "Path Display",
        imagePath: ["/public/elements/cocoon/cocoonPath.png"],
        desc: "To keep users on track, the path is shown at all times, with easy navigation back to the root project or any previous steps. This navigator abstracts the url path, for example '/project/1234/ (project id)' displays 'project/ProjectName'",
      },
      {
        name: "Tool Labelling and Identification",
        imagePath: [
          "/public/elements/cocoon/cocoonScannerCopy.png",
          "/public/elements/cocoon/cocoonEmptyFeature.png",
          "/public/elements/cocoon/cocoonSurveyCopy.png",
        ],
        desc: "Each tool has an icon associated with it. More natural tool descriptions are included to bring warmth into each interaction. With consistent icongraphy and natural descriptions, users should have a better intuition when navigating the app.",
      },
      {
        name: "Empty Sections",
        imagePath: [
          "/public/elements/cocoon/cocoonIncompleteSection.png",
          "/public/elements/cocoon/cocoonPartiallyCompleteSection.png",
          "/public/elements/cocoon/cocoonMostlyCompleteSection.png",
        ],
        desc: "Empty or Incomplete Sections should remain available in the same location on the interface. Explain the tool's purpose and label the CTA with the first action the user should take to complete the section. Follow tool copy guidelines.",
      },
    ],
  },
  {
    id: "flashmate",
    name: "FlashMate",
    coverImage: "/public/cocoonLanding.png",
    brandingPhilisophy:
      "Cocoon is a drafting space for ideas, so the brand should feel like it: a clean and simple space with only the tools you need. A subtle gridded background to give the feeling of a drafting table.",
    tone: "Professional, Clear, and Supportive",
    tagline:
      "Discover real problems from real people, and build a product that matters",
    mission:
      "Establish an easy to use product development pipeline for startups and small businesses.",
    logo: {
      path: "/public/logos/flashmateLogo.svg",
      variants: [
        {
          name: "Simple Logo",
          imagePath: "/public/logos/flashmateLogoSimple.svg",
        },
      ],
      desc: "The Cocoon butterfly wing logo is meant to complete the connection that this app is a space to nurture an idea while visualizing its developed form.",
    },
    colors: [
      { name: "Pigment Green", hex: "#5377C6" },
      { name: "Neon Pothos", hex: "#DAE4EC" },
      { name: "French Violet", hex: "#C7C0FB" },
      { name: "Rojo", hex: "#dc2626" },
      { name: "Pumpkin", hex: "#f97316" },
    ],
    colorUsage: `Colors are defined for each step of product development. 
    
    Blue for Ideation, Orange for Validation, Purple for Resource Analysis, Red for Pitch. 
    Colors may be used outside of this context when blurred behind text. 
      
      Green is reserved for brand assets outside of those denoting development steps.`,
    fonts: [
      {
        name: "Overused Grotesk",
        url: "/public/OverusedGrotesk-VF.ttf",
        usage:
          "All text, headings, and interactive elements. All text is contained to a width of 60 characters.",
        desc: "Overused is a Helvetica-like typeface that's clean and easy to read, bringing the clarity and style of swiss design to the web. This helps users feel like they're in a professional space.",
      },
    ],
    elements: [
      {
        name: "Grid",
        imagePath: ["/public/cocoonLanding.png"],
        desc: "The grid is used to give the feeling of a drafting table. It's a subtle background element that helps users feel like they're in a drafting space.",
      },
      {
        name: "Path Display",
        imagePath: ["/public/elements/cocoon/cocoonPath.png"],
        desc: "To keep users on track, the path is shown at all times, with easy navigation back to the root project or any previous steps.",
      },
      {
        name: "Tool Descriptions",
        imagePath: [
          "/public/elements/cocoon/cocoonScannerCopy.png",
          "/public/elements/cocoon/cocoonEmptyFeature.png",
        ],
        desc: "Each tool has an icon associated with it. More natural tool descriptions are included to bring warmth into each interaction. With consistent icongraphy and natural descriptions, users should have a better intuition when navigating the app.",
      },
      {
        name: "Tooltips",
        imagePath: [
          "/public/elements/cocoon/cocoonTooltipClearData.png",
          "/public/elements/cocoon/cocoonTooltipDownvote.png",
        ],
        desc: "Tooltips should accompany any interactive element that has no text label. They should be brief and to the point, with a clear description of what will happen if that icon is pressed. They should appear immediately on hover, and not cover any other interactive elements.",
      },
    ],
  },
];

export default brands;
