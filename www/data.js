/* Zayed Prep: all content lives here. Edit this file to change checklists, tips, resources and cheat sheets.
   IDs are built from section id + group index + item index, so add new items at the END of a group
   to keep everyone's saved progress lined up. */

window.WEIGHT = [
  ["Aptitude", 5, 3], ["DSA", 3, 5], ["DBMS / OS / CN / OOP", 4, 4], ["Foundations / tools", 4, 4],
  ["Projects", 4, 5], ["Communication", 4, 4], ["System design", 2, 3], ["Software engineering", 3, 3], ["Cloud & AI", 3, 4]
];

/* Phases are placed relative to the placement month each student sets (months before it). */
window.PHASES = [
  { title: "Foundations", from: -9, to: -8,
    items: ["Lock one language, finish Coding 100 sections 1–4", "Aptitude: 1 quant + 1 reasoning topic a week", "Git & GitHub set up, first repo pushed", "OOP revised, self-intro written"] },
  { title: "Core + DSA", from: -7, to: -5,
    items: ["DSA patterns: linear → trees", "DBMS + SQL, OS, CN", "Project 1 built and deployed", "Finish Coding 100"] },
  { title: "Depth & new tech", from: -4, to: -2,
    items: ["Projects 2 & 3 (AI + cloud)", "Graphs, DP, system design basics", "Hackathon / internship", "Resume v1 + LinkedIn, GD practice"] },
  { title: "Placement mode", from: -1, to: 0,
    items: ["Daily timed aptitude mocks", "Company-wise previous papers", "Mock interviews (technical + HR)", "Revise cheat sheets daily"] }
];

window.SECTIONS = [
 { id: "aptitude", name: "Aptitude", short: "Quant, reasoning, verbal",
   intro: "Service companies weigh this very high. Most first rounds cut on aptitude before anyone reads your code.",
   tips: ["30–45 minutes daily beats a weekend binge.", "Learn shortcuts for percentages, ratios and time & work; they save minutes per question.", "Skip a question after 90 seconds and come back. Negative marking is rare, time is not.", "Keep a mistakes notebook and re-solve it every Sunday."],
   resources: [["IndiaBix", "https://www.indiabix.com", "Topic-wise questions with solutions"], ["PrepInsta", "https://prepinsta.com", "Company-wise papers and patterns"], ["GeeksforGeeks Aptitude", "https://www.geeksforgeeks.org/aptitude-questions-and-answers/", "Concepts plus practice"], ["Feel Free to Learn (YouTube)", "https://www.youtube.com/@FeelFreetoLearn", "Quant shortcut videos"]],
   groups: [
    { name: "Quantitative", items: ["Number system, divisibility, remainders", "HCF & LCM word problems", "Percentages", "Profit, loss & discount", "Simple & compound interest", "Ratio, proportion & partnership", "Averages & mixtures/alligation", "Time & work, pipes & cisterns", "Time, speed & distance (trains, boats)", "Permutations & combinations", "Probability", "Ages, clocks & calendars", "Mensuration (areas, volumes)", "Data interpretation (tables, bar, pie)"] },
    { name: "Logical reasoning", items: ["Number & letter series", "Coding–decoding", "Blood relations", "Direction sense", "Seating arrangement (linear & circular)", "Puzzles (scheduling, grids)", "Syllogisms", "Statements & assumptions/conclusions", "Data sufficiency", "Visual / non-verbal reasoning"] },
    { name: "Verbal", items: ["Reading comprehension (1 passage/day)", "Sentence correction & error spotting", "Fill in the blanks, vocabulary", "Para jumbles", "Synonyms & antonyms", "Email / essay writing (TCS, Accenture style)"] },
    { name: "Practice milestones", items: ["Finish one topic-wise question bank", "10 full-length timed mock tests", "TCS NQT previous papers", "Infosys / Wipro / Cognizant / Accenture pattern papers", "Solve 20 quant questions in 25 minutes"] }
   ] },
 { id: "coding", name: "Coding 100", short: "Service-company OA programs", numbered: true,
   intro: "The 100 programs that keep showing up in service-company online assessments. Tick one only when you can rewrite it from memory.",
   tips: ["Write every program yourself in your main language. Watching a solution is not solving it.", "Test edge cases: 0, 1, negatives, empty string, very large input.", "Learn fast input/output for your language; some tests have large inputs.", "Do 3–4 a day and you finish all 100 in about a month."],
   resources: [["GeeksforGeeks basic programs", "https://www.geeksforgeeks.org/c-programming-examples/", "Solutions in C, C++, Java, Python"], ["HackerRank", "https://www.hackerrank.com", "Practice in an online-test style editor"], ["CodeChef Practice", "https://www.codechef.com/practice", "Beginner problems by difficulty"], ["Programiz", "https://www.programiz.com", "Clear examples for absolute basics"]],
   groups: [
    { name: "Number & math", items: ["Reverse a number", "Check if a number is a palindrome", "Check if a number is prime", "Check if a number is an Armstrong number", "Print the Fibonacci series up to N terms", "Factorial of a number (iterative)", "GCD / HCF of two numbers", "LCM of two numbers", "Decimal to binary", "Binary to decimal", "Sum of digits of a number", "Count the digits in a number", "Check for a leap year", "Swap two numbers without a third variable", "Check for a perfect number", "Check for a strong number", "Check for an automorphic number", "Sum of series (1+…+N, 1²+…+N²)", "Trailing zeroes in N!", "Power of a number without pow()"] },
    { name: "Pattern printing", items: ["Right-angled triangle star pattern", "Inverted right-angled triangle", "Pyramid pattern", "Inverted pyramid pattern", "Diamond pattern", "Floyd's triangle", "Pascal's triangle", "Hollow square / rectangle", "Hollow diamond", "Zigzag pattern", "Butterfly pattern", "Alphabet pattern (A, AB, ABC…)", "Number pyramid (1 / 22 / 333)", "Palindromic number pattern", "Spiral number pattern in a grid"] },
    { name: "Strings", items: ["Reverse a string without built-ins", "Check if a string is a palindrome", "Count vowels and consonants", "Remove duplicate characters", "Check if two strings are anagrams", "Frequency of each character", "First non-repeating character", "Toggle the case of each character", "Check if strings are rotations of each other", "Remove all spaces", "Find duplicate words in a sentence", "Count words in a sentence", "Sort the characters of a string", "Longest word in a sentence", "Custom string-to-integer (atoi)", "Reverse the words in a string", "Longest common prefix", "Check if two strings are isomorphic", "Implement strStr()", "Replace vowels with a given character"] },
    { name: "Arrays", items: ["Max and min element", "Second largest without sorting", "Missing number in 1..N", "Detect duplicate elements", "Reverse an array", "Rotate an array by K", "Maximum subarray sum (Kadane's)", "Move all zeros to the end", "Two-Sum", "Merge two sorted arrays", "Frequency of each element", "Sort 0s, 1s and 2s (Dutch flag)", "Remove duplicates from a sorted array", "Container with most water", "Majority element", "Equilibrium index", "Intersection of two arrays", "Union of two arrays", "Check if an array is sorted", "Pair with a given difference"] },
    { name: "Linked list, stack & queue", items: ["Reverse a linked list", "Detect a cycle in a linked list", "Merge two sorted linked lists", "Check if a linked list is a palindrome", "Remove Nth node from the end", "Intersection point of two linked lists", "Add two numbers as linked lists", "Balanced parentheses with a stack", "Next greater element with a stack", "Evaluate a postfix expression"] },
    { name: "Searching & sorting", items: ["Binary search", "Bubble sort", "Selection sort", "Insertion sort", "Merge sort", "Quick sort", "Square root using binary search", "Search in a rotated sorted array", "Find a peak element", "Basic calculator with switch-case"] },
    { name: "Logic building", items: ["Check if a matrix is symmetric", "Transpose of a matrix", "Number of islands (BFS/DFS)", "Opening & closing gates (bracket variant)", "First non-repeating element in an array"] }
   ] },
 { id: "dsa", name: "DSA", short: "Patterns for product companies",
   intro: "Product companies and GCCs weigh DSA very high. Learn it by pattern, not by random questions.",
   tips: ["Follow one sheet start to finish. Switching sheets every week is the most common way to waste months.", "Stuck for 30 minutes? Read the hint or approach, then code it yourself without looking.", "Revisit solved problems after 3 days and after 2 weeks.", "Say the brute force first in interviews, then improve it. Interviewers want to hear the thinking."],
   resources: [["Striver's A2Z DSA Sheet", "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2", "Structured sheet with free videos"], ["NeetCode 150", "https://neetcode.io/practice", "Pattern-wise list with video solutions"], ["LeetCode", "https://leetcode.com", "Main practice platform"], ["Abdul Bari (YouTube)", "https://www.youtube.com/@abdul_bari", "Algorithms explained clearly"], ["VisuAlgo", "https://visualgo.net", "Animations of data structures"]],
   groups: [
    { name: "Basics", items: ["Time & space complexity, Big-O of common loops", "Recursion (base case, call stack, recursion tree)", "Bit manipulation basics", "Hashing: HashMap / HashSet usage & internals"] },
    { name: "Linear patterns", items: ["Two pointers", "Sliding window (fixed & variable)", "Prefix sums", "Binary search on answer", "Stack: monotonic stack", "Queue / deque problems", "Linked list: fast & slow pointers", "Intervals: merge & insert"] },
    { name: "Trees & graphs", items: ["Binary tree traversals (recursive + iterative)", "Level order / BFS on trees", "Binary search tree operations", "Lowest common ancestor", "Heaps / priority queue (top-K)", "Graph BFS & DFS", "Topological sort", "Dijkstra's shortest path", "Union-Find (disjoint set)", "Tries"] },
    { name: "Advanced", items: ["Backtracking (subsets, permutations, N-Queens)", "Greedy", "1-D dynamic programming", "2-D DP (grid, LCS, knapsack)", "DP on strings"] },
    { name: "Milestones", items: ["150 problems solved", "250 problems solved", "Solve a medium in under 30 minutes", "Attempt 8 LeetCode/CodeChef contests", "Explain your approach aloud before coding (mock)"] }
   ] },
 { id: "core", name: "Core CS", short: "DBMS, OS, CN, OOP",
   intro: "High for both service and product companies. These come up in technical interviews right after the online test.",
   tips: ["Aim to explain each topic in 2–3 sentences with a real example.", "SQL queries are asked in almost every interview. Practise writing them, not just reading.", "Use the Cheat sheets tab for quick revision the night before.", "Connect topics to your projects: \"I used indexing on the email column because…\""],
   resources: [["Gate Smashers (YouTube)", "https://www.youtube.com/@GateSmashers", "DBMS, OS, CN in Hindi/English"], ["Neso Academy (YouTube)", "https://www.youtube.com/@nesoacademy", "OS and networks in depth"], ["SQLBolt", "https://sqlbolt.com", "Interactive SQL lessons"], ["LeetCode SQL 50", "https://leetcode.com/studyplan/top-sql-50/", "The SQL questions interviews reuse"], ["GeeksforGeeks CS subjects", "https://www.geeksforgeeks.org/dbms/", "Articles for every subtopic"]],
   groups: [
    { name: "DBMS", items: ["ER model & keys (primary, foreign, candidate)", "Normalization: 1NF, 2NF, 3NF, BCNF", "SQL: joins (inner, left, right, self)", "SQL: GROUP BY, HAVING, subqueries", "SQL: 2nd highest salary, duplicates, Nth record", "Transactions & ACID", "Indexing (B-tree, clustered vs non-clustered)", "Concurrency control & locks", "SQL vs NoSQL"] },
    { name: "Operating systems", items: ["Process vs thread", "CPU scheduling (FCFS, SJF, RR, priority)", "Synchronization: mutex, semaphore", "Critical section & race conditions", "Deadlock: conditions, prevention, banker's", "Paging & segmentation", "Virtual memory & page replacement", "Context switching"] },
    { name: "Computer networks", items: ["OSI vs TCP/IP layers", "TCP vs UDP", "3-way handshake", "HTTP vs HTTPS, status codes", "What happens when you type a URL", "DNS, DHCP", "IP addressing & subnetting", "Routers, switches, hubs"] },
    { name: "OOP", items: ["Four pillars with real examples", "Class vs object, constructors", "Overloading vs overriding", "Abstract class vs interface", "Access modifiers", "static, final, this, super", "Exception handling", "SOLID principles (basics)"] }
   ] },
 { id: "tools", name: "Foundations", short: "Language, Git, Linux, APIs",
   intro: "Foundations and tools are high for everyone. Freshers who can use Git, the terminal and a debugger stand out.",
   tips: ["Pick one main language and go deep before adding others.", "Commit something to GitHub every day you code. A green contribution graph is visible proof of work.", "Use the debugger instead of print statements at least once a week until it feels natural.", "Get the free GitHub Student Developer Pack with your college email."],
   resources: [["Learn Git Branching", "https://learngitbranching.js.org", "Visual, interactive Git practice"], ["Linux Journey", "https://linuxjourney.com", "Terminal basics step by step"], ["freeCodeCamp", "https://www.freecodecamp.org", "Free web development curriculum"], ["The Odin Project", "https://www.theodinproject.com", "Full-stack path with projects"], ["MDN Web Docs", "https://developer.mozilla.org", "Reference for HTML, CSS, JS"], ["GitHub Student Developer Pack", "https://education.github.com/pack", "Free tools and cloud credits"]],
   groups: [
    { name: "One language, properly", items: ["Pick one: Java, Python or C++ (and stick to it)", "Syntax, control flow, functions without looking up", "Collections / STL / built-ins (list, map, set)", "String handling & I/O for online tests", "Debugging with breakpoints in VS Code / IntelliJ"] },
    { name: "Git & GitHub", items: ["init, add, commit, push, pull", "Branches & merging, resolving a conflict", "Pull requests on a friend's repo", "Clean README on every repo", "Pinned repos + profile README"] },
    { name: "Linux & terminal", items: ["Navigation: ls, cd, pwd, mkdir, rm, cp, mv", "Files: cat, grep, find, chmod", "Processes: ps, top, kill", "SSH into a server"] },
    { name: "Web & APIs", items: ["How REST APIs work (methods, JSON, status codes)", "Test APIs with Postman / curl", "HTML, CSS, basic JavaScript", "One backend framework (Spring Boot / Express / Django / FastAPI)", "Connect an app to MySQL or PostgreSQL"] }
   ] },
 { id: "projects", name: "Projects", short: "Three deployed projects",
   intro: "High for service, very high for product companies. Two or three solid, deployed projects beat ten tutorial clones.",
   tips: ["Every project needs a live link. Recruiters rarely clone repos.", "Be ready to answer: why this database, what broke, what you'd change.", "Build something a real person uses: your hostel, a club, a relative's shop.", "Free hosting: Vercel, Netlify or GitHub Pages for frontends; Render for backends."],
   resources: [["roadmap.sh project ideas", "https://roadmap.sh/projects", "Graded project ideas by skill"], ["Vercel", "https://vercel.com", "Free frontend hosting"], ["Netlify", "https://www.netlify.com", "Free static hosting"], ["Render", "https://render.com", "Free backend and database tier"], ["Supabase", "https://supabase.com", "Free Postgres + auth"], ["Devpost hackathons", "https://devpost.com/hackathons", "Online hackathons"]],
   groups: [
    { name: "Project 1 · Full-stack CRUD app", note: "e.g. college event portal, expense tracker, library system", items: ["Pick the idea & write a one-page plan", "Login / signup with authentication", "Database with 3+ related tables", "Deployed with a live link", "README with screenshots & setup steps"] },
    { name: "Project 2 · Solves a real problem", note: "something a hostel, club, shop or relative actually uses", items: ["Talk to 3 real users before building", "REST API + frontend", "Input validation & error handling", "A few unit tests", "Deployed + shared with users, feedback noted"] },
    { name: "Project 3 · New tech (AI / cloud)", note: "e.g. a chatbot over college notes, resume analyzer", items: ["Uses an LLM API or ML model meaningfully", "Dockerized", "CI pipeline with GitHub Actions", "Deployed on AWS / Azure / GCP / Render", "Short demo video on LinkedIn"] },
    { name: "Extra signal", items: ["One hackathon (SIH, college or online)", "One open-source contribution (even docs)", "Internship or freelance work (summer before final year)", "Can answer: hardest bug, trade-offs, scaling"] }
   ] },
 { id: "soft", name: "Communication", short: "Speaking, GD, writing",
   intro: "Many good coders lose offers in the HR and GD rounds. Accenture, Capgemini and Cognizant test communication directly.",
   tips: ["Speak English for 10 minutes a day, even alone. Record it and listen back once a week.", "In a GD, the first and last speakers are remembered. Open with a clear point or close with a summary.", "Use the STAR method for experience questions: Situation, Task, Action, Result.", "Slow down. Clear and calm beats fast and fluent."],
   resources: [["BBC Learning English", "https://www.bbc.co.uk/learningenglish", "Free grammar, vocab and speaking"], ["Speak English Professionally (Coursera)", "https://www.coursera.org/learn/speak-english-professionally", "Free to audit"], ["TED Talks", "https://www.ted.com/talks", "Listen, then summarise aloud"], ["Grammarly (free)", "https://www.grammarly.com", "Check emails and resume text"], ["The Hindu / Indian Express editorials", "https://www.thehindu.com/opinion/editorial/", "Current topics for GDs"]],
   groups: [
    { name: "Speaking", items: ["Self-introduction in 60 seconds, memorised and natural", "Explain each project in 2 minutes", "10 minutes of English speaking daily for 30 days", "Record and review yourself once a week", "Explain one technical topic to a non-tech person"] },
    { name: "Group discussion", items: ["Learn GD structure: open, add points, summarise", "Practise 5 GDs with friends on current topics", "Make a points list for 10 common GD topics", "Practise disagreeing politely", "Practise summarising a discussion in 30 seconds"] },
    { name: "Writing", items: ["Write a professional email (subject, greeting, ask, sign-off)", "Practise the email-writing test format (TCS / Accenture)", "Write one LinkedIn post about a project", "Write a 200-word essay in 15 minutes"] },
    { name: "Interview presence", items: ["Body language: eye contact, posture, no fidgeting", "Video interview setup: camera at eye level, light, quiet room", "Test internet, mic and headphones before every online round", "Formal outfit ready for in-person drives", "STAR answers for 5 common situations"] }
   ] },
 { id: "design", name: "Design & SE", short: "System design, SDLC, testing",
   intro: "System design is low–medium for freshers, software engineering is medium. Knowing the vocabulary is a strong signal.",
   tips: ["Nobody expects a fresher to design Netflix. Explain how a request flows through your own project.", "For low-level design, start with classes and their relationships before methods.", "Know one SDLC model well enough to say how your college project followed it."],
   resources: [["System Design Primer", "https://github.com/donnemartin/system-design-primer", "Free, widely used guide"], ["ByteByteGo (YouTube)", "https://www.youtube.com/@ByteByteGo", "Short system design explainers"], ["Gaurav Sen (YouTube)", "https://www.youtube.com/@gkcs", "System design basics"], ["Refactoring Guru", "https://refactoring.guru/design-patterns", "Design patterns with examples"]],
   groups: [
    { name: "System design basics", items: ["Client–server, how a web request flows", "Load balancer", "Caching (Redis, CDN)", "Database scaling: replication, sharding", "Monolith vs microservices", "CAP theorem (one-line version)", "Design a URL shortener", "Design a parking lot (low-level / OOP)"] },
    { name: "Software engineering", items: ["SDLC models: waterfall, agile", "Scrum: sprints, stand-ups, user stories", "Testing: unit, integration, system, UAT", "Black-box vs white-box testing", "Design patterns: singleton, factory, observer", "Version control workflow in a team"] }
   ] },
 { id: "cloud", name: "Cloud & AI", short: "Cloud basics, Docker, AI",
   intro: "The new-tech grip recruiters ask about. One cloud fundamentals certificate plus one AI-powered project is enough to talk confidently.",
   tips: ["Use free tiers and set a billing alert on day one so you never get charged.", "Learning paths are free; only the certification exam costs money. The course alone still counts on a resume as \"completed\".", "For AI, show that you built with it (an API call, a small RAG app), not just that you used ChatGPT.", "Check the Cheat sheets tab for one-line definitions."],
   resources: [["AWS Skill Builder", "https://skillbuilder.aws", "Free Cloud Practitioner Essentials course"], ["Microsoft Learn AZ-900", "https://learn.microsoft.com/en-us/training/courses/az-900t00", "Free Azure fundamentals path"], ["Docker Get Started", "https://docs.docker.com/get-started/", "Official beginner guide"], ["Google ML Crash Course", "https://developers.google.com/machine-learning/crash-course", "Free ML fundamentals"], ["Kaggle Learn", "https://www.kaggle.com/learn", "Short Python, Pandas, ML courses"], ["DeepLearning.AI short courses", "https://www.deeplearning.ai/short-courses/", "Free 1–2 hour LLM courses"]],
   groups: [
    { name: "Cloud & DevOps", items: ["Cloud basics: IaaS, PaaS, SaaS, regions", "Core AWS/Azure services: compute, storage, DB", "Deploy an app on a VM (EC2 / Azure VM)", "Docker: images, containers, Dockerfile", "CI/CD with GitHub Actions", "Optional cert: AWS Cloud Practitioner or AZ-900"] },
    { name: "AI & ML", items: ["ML basics: supervised vs unsupervised, overfitting", "Python: NumPy, Pandas basics", "How LLMs work at a high level (tokens, context)", "Call an LLM API from your own code", "Prompting: clear instructions, examples, structured output", "RAG: embeddings + vector search", "Use AI coding tools well, and know when they're wrong"] }
   ] },
 { id: "interview", name: "Interview", short: "Resume, HR, mocks",
   intro: "The last mile. Start the resume now and keep updating it; begin mock interviews three months before placements.",
   tips: ["One page only. Projects with links go above hobbies.", "Every line on your resume is a question you can be asked. Remove anything you can't explain.", "Read 5 interview experiences for each target company before the drive.", "Keep CGPA safe: many companies cut off at 6.0–7.0 with no active backlogs."],
   resources: [["Jake's Resume (Overleaf)", "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs", "Clean one-page template"], ["GfG interview experiences", "https://www.geeksforgeeks.org/company-interview-corner/", "Company-wise question reports"], ["AmbitionBox", "https://www.ambitionbox.com", "Interview reviews from Indian companies"], ["InterviewBit", "https://www.interviewbit.com", "Free interview prep tracks"]],
   groups: [
    { name: "Profile", items: ["One-page resume (projects first, with links)", "LinkedIn: photo, headline, projects, skills", "GitHub profile cleaned up", "Coding profile: LeetCode / CodeChef / HackerRank", "Resume reviewed by a senior or placement cell"] },
    { name: "HR round", items: ["Tell me about yourself (60 seconds)", "Strengths & weaknesses with examples", "Why this company? (research each one)", "Where do you see yourself in 5 years?", "Willing to relocate / shifts / bond questions", "Questions to ask the interviewer"] },
    { name: "Mock & company prep", items: ["3 mock technical interviews with friends / seniors", "2 mock HR interviews", "One mock with someone you don't know", "Company-wise previous questions for top 5 targets", "Know every line on your own resume"] }
   ] }
];

/* Cheat sheets: [term, explanation] */
window.CHEATS = [
 { id: "dbms", name: "DBMS & SQL", rows: [
  ["Primary key", "Uniquely identifies each row; cannot be NULL. A table has one."],
  ["Foreign key", "A column that refers to another table's primary key; enforces relationships."],
  ["Candidate / super key", "Candidate: minimal set of columns that can be a primary key. Super key: any set that uniquely identifies rows."],
  ["1NF", "Every column holds atomic (single) values; no repeating groups."],
  ["2NF", "1NF + no partial dependency: non-key columns depend on the whole composite key."],
  ["3NF", "2NF + no transitive dependency: non-key columns depend only on the key."],
  ["BCNF", "For every dependency X → Y, X must be a super key. Stricter 3NF."],
  ["ACID", "Atomicity (all or nothing), Consistency (valid state), Isolation (transactions don't interfere), Durability (committed data survives crashes)."],
  ["Index", "A B-tree style lookup structure that speeds reads but slows writes. Clustered = sorts the table itself (one per table); non-clustered = separate structure."],
  ["DELETE vs TRUNCATE vs DROP", "DELETE removes rows (can filter, can roll back). TRUNCATE removes all rows fast. DROP removes the table itself."],
  ["WHERE vs HAVING", "WHERE filters rows before grouping; HAVING filters groups after GROUP BY."],
  ["INNER vs LEFT JOIN", "INNER keeps only matching rows. LEFT keeps every row from the left table, with NULLs where no match."],
  ["2nd highest salary", "SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp);"],
  ["Nth highest salary", "SELECT DISTINCT salary FROM emp ORDER BY salary DESC LIMIT 1 OFFSET N-1;"],
  ["Find duplicates", "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;"],
  ["SQL vs NoSQL", "SQL: fixed schema, tables, joins, strong consistency. NoSQL: flexible schema (document, key-value, graph), scales horizontally."]
 ] },
 { id: "os", name: "Operating systems", rows: [
  ["Process vs thread", "A process is a running program with its own memory. Threads are lighter units inside a process that share its memory."],
  ["Context switch", "Saving one process's state and loading another's so the CPU can switch between them. Pure overhead."],
  ["FCFS / SJF / Round Robin", "FCFS: first come first served. SJF: shortest job next (minimum average wait). RR: each process gets a fixed time slice in turn."],
  ["Race condition", "Output depends on the timing of threads accessing shared data. Fixed with synchronization."],
  ["Mutex vs semaphore", "Mutex: a lock only one thread holds, released by its owner. Semaphore: a counter that allows N threads; any thread can signal."],
  ["Deadlock conditions", "Mutual exclusion, hold and wait, no preemption, circular wait. All four must hold; break one to prevent it."],
  ["Banker's algorithm", "Deadlock avoidance: grant a request only if the system stays in a safe state."],
  ["Paging", "Memory split into fixed-size pages and frames; removes external fragmentation."],
  ["Segmentation", "Memory split into variable-size logical segments (code, stack, heap)."],
  ["Virtual memory", "Lets programs use more memory than physical RAM by keeping some pages on disk."],
  ["Page fault", "The requested page isn't in RAM, so the OS loads it from disk."],
  ["Thrashing", "The system spends more time swapping pages than running work."],
  ["Page replacement", "FIFO, LRU (least recently used), Optimal (replace the page used farthest in the future)."]
 ] },
 { id: "cn", name: "Computer networks", rows: [
  ["OSI layers", "Physical, Data link, Network, Transport, Session, Presentation, Application. Mnemonic: Please Do Not Throw Sausage Pizza Away."],
  ["TCP/IP model", "Link, Internet, Transport, Application."],
  ["TCP vs UDP", "TCP: connection-based, reliable, ordered (web, email). UDP: connectionless, fast, no guarantee (video calls, games, DNS)."],
  ["3-way handshake", "SYN → SYN-ACK → ACK. Sets up a TCP connection."],
  ["HTTP vs HTTPS", "HTTPS is HTTP encrypted with TLS, on port 443 instead of 80."],
  ["Status codes", "2xx success (200 OK, 201 Created), 3xx redirect, 4xx client error (400, 401, 403, 404), 5xx server error (500, 503)."],
  ["DNS", "Translates a domain name like google.com into an IP address."],
  ["DHCP", "Automatically gives a device an IP address when it joins a network."],
  ["Typing a URL", "DNS lookup → TCP connection → TLS handshake → HTTP request → server responds → browser renders HTML, CSS, JS."],
  ["IPv4 vs IPv6", "IPv4: 32-bit (e.g. 192.168.1.1). IPv6: 128-bit, far more addresses."],
  ["Subnet mask", "Splits an IP into network and host parts. /24 = 255.255.255.0 = 254 usable hosts."],
  ["Hub / switch / router", "Hub broadcasts to all ports. Switch sends to the right device by MAC address. Router connects different networks using IP."],
  ["Common ports", "HTTP 80, HTTPS 443, SSH 22, FTP 21, DNS 53, SMTP 25, MySQL 3306."]
 ] },
 { id: "oop", name: "OOP", rows: [
  ["Encapsulation", "Bundle data and methods together and hide internals behind private fields and public methods."],
  ["Abstraction", "Show only what's needed, hide how it works. A car's steering wheel, not its engine."],
  ["Inheritance", "A child class reuses and extends a parent class (is-a relationship)."],
  ["Polymorphism", "One interface, many forms. Compile-time = overloading; runtime = overriding."],
  ["Overloading vs overriding", "Overloading: same method name, different parameters, same class. Overriding: child redefines a parent method with the same signature."],
  ["Abstract class vs interface", "Abstract class can have state and some implemented methods; single inheritance. Interface defines a contract; a class can implement many."],
  ["Constructor", "Special method that runs when an object is created; same name as the class, no return type."],
  ["static", "Belongs to the class, not each object. Shared across all instances."],
  ["Composition", "A class contains objects of other classes (has-a). Often preferred over inheritance."],
  ["SOLID", "Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion."]
 ] },
 { id: "cloud", name: "Cloud & DevOps", rows: [
  ["IaaS / PaaS / SaaS", "IaaS: rent servers (AWS EC2). PaaS: deploy code, platform runs it (Render, Heroku). SaaS: ready software (Gmail)."],
  ["Region vs availability zone", "A region is a geographic area (e.g. Mumbai). Availability zones are separate data centres inside it, for fault tolerance."],
  ["Compute", "Virtual machines: AWS EC2, Azure VM. Serverless functions: AWS Lambda, Azure Functions."],
  ["Storage", "Object storage for files: AWS S3, Azure Blob. Block storage for VM disks: EBS."],
  ["Managed databases", "AWS RDS, Azure SQL. The provider handles backups, patching and scaling."],
  ["Serverless", "You write functions; the cloud runs them on demand and bills per call. No server to manage."],
  ["Scaling", "Vertical: bigger machine. Horizontal: more machines behind a load balancer."],
  ["IAM", "Identity and access management: who can do what. Give the least privilege needed."],
  ["Docker image vs container", "An image is the packaged app and its dependencies. A container is a running instance of an image."],
  ["Dockerfile basics", "FROM base image → COPY code → RUN install → EXPOSE port → CMD start command."],
  ["Kubernetes", "Runs and manages many containers across machines: scaling, restarts, rolling updates."],
  ["CI/CD", "Continuous integration: every push is built and tested automatically. Continuous delivery/deployment: passing builds ship automatically."],
  ["Shared responsibility", "The cloud provider secures the infrastructure; you secure your data, code and access settings."]
 ] },
 { id: "ai", name: "AI & ML", rows: [
  ["AI / ML / DL", "AI: machines doing tasks that need intelligence. ML: learning patterns from data. DL: ML with many-layer neural networks."],
  ["Supervised learning", "Learn from labelled data. Classification (spam or not) and regression (predict price)."],
  ["Unsupervised learning", "Find structure in unlabelled data. Clustering (K-means), dimensionality reduction (PCA)."],
  ["Reinforcement learning", "An agent learns by trial and error from rewards."],
  ["Overfitting vs underfitting", "Overfitting: great on training data, poor on new data. Underfitting: too simple to learn the pattern."],
  ["Train / validation / test", "Train to learn, validate to tune settings, test once at the end to measure real performance."],
  ["Precision vs recall", "Precision: of predicted positives, how many were right. Recall: of actual positives, how many were found."],
  ["Neural network", "Layers of connected nodes with weights, trained by backpropagation and gradient descent."],
  ["LLM", "A large language model trained on huge text data to predict the next token. Powers chat assistants."],
  ["Token & context window", "A token is a chunk of text (about ¾ of a word). The context window is how many tokens the model can consider at once."],
  ["Prompt engineering", "Write clear instructions, give examples, specify the output format, and break big tasks into steps."],
  ["Embeddings", "Numbers (vectors) that represent meaning, so similar texts end up close together."],
  ["RAG", "Retrieval-augmented generation: search your own documents for relevant chunks, then give them to the LLM to answer from."],
  ["Hallucination", "The model states something false confidently. Reduce it with RAG, citations and checking outputs."],
  ["Fine-tuning", "Further training a model on your own data to specialise it. RAG is usually tried first because it's cheaper."]
 ] }
];
