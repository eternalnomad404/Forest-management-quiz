import { Question } from '../../types';

export const JOY_OF_COMPUTING_WEEK_7_QUESTIONS: Question[] = [
  {
    "id": "91",
    "question": "Arjun attempted to change an entry inside the Chronicle Scroll using:\nchronicle[1] = \"Secret Negotiation\"\nWhy did this action fail?",
    "options": [
      "Because tuples do not support indexing",
      "Because the element did not exist",
      "Because the Chronicle Scroll preserves order only",
      "Because the Chronicle Scroll is immutable"
    ],
    "answer": "Because the Chronicle Scroll is immutable",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "92",
    "question": "When Arjun created the Artifact Vault as:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhy did the final vault contain fewer items than expected?",
    "options": [
      "Because sets automatically sort items",
      "Because duplicate elements are ignored",
      "Because only strings are allowed",
      "Because indexing is not supported"
    ],
    "answer": "Because duplicate elements are ignored",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "93",
    "question": "Which operation was possible on the Artifact Vault but impossible on the\nChronicle Scroll?",
    "options": [
      "Accessing an element using index",
      "Preserving insertion order",
      "Modifying the container after creation",
      "Allowing duplicate values"
    ],
    "answer": "Modifying the container after creation",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "94",
    "question": "Arjun noticed that printing the Artifact Vault showed items in an unpredictable\norder. What caused this behavior?",
    "options": [
      "The vault was empty initially",
      "Python randomly shuffles set elements",
      "Sets do not maintain insertion order",
      "Duplicate elements change ordering"
    ],
    "answer": "Sets do not maintain insertion order",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "95",
    "question": "Which of the following would raise an error if attempted on the Chronicle\nScroll?",
    "options": [
      "Checking length",
      "Accessing an element",
      "Iterating through elements",
      "Updating an existing element"
    ],
    "answer": "Updating an existing element",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "96",
    "question": "Why was the Artifact Vault more suitable for tracking collected artifacts?",
    "options": [
      "It supports indexing",
      "It allows duplicates",
      "It guarantees uniqueness",
      "It preserves historical order"
    ],
    "answer": "It guarantees uniqueness",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "97",
    "question": "If Arjun needed to ensure that historical records could never be altered, which\nstructure was most appropriate?",
    "options": [
      "List",
      "Set",
      "Dictionary",
      "Tuple"
    ],
    "answer": "Tuple",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "98",
    "question": "Which statement about indexing is TRUE based on the case study?",
    "options": [
      "Both tuples and sets support indexing",
      "Only sets support indexing",
      "Only tuples support indexing",
      "Neither supports indexing"
    ],
    "answer": "Only tuples support indexing",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "99",
    "question": "Arjun removed an item from the Artifact Vault successfully. Why was this\noperation safe?",
    "options": [
      "Because sets allow modification",
      "Because tuples allow removal",
      "Because removal works only on strings",
      "Because indexing was used"
    ],
    "answer": "Because sets allow modification",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "100",
    "question": "Which inference correctly matches both records used by Arjun?",
    "options": [
      "Chronicle Scroll \u2192 unordered, mutable",
      "Artifact Vault \u2192 ordered, immutable",
      "Chronicle Scroll \u2192 ordered, immutable",
      "Artifact Vault \u2192 ordered, duplicate-allowed"
    ],
    "answer": "Chronicle Scroll \u2192 ordered, immutable",
    "context": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Case Study: Arjun and the Archivist\u2019s Rules\nArjun was an apprentice archivist in the\n**City of Timelines**\n, a place where knowledge was preserved under strict rules.\nEvery object stored in the archive followed a\n**data discipline**\n; nothing was random, and nothing was accidental.\nOne afternoon, the Chief Archivist handed Arjun two enchanted records.\n\u201cThese are not just containers,\u201d she said.\n\u201cThey decide\n**how information behaves**\n.\u201d\n\\rule[2pt]{400pt}{1pt}\nRecord One: The Chronicle Scroll\nThe first record was called the\n**Chronicle Scroll**\n.\n\u201cThis scroll preserves history\n**exactly as it is written**\n,\u201d said the Archivist.\n\u201cOnce sealed, its contents can never be altered.\u201d\nThe Archivist explained that the Chronicle Scroll works like a\n**Tuple**\n.\n**Chronicle Scroll = Tuple**\nArjun recorded the sequence of royal events:\nchronicle = (\"Coronation\", \"War Declared\", \"Peace Treaty\")\nHe reviewed the entries:\nprint(chronicle[1])\nOutput:\nWar Declared\nEncouraged, Arjun tried to revise history:\nchronicle[1] = \"Secret Negotiation\"\nThe archive rejected the change immediately.\n**What Arjun Observed**\nEvents stayed in the\n**same order**\nEach event had a\n**fixed position**\nOnce recorded, entries\n**could not be changed**\nThe scroll allowed\n**repeated events**\nif history demanded it\n**Inference:**\nTuples preserve order, are immutable, and can store duplicates.\nThey use\n**round brackets ()**\n.\n\\rule[2pt]{400pt}{1pt}\n**Record Two: The Artifact Vault**\nThe second record was called the\n**Artifact Vault**\n.\n\u201cThis vault only cares about\n**what exists**\n, not\n**how it is arranged**\n,\u201d said the Archivist.\n\u201cAnd it never keeps the same artifact twice.\u201d\nThe vault behaves like a\n**Set**\n.\n**Artifact Vault = Set**\nArjun logged collected artifacts:\nartifacts = {\"ring\", \"amulet\", \"ring\", \"scroll\"}\nWhen he checked the vault, he saw:\nprint(artifacts)\nOutput (order may vary):\n{'ring', 'amulet', 'scroll'}\nThe duplicate artifact had vanished.\n\\rule[2pt]{400pt}{1pt}\n**Managing the Artifact Vault**\nUnlike the Chronicle Scroll, the vault was flexible.\nArjun added a new artifact:\nartifacts.add(\"crystal\")\nLater, he removed one:\nartifacts.remove(\"ring\")\nThe vault updated instantly.\nWhat Arjun Observed\nOrder was\nunpredictable\nDuplicate artifacts were\nautomatically ignored\nItems could be\nadded or removed freely\nThe vault focused only on\nuniqueness\nInference:\nSets are unordered, mutable, and store only unique elements.\nThey use\n**curly brackets {}**\n."
      }
    ]
  },
  {
    "id": "101",
    "question": "Suppose the following change is made\nbefore writing to the file\n:\nWhat would be the\nfirst issue\nencountered in the program?",
    "options": [
      "The file will store incorrect duration",
      "A runtime error will occur due to tuple immutability",
      "The dictionary enrollments will update automatically",
      "The list students will change size"
    ],
    "answer": "A runtime error will occur due to tuple immutability",
    "context": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples.\nStep 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students.\nStep 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple\nStep 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers\nLater updates:\n**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file.\nStep 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png"
      },
      {
        "type": "text",
        "content": "Step 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png"
      },
      {
        "type": "text",
        "content": "Step 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png"
      },
      {
        "type": "text",
        "content": "Step 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png"
      },
      {
        "type": "text",
        "content": "Later updates:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png"
      },
      {
        "type": "text",
        "content": "**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png"
      },
      {
        "type": "text",
        "content": "Step 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q11.png"
    ]
  },
  {
    "id": "102",
    "question": "Consider this code is added\n**after reading from the file**\n:\nWhich statement is TRUE?",
    "options": [
      "A file write error occurs",
      "The file content changes automatically",
      "The new record is saved permanently in enrollments.txt",
      "Only the in-memory list is modified"
    ],
    "answer": "Only the in-memory list is modified",
    "context": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples.\nStep 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students.\nStep 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple\nStep 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers\nLater updates:\n**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file.\nStep 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png"
      },
      {
        "type": "text",
        "content": "Step 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png"
      },
      {
        "type": "text",
        "content": "Step 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png"
      },
      {
        "type": "text",
        "content": "Step 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png"
      },
      {
        "type": "text",
        "content": "Later updates:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png"
      },
      {
        "type": "text",
        "content": "**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png"
      },
      {
        "type": "text",
        "content": "Step 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q12.png"
    ]
  },
  {
    "id": "103",
    "question": "Assume this code is executed:\nWhich statement best explains what happens?",
    "options": [
      "Both operations fail",
      "Both operations succeed",
      "Attendance succeeds, enrollment fails",
      "Enrollment succeeds, attendance fails"
    ],
    "answer": "Both operations succeed",
    "context": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples.\nStep 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students.\nStep 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple\nStep 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers\nLater updates:\n**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file.\nStep 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png"
      },
      {
        "type": "text",
        "content": "Step 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png"
      },
      {
        "type": "text",
        "content": "Step 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png"
      },
      {
        "type": "text",
        "content": "Step 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png"
      },
      {
        "type": "text",
        "content": "Later updates:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png"
      },
      {
        "type": "text",
        "content": "**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png"
      },
      {
        "type": "text",
        "content": "Step 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q13.png"
    ]
  },
  {
    "id": "104",
    "question": "If Meera repla\nces this line:\nwith:\nWhat is the correct outcome?",
    "options": [
      "The student is added successfully",
      "A runtime error occurs due to unsupported operation",
      "The tuple expands automatically",
      "The enrollment file updates"
    ],
    "answer": "A runtime error occurs due to unsupported operation",
    "context": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples.\nStep 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students.\nStep 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple\nStep 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers\nLater updates:\n**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file.\nStep 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png"
      },
      {
        "type": "text",
        "content": "Step 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png"
      },
      {
        "type": "text",
        "content": "Step 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png"
      },
      {
        "type": "text",
        "content": "Step 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png"
      },
      {
        "type": "text",
        "content": "Later updates:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png"
      },
      {
        "type": "text",
        "content": "**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png"
      },
      {
        "type": "text",
        "content": "Step 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
    "questionImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q14_1.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q14_2.png"
    ]
  },
  {
    "id": "105",
    "question": "Which design choice in the case study\n**most directly protects course data from accidental modification**\n?",
    "options": [
      "Using formatted strings while writing files",
      "Using lists for attendance tracking",
      "Reading files using readlines()",
      "Storing course details as tuples inside dictionaries"
    ],
    "answer": "Storing course details as tuples inside dictionaries",
    "context": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples.\nStep 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students.\nStep 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple\nStep 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers\nLater updates:\n**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file.\nStep 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data.",
    "contextBlocks": [
      {
        "type": "text",
        "content": "Meera and the Community Learning Center\nMeera volunteered at a\n**community learning center**\nthat offered short-term courses such as Python Basics, Data Analysis, and Web Development.\nThe center faced a recurring problem every month:\nStudent registrations came from different sources\nCourse details were fixed once announced\nAttendance had to be tracked per student\nRecords needed to be stored permanently for audits\nMeera was asked to build a\n**simple data system in Python**\nthat could manage all this information reliably.\n\\rule[2pt]{400pt}{1pt}\nStep 1: Fixed Course Information (Tuples)\nAt the start of the month, course details were finalized and\n**never changed afterward**\n.\nEach course had:\nCourse ID\nCourse Name\nDuration (weeks)\nMeera stored this data as\ntuples."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png"
      },
      {
        "type": "text",
        "content": "Step 2: Managing Student Registrations (Lists)\nStudent registrations arrived\n**daily**\n, and new names had to be added continuously.\nMeera maintained a list of registered students."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png"
      },
      {
        "type": "text",
        "content": "Step 3: Mapping Students to Courses (Dictionary)\nEach student enrolled in\n**one course only**\n, and Meera needed a clear mapping.\nShe used a\n**dictionary**\nwhere:\nKey \u2192 Student name\nValue \u2192 Course tuple"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png"
      },
      {
        "type": "text",
        "content": "Step 4: Tracking Attendance per Student (Dictionary + List)\nAttendance changed every day, so Meera needed a\n**mutable structure**\n.\nShe decided:\nEach student would have a list of attended session numbers"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png"
      },
      {
        "type": "text",
        "content": "Later updates:"
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png"
      },
      {
        "type": "text",
        "content": "**Step 5: Saving Records to a File (File Handling)**\nAt the end of the week, Meera needed to\nstore enrollment data permanently\n.\nShe wrote student-course mappings to a file."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png"
      },
      {
        "type": "text",
        "content": "Step 6: Reading Stored Records Later\nDuring an audit, Meera retrieved the saved data."
      },
      {
        "type": "image",
        "url": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
      }
    ],
    "contextImageUrls": [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q16.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q17.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q18.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q19.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q20.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q21.png"
    ],
    "imageUrl": "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc26_cs84/New folder/Q15.png"
  }
];
