# JavaScript Calculator

A responsive scientific calculator built with HTML, CSS, and vanilla JavaScript. It supports basic arithmetic, scientific functions, constants, parentheses, and degree/radian angle modes.

## Live Demo

[Try the calculator](https://jscalculator-beta.vercel.app/)

## Features

- Basic arithmetic: addition, subtraction, multiplication, and division
- Parentheses for grouping expressions
- Exponentiation using `^`
- Trigonometric functions: `sin`, `cos`, `tan`, `sec`, `csc`, and `cot`
- Logarithmic functions: natural logarithm (`ln`) and base-10 logarithm (`log`)
- Square root (`sqrt`)
- Mathematical constants: π (`pi`) and Euler's number (`e`)
- Degree (`deg`) and radian (`rad`) angle modes for trigonometric calculations
- `AC` to clear the display
- `DEL` to remove the last character
- `ANS` to reuse the previous calculation result
- Responsive interface
- Toggleable chat interface on smaller screens
- Preliminary AI chat interface (not yet connected to an AI service)

## Tech Stack

- **HTML5** – Application structure
- **CSS3** – Styling and responsive layout
- **JavaScript (ES Modules)** – Calculator logic and functionality
- **SVG** – Interface icons

## Getting Started

### Prerequisites

To run this project locally, you need:

- A modern web browser
- Git (optional, for cloning the repository)
- A local development server (recommended)

No additional packages or build tools are currently required.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GeraldOkoth/JS_calculator.git
   ```

2. Navigate to the project directory:
   ```
   cd calculator
   ```
3. Open the project using a local development server.

   If you use Visual Studio Code, you can install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

   Alternatively, use any local static-file server.

4. Open the local URL provided by your server in your browser.

> You can also open `index.html` directly in your browser, although using a local server is recommended.

## **Usage**

1. Enter numbers and mathematical operators using the calculator buttons.
2. Use parentheses to group expressions.
3. Select a scientific function to insert it into the expression.
4. Enter the function's argument and close the parentheses where necessary.
5. Select `DEG` or `RAD` to choose the angle mode for trigonometric calculations.
6. Press `=` to evaluate the expression.
7. Press `AC` to clear the calculator.
8. Press `DEL` to remove the last character.
9. Press `ANS` to reuse the previous calculation result.
10. On smaller screens, use the chat toggle to show or hide the chat interface.

## **Project Structure**

```
.
├── index.html
├── calculator.css
├── calculator.js
└── icons/
    ├── more_horiz.svg
    ├── send.svg
    └── swap.svg
```

| File/Directory   | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `index.html`     | Main HTML structure of the calculator                   |
| `calculator.css` | Styling, layout, and responsive design                  |
| `calculator.js`  | Calculator logic, expression parsing, and functionality |
| `icons/`         | SVG icons used throughout the interface                 |

## **Troubleshooting**

### **Calculator buttons or calculations are not working**

- Ensure JavaScript is enabled in your browser.
- Refresh the page.
- If opening the HTML file directly causes issues, run the project using a local development server.

### **The calculator displays an error**

- Check that the expression is valid.
- Ensure parentheses are properly balanced.
- Make sure function arguments are provided correctly.
- Check for invalid mathematical operations, such as division by zero.

### **Scientific functions return unexpected results**

Verify the selected angle mode:

- `DEG` – Degrees
- `RAD` – Radians

The selected mode affects trigonometric calculations.

### **Styling or icons are missing**

Ensure that `calculator.css` and the `icons/` directory are present and that the project files retain their original relative paths.

## **Roadmap**

Planned improvements include:

- **AI-powered mathematical assistant:** Enable users to ask questions and receive explanations in-app of mathematical concepts, formulas, and calculations based on their prompts.
- Improve the AI chat interface and integrate it with an appropriate AI service.
- Further improve calculator usability and functionality.

> The AI chat interface is currently a placeholder. AI-powered mathematical explanations are not yet implemented.

## **Contributing**

Contributions, bug reports, feature requests, and suggestions are welcome.

To contribute:

1. Fork this repository.
2. Clone your fork to your local machine.
3. Create a new branch:
   ```
   git checkout -b feature/your-feature-name
   ```
4. Make your changes.
5. Test your changes in a browser and verify that existing calculator functionality still works.
6. Commit your changes:
   ```
   git commit -m "Describe your changes"
   ```
7. Push your branch:
   ```
   git push origin feature/your-feature-name
   ```
8. Open a pull request against the original repository and provide a clear description of your changes.

## **License**

No license has been specified in the provided project files.
