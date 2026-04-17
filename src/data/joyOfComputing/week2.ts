import { Question } from '../../types';

export const JOY_OF_COMPUTING_WEEK_2_QUESTIONS: Question[] = [
  {
    "id": "16",
    "question": "How many times does the outer loop execute?",
    "options": [
      "4",
      "5",
      "6",
      "Depends on the inner loop"
    ],
    "answer": "5",
    "context": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:\nThe code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
      },
      {
        "type": "text",
        "content": "The code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
  },
  {
    "id": "17",
    "question": "Why does Ravi\u2019s code print each number on a new line instead of the same line?",
    "options": [
      "Because print() moves the cursor to the next line by default",
      "Because range() creates new lines.",
      "Because the inner loop executes first",
      "Because nested loops cannot print patterns"
    ],
    "answer": "Because print() moves the cursor to the next line by default",
    "context": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:\nThe code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
      },
      {
        "type": "text",
        "content": "The code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
  },
  {
    "id": "18",
    "question": "Ravi\u2019s program executes without errors but fails to produce the required\npattern. Which of the following best explains the cause?",
    "options": [
      "The outer loop does not include the final value required for\nprinting the last line",
      "The inner loop variable is declared but not explicitly used in the\nprint statement",
      "The print statement is placed inside the inner loop instead of after\nit",
      "The inner loop executes one fewer iteration than required for each\nvalue of i"
    ],
    "answer": "The inner loop executes one fewer iteration than required for each\nvalue of i",
    "context": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:\nThe code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
      },
      {
        "type": "text",
        "content": "The code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
  },
  {
    "id": "19",
    "question": "After correcting the inner loop to execute the required number of times, Ravi\nobserves that the digits are still printed on separate lines. Which change is\nnecessary to ensure that each digit appears on the same line before moving to\nthe next line?",
    "options": [
      "Replace print(i) with print() inside the inner loop",
      "Move the print(i) statement outside the inner loop",
      "Add an empty print() statement at the beginning of the outer loop",
      "Modify the print statement to suppress the default newline\ncharacter"
    ],
    "answer": "Modify the print statement to suppress the default newline\ncharacter",
    "context": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:\nThe code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
      },
      {
        "type": "text",
        "content": "The code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
  },
  {
    "id": "20",
    "question": "In the corrected nested-loop program, why is an additional print() statement\nrequired immediately after the inner loop completes?",
    "options": [
      "To move the cursor to the next line after printing all digits for the\ncurrent value of i",
      "To reset the value of the loop variable before the next iteration\nbegins",
      "To ensure the inner loop terminates before the outer loop continues",
      "To prevent the digits printed in different iterations from\noverlapping"
    ],
    "answer": "To move the cursor to the next line after printing all digits for the\ncurrent value of i",
    "context": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:\nThe code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
      },
      {
        "type": "text",
        "content": "The code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
  },
  {
    "id": "21",
    "question": "Which of the following Python code snippets correctly produces the required\noutput?\n1\n22\n333\n4444\n55555",
    "options": [
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W2q6.a.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W2q6.b.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q6.c.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q6.d.jpg"
    ],
    "answer": "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q6.d.jpg",
    "context": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:\nThe code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Ravi\u2019s Nested Loop Implementation**\nRavi is asked to print the following pattern using Python:\n1\n22\n333\n4444\n55555\nHe knows that a single loop controls the number of lines, so he decides to use\n**nested for loops**\n. Ravi writes the following code:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
      },
      {
        "type": "text",
        "content": "The code runs without errors and prints multiple values on the screen. Ravi assumes that\nbecause the inner loop runs multiple times, the digit will automatically appear the\nrequired number of times on the same line. However, when the output is observed, the\npattern does not match the required format.\nThe instructor uses Ravi\u2019s code as a learning case. Learners are expected to analyze how\nthe\n**outer loop controls the number of rows**\n, how the\n**inner loop controls repetition**\n, and why the current placement of the print() statement leads to an incorrect output\nformat."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common1.jpg"
  },
  {
    "id": "22",
    "question": "What is the final value of reverse when the function is called as:",
    "options": [
      "210",
      "120",
      "21",
      "12"
    ],
    "answer": "21",
    "context": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q7.jpg"
    ]
  },
  {
    "id": "23",
    "question": "What will the function return for the input:",
    "options": [
      "Error because loop runs only once",
      "True",
      "False",
      "None"
    ],
    "answer": "True",
    "context": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q8.jpg"
    ]
  },
  {
    "id": "24",
    "question": "How many times does the while loop execute when the function is called as:",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "answer": "4",
    "context": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q9.jpg"
    ]
  },
  {
    "id": "25",
    "question": "Suppose the loop condition is changed to:\nWhat will happen when the function is called with is_palindrome(5)?",
    "options": [
      "It enters an infinite loop",
      "It returns False after one iteration",
      "It correctly returns True",
      "It raises a runtime error"
    ],
    "answer": "It enters an infinite loop",
    "context": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Palindrome Number Checker in Python\nRavi is learning Python and is currently practicing\n**loops and arithmetic operations.**\nAs part of his practice, he is given a task to\ncheck whether a given number is a palindrome.\nA\n**palindrome**\nnumber is a number that\nreads the same forward and backward.\nExamples:\n121 \u2192 Palindrome\n456 \u2192 Not a Palindrome\nRavi decides\n**not to convert the number into a string**\n, because he wants to strengthen his understanding of:\nwhile loops\nModulus (%) operator\nInteger division (//)"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2common2.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q10.jpg"
    ]
  },
  {
    "id": "26",
    "question": "A customer is a\n**regular customer**\nand makes a purchase of\n**\u20b9850.**\nWhich code fragment correctly represents the discount logic applied by the\ncalculator?",
    "options": [
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q11.a.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q11.b.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q11.c.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Q11(D).jpg"
    ],
    "answer": "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q11.a.jpg",
    "context": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing."
      }
    ]
  },
  {
    "id": "27",
    "question": "A\n**premium customer**\nmakes a purchase of\n**\u20b91,500.**\nWhich discount will the system finally apply?",
    "options": [
      "5% premium discount",
      "No discount",
      "10% purchase-based discount",
      "Both 10% and 5% discounts"
    ],
    "answer": "10% purchase-based discount",
    "context": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing."
      }
    ]
  },
  {
    "id": "28",
    "question": "A\n**premium customer**\nmakes a purchase of\n**\u20b92,500.**\nWhich logic ensures that only one discount is applied?",
    "options": [
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q13.a.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q13.b.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q13.c.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q13.d.jpg"
    ],
    "answer": "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q13.b.jpg",
    "context": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing."
      }
    ]
  },
  {
    "id": "29",
    "question": "A\n**premium customer**\nmakes a purchase of\n**\u20b92,000**\nexactly.\nWhich discount amount is applied?",
    "options": [
      "\u20b9100",
      "\u20b9200",
      "\u20b9300",
      "\u20b90"
    ],
    "answer": "\u20b9200",
    "context": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing."
      }
    ]
  },
  {
    "id": "30",
    "question": "A\n**premium customer**\nmakes a purchase of\n**\u20b91,800.**\nWhich of the following code fragments correctly produces the\ndiscount applied by the Smart Discount Calculator?",
    "options": [
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q15.a.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Q15(B).jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q15.c.jpg",
      "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q15.d.jpg"
    ],
    "answer": "__img__:https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w2q15.d.jpg",
    "context": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Smart Discount Calculator\nA retail store introduces a Smart Discount Calculator to ensure that discounts are\napplied in a consistent and predictable manner. Every bill is processed by following a\nfixed logical sequence. Once a condition is satisfied, the system proceeds forward\nwithout revisiting previous checks.\nPurchase Amount Based Discount\nIf the total purchase amount is less than \u20b91,000, no discount is applied.\nIf the total purchase amount is \u20b91,000 or more, a 10% purchasebased discount becomes\neligible.\nOnly one purchase-amount condition is checked. After this step, the system moves to\ncustomer evaluation.\nCustomer Type Based Discount\nIf the customer is a regular customer, no customer-type discount is considered.\nIf the customer is a premium customer, the system checks whether the purchase amount is\nat least \u20b92,000.\nIf the customer is premium and the purchase amount is below \u20b92,000, the premium discount\nis ignored.\nIf the customer is premium and the purchase amount is \u20b92,000 or more, a 5% premium\ndiscount becomes eligible.\nFinal Discount Selection Rule\nIf no discount is eligible from either scheme, the final payable amount remains equal to\nthe purchase amount.\nIf exactly one discount is eligible, that discount is applied.\nIf both purchase-based and premium discounts are eligible, the system compares the\ndiscount values and applies only the one that results in the higher benefit.\nAt no point are both discounts applied together.\n**Safety Rules**\nIf the calculated discount exceeds the purchase amount, the discount is limited to the\npurchase amount.\nIf the final payable amount becomes negative, it is reset to zero.\n**Output Generation**\nThe system displays the original purchase amount, the selected discount, and the final\npayable amount.\nThe calculator always produces the same output for the same input, ensuring fairness and\ntransparency in billing."
      }
    ]
  }
];
