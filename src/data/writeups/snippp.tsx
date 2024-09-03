import SectionImage from "../../components/blog/SectionImage";
import SectionText from "../../components/blog/SectionText";
import ImageArea from "../../components/blog/ImageArea";
import { BlogArticle, ArticleSection } from "../../typeinterfaces";

const articleSections: ArticleSection[] = [
  {
    title: "Overview",
    id: "overview",
    type: "section",
    content: (
      <>
        <ImageArea>
          <SectionImage path="/snippets.png" />
        </ImageArea>
        <SectionText>
          <p>
            I created Snippp.io to help developers organize their code snippets.
          </p>
          <p>
            Based on my own pain points, I wanted a place to store my code with
            customizable lists, tags, and categories.
          </p>
          <p>
            The app has a very simple design language, focusing on readability,
            speed, and ease of use. The average time a user spends in the app is
            about 30 seconds.
          </p>
        </SectionText>
      </>
    ),
  },
  {
    title: "The Origin",
    id: "origin",
    type: "subsection",
    content: (
      <>
        <SectionText>
          <p>
            Working in graphics, I work with geometry, trigonometry, and color
            VERY often. Some algorithms get pretty complex, and I use a variety
            of tools to get the job done.
          </p>
          <p>
            Having all my tools laid out on the toolbench would be amazing, but
            that’s pretty wasteful. I have to keep this project file somewhere,
            and storage costs money. Keeping all my tools in a library will
            bloat the project like crazy.
          </p>
          <p>
            On the other hand, I can’t just spend 20 minutes scouring old GitHub
            repos to find my tools or scroll through all of my GitHub gists.
          </p>
          <p>
            I needed something more like a tool chest. Something in my workspace
            that has all my tools available, sorted into drawers with a little
            outline drawn in the shape of the function where it belongs.
          </p>
          <p>
            So okay, I’ll make a simple database of code snippets for the tools
            I use: Make it easy to copy the snippets and put them into
            categories, throw that all together into a simple little app. The
            snippets are all saved as objects in a file in the project.
          </p>
          <SectionImage path="/oldSnippets.png" />
          <p>
            I built this rough version in January of 2024 with a hard-coded
            library of tools. When enough people forked the repo, I decided to
            provide an improved version with community sharing, so anyone could
            benefit both as an organizer and as a resource.
          </p>
          <p>
            In June of 2024, I started building Snippp.io to fulfill that
            vision, and released the MVP in July.
          </p>
        </SectionText>
      </>
    ),
  },
  {
    title: "MVP",
    id: "mvp",
    type: "subsection",
    content: (
      <>
        <SectionText>
          <p>
            The MVP was a refreshed ui on the original app, with the database
            moved to Postgres.
          </p>
          <p>
            Features like search, sorting, tagging, and snippet builder were
            added from the start, since they were already present. Next came
            lists and the ability to favorite snippets. With this, I sent out
            the first links for the alpha on Twitter, Reddit, and yCombinator.
          </p>
          <p>
            In the next big update, I took all the feedback from the MVP alpha
            and built out what people wanted in a snippet manager. I added
            features like Forking, keyboard shortcuts for navigation, language
            and framework auto-detection, private snippets, and markdown in
            snippet descriptions.
          </p>
          <p>
            The MVP was released in July of 2024, and since then I've been
            working on adding features and improving the app.
          </p>
        </SectionText>
      </>
    ),
  },
  {
    title: "Main Components (Front-End)",
    id: "components",
    type: "section",
    content: <></>,
  },
  {
    title: "Dashboard",
    id: "dashboard",
    type: "subsection",
    content: (
      <>
        <SectionText>
          <p>
            The highlight of Snippp is your dashboard. A place to store all your
            snippets, sort them into lists, view your favorites, etc.
          </p>
          <p>
            This is the feature I was missing in all other snippet managers out
            there.
          </p>
          <p>
            On the left you'll find the explorer, which displays all your lists
            by default. When you click into a list, it shows that list's
            snippets, description, and management controls.
          </p>
          <p>
            You can navigate the explorer with keyboard controls, including
            moving in and out of lists, copying snippets, and more.
          </p>
          <p>
            On the right is the display, we'll break it down later but what's
            important is it's consistent on every page. Your description, code
            block, stats, and toolbar will always be in the same place.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/dashboard.png" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "Browser",
    id: "browser",
    type: "subsection",

    content: (
      <>
        <SectionText>
          <p>
            Browsing public snippets should be something that feels familiar and
            easy to use.
          </p>
          <p>
            So much of this app is built for leveraging collective knowledge, so
            I wanted to make sure it felt great to discover snippets too,
            especially when you're hunting down a particular function.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/browser.png" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "Builder",
    id: "builder",
    type: "subsection",

    content: (
      <>
        <SectionText>
          <p>
            Adding your snippets to Snippp should also feel good, so I built a
            simple crisp form with Monaco Editor to make it easy to write and
            edit your code.
          </p>
          <p>
            When creating a snippet, Snippp scans your code for keywords (no AI,
            just regex) and detects the language and framework, as well as
            suggestions for tags and categories.
          </p>
          <p>
            Snippp also supports private snippets, so you can keep your code a
            secret until you're ready to share. You can always edit visibility
            from the edit page.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/builderFull.png" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "Display",
    id: "display",
    type: "subsection",

    content: (
      <>
        <SectionText>
          <p>
            The display is simple and to the point with 3 major sections:
            Details, Code, and the Toolbar.
          </p>
          <p>
            In the details you'll find the basics: title, description, author.
            To help you guage the quality of the snippet, you'll also see the
            number of copies, likes, and forks a snippet has.
          </p>
          <p>
            The description is markdown, so you can format it however you like.
            This can serve as a sort of micro-documentation for the snippet.
          </p>
          <p className="font-semibold">
            Copying code in Snippp is a major change from other apps I've used,
            just click anywhere in the code block.
          </p>
          <p>
            The toolbar holds everything you need to play with the snippet:
            copying, liking, forking, adding to a list, sharing, and if you're
            the author, editing and deleting.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/displayExpanded.png" />
          <SectionImage path="/snippp/toolbar.gif" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "Under The Hood",
    id: "under-the-hood",
    type: "section",
    content: (
      <>
        <SectionText>
          <p>
            I've had quite a few solutions I've had to build while creating this
            app. I'm going to break down some of the more interesting solutions
            here.
          </p>
        </SectionText>
      </>
    ),
  },
  {
    title: "Auto-Language and Framework Detection",
    id: "auto-language-detection",
    type: "subsection",
    content: (
      <>
        <SectionText>
          <p>
            Snippp.io uses Highlight.js's language detection to detect the
            language of the snippet you're adding. The framework detection is
            pretty great using keyword recognition. It's not perfect, but it
            gets the right language 99.9% of the time, and the user can
            overwrite it the last 1%.
          </p>
          <a
            href="https://snippp.io/snippet/51"
            target="_blank"
            className="underline"
          >
            The code for language detection
          </a>
          <a
            href="https://snippp.io/snippet/95"
            target="_blank"
            className="underline"
          >
            The code for framework detection
          </a>
          <p>
            Frameworks are always optional, as the system has a wider margin of
            error, and it takes the user accepting a suggestion for the snippet
            to be categorized under a framework.
          </p>
          <p>
            As the site expands, I'll have to manually add frameworks users ask
            for, and create a new regex key for each one.
          </p>
        </SectionText>
      </>
    ),
  },
  {
    title: "Search Algorithm",
    id: "search-algorithm",
    type: "subsection",
    content: (
      <>
        <SectionText>
          <p>
            Searching is simple, but it's also a bit of a challenge to get
            right, and simplicity seemed like the right direction for something
            to scale.
          </p>
          <p>
            The search is case-insensitive, and the search term can be anywhere
            in the snippet code, author, tags, or description. I have weights
            for each field so that the search results are sorted by relevance.
          </p>
          <p>
            After giving the snippet a relevancy score, I calculate a popularity
            score based on the amount of times a snippet has been copied, and
            how many times it's been favorited. This filters both the most
            relevant and the most helpful snippets to the top, but is balanced
            so extremely popular snippets won't supercede relevant results{" "}
          </p>
          <p>
            The search method can be changed in the filter menu, sorting by all
            your typical sort orders.
          </p>
          <a
            href="https://snippp.io/snippet/110"
            target="_blank"
            className="underline"
          >
            Check out the algorithm here, feel free to use it in your own
            project :)
          </a>
        </SectionText>
      </>
    ),
  },
  {
    title: "Keyboard Controls",
    id: "keyboard-controls",
    type: "subsection",
    content: (
      <>
        <SectionText>
          <p>
            With speed as a major tenet of what Snippp is meant to be, I worked
            in keyboard shortcuts for navigating your dashboard. The controls
            feel snappy, quick, and don't get in the way of any other actions.
          </p>
          <p>
            I think with a little time, you can pop in and out of this app in
            just a few seconds and have the code you need, so you can get back
            to coding.
          </p>
          <ImageArea>
            <SectionImage path="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dkeBvaC-4QTvrBFU7x4Hug.png" />
          </ImageArea>
        </SectionText>
      </>
    ),
  },
  {
    title: "Additional Components",
    id: "additional-components",
    type: "section",
    content: (
      <>
        <SectionText>
          <p>
            I had a bit of a design renaissance while creating this app, so I
            made a lot of new useful components and hooks for use in future apps
            (I even use the Snippp profile card here in my portfolio)
          </p>
        </SectionText>
      </>
    ),
  },
  {
    title: "Notifications",
    id: "notifications",
    type: "subsection",

    content: (
      <>
        <SectionText>
          <p>
            There should also be feedback for things that happen in the app, so
            I built a simple notification system for successes and errors.
          </p>
          <p>
            There are a few variations, but it's all in one hook that you can
            call with a message, type (success, error, info), timeout, and
            whether to display that countdown.
          </p>
          <p>
            Not much to this, but it is well thought out and consistent so
            notifications are informative but not intrusive.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/notifications.gif" />
          <SectionImage path="/snippp/notificationCountdown.gif" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "Dark Mode",
    id: "dark-mode",
    type: "subsection",
    content: (
      <>
        <SectionText>
          <p>
            Necessary especially in a tool built for developers who might not
            want to get blasted with white light, I have dark mode adapting to
            system preferences so you can work with Snippp and keep your retinas
            safe.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/browserDark.png" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "User Profile",
    id: "user-profile",
    type: "subsection",

    content: (
      <>
        <SectionText>
          <p>
            Snippp is built on the backs of it's contributors, so I thought it
            would be nice to display some info and your stats, incentivizing you
            to share more.
          </p>
          <p>
            In the profile, you can display a bio and picture like normal, but
            also see a list of stats that show your contributions to the
            platform, what frameworks you work in, the popularity of your
            contributions, and more.
          </p>
          <p>
            This page works like a dashboard of your publicly available lists
            and snippets, to let other users explore what you've built.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/profile.png" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "Distribution Chart",
    id: "distribution-chart",
    type: "subsection",

    content: (
      <>
        <SectionText>
          <p>
            As part of displaying user and platform stats, I made this
            github-esque distribution chart for categories in the database.
          </p>
          <p>
            At the time of writing this, you can see there is a pretty fair bias
            for JS and TS snippets, but there are also a lot of shader tools
            written in GLSL.
          </p>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/distribution.png" />
        </ImageArea>
      </>
    ),
  },
  {
    title: "Roadmap",
    id: "roadmap",
    type: "subsection",

    content: (
      <>
        <SectionText>
          <p>
            Since this was my first public release building a product for a
            community which I plan to constantly improve, I wanted some way to
            let people know what features were on the horizon.
          </p>
          <p>
            I put together a simple roadmap, which can be adjusted until a
            version's sprint is underway, matching my own development pipeline.
          </p>
          <p>
            Each time a task is marked complete in the features object, it will
            dynamically handle the status display and the current version
            display.
          </p>
          <span>
            You can view the Snippp.io development roadmap{" "}
            <a
              href="https://snippp.io/roadmap"
              target="_blank"
              className="underline"
            >
              HERE
            </a>
          </span>
        </SectionText>
        <ImageArea>
          <SectionImage path="/snippp/roadmap.png" />
        </ImageArea>
      </>
    ),
  },

  {
    title: "Conclusion",
    id: "conclusion",
    type: "section",
    content: (
      <>
        <SectionText>
          <p>
            Snippp.io is a project I'm very proud of, and I'm excited to see it
            grow. I've already received a lot of positive feedback from the
            community, and I'm excited to see what people build with it.
          </p>
          <p>
            I plan to keep working on Snippp.io, there are already a few
            features in the works, you can check out the{" "}
            <a
              href="https://snippp.io/roadmap"
              target="_blank"
              className="underline"
            >
              roadmap
            </a>{" "}
            if you want to see what's coming next.
          </p>
          <p>Major updates soon:</p>
          <ul className="flex flex-col gap-4 pl-6">
            <li>- Desktop app with local file storage for security</li>
            <li>- Curated lists and highlighted contributors</li>
            <li>- Crash course</li>
          </ul>
          <p>
            If you have any feedback or suggestions for Snippp.io, please don't
            hesitate to reach out to me :)
          </p>
        </SectionText>
      </>
    ),
  },
];

const article: BlogArticle = {
  title: "Snippp.io",
  subtitleA: "Website",
  subtitleB: "Founder, Full Stack Developer",
  link: "https://snippp.io",
  content: articleSections,
};

export default article;
