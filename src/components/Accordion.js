import { Accordion } from "react-bootstrap";

const Tips = () => {
    return (

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Visual Studio Code (VS Code)</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>Extensions: Explore the vast collection of extensions available for VS Code. Some popular ones include "Bracket Pair Colorizer" (for colorizing matching brackets), "GitLens" (for enhanced Git integration), "Prettier" (for code formatting), and "Live Server" (for live preview of web pages).</li>
                <li>Customization: Personalize your editor by changing the theme, font size, and layout. You can access these settings in the "Preferences" menu or by pressing Ctrl + , (comma) on Windows/Linux or Cmd + , on macOS.</li>
                <li>Keyboard Shortcuts: Familiarize yourself with keyboard shortcuts to boost productivity. You can view the existing shortcuts by pressing Ctrl + K followed by Ctrl + S or by accessing the Keyboard Shortcuts settings.</li>
                <li>Multi-Cursor Editing: Use multiple cursors to edit multiple lines simultaneously. You can add extra cursors by holding down Ctrl (Windows/Linux) or Cmd (macOS) and clicking at different locations or by using Ctrl + Alt + ↑/↓ to create cursors above or below the current line.</li>
                <li>IntelliSense: Take advantage of IntelliSense, VS Code's intelligent code completion feature. It provides suggestions for variables, functions, and properties, making coding faster and reducing errors. Press Ctrl + Space to trigger IntelliSense.</li>
                <li>Split View and Tabs: Split the editor into multiple views or use tabs to work on multiple files simultaneously. You can drag-and-drop files onto the tab bar to open them in new tabs or use shortcuts like Ctrl + \ to split the editor vertically or Ctrl + 1/2/3 to switch between views.</li>
                <li>Integrated Terminal: Utilize the integrated terminal within VS Code to run commands and scripts without switching to a separate terminal application. Open the terminal using Ctrl + (backtick) or navigate to "View" "Terminal."</li>
                <li>Version Control: Take advantage of VS Code's built-in Git integration to manage version control within your projects. The source control icon in the left sidebar provides access to common Git commands and displays file changes.</li>
                <li>Task Automation: Automate repetitive tasks using the integrated task runner. Define custom tasks in a tasks.json file to compile code, run tests, or perform other build processes. Access the task runner using Ctrl + Shift + B.</li>
                <li>Snippet Support: Create and utilize code snippets for faster coding. You can define your snippets or install extensions that provide snippets for specific programming languages or frameworks.</li>
                <li>Debugging: Utilize the built-in debugger to troubleshoot your code. Set breakpoints, inspect variables, and step through your code using the debug toolbar. To configure a debugging launch configuration, access the debug view (Ctrl + Shift + D) and click the gear icon.</li>
                <li>Explore Documentation: Access documentation, guides, and community resources directly from VS Code. Use the "Help" menu to access the official documentation or search for extensions.</li>
              </ol>
              <p>Remember to regularly update VS Code and its extensions to benefit from the latest features and bug fixes. Happy coding!</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

    );
}
 
export default Accordion;