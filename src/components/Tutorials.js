import { Tab, Tabs } from "react-bootstrap";

const Tipsandtutorials = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-4"
      justify
    >
      <Tab eventKey="home" title="Visual Studio Code (VS Code)">
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WPqXP_kLzpo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <ol>
          <li>
            <strong>Download and Install:</strong> Visit the official Visual
            Studio Code website at{" "}
            <a href="https://code.visualstudio.com" target="_blank">
              code.visualstudio.com
            </a>{" "}
            and download the appropriate version for your operating system.
          </li>
          <li>
            <strong>Basic Editor Features:</strong> Familiarize yourself with
            the core features of VS Code, such as file navigation, text editing,
            searching, and basic customization options.
          </li>
          <li>
            <strong>Extensions:</strong> Explore the vast collection of
            extensions available for VS Code to enhance your productivity and
            tailor the editor to your needs. Popular extensions include language
            support, linters, code formatters, and Git integration.
          </li>
          <li>
            <strong>Customization:</strong> Learn how to customize the
            appearance and behavior of VS Code by configuring settings,
            keybindings, and themes to create a personalized development
            environment.
          </li>
          <li>
            <strong>Integrated Terminal:</strong> Take advantage of the
            integrated terminal in VS Code to execute commands, run scripts, and
            interact with your development environment without leaving the
            editor.
          </li>
        </ol>

        <p>
          Here are some recommended tutorials and resources to help you learn
          Visual Studio Code:
        </p>

        <ol>
          <li>
            <a
              href="https://code.visualstudio.com/docs/introvideos/overview"
              target="_blank"
            >
              Visual Studio Code Intro Videos
            </a>{" "}
            - Official introductory videos that cover the basics of using VS
            Code effectively.
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks"
              target="_blank"
            >
              VS Code Tips and Tricks
            </a>{" "}
            - Official documentation with useful tips and tricks to boost your
            productivity in VS Code.
          </li>
          <li>
            <a href="https://www.youtube.com/c/TraversyMedia" target="_blank">
              Traversy Media YouTube Channel
            </a>{" "}
            - YouTube channel with tutorials specifically focused on using VS
            Code for web development.
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/" target="_blank">
              VS Code Marketplace
            </a>{" "}
            - Explore the official marketplace to discover and install
            extensions, themes, and other resources for VS Code.
          </li>
        </ol>
      </Tab>
      <Tab eventKey="profile" title="Hypertext Mark-up Language">
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pQN-pnXPaVg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <ol>
          <li>
            <strong>Use Semantic HTML:</strong> Semantic HTML helps structure
            your web content in a meaningful way, improving accessibility and
            search engine optimization.
          </li>
          <li>
            <strong>Follow Indentation and Formatting:</strong> Maintain
            consistent indentation and formatting for your HTML code to enhance
            readability and make it easier to debug and maintain.
          </li>
          <li>
            <strong>Comment Your Code:</strong> Add comments to your HTML code
            to explain its purpose, provide context, or temporarily disable
            sections. Comments make your code more understandable for yourself
            and others working on the project.
          </li>
          <li>
            <strong>Separate Structure and Presentation:</strong> Use CSS for
            styling and keep your HTML focused on structure and content. This
            separation enhances code maintainability and makes it easier to
            update the visual appearance of your website.
          </li>
          <li>
            <strong>Optimize for Performance:</strong> Minimize the use of
            unnecessary tags, reduce code redundancy, and use optimized images
            to improve your website's loading speed and overall performance.
          </li>
        </ol>

        <p>Check out these tutorials and resources for learning HTML:</p>

        <ol>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
              target="_blank"
            >
              MDN Web Docs HTML Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/html/" target="_blank">
              W3Schools HTML Tutorial
            </a>
          </li>
          <li>
            <a
              href="https://www.htmldog.com/guides/html/beginner/"
              target="_blank"
            >
              HTML Dog HTML Beginner Tutorial
            </a>
          </li>
          <li>
            <a href="http://html5doctor.com/" target="_blank">
              HTML5 Doctor
            </a>
          </li>
        </ol>
      </Tab>
      <Tab eventKey="longer-tab" title="Cascading Style Sheets">
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1Rs2ND1ryYc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <ol>
          <li>
            <strong>Master CSS Selectors:</strong> Learn and understand CSS
            selectors to effectively target and style HTML elements.
          </li>
          <li>
            <strong>Box Model Understanding:</strong> Familiarize yourself with
            the CSS box model, including margins, padding, borders, and the
            content area. It's crucial for layout and spacing control.
          </li>
          <li>
            <strong>Responsive Design:</strong> Learn about responsive design
            techniques, such as media queries and flexible layouts, to create
            websites that adapt to different devices and screen sizes.
          </li>
          <li>
            <strong>Use CSS Flexbox:</strong> Learn and leverage CSS Flexbox for
            efficient and flexible layout design, especially for building
            responsive web pages.
          </li>
          <li>
            <strong>Master CSS Grid:</strong> Understand CSS Grid to create
            complex, grid-based layouts with ease.
          </li>
        </ol>

        <p>
          Here are some recommended tutorials and resources to help you learn
          CSS:
        </p>

        <ol>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
              target="_blank"
            >
              MDN Web Docs CSS Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/css/" target="_blank">
              W3Schools CSS Tutorial
            </a>
          </li>
          <li>
            <a href="https://flexboxfroggy.com/" target="_blank">
              Flexbox Froggy
            </a>{" "}
            - A fun interactive game to learn CSS Flexbox concepts.
          </li>
          <li>
            <a href="https://cssgridgarden.com/" target="_blank">
              CSS Grid Garden
            </a>{" "}
            - An interactive game to learn CSS Grid layout.
          </li>
        </ol>
      </Tab>
      <Tab eventKey="javascript" title="Javascript">
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PkZNo7MFNFg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <ol>
          <li>
            <strong>Master JavaScript Fundamentals:</strong> Gain a solid
            understanding of JavaScript basics, including variables, data types,
            functions, loops, and conditionals.
          </li>
          <li>
            <strong>DOM Manipulation:</strong> Learn how to interact with the
            Document Object Model (DOM) using JavaScript to dynamically modify
            HTML elements and handle user interactions.
          </li>
          <li>
            <strong>Event Handling:</strong> Understand how to handle and
            respond to various events, such as mouse clicks, keyboard input, and
            form submissions, using JavaScript.
          </li>
          <li>
            <strong>AJAX and APIs:</strong> Learn how to make asynchronous HTTP
            requests and work with APIs to retrieve and send data between the
            client and server.
          </li>
          <li>
            <strong>ES6+ Features:</strong> Familiarize yourself with modern
            JavaScript features like arrow functions, template literals,
            destructuring, and modules.
          </li>
        </ol>

        <p>
          Here are some recommended tutorials and resources to help you learn
          JavaScript:
        </p>

        <ol>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
              target="_blank"
            >
              MDN Web Docs JavaScript Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/js/" target="_blank">
              W3Schools JavaScript Tutorial
            </a>
          </li>
          <li>
            <a href="https://javascript30.com/" target="_blank">
              JavaScript30
            </a>{" "}
            - A free 30-day vanilla JavaScript coding challenge that builds
            real-world projects.
          </li>
          <li>
            <a href="https://eloquentjavascript.net/" target="_blank">
              Eloquent JavaScript
            </a>{" "}
            - A comprehensive online book that covers JavaScript in-depth.
          </li>
        </ol>
      </Tab>
      <Tab eventKey="git-github" title="Git & Github">
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RGOj5yH7evk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <ol>
          <li>
            <strong>Create a GitHub Account:</strong> Sign up for a GitHub
            account at{" "}
            <a href="https://github.com" target="_blank">
              github.com
            </a>
            .
          </li>
          <li>
            <strong>Repository Basics:</strong> Learn how to create a
            repository, clone it to your local machine, and perform basic
            operations like adding, committing, and pushing changes.
          </li>
          <li>
            <strong>Branching and Merging:</strong> Understand how to create and
            switch between branches, merge branches, and handle conflicts when
            collaborating with others.
          </li>
          <li>
            <strong>Collaboration and Pull Requests:</strong> Learn how to fork
            repositories, make changes in your fork, and create pull requests to
            contribute changes back to the original repository.
          </li>
          <li>
            <strong>Issue Tracking:</strong> Explore how to use GitHub's issue
            tracking system to report and manage bugs, feature requests, and
            project tasks.
          </li>
        </ol>

        <p>
          Here are some recommended tutorials and resources to help you learn
          GitHub:
        </p>

        <ol>
          <li>
            <a href="https://guides.github.com" target="_blank">
              GitHub Guides
            </a>{" "}
            - Official GitHub guides covering various topics from the basics to
            advanced workflows.
          </li>
          <li>
            <a href="https://docs.github.com/en/get-started" target="_blank">
              GitHub Docs
            </a>{" "}
            - Official documentation that provides in-depth information on using
            GitHub's features and functionalities.
          </li>
          <li>
            <a href="https://www.atlassian.com/git/tutorials" target="_blank">
              Atlassian Git Tutorials
            </a>{" "}
            - A comprehensive set of tutorials that cover Git concepts and
            workflows, which are fundamental to GitHub.
          </li>
          <li>
            <a href="https://www.youtube.com/githubguides" target="_blank">
              GitHub YouTube Channel
            </a>{" "}
            - The official GitHub YouTube channel, offering video tutorials and
            tips for using GitHub effectively.
          </li>
        </ol>
      </Tab>
      <Tab eventKey="nodejs" title="NodeJS">
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RLtyhwFtXQA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <ol>
          <li>
            <strong>Install Node.js:</strong> Download and install Node.js from
            the official website:{" "}
            <a href="https://nodejs.org" target="_blank">
              nodejs.org
            </a>
            .
          </li>
          <li>
            <strong>Node.js Basics:</strong> Learn the fundamentals of Node.js,
            including how to run scripts, work with modules, and use the Node
            Package Manager (npm).
          </li>
          <li>
            <strong>Asynchronous Programming:</strong> Understand how to
            leverage Node.js's asynchronous nature with callbacks, promises, and
            async/await to handle I/O operations efficiently.
          </li>
          <li>
            <strong>Express.js Framework:</strong> Explore Express.js, a popular
            Node.js framework for building web applications. Learn routing,
            middleware, and handling requests and responses.
          </li>
          <li>
            <strong>Database Integration:</strong> Learn how to connect and
            interact with databases like MongoDB or MySQL using Node.js
            libraries or Object-Relational Mapping (ORM) tools.
          </li>
        </ol>

        <p>
          Here are some recommended tutorials and resources to help you learn
          Node.js:
        </p>

        <ol>
          <li>
            <a href="https://nodejs.dev" target="_blank">
              Node.js.dev
            </a>{" "}
            - Official Node.js website providing tutorials, guides, and
            documentation for Node.js.
          </li>
          <li>
            <a href="https://www.w3schools.com/nodejs/" target="_blank">
              W3Schools Node.js Tutorial
            </a>{" "}
            - Beginner-friendly tutorial covering Node.js concepts and features.
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
              target="_blank"
            >
              MDN Express/Node.js Tutorial
            </a>{" "}
            - In-depth tutorial on building web applications with Express.js and
            Node.js.
          </li>
        </ol>
      </Tab>
      <Tab eventKey="react" title="React">
        <div className="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DLX62G4lc44"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <ol>
          <li>
            <strong>Set Up React:</strong> Install Node.js and use Create React
            App to set up a new React project quickly.
          </li>
          <li>
            <strong>React Components:</strong> Understand the concept of
            components, their lifecycle, and how to create functional and class
            components in React.
          </li>
          <li>
            <strong>JSX Syntax:</strong> Learn JSX, a JavaScript extension used
            in React, to write expressive and dynamic components.
          </li>
          <li>
            <strong>State and Props:</strong> Understand the difference between
            state and props, and how to manage component data and pass
            information between components.
          </li>
          <li>
            <strong>React Hooks:</strong> Explore React Hooks, such as useState
            and useEffect, to manage state and side effects in functional
            components.
          </li>
        </ol>

        <p>
          Here are some recommended tutorials and resources to help you learn
          React:
        </p>

        <ol>
          <li>
            <a
              href="https://reactjs.org/tutorial/tutorial.html"
              target="_blank"
            >
              React Official Tutorial
            </a>{" "}
            - Official tutorial from the React website that covers the basics of
            React.
          </li>
          <li>
            <a href="https://www.w3schools.com/react/" target="_blank">
              W3Schools React Tutorial
            </a>{" "}
            - Beginner-friendly tutorial covering React concepts and features.
          </li>
          <li>
            <a href="https://reactrouter.com/" target="_blank">
              React Router Documentation
            </a>{" "}
            - Learn how to add routing to your React applications using React
            Router.
          </li>
        </ol>
      </Tab>
    </Tabs>
  );
};

export default Tipsandtutorials;
