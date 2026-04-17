import { Question } from '../../types';

export const JOY_OF_COMPUTING_WEEK_8_QUESTIONS: Question[] = [
  {
    "id": "106",
    "question": "What does the variable bet represent in the simulation?",
    "options": [
      "The amount of money invested each day",
      "The randomly generated lucky number",
      "The fixed number chosen by the user for the entire month",
      "The number of days the simulation runs"
    ],
    "answer": "The fixed number chosen by the user for the entire month",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "107",
    "question": "How many times is the lottery game simulated in the program?",
    "options": [
      "10",
      "30",
      "Until the user wins",
      "Depends on the bet value"
    ],
    "answer": "30",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "108",
    "question": "What happens to the account balance when the bet does NOT match the lucky draw?",
    "options": [
      "It remains unchanged",
      "It increases by 100",
      "It decreases by 900",
      "It decreases by 100"
    ],
    "answer": "It decreases by 100",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "109",
    "question": "Which Python library is responsible for generating randomness in the simulation?",
    "options": [
      "matplotlib",
      "random",
      "pyplot",
      "math"
    ],
    "answer": "random",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "110",
    "question": "What do the lists x and y store respectively?",
    "options": [
      "Account balances and days",
      "Bets and lucky numbers",
      "Days and account balances",
      "Wins and losses"
    ],
    "answer": "Days and account balances",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "111",
    "question": "If the user never wins even once during the 30 days, what will be the final\naccount balance?",
    "options": [
      "\u22123000",
      "\u2212900",
      "\u2212100",
      "0"
    ],
    "answer": "\u22123000",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "112",
    "question": "What is the probability of winning on any single day?",
    "options": [
      "1/30",
      "1/100",
      "1/10",
      "Depends on previous days"
    ],
    "answer": "1/10",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "113",
    "question": "Why does the account balance graph typically show long downward trends with\noccasional sharp upward jumps?",
    "options": [
      "Because the bet value changes daily",
      "Because losses are frequent and wins are rare but large",
      "Because matplotlib smooths the curve",
      "Because account balance is averaged"
    ],
    "answer": "Because losses are frequent and wins are rare but large",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "114",
    "question": "Which change would make the simulation more statistically reliable without\nchanging the game rules?",
    "options": [
      "Increasing the win amount",
      "Running the simulation for more days",
      "Changing the bet every day",
      "Removing the plot"
    ],
    "answer": "Running the simulation for more days",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "115",
    "question": "Despite a high winning reward (\u20b9900), why does the simulation still tend to show\nlosses over time?",
    "options": [
      "Because the plotting scale is incorrect",
      "Because the probability of winning is too low compared to the loss frequency",
      "Because Python integers overflow",
      "Because the account starts at zero"
    ],
    "answer": "Because the probability of winning is too low compared to the loss frequency",
    "context": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "A Month of Chance\u2014Simulating a Lottery Strategy\n**Background**\nRavi, a college student interested in probability and data analysis, wants to understand whether\nplaying a simple lottery-style game every day can be profitable in the long run. Instead of relying\non intuition or anecdotes, he decides to\n**simulate the experience using Python**\n.\nRavi chooses a very straightforward strategy:\nEvery day, he selects\n**one fixed number between 1 and 10**\nas his bet.\nA system randomly draws a number between 1 and 10.\nIf his chosen number matches the draw, he earns a large reward.\nIf it doesn\u2019t, he incurs a small loss.\nHe repeats this experiment\n**once per day for 30 days**\n, representing a month of consistent participation.\n\\rule[2pt]{400pt}{1pt}\nObjective of the Study\nThe purpose of this case study is to:\nObserve how\n**randomness**\naffects outcomes over time\nTrack\n**profit and loss trends**\ninstead of isolated wins\nVisually analyze whether consistency in betting leads to gains or losses\nRather than focusing on a single lucky or unlucky day, Ravi wants to see the\n**overall trajectory**\nof his account balance.\n\\rule[2pt]{400pt}{1pt}\nExperimental Setup\nRavi starts with an account balance of\n\u20b90\nHe plays the game\nonce per day for 30 days\nEach day\u2019s result updates his account balance\nThe balance is recorded daily to study trends over time\nTo make the results more intuitive, Ravi plots:\n**Days (1\u201330)**\non the x-axis\n**Account balance**\non the y-axis\nThis allows him to clearly see fluctuations, streaks of loss, occasional jumps, and the final\noutcome.\n\\rule[2pt]{400pt}{1pt}\nGiven Code for Analysis\nStudents are provided with the following Python code and are expected to analyze its behavior,\noutput, and implications based on the case study above:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G1.png"
  },
  {
    "id": "116",
    "question": "What will the function return for s = \"egg\" and t = \"add\"?",
    "options": [
      "True",
      "False",
      "Depends on dictionary insertion order",
      "Raises an error"
    ],
    "answer": "True",
    "context": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
  },
  {
    "id": "117",
    "question": "What is the first condition that can cause the function to return False?",
    "options": [
      "Duplicate characters in s",
      "Conflicting mappings in dictionaries",
      "Repeated characters at adjacent positions",
      "Length mismatch between the two strings"
    ],
    "answer": "Length mismatch between the two strings",
    "context": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
  },
  {
    "id": "118",
    "question": "What will the function return for s = \"ab\" and t = \"cc\"?",
    "options": [
      "False",
      "True",
      "Only the forward mapping fails",
      "Depends on loop iteration"
    ],
    "answer": "False",
    "context": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
  },
  {
    "id": "119",
    "question": "Why is the condition checking\n**both**\ns_map and t_map necessary?",
    "options": [
      "To reduce memory usage",
      "To avoid nested loops",
      "To speed up execution",
      "To enforce a one-to-one and reversible character mapping"
    ],
    "answer": "To enforce a one-to-one and reversible character mapping",
    "context": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
  },
  {
    "id": "120",
    "question": "Which of the following best describes what the algorithm is verifying?",
    "options": [
      "Structural equivalence between two strings",
      "Lexicographical ordering",
      "Equality of character frequencies",
      "Whether both strings are permutations"
    ],
    "answer": "Structural equivalence between two strings",
    "context": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Detecting Pattern Consistency Between Two Strings\n**Background**\nA software team working on a\n**text pattern\u2013matching system**\nneeds to verify whether two given strings follow the\n**same structural pattern**\n. This requirement arises in areas such as:\nData normalization\nSearch indexing\nLanguage processing\nPattern validation in user input\nThe focus is\n**not**\non object-oriented design, but purely on\n**string processing and logical consistency**\n.\n\\rule[2pt]{400pt}{1pt}\nProblem Scenario\nTwo strings are given:\nString\n**S**\nrepresents an original pattern\nString\n**T**\nrepresents a transformed version\nThe task is to determine whether:\nEach character in\n**S**\nconsistently maps to\n**one unique character**\nin\n**T**\nThe mapping is\n**one-to-one and reversible**\nThe relative structure of both strings remains identical\nFor example:\n\"egg\" and \"add\" follow the same pattern\n\"foo\" and \"bar\" do not\n\\rule[2pt]{400pt}{1pt}\nConstraints of the Study\nBoth strings must be of\n**equal length**\nA character cannot map to\n**multiple different characters**\nTwo different characters cannot map to the\n**same character**\nThe comparison is performed\n**position by position**\nLearners are given the following code to analyze and answer questions based on the case study:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W8G2.png"
  }
];
