import { Question } from '../../types';

export const JOY_OF_COMPUTING_WEEK_4_QUESTIONS: Question[] = [
  {
    "id": "46",
    "question": "What is the\nmaximum\nnumber of unique symbols that can be safely used by this program without causing\na runtime error?",
    "options": [
      "26",
      "Unlimited",
      "10",
      "52"
    ],
    "answer": "52",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "47",
    "question": "Which statement about pos1 and pos2 is logically correct?",
    "options": [
      "They may or may not be equal",
      "They are always different",
      "They are fixed once generated",
      "They cannot be equal"
    ],
    "answer": "They may or may not be equal",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "48",
    "question": "Why is same_symbol removed from the symbol list immediately after selection?",
    "options": [
      "To improve randomness",
      "To reduce memory usage",
      "To ensure it appears exactly once on each card",
      "To simplify the loop condition"
    ],
    "answer": "To ensure it appears exactly once on each card",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "49",
    "question": "What problem does the condition if pos1 == pos2 prevent?",
    "options": [
      "Index out-of-range error",
      "Logical conflict in symbol placement",
      "Infinite looping",
      "Input mismatch"
    ],
    "answer": "Logical conflict in symbol placement",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "50",
    "question": "When pos1 \u2260 pos2, how many times does the while loop assign symbols?",
    "options": [
      "5",
      "2",
      "4",
      "3"
    ],
    "answer": "3",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "51",
    "question": "What is the most serious consequence if symbols are\n**not removed**\ninside the loop?",
    "options": [
      "Cards become sorted automatically",
      "Multiple common symbols may appear",
      "Loop runs indefinitely",
      "Cards become identical"
    ],
    "answer": "Multiple common symbols may appear",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "52",
    "question": "Which player input would be marked incorrect even if the symbol looks correct?",
    "options": [
      "Input entered quickly",
      "Input with correct spacing",
      "Lowercase input for an uppercase symbol",
      "Input after a delay"
    ],
    "answer": "Lowercase input for an uppercase symbol",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "53",
    "question": "Which statement is guaranteed true every time the program runs?",
    "options": [
      "Symbols appear in alphabetical order",
      "Both cards are mirror images",
      "Cards share no symbols",
      "Cards share exactly one symbol"
    ],
    "answer": "Cards share exactly one symbol",
    "context": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Building a Mini Dobble Game Using Python\nIn this activity, a learner designs a simplified version of the popular\nDobble\ngame using Python. The goal of the game is simple:\n**two cards are generated such that exactly one symbol is common between them**\n, and the player must correctly identify that common symbol.\n**Step 1: Preparing the Symbol Set**\nThe game begins by importing two built-in Python modules:\nstring \u2192 used to access alphabets easily\nrandom \u2192 used to generate randomness in the game\nUsing string.ascii_letters, a list of symbols is created that contains:\nlowercase letters (a\u2013z)\nuppercase letters (A\u2013Z)\nThis list becomes the\n**symbol pool**\nfrom which all card symbols are drawn.\nOnce a symbol is used, it is removed from the pool to prevent duplication.\n**Step 2: Deciding Positions on Cards**\nEach card contains\n**5 positions**\n, indexed from 0 to 4.\nTwo random positions are generated:\npos1 \u2192 where the common symbol will appear on\n**Card 1**\npos2 \u2192 where the common symbol will appear on\n**Card 2**\nThese positions are chosen randomly, which ensures that the common symbol does not\nalways appear in the same place.\nStep 3: Selecting the Common Symbol\nOne symbol is randomly selected from the symbol pool to act as the\n**common symbol**\nshared by both cards.\nImmediately after selecting it, the symbol is\n**removed from the pool**\n, ensuring:\nit cannot accidentally appear again\nuniqueness across the rest of the cards\nThis guarantees the key rule of Dobble:\n**only one symbol matches.**\n**Step 4: Creating the Cards**\nTwo lists are created:\ncard1\ncard2\nEach list has\n**5 empty slots**\n, initialized with ZERO.\nThese lists represent the two cards shown to the player.\n**Step 5: Handling Common and Non-Common Positions**\nIf pos1 and pos2 are the same, the common symbol is placed at that index in both\ncards\nIf they are different:\nThe common symbol is placed at pos1 in Card 1\nThe same symbol is placed at pos2 in Card 2\nTwo\n**different symbols**\nare placed in the swapped positions to avoid accidental matching\nThis logic ensures that:\nonly one symbol is shared\nall other symbols differ across cards\n**Step 6: Filling Remaining Positions Using a Loop**\nA while loop runs from index 0 to 4.\nFor every index\n**except**\npos1 and pos2:\none new symbol is picked for Card 1\na different new symbol is picked for Card 2\nboth symbols are removed from the pool\nThis systematic filling ensures:\nno empty positions remain\nno duplicate symbols exist\nonly one common symbol survives\n**Step 7: Player Interaction**\nThe player is prompted with:\nSpot the common symbol:\nThe input is stored in a variable and represents the player\u2019s guess.\nThis step introduces\n**human interaction**\ninto the program, converting logic into a playable game.\n**Step 8: Validating the Answer**\nThe program compares:\nthe player\u2019s input\nthe actual common symbol\nIf they match \u2192 \"Right!\" is displayed\nOtherwise \u2192 \"Wrong!\" is displayed\nThis final comparison closes the game loop and gives instant feedback."
      }
    ]
  },
  {
    "id": "54",
    "question": "What will be printed?",
    "options": [
      "[10, 20, 30]",
      "[10, 20, 30, 40]",
      "Error",
      "[40]"
    ],
    "answer": "[10, 20, 30, 40]",
    "context": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks.\nRavi thinks backup is a separate list.\nNow he modifies backup:\n**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method.\nThis time, Ravi updates an inner list:\n**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation\nOutput :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n.\nHe modifies the nested list:\n**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png"
      },
      {
        "type": "text",
        "content": "Ravi thinks backup is a separate list.\nNow he modifies backup:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png"
      },
      {
        "type": "text",
        "content": "**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png"
      },
      {
        "type": "text",
        "content": "This time, Ravi updates an inner list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png"
      },
      {
        "type": "text",
        "content": "Output :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png"
      },
      {
        "type": "text",
        "content": "He modifies the nested list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/9.png"
    ]
  },
  {
    "id": "55",
    "question": "Choose the correct output.",
    "options": [
      "[1, 99, 3]",
      "[99, 2, 3]",
      "[1, 2, 3]",
      "Error"
    ],
    "answer": "[1, 2, 3]",
    "context": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks.\nRavi thinks backup is a separate list.\nNow he modifies backup:\n**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method.\nThis time, Ravi updates an inner list:\n**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation\nOutput :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n.\nHe modifies the nested list:\n**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png"
      },
      {
        "type": "text",
        "content": "Ravi thinks backup is a separate list.\nNow he modifies backup:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png"
      },
      {
        "type": "text",
        "content": "**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png"
      },
      {
        "type": "text",
        "content": "This time, Ravi updates an inner list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png"
      },
      {
        "type": "text",
        "content": "Output :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png"
      },
      {
        "type": "text",
        "content": "He modifies the nested list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/images/10.png"
    ]
  },
  {
    "id": "56",
    "question": "What is printed?",
    "options": [
      "Error",
      "[[1, 2], [3, 4]]",
      "[[1, 2], [3, 99]]",
      "[[1, 99], [3, 4]]"
    ],
    "answer": "[[1, 99], [3, 4]]",
    "context": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks.\nRavi thinks backup is a separate list.\nNow he modifies backup:\n**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method.\nThis time, Ravi updates an inner list:\n**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation\nOutput :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n.\nHe modifies the nested list:\n**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png"
      },
      {
        "type": "text",
        "content": "Ravi thinks backup is a separate list.\nNow he modifies backup:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png"
      },
      {
        "type": "text",
        "content": "**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png"
      },
      {
        "type": "text",
        "content": "This time, Ravi updates an inner list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png"
      },
      {
        "type": "text",
        "content": "Output :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png"
      },
      {
        "type": "text",
        "content": "He modifies the nested list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/images/11.png"
    ]
  },
  {
    "id": "57",
    "question": "Predict the output.",
    "options": [
      "Error",
      "[[5, 6], [7, 8]]",
      "[[5, 6], [0, 0]]",
      "[[0, 0], [7, 8]]"
    ],
    "answer": "[[5, 6], [7, 8]]",
    "context": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks.\nRavi thinks backup is a separate list.\nNow he modifies backup:\n**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method.\nThis time, Ravi updates an inner list:\n**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation\nOutput :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n.\nHe modifies the nested list:\n**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png"
      },
      {
        "type": "text",
        "content": "Ravi thinks backup is a separate list.\nNow he modifies backup:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png"
      },
      {
        "type": "text",
        "content": "**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png"
      },
      {
        "type": "text",
        "content": "This time, Ravi updates an inner list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png"
      },
      {
        "type": "text",
        "content": "Output :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png"
      },
      {
        "type": "text",
        "content": "He modifies the nested list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/images/12.png"
    ]
  },
  {
    "id": "58",
    "question": "Select the correct output.",
    "options": [
      "[[5, 6], [7, 8]]",
      "Error",
      "[[100, 6], [7, 8]]",
      "[[5, 6], [100, 8]]"
    ],
    "answer": "[[5, 6], [100, 8]]",
    "context": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks.\nRavi thinks backup is a separate list.\nNow he modifies backup:\n**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method.\nThis time, Ravi updates an inner list:\n**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation\nOutput :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n.\nHe modifies the nested list:\n**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png"
      },
      {
        "type": "text",
        "content": "Ravi thinks backup is a separate list.\nNow he modifies backup:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png"
      },
      {
        "type": "text",
        "content": "**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png"
      },
      {
        "type": "text",
        "content": "This time, Ravi updates an inner list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png"
      },
      {
        "type": "text",
        "content": "Output :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png"
      },
      {
        "type": "text",
        "content": "He modifies the nested list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/images/13.png"
    ]
  },
  {
    "id": "59",
    "question": "Select the correct output.",
    "options": [
      "[[9, 2], [3, 4]]",
      "Error",
      "[[1, 2], [3, 4]]",
      "[[1, 9], [3, 4]]"
    ],
    "answer": "[[1, 2], [3, 4]]",
    "context": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks.\nRavi thinks backup is a separate list.\nNow he modifies backup:\n**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method.\nThis time, Ravi updates an inner list:\n**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation\nOutput :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n.\nHe modifies the nested list:\n**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png"
      },
      {
        "type": "text",
        "content": "Ravi thinks backup is a separate list.\nNow he modifies backup:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png"
      },
      {
        "type": "text",
        "content": "**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png"
      },
      {
        "type": "text",
        "content": "This time, Ravi updates an inner list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png"
      },
      {
        "type": "text",
        "content": "Output :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png"
      },
      {
        "type": "text",
        "content": "He modifies the nested list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/images/14.png"
    ]
  },
  {
    "id": "60",
    "question": "What is the final output?",
    "options": [
      "[[10, 30], [3, 20]]",
      "[[10, 2], [3, 4]]",
      "[[1, 2], [3, 4]]",
      "[[10, 2], [3, 20]]"
    ],
    "answer": "[[10, 2], [3, 20]]",
    "context": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks.\nRavi thinks backup is a separate list.\nNow he modifies backup:\n**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method.\nThis time, Ravi updates an inner list:\n**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation\nOutput :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n.\nHe modifies the nested list:\n**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]",
    "contextBlocks": [
      {
        "type": "text",
        "content": "When One List Becomes Many (But Isn\u2019t)\nContext\nRavi is maintaining student records in Python. Each record is stored as a\n**list**\n, and sometimes a list even contains\n**another list**\n(nested list). Ravi assumes that assigning one list to another creates a\nnew copy\n. What actually happens surprises him.\nThis case study walks through Ravi\u2019s understanding\n**step by step**\n.\n**Part 1: List Assignment \u2014 No Copy at All**\nRavi starts with a list of marks."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png"
      },
      {
        "type": "text",
        "content": "Ravi thinks backup is a separate list.\nNow he modifies backup:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png"
      },
      {
        "type": "text",
        "content": "**What Actually Happens**\nmarks and backup\n**refer to the same list**\nNo new list is created\nAny change through one name affects the other\nOutput\n[100, 80, 90]\n[100, 80, 90]\n**Key Insight:**\nList assignment copies the\n**reference**\n, not the data.\nPart 2: Shallow Copy \u2014 New List, Same Inner Objects\nRavi now learns about the copy() method."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png"
      },
      {
        "type": "text",
        "content": "This time, Ravi updates an inner list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nmarks and backup are\n**different outer lists**\nBUT the\n**inner lists are shared**\nModifying a nested list affects both\n**Output :**\n[[100, 80], [90, 95]]\n[[100, 80], [90, 95]]\n**Key Insight:**\nShallow copy copies the\n**outer list only**\n, not nested lists.\nShallow Copy with Slice Notation"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png"
      },
      {
        "type": "text",
        "content": "Output :\n[[1, 2], [3, 99]]\n[[1, 2], [3, 99]]\n**Deep Copy \u2014 Complete Independence**\nRavi now wants a\n**fully independent copy**\n."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png"
      },
      {
        "type": "text",
        "content": "He modifies the nested list:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
      },
      {
        "type": "text",
        "content": "**What Happens Now**\nOuter list is copied\nInner lists are copied\nChanges do\n**not**\naffect the original\nOutput:\n[[70, 80], [90, 95]]\n[[100, 80], [90, 95]]"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/Images/7.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/1.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/images/15.png"
    ]
  }
];
