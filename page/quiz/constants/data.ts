import { QuestionsBySubject } from "../models/types";

export const allQuestions: QuestionsBySubject = {
  html: [
    {
      id: 1,
      question: "What is a semantic tag?",
      options: ["<div>", "<header>", "<span>", "<b>"],
      answer: 1,
    },
    {
      id: 2,
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<line>"],
      answer: 0,
    },
    {
      id: 3,
      question: "Which HTML element is used to define important text?",
      options: ["<strong>", "<b>", "<important>", "<highlight>"],
      answer: 0,
    },
    {
      id: 4,
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h1>", "<h6>", "<header>", "<heading>"],
      answer: 0,
    },
    {
      id: 5,
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: ["alt", "title", "src", "description"],
      answer: 0,
    },
    {
      id: 6,
      question: "How can you open a link in a new tab in HTML?",
      options: ["target='_blank'", "rel='new'", "window='new'", "target='_tab'"],
      answer: 0,
    },
    {
      id: 7,
      question: "Which HTML attribute is used to define inline styles?",
      options: ["style", "class", "css", "inline"],
      answer: 0,
    },
    {
      id: 8,
      question: "Which HTML element is used to display a clickable button?",
      options: ["<button>", "<click>", "<input>", "<btn>"],
      answer: 0,
    },
  ],
  css: [
    {
      id: 1,
      question: "What is the default position value?",
      options: ["static", "relative", "absolute", "fixed"],
      answer: 0,
    },
    {
      id: 2,
      question: "What is the correct CSS property for setting the background color?",
      options: ["background-color", "color", "background", "bgcolor"],
      answer: 0,
    },
    {
      id: 3,
      question: "Which property is used to change the text color of an element?",
      options: ["color", "text-color", "font-color", "text-style"],
      answer: 0,
    },
    {
      id: 4,
      question: "Which CSS property controls the size of an element's font?",
      options: ["font-size", "text-size", "font-style", "size"],
      answer: 0,
    },
    {
      id: 5,
      question: "How do you make a list that lists items with bullets?",
      options: ["list-style: disc;", "list-type: circle;", "list-style: none;", "list: bullet;"],
      answer: 0,
    },
    {
      id: 6,
      question: "What is the correct syntax for adding a background image in CSS?",
      options: [
        "background-image: url('image.jpg');",
        "image: background('image.jpg');",
        "background(url=image.jpg);",
        "bg-image: 'image.jpg';",
      ],
      answer: 0,
    },
    {
      id: 7,
      question: "Which property is used to set the space between elements?",
      options: ["margin", "padding", "spacing", "border-spacing"],
      answer: 0,
    },
    {
      id: 8,
      question: "How do you make a font bold in CSS?",
      options: ["font-weight: bold;", "text-bold: true;", "weight: bold;", "font: bold;"],
      answer: 0,
    },
  ],
  javascript: [
    {
      id: 1,
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["let", "var", "const", "all of the above"],
      answer: 3,
    },
    {
      id: 2,
      question: "Which method is used to add an element at the end of an array?",
      options: [".push()", ".pop()", ".shift()", ".unshift()"],
      answer: 0,
    },
    {
      id: 3,
      question: "What is the correct way to write a comment in JavaScript?",
      options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "Both 1 and 2"],
      answer: 3,
    },
    {
      id: 4,
      question: "What does the 'typeof' operator return?",
      options: ["Type of a variable", "Length of a string", "True/False", "None of the above"],
      answer: 0,
    },
    {
      id: 5,
      question: "Which method is used to find the length of a string?",
      options: [".length", ".size()", ".count()", ".index()"],
      answer: 0,
    },
    {
      id: 6,
      question: "Which method can be used to convert a string to an integer?",
      options: ["parseInt()", "parse()", "toInt()", "convert()"],
      answer: 0,
    },
    {
      id: 7,
      question: "What does 'NaN' stand for in JavaScript?",
      options: ["Not-a-Number", "Null-and-Number", "Negative-and-Number", "Number-and-Null"],
      answer: 0,
    },
    {
      id: 8,
      question: "Which function is used to execute a block of code after a delay?",
      options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
      answer: 0,
    },
  ],
  accessibility: [
    {
      id: 1,
      question: "What does 'WCAG' stand for?",
      options: [
        "Web Content Accessibility Guidelines",
        "Web Content Assistance Guide",
        "Web Color Accessibility Guide",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 2,
      question: "What is the minimum text contrast ratio for normal text in WCAG 2.1 AA?",
      options: ["4.5:1", "3:1", "2.5:1", "5:1"],
      answer: 0,
    },
    {
      id: 3,
      question: "Which HTML attribute provides alternate text for images?",
      options: ["alt", "src", "title", "desc"],
      answer: 0,
    },
    {
      id: 4,
      question: "What does ARIA stand for?",
      options: [
        "Accessible Rich Internet Applications",
        "Advanced Rich Internet Applications",
        "Accessible Rich Interface Accessibility",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 5,
      question: "What is the purpose of semantic HTML?",
      options: [
        "Improving SEO and accessibility",
        "Adding animations to web pages",
        "Styling the webpage",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 6,
      question: "Which HTML element is used for navigation landmarks?",
      options: ["<nav>", "<menu>", "<footer>", "<header>"],
      answer: 0,
    },
    {
      id: 7,
      question: "What is a screen reader?",
      options: [
        "Software that reads text on the screen",
        "A tool for testing web page speed",
        "A debugging tool",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "What is the role of a 'tabindex' attribute?",
      options: [
        "To control the tab order of elements",
        "To make an element clickable",
        "To highlight text",
        "None of the above",
      ],
      answer: 0,
    },
  ],
};
