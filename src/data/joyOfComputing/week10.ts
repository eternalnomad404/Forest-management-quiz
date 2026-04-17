import { Question } from '../../types';

export const JOY_OF_COMPUTING_WEEK_10_QUESTIONS: Question[] = [
  {
    "id": "136",
    "question": "What is the\n**primary purpose**\nof the function remove_matching_letter?",
    "options": [
      "To count common letters between two names",
      "To remove only duplicate letters from the first list",
      "To remove the first matching character from both lists and signal continuation",
      "To concatenate both lists using *"
    ],
    "answer": "To remove the first matching character from both lists and signal continuation",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "137",
    "question": "Why does the function remove_matching_letter return immediately after removing\none matching character?",
    "options": [
      "To reduce time complexity",
      "To restart scanning with updated lists and\navoid an IndexError",
      "To avoid index errors only",
      "To preserve list order"
    ],
    "answer": "To restart scanning with updated lists and\navoid an IndexError",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "138",
    "question": "What does the proceed variable control in the while loop?",
    "options": [
      "Whether both names are non-empty",
      "Whether the result list has more than one element",
      "Whether a matching character was found in the previous iteration",
      "Whether user input is valid"
    ],
    "answer": "Whether a matching character was found in the previous iteration",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "139",
    "question": "Why are spaces removed and characters converted to lowercase before processing?",
    "options": [
      "To improve execution speed",
      "To prevent runtime errors",
      "To standardize input for fair character comparison",
      "To reduce memory usage"
    ],
    "answer": "To standardize input for fair character comparison",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "140",
    "question": "What does the value :\nrepresent in the program?",
    "options": [
      "The total number of unmatched characters remaining after elimination",
      "The total number of iterations executed",
      "The length of the longer name",
      "The number of matching characters removed"
    ],
    "answer": "The total number of unmatched characters remaining after elimination",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Q4.png"
    ]
  },
  {
    "id": "141",
    "question": "What is the purpose of the expression\nin the relationship elimination logic?",
    "options": [
      "To calculate the index at which the list should be rotated or reduced",
      "To sort the relationship list",
      "To randomly select a relationship",
      "To check whether the list length is even or odd"
    ],
    "answer": "To calculate the index at which the list should be rotated or reduced",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/q6-jan 2026.png"
    ]
  },
  {
    "id": "142",
    "question": "Why does the code handle the case when split_index < 0 separately?",
    "options": [
      "Because Python does not allow negative indices",
      "Because list slicing fails for negative numbers",
      "Because it indicates an invalid count value",
      "Because an index of -1 breaks the slicing\nlogic used for removal"
    ],
    "answer": "Because an index of -1 breaks the slicing\nlogic used for removal",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "143",
    "question": "What ensures that the relationship elimination continues until only one option\nremains?",
    "options": [
      "The for loop inside remove_matching_letter",
      "The condition if split_index >= 0",
      "The calculation of count",
      "The loop condition while len(new_result) > 1"
    ],
    "answer": "The loop condition while len(new_result) > 1",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "144",
    "question": "What would happen if the first return statement (inside the if condition) were\nremoved?",
    "options": [
      "The program would crash with an IndexError",
      "Only the first name would be processed",
      "Multiple matches would be removed in one iteration",
      "The program would raise a syntax error"
    ],
    "answer": "The program would crash with an IndexError",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "145",
    "question": "Which algorithmic pattern best describes the\n**relationship elimination phase**\nof the program?",
    "options": [
      "Divide and Conquer",
      "Greedy selection",
      "Backtracking",
      "Circular counting with iterative elimination"
    ],
    "answer": "Circular counting with iterative elimination",
    "context": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:\nUsing the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Relationship Prediction Using Character Elimination Logic\n**Background**\nA small social-logic application is designed to predict the\n**type of relationship**\nbetween two individuals based on their names. The program does not rely on\npredefined rules about people; instead, it uses a\n**character elimination strategy**\nfollowed by a\n**cyclic counting process**\nto arrive at a final outcome.\nThis kind of logic-based application is often used to help\nlearners understand:\nlist manipulation\nnested loops\nconditional branching\niterative elimination logic\nmodular arithmetic\nProblem Context\nThe system asks two users to enter their names. To ensure fairness\nand consistency:\nAll characters are converted to lowercase\nSpaces are removed\nEach name is converted into a list of characters\nThe program then compares both names character by character.\n**Core Logic Explained**\n1. Character Matching and Removal\nThe program scans both character lists.\nWhen a\nmatching character\nis found:\n- That character is removed from\n**both lists**\n- The process restarts immediately\nThis continues until\nno common characters remain\nThis step ensures only\nunmatched characters\ncontribute to the final calculation.\n2. Counting Remaining Characters\nAfter all matching letters are removed:\nThe total number of remaining characters is\ncalculated\nThis count becomes the key value used to\ndetermine the relationship\n3. Relationship Categories\nThe application uses a fixed list of\nrelationship outcomes:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
      },
      {
        "type": "text",
        "content": "Using the remaining character count:\nA circular elimination process is applied\nOne relationship is removed at each step\nThe list keeps shrinking until one final relationship remains\nThis mirrors a\n**Josephus-style elimination pattern**\n, commonly used in algorithmic problems."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g1a10.png"
  },
  {
    "id": "146",
    "question": "Assume a pixel at position (10, 20) in the original image has a grayscale value\nof\n**31**\n.\nWhat will be the value stored at the same position in pixelNew?",
    "options": [
      "0",
      "1",
      "2",
      "7"
    ],
    "answer": "0",
    "context": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
  },
  {
    "id": "147",
    "question": "What will be the quantized value for a pixel whose original grayscale intensity\nis\n**223**\n?",
    "options": [
      "6",
      "5",
      "7",
      "4"
    ],
    "answer": "6",
    "context": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
  },
  {
    "id": "148",
    "question": "Assuming the input is an RGB image, what happens without grayscale conversion?",
    "options": [
      "The output image would still be correct",
      "The image would automatically convert to grayscale",
      "The quantization ranges would adjust dynamically",
      "The code would fail because pixelMap would return tuples instead of single values"
    ],
    "answer": "The code would fail because pixelMap would return tuples instead of single values",
    "context": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
  },
  {
    "id": "149",
    "question": "Which change would\n**reduce execution time significantly**\nwhile keeping the output logically equivalent?",
    "options": [
      "Add more conditional checks",
      "Increase the number of intensity ranges",
      "Save the image in PNG instead of JPG",
      "Replace nested loops with NumPy vectorized operations"
    ],
    "answer": "Replace nested loops with NumPy vectorized operations",
    "context": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
  },
  {
    "id": "150",
    "question": "A Python program processes a grayscale image by examining each pixel value\n(ranging from 0 to 255). Based on fixed intensity intervals, the program assigns\n**one of a small set of integer values**\nto a new image. The transformed image is then saved and viewed using a standard\nimage viewer with\nno contrast stretching or enhancement applied\n.\nWhich option best describes the visual appearance of the output image and\nthe mathematical operation being performed on each pixel?",
    "options": [
      "The image appears nearly black with very low contrast.\nFormula:\nPixel_new = Pixel_old / 255",
      "The image preserves smooth gradients but with reduced brightness. Formula: Pixel_new = Pixel_old \u2212 32",
      "The image shows random speckle noise due to heavy quantization. Formula: Pixel_new = Pixel_old XOR 32",
      "The image appears nearly black.\nFormula: Pixel_new = floor(Pixel_old / 32)"
    ],
    "answer": "The image appears nearly black.\nFormula: Pixel_new = floor(Pixel_old / 32)",
    "context": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Grayscale Image Quantization Using Python (PIL & NumPy)\nBackground\nA small imaging startup is working on reducing the storage size of\ngrayscale images used in low-bandwidth applications such as remote sensing\ndashboards and embedded systems. The goal is\n**not**\nto compress images using standard formats, but to\n**reduce the number of intensity levels**\nwhile preserving the overall structure of the\nimage.\nAn intern is asked to prototype a\nmanual grayscale quantization algorithm\nusing Python so that the logic is transparent and easy to reason about\nfor learning and analysis.\n**Problem Statement**\nGiven an 8-bit grayscale image (pixel values ranging from 0 to 255),\nreduce the image to\n**8 discrete gray levels**\nby mapping ranges of pixel intensities to a smaller set of values.\nEach new pixel value should represent a\n**bucket**\nof intensities rather than the original fine-grained value.\n**Tools Used**\nPIL (Python Imaging Library):\nfor loading, converting, and saving images\n**NumPy:**\nfor converting the processed image into an array for\nfurther analysis\nStep-by-Step Explanation of the Approach\nStep 1: Load and Prepare the Image\nThe image is loaded from disk.\nIt is explicitly converted into\ngrayscale mode ('L')\n, ensuring each pixel has a single intensity\nvalue between 0 and 255.\nA pixel access object (pixelMap) is created to\nread pixel values.\nStep 2: Create a New Output Image\nA new grayscale image with the\nsame dimensions\nas the original is created.\nAnother pixel access object (pixelNew)\nis used to write the quantized pixel\nvalues.\nStep 3: Quantization Logic\nTwo nested loops traverse every\npixel (i, j) in the image.\nEach pixel value is checked against\npredefined intensity ranges.\nBased on the range it falls into,\nthe pixel is assigned a new value\nfrom\n0 to 7\n.\nOriginal Intensity Range New Value"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.2a10.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/g2.1a10.png"
  }
];
