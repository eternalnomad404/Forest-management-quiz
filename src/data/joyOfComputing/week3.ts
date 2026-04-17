import { Question } from '../../types';

export const JOY_OF_COMPUTING_WEEK_3_QUESTIONS: Question[] = [
  {
    "id": "31",
    "question": "What will be displayed after execution?",
    "options": [
      "['Milk', 'Bread', 'Eggs']",
      "['Butter', 'Milk', 'Bread', 'Eggs']",
      "Error",
      "['Milk', 'Bread', 'Eggs', 'Butter']"
    ],
    "answer": "['Milk', 'Bread', 'Eggs', 'Butter']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q1.jpg"
    ]
  },
  {
    "id": "32",
    "question": "Which sequence is produced?",
    "options": [
      "['Milk', 'Bread', 'Eggs', 'Fruits']",
      "Error",
      "['Milk', 'Fruits', 'Bread', 'Eggs']",
      "['Fruits', 'Milk', 'Bread', 'Eggs']"
    ],
    "answer": "['Milk', 'Fruits', 'Bread', 'Eggs']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q2.jpg"
    ]
  },
  {
    "id": "33",
    "question": "Which list is printed?",
    "options": [
      "['Milk', 'Bread', 'Eggs', ['Rice', 'Oil']]",
      "Error",
      "['Rice', 'Oil', 'Milk', 'Bread', 'Eggs']",
      "['Milk', 'Bread', 'Eggs', 'Rice', 'Oil']"
    ],
    "answer": "['Milk', 'Bread', 'Eggs', 'Rice', 'Oil']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q3.jpg"
    ]
  },
  {
    "id": "34",
    "question": "Which value appears on the screen?",
    "options": [
      "Error",
      "Bread",
      "Milk",
      "Fruits"
    ],
    "answer": "Milk",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q4.jpg"
    ]
  },
  {
    "id": "35",
    "question": "Which option correctly represents the printed list?",
    "options": [
      "['Milk', 'Fruits']",
      "['Bread', 'Eggs']",
      "['Fruits', 'Bread', 'Eggs']",
      "['Fruits', 'Bread']"
    ],
    "answer": "['Fruits', 'Bread']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q5.jpg"
    ]
  },
  {
    "id": "36",
    "question": "After execution, which arrangement is obtained?",
    "options": [
      "['Butter', 'Bread', 'Eggs', 'Milk']",
      "['Bread', 'Butter', 'Eggs', 'Milk']",
      "Error",
      "['Milk', 'Bread', 'Eggs', 'Butter']"
    ],
    "answer": "['Bread', 'Butter', 'Eggs', 'Milk']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q6.jpg"
    ]
  },
  {
    "id": "37",
    "question": "What does the list finally contain?",
    "options": [
      "['Milk', 'Eggs']",
      "Error",
      "['Fruits', 'Milk', 'Eggs']",
      "['Milk', 'Fruits', 'Eggs']"
    ],
    "answer": "['Milk', 'Fruits', 'Eggs']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q7.jpg"
    ]
  },
  {
    "id": "38",
    "question": "Which elements are shown?",
    "options": [
      "['Bread', 'Eggs', 'Butter']",
      "['Eggs', 'Butter', 'Rice']",
      "Error",
      "['Milk', 'Bread', 'Eggs']"
    ],
    "answer": "['Bread', 'Eggs', 'Butter']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q8.jpg"
    ]
  },
  {
    "id": "39",
    "question": "Which list is displayed?",
    "options": [
      "['Bread', 'Eggs', 'Almond Milk']",
      "Error",
      "['Almond Milk', 'Bread', 'Eggs']",
      "['Milk', 'Bread', 'Eggs']"
    ],
    "answer": "['Almond Milk', 'Bread', 'Eggs']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q9.jpg"
    ]
  },
  {
    "id": "40",
    "question": "Which option correctly matches the program behavior?",
    "options": [
      "['Bread', 'Eggs']",
      "['Milk', 'Rice']",
      "Error",
      "['Eggs', 'Milk']"
    ],
    "answer": "['Eggs', 'Milk']",
    "context": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders.\nHow this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last.\nHow this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early.\n**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders.\nHow this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**\nHow this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together.\n**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**\n**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled.\nHow this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted.\n**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day.\n**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Riya is building an\n**Order Processing System**\nfor an online grocery store.\nShe uses a\n**Python list**\nbecause it maintains order and allows items to be added, removed, or updated\ndynamically.\n1. Creating the Order List (Initialization)\nAt the start of the day, the system has some confirmed orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\n[] creates a list\nItems are stored in order\nIndexing starts from 0\nOutput:\n['Milk', 'Bread', 'Eggs']\n2. Adding a New Order at the End (append)\nA customer orders\n**Butter,**\nwhich must be added last."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nappend() adds\n**one item at the end**\nExisting order remains unchanged\nOutput:\n['Milk', 'Bread', 'Eggs', 'Butter']\n3. Adding a Priority Order at a Specific Position (insert)\nA priority customer orders\n**Fruits,**\nwhich must come early."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\ninsert(index, value) places the value at that index\nElements from that position shift right\nOutput:\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter']\n4. Adding Multiple Orders Together (extend)\nA partner store sends additional orders."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nextend() adds elements\n**one by one**\nNo nested list is created\n**Output:**\n['Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n5. Accessing a Specific Order (Indexing)\nThe system checks the\n**first order received.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nIndex 0 always refers to the first element\nOutput:\nMilk\n6. Processing Orders in Batches (Slicing)\nThe packaging team processes the first three orders together."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nStart index included\nEnd index excluded\nCreates a\n**new list**\nOutput:\n['Milk', 'Fruits', 'Bread']\n7. Updating an Incorrect Order (Assignment)\nA customer ordered\n**Milk**\nbut wanted\n**Almond Milk.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nindex() finds the position of \"Milk\"\nAssignment replaces the value at that index\n**Output:**\n['Almond Milk', 'Fruits', 'Bread', 'Eggs', 'Butter', 'Rice', 'Oil']\n8. Removing a Cancelled Order by Name (remove)\nThe\n**Bread**\norder is cancelled."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg"
      },
      {
        "type": "text",
        "content": "How this works:\nremove() deletes the\n**first matching element**\nRemaining items shift lef\nOutput:\n['Almond Milk', 'Fruits', 'Eggs', 'Butter', 'Rice', 'Oil']\n9. Sorting Orders Alphabetically (sort)\nFor warehouse efficiency, orders are sorted."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nsort() rearranges items alphabetically\nSorting happens\n**in-place**\nOutput:\n['Almond Milk', 'Butter', 'Eggs', 'Fruits', 'Oil', 'Rice']\n10. Clearing All Orders at End of Day (clear)\nAfter delivery, the system resets for the next day."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
      },
      {
        "type": "text",
        "content": "**How this works:**\nRemoves all elements\nList still exists but becomes empty\n**Output:**\n[]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C5.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C6.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C7.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C8.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C9.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C10.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q10.jpg"
    ]
  },
  {
    "id": "41",
    "question": "What is the value of passed?",
    "options": [
      "[35, 78, 92, 45, 60, 88, 49, 100]",
      "[78, 92, 60, 88, 100]",
      "(78, 92, 60, 88, 100)",
      "[50, 60, 88, 100]"
    ],
    "answer": "[78, 92, 60, 88, 100]",
    "context": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:\nThis list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed.\nThe expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100.\nmin(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally\nResult:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**\nResult:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg"
      },
      {
        "type": "text",
        "content": "This list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg"
      },
      {
        "type": "text",
        "content": "The expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg"
      },
      {
        "type": "text",
        "content": "min(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q11.jpg"
    ]
  },
  {
    "id": "42",
    "question": "What does bonus_marks contain?",
    "options": [
      "[83, 97, 65, 93, 105]",
      "[78, 92, 60, 88, 100]",
      "[83, 97, 65, 93, 100]",
      "(83, 97, 65, 93, 100)"
    ],
    "answer": "[83, 97, 65, 93, 100]",
    "context": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:\nThis list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed.\nThe expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100.\nmin(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally\nResult:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**\nResult:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg"
      },
      {
        "type": "text",
        "content": "This list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg"
      },
      {
        "type": "text",
        "content": "The expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg"
      },
      {
        "type": "text",
        "content": "min(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q12.jpg"
    ]
  },
  {
    "id": "43",
    "question": "What is the type of final_scores?",
    "options": [
      "List",
      "Set",
      "Dictionary",
      "Tuple"
    ],
    "answer": "Tuple",
    "context": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:\nThis list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed.\nThe expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100.\nmin(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally\nResult:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**\nResult:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg"
      },
      {
        "type": "text",
        "content": "This list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg"
      },
      {
        "type": "text",
        "content": "The expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg"
      },
      {
        "type": "text",
        "content": "min(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q13.jpg"
    ]
  },
  {
    "id": "44",
    "question": "What is the output of:",
    "options": [
      "(2, 97)",
      "(1, 97)",
      "(2, 65)",
      "65"
    ],
    "answer": "(2, 65)",
    "context": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:\nThis list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed.\nThe expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100.\nmin(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally\nResult:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**\nResult:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg"
      },
      {
        "type": "text",
        "content": "This list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg"
      },
      {
        "type": "text",
        "content": "The expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg"
      },
      {
        "type": "text",
        "content": "min(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q14.jpg"
    ]
  },
  {
    "id": "45",
    "question": "What happens if the following line is executed?",
    "options": [
      "The value updates successfully",
      "The tuple converts into a list",
      "A runtime error occurs",
      "Only the first element changes"
    ],
    "answer": "A runtime error occurs",
    "context": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:\nThis list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed.\nThe expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100.\nmin(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally\nResult:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**\nResult:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Student Performance Analyzer**\nRavi is a Teaching Assistant who is preparing a small Python utility to analyze student\nscores collected from a programming lab. The data comes in\n**raw lists**\n, but the final processed results must be\n**immutable**\n, so Ravi uses\n**tuples.**\n**Step 1: Raw Student Marks (List)**\nRavi starts with a list of marks obtained by students:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg"
      },
      {
        "type": "text",
        "content": "This list is\n**mutable**\n, meaning values can change.\nStep 2: Filtering Passed Students (List Comprehension)\nOnly students scoring\n**50 or more**\nare considered passed."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg"
      },
      {
        "type": "text",
        "content": "The expression m for m in marks generates values\nThe condition if m >= 50 filters values\nThe result is a\n**new list,**\nnot modifying the original\nResult:\npassed = [78, 92, 60, 88, 100]\nStep 3: Adding Bonus Marks (List Comprehension)\nEach passed student gets\n**5 bonus marks**\n, but the total should not exceed\n100."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg"
      },
      {
        "type": "text",
        "content": "min(m + 5, 100) ensures marks do not exceed 100\nThis still produces a\n**list**\nResult:\nbonus_marks = [83, 97, 65, 93, 100]\n**Step 4: Converting List to Tuple**\nRavi wants to freeze the final results so they cannot be changed\naccidentally"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nfinal_scores = (83, 97, 65, 93, 100)\nStep 5: Creating Score\u2013Index Pairs :\nRavi now wants to tag each score with its\n**index position.**"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
      },
      {
        "type": "text",
        "content": "Result:\nindexed_scores = [(0, 83), (1, 97), (2, 65), (3, 93), (4, 100)]\nEach element is a\n**tuple inside a list.**"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.2.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.3.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.4.jpg",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.5.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3C2.1.jpg",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W3Q15.jpg"
    ]
  }
];
