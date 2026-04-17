import { Question } from '../../types';

export const JOY_OF_COMPUTING_WEEK_11_QUESTIONS: Question[] = [
  {
    "id": "151",
    "question": "Why is WebDriverWait preferred over using a fixed time.sleep() before locating the chat element?",
    "options": [
      "It waits only until the required element becomes available, making the script more reliable",
      "It reduces CPU usage of the Python program",
      "It prevents WhatsApp from detecting automation",
      "It speeds up QR code scanning"
    ],
    "answer": "It waits only until the required element becomes available, making the script more reliable",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "152",
    "question": "What is the main limitation of using the contact\u2019s**name**in the XPath selector?",
    "options": [
      "It works only for group chats",
      "It may fail if multiple contacts share similar names",
      "It cannot locate encrypted chats",
      "It increases page load time"
    ],
    "answer": "It may fail if multiple contacts share similar names",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "153",
    "question": "Why does the script require**manual QR code scanning**instead of automating login?",
    "options": [
      "Selenium does not support camera access",
      "WhatsApp Web blocks JavaScript execution",
      "Authentication is tied to a real user session for security",
      "ChromeDriver cannot load HTTPS websites"
    ],
    "answer": "Authentication is tied to a real user session for security",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "154",
    "question": "What would most likely happen if the delay between messages (time.sleep(1)) were removed?",
    "options": [
      "Messages would not be sent at all",
      "The browser would crash immediately",
      "Selenium would raise a syntax error",
      "The script could trigger UI failures or platform restrictions"
    ],
    "answer": "The script could trigger UI failures or platform restrictions",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "155",
    "question": "Which Selenium feature is primarily responsible for simulating a**real user pressing Enter**?",
    "options": [
      "Keys.RETURN",
      "By.CLASS_NAME",
      "driver.get()",
      "WebDriverWait"
    ],
    "answer": "Keys.RETURN",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "156",
    "question": "Why is automation of messaging platforms considered ethically sensitive?",
    "options": [
      "It consumes more internet bandwidth",
      "It can lead to misuse such as spamming or harassment",
      "It requires paid browser drivers",
      "It increases system memory usage"
    ],
    "answer": "It can lead to misuse such as spamming or harassment",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "157",
    "question": "Which design choice makes this script**platform-dependent**?",
    "options": [
      "Use of Python language",
      "Reliance on internet connectivity",
      "Dependence on WhatsApp Web\u2019s DOM structure",
      "Use of loops for repetition"
    ],
    "answer": "Dependence on WhatsApp Web\u2019s DOM structure",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "158",
    "question": "Why is driver.quit() preferred over simply closing the browser window manually?",
    "options": [
      "It saves execution time",
      "It sends logout signals to WhatsApp",
      "It keeps the session active for reuse",
      "It properly terminates the WebDriver and releases system resources"
    ],
    "answer": "It properly terminates the WebDriver and releases system resources",
    "context": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Automating Message Dispatch on WhatsApp Web Using Selenium**\n**Background**\nWeb automation tools are often used to reduce repetitive manual tasks. One common example is interacting with web-based messaging platforms to send reminders, notifications, or test message workflows. WhatsApp Web, being a browser-based interface, can be automated using Selenium to simulate real user actions such as clicking, typing, and pressing keys.\nThis case study examines a Python-based Selenium script that automates sending multiple messages to a specific contact on WhatsApp Web.\n**Objective**The goal of the script is to:\nOpen WhatsApp Web in a browser\nAllow the user to authenticate manually via QR code\nSearch for a specific contact by name\nOpen the chat window of that contact\nSend the same message multiple times at fixed intervals\nClose the browser session after completion\n**Tools and Technologies Used**\nPython\nSelenium WebDriver\nGoogle Chrome Browser\nChromeDriver\nWhatsApp Web\n**Workflow Explanation**\n**1. Browser Initialization**The script begins by initializing the Chrome WebDriver. This enables Python to control the Chrome browser programmatically.\nKey idea: The WebDriver acts as a bridge between Python commands and browser actions.\n**2. Loading WhatsApp Web**The browser navigates to the WhatsApp Web URL. Since WhatsApp requires authentication, the script pauses implicitly while the user scans the QR code using their mobile WhatsApp application.\nImportant observation: Automation does not bypass authentication. Human intervention is required at this step.\n**3. Identifying the Target Chat**The script defines:\nA contact name\nA message string\nIt then constructs an XPath expression that locates a chat whose title attribute contains the contact\u2019s name. WebDriverWait is used to ensure the element is loaded before interaction\nConcepts involved:\nXPath-based element selection\nExplicit waits to handle dynamic content\n**4. Opening the Chat**Once the contact element is located, a click action opens the chat window.\nThis simulates a real user selecting a chat from the chat list.\n**5. Locating the Message Input Box**The script finds the message input field using its class name. This element is where text messages are typed.\nThis step relies on understanding the DOM structure of WhatsApp Web.\n**6. Sending Messages in a Loop**A loop sends the same message multiple times:\nThe message text is typed\nThe Enter key is pressed to send\nA delay is added between messages\nWhy the delay matters:\nPrevents rapid-fire actions\nReduces the risk of detection or UI failure\nMimics human behavior\n**7. Closing the Session**\nAfter sending all messages, the browser is closed gracefully using the quit method.\nThis ensures system resources are released properly."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11C-1.jpg"
  },
  {
    "id": "159",
    "question": "The system computes the gap between semester_start and mid_exam using:\nWhat does gap.days logically represent?",
    "options": [
      "The number of calendar days between the two academic events",
      "The number of weekdays between the two dates",
      "The number of lecture days excluding holidays",
      "The number of months between the two dates"
    ],
    "answer": "The number of calendar days between the two academic events",
    "context": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in.\nThis timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**.\nEach of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam.\nThis value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:\nThese values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:\n**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**.\nThis helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year.\nThis check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:\nThis ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:\nThis value is later filtered to exclude weekends and holidays.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
      },
      {
        "type": "text",
        "content": "This timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png"
      },
      {
        "type": "text",
        "content": "Each of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png"
      },
      {
        "type": "text",
        "content": "This value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png"
      },
      {
        "type": "text",
        "content": "These values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png"
      },
      {
        "type": "text",
        "content": "**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png"
      },
      {
        "type": "text",
        "content": "This helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png"
      },
      {
        "type": "text",
        "content": "This check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png"
      },
      {
        "type": "text",
        "content": "This ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
      },
      {
        "type": "text",
        "content": "This value is later filtered to exclude weekends and holidays."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/W11Q9.jpg"
    ]
  },
  {
    "id": "160",
    "question": "If semester_start is created as:\nWhich of the following attributes is**NOT directly available**from this object?",
    "options": [
      "semester_start.year",
      "semester_start.hour",
      "semester_start.month",
      "semester_start.day"
    ],
    "answer": "semester_start.hour",
    "context": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in.\nThis timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**.\nEach of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam.\nThis value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:\nThese values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:\n**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**.\nThis helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year.\nThis check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:\nThis ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:\nThis value is later filtered to exclude weekends and holidays.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
      },
      {
        "type": "text",
        "content": "This timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png"
      },
      {
        "type": "text",
        "content": "Each of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png"
      },
      {
        "type": "text",
        "content": "This value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png"
      },
      {
        "type": "text",
        "content": "These values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png"
      },
      {
        "type": "text",
        "content": "**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png"
      },
      {
        "type": "text",
        "content": "This helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png"
      },
      {
        "type": "text",
        "content": "This check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png"
      },
      {
        "type": "text",
        "content": "This ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
      },
      {
        "type": "text",
        "content": "This value is later filtered to exclude weekends and holidays."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w11q10.jpg"
    ]
  },
  {
    "id": "161",
    "question": "The following code is used to format a date for notices:\nWhich part of the output is produced specifically by %A?",
    "options": [
      "Numeric day of the month",
      "Full name of the month",
      "Full name of the weekday",
      "Four-digit year"
    ],
    "answer": "Full name of the weekday",
    "context": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in.\nThis timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**.\nEach of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam.\nThis value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:\nThese values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:\n**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**.\nThis helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year.\nThis check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:\nThis ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:\nThis value is later filtered to exclude weekends and holidays.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
      },
      {
        "type": "text",
        "content": "This timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png"
      },
      {
        "type": "text",
        "content": "Each of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png"
      },
      {
        "type": "text",
        "content": "This value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png"
      },
      {
        "type": "text",
        "content": "These values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png"
      },
      {
        "type": "text",
        "content": "**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png"
      },
      {
        "type": "text",
        "content": "This helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png"
      },
      {
        "type": "text",
        "content": "This check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png"
      },
      {
        "type": "text",
        "content": "This ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
      },
      {
        "type": "text",
        "content": "This value is later filtered to exclude weekends and holidays."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w11q11.jpg"
    ]
  },
  {
    "id": "162",
    "question": "Why does the system check the following condition?",
    "options": [
      "To determine whether weekends change in 2024",
      "To confirm February has 29 days in that year",
      "To find how many weekdays exist in 2024",
      "To calculate the total number of academic days"
    ],
    "answer": "To confirm February has 29 days in that year",
    "context": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in.\nThis timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**.\nEach of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam.\nThis value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:\nThese values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:\n**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**.\nThis helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year.\nThis check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:\nThis ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:\nThis value is later filtered to exclude weekends and holidays.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
      },
      {
        "type": "text",
        "content": "This timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png"
      },
      {
        "type": "text",
        "content": "Each of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png"
      },
      {
        "type": "text",
        "content": "This value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png"
      },
      {
        "type": "text",
        "content": "These values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png"
      },
      {
        "type": "text",
        "content": "**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png"
      },
      {
        "type": "text",
        "content": "This helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png"
      },
      {
        "type": "text",
        "content": "This check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png"
      },
      {
        "type": "text",
        "content": "This ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
      },
      {
        "type": "text",
        "content": "This value is later filtered to exclude weekends and holidays."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w11q12.jpg"
    ]
  },
  {
    "id": "163",
    "question": "The system determines the exam weekday using:\nWhy is this a two-step process?",
    "options": [
      "calendar.weekday() returns a string index",
      "calendar.weekday() returns a month name",
      "calendar.weekday() returns an integer mapped to a weekday",
      "calendar.day_name only works for leap years"
    ],
    "answer": "calendar.weekday() returns an integer mapped to a weekday",
    "context": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in.\nThis timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**.\nEach of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam.\nThis value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:\nThese values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:\n**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**.\nThis helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year.\nThis check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:\nThis ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:\nThis value is later filtered to exclude weekends and holidays.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
      },
      {
        "type": "text",
        "content": "This timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png"
      },
      {
        "type": "text",
        "content": "Each of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png"
      },
      {
        "type": "text",
        "content": "This value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png"
      },
      {
        "type": "text",
        "content": "These values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png"
      },
      {
        "type": "text",
        "content": "**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png"
      },
      {
        "type": "text",
        "content": "This helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png"
      },
      {
        "type": "text",
        "content": "This check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png"
      },
      {
        "type": "text",
        "content": "This ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
      },
      {
        "type": "text",
        "content": "This value is later filtered to exclude weekends and holidays."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w11q13.jpg"
    ]
  },
  {
    "id": "164",
    "question": "Consider the code:\nWhat does the index [1] specifically retrieve?",
    "options": [
      "The weekday of the first day of August",
      "The number of Sundays in August",
      "The total number of days in August",
      "The number of weekdays in August"
    ],
    "answer": "The total number of days in August",
    "context": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in.\nThis timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**.\nEach of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam.\nThis value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:\nThese values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:\n**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**.\nThis helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year.\nThis check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:\nThis ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:\nThis value is later filtered to exclude weekends and holidays.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
      },
      {
        "type": "text",
        "content": "This timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png"
      },
      {
        "type": "text",
        "content": "Each of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png"
      },
      {
        "type": "text",
        "content": "This value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png"
      },
      {
        "type": "text",
        "content": "These values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png"
      },
      {
        "type": "text",
        "content": "**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png"
      },
      {
        "type": "text",
        "content": "This helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png"
      },
      {
        "type": "text",
        "content": "This check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png"
      },
      {
        "type": "text",
        "content": "This ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
      },
      {
        "type": "text",
        "content": "This value is later filtered to exclude weekends and holidays."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/w11q14.jpg"
    ]
  },
  {
    "id": "165",
    "question": "Why is datetime.datetime.now() used instead of datetime.date.today() for login tracking?",
    "options": [
      "date.today() is slower",
      "Login tracking requires both date and time",
      "datetime.date cannot be stored in logs",
      "datetime.now() works only on servers"
    ],
    "answer": "Login tracking requires both date and time",
    "context": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in.\nThis timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**.\nEach of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam.\nThis value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:\nThese values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:\n**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**.\nThis helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year.\nThis check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:\nThis ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:\nThis value is later filtered to exclude weekends and holidays.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "**Case Study: Automated Academic Schedule Analyzer**Background**A university administration system needs to**analyze academic**schedules**for a semester. The system should be able to:\nTrack important academic dates (semester start, exams, holidays)\nDetermine weekdays for given dates\nIdentify leap years (important for February schedules)\nGenerate monthly calendars for planning purposes\nCompute gaps between important academic events\nTo implement this functionality, the developers decide to use Python\u2019s built-in**datetime**and**calendar**modules.**Part 1: Working with Dates and Time (datetime Module)**The system begins by capturing the**current date**and time**when the administrator logs in."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
      },
      {
        "type": "text",
        "content": "This timestamp is later used for logging administrative actions.\nCreating Fixed Academic Dates**The semester officially starts on**August 5, 2025**, and the mid-semester exam is scheduled for**October 12, 2025**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png"
      },
      {
        "type": "text",
        "content": "Each of these objects stores only the date, not the time.**Calculating Duration Between Events**The system calculates how many days students have between the semester start and the mid-semester exam."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png"
      },
      {
        "type": "text",
        "content": "This value is later used to ensure syllabus coverage is realistic.**Extracting Date Components**For reporting purposes, individual components of a date are extracted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png"
      },
      {
        "type": "text",
        "content": "These values are stored separately in the database.**Formatting Dates for Reports**To generate human-readable academic notices, dates are formatted:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png"
      },
      {
        "type": "text",
        "content": "**Part 2: Academic Calendar Analysis (calendar Module)**To assist with planning lectures and exams, the system generates a**monthly calendar**."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png"
      },
      {
        "type": "text",
        "content": "This helps administrators visualize holidays and weekends.\n**Checking Leap Year Constraints**Since February schedules depend on leap years, the system verifies whether**2024**is a leap year."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png"
      },
      {
        "type": "text",
        "content": "This check prevents incorrect date assumptions during scheduling.**Identifying Weekdays for Exams**The day of the week for the mid-semester exam is computed:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png"
      },
      {
        "type": "text",
        "content": "This ensures exams are not accidentally scheduled on weekends.**Counting Days in a Month**To calculate the total number of lecture days in a month:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
      },
      {
        "type": "text",
        "content": "This value is later filtered to exclude weekends and holidays."
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.2.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.4.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.5.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.6.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.7.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.8.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/a11g2.png"
  }
];
