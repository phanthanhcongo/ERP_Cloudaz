\documentclass[10pt,a4paper]{article}

% ==================================================
% PAGE SETUP - Tăng lề rộng hơn giúp bố cục thoáng hơn
% ==================================================
\usepackage[
    a4paper,
    top=1.35cm,
    bottom=1.35cm,
    left=1.50cm,
    right=1.50cm
]{geometry}

% ==================================================
% FONT AND ENCODING
% ==================================================
\usepackage[T1]{fontenc}
\usepackage{newtxtext,newtxmath}

% ==================================================
% ICONS AND FORMATTING
% ==================================================
\usepackage{fontawesome5}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{ragged2e}
\usepackage{needspace}
\usepackage[hidelinks]{hyperref}

% ==================================================
% GLOBAL SETTINGS
% ==================================================
\pagestyle{empty}
\urlstyle{same}

\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\setlength{\emergencystretch}{3em}

% ==================================================
% BULLET SETTINGS - Tăng itemsep từ 0.45pt lên 2.5pt giúp các dòng list thoáng hơn
% ==================================================
\setlist[itemize]{
    leftmargin=1.20em,
    itemsep=2.5pt,
    topsep=3.0pt,
    parsep=0pt,
    partopsep=0pt
}

% ==================================================
% SECTION STYLE - Tăng spacing trước và sau section
% ==================================================
\titleformat{\section}
    {\bfseries\fontsize{11.9}{13}\selectfont}
    {}
    {0pt}
    {}
    [\vspace{1.2pt}\titlerule]

\titlespacing*{\section}
    {0pt}
    {10.0pt}
    {5.0pt}

% ==================================================
% CUSTOM COMMANDS
% ==================================================

% Technical skill line
\newcommand{\cvline}[2]{%
    \noindent
    \textbf{#1:} #2\par
    \vspace{2.0pt} % Thêm khoảng giãn nhẹ giữa các dòng skill
}

% Work experience, award and education line
\newcommand{\datedline}[2]{%
    \noindent
    \begin{minipage}[t]{0.76\linewidth}
        #1
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.22\linewidth}
        \raggedleft #2
    \end{minipage}
    \par
    \vspace{2.0pt}
}

% Project heading
\newcommand{\projectheader}[2]{%
    \Needspace{5\baselineskip}
    \noindent
    \begin{minipage}[t]{0.76\linewidth}
        \textbf{#1}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.22\linewidth}
        \raggedleft #2
    \end{minipage}
    \par
    \vspace{2.0pt}
}

% ==================================================
% DOCUMENT
% ==================================================
\begin{document}

% Tăng font size từ 9.8pt/11.15pt lên 10pt/13.5pt chuẩn, dễ đọc hơn rất nhiều
\fontsize{10}{13.5}\selectfont

% ==================================================
% HEADER
% ==================================================
{\bfseries
\fontsize{24.5}{26}\selectfont
Phan Thanh Cong\par
}

\vspace{-1pt}

{\fontsize{10.8}{12}\selectfont
Full-stack Developer\par
}

\vspace{6pt}

{\fontsize{8.55}{10}\selectfont
\noindent
\begin{tabular*}{\linewidth}{
    @{\extracolsep{\fill}}
    l
    l
    l
    l
    @{}
}
    \faEnvelope\
    \href{mailto:congthomas123@gmail.com}
    {congthomas123@gmail.com}
    &
    \faPhone\
    0352836713
    &
    \faMapMarker*\
    Hanoi, Vietnam
    &
    \faLinkedin\
    \href{https://linkedin.com/in/cong-thomas-phan}
    {linkedin.com/in/cong-thomas-phan}
\end{tabular*}
\par
}

\vspace{3pt}

% ==================================================
% PROFESSIONAL SUMMARY
% ==================================================
\section{Professional Summary}

\begingroup
\justifying
\setlength{\parindent}{0pt}
\setlength{\parskip}{4.0pt} % Tăng giãn dòng giữa các đoạn văn

Full-stack Developer with \textbf{1+ year of professional experience} building production web applications and IoT edge systems using \textbf{ReactJS, NestJS, PostgreSQL, and MQTT}. Proven track record in device-to-cloud synchronization, fault-tolerant event processing, third-party integrations, and production deployments on \textbf{AWS}.

Fluent in English (IELTS 6.0) with direct international client communication experience. JLPT N3 certified. Leverages \textbf{AI tools} for accelerated development, debugging, and rapid prototyping.

\endgroup

% ==================================================
% WORK EXPERIENCE
% ==================================================
\section{Work Experience}

\datedline
    {\textbf{Full-stack Developer}, PathTech -- Hanoi, Vietnam}
    {May 2025 -- Present}

\begin{itemize}

    \item Delivered 3 production applications (real estate platform, IoT surveillance system, e-learning platform) as the primary full-stack developer, communicating directly with international clients in English.

    \item Architected and shipped 60+ RESTful API endpoints, an 11-table PostgreSQL schema, and multi-state workflow engines across 2 production platforms deployed on AWS (Amplify + EC2).

    \item Engineered a 2600+ line MQTT event engine for device-to-cloud synchronization on NVIDIA Jetson, handling offline resilience, payload batching, and fault recovery in production.

    \item Integrated 3 third-party systems (Stripe payments, GoHighLevel CRM via OAuth/webhooks, VNPay checkout) with idempotent webhook handling and automated retry mechanisms.

    \item Optimized system performance through Redis caching, database indexing, and query optimization --- eliminating a 37\% image-missing rate in event delivery.

    \item Monitored production systems via Amazon CloudWatch, diagnosed runtime issues, and resolved critical incidents including 755 stuck events caused by a hung MQTT drain cycle.

\end{itemize}

% ==================================================
% TECHNICAL SKILLS
% ==================================================
\section{Technical Skills}

\begingroup
\RaggedRight

\cvline
    {Frontend}
    {ReactJS, TypeScript, TailwindCSS, Responsive Design, Zustand, Redux.}

\cvline
    {Backend}
    {Node.js, NestJS, RESTful APIs, WebSocket, MQTT, Event-driven Architecture.}

\cvline
    {Cloud \& DevOps}
    {AWS (Amplify, EC2, CloudWatch), Docker, Docker Compose, PM2, Linux, GitLab CI/CD.}

\cvline
    {Database}
    {PostgreSQL, MySQL, Redis, Prisma ORM, MinIO (S3-compatible), Database Indexing, Query Optimization.}

\cvline
    {Security \& Integrations}
    {Stripe, VNPay, GoHighLevel, HMAC Signatures (SHA-256/SHA-512), RSA Validation, API Rate Limiting.}

\cvline
    {Tools \& Platforms}
    {Git, Postman, Swagger/OpenAPI, DBeaver, NVIDIA Jetson, MQTT Brokers.}

\cvline
    {Languages}
    {Japanese (JLPT N3), English (IELTS 6.0).}

\endgroup


% ==================================================
% PROJECTS
% ==================================================
\section{Projects}

% --------------------------------------------------
% PA-CAM
% --------------------------------------------------
\projectheader
    {AI-Powered Smart Surveillance Edge System (PA-CAM)}
    {Production Project}

\textit{Backend Developer (Device-to-Cloud Sync \& MQTT Event Engine)}
\par
\vspace{2.0pt}

\begin{itemize}

    \item Built a 5-state device onboarding lifecycle with durable PostgreSQL persistence, mTLS certificate management, and automatic corruption detection with self-healing recovery flows.

    \item Developed real-time telemetry collectors for 6 hardware metrics (CPU, GPU, RAM, VRAM, temperature, storage) with multi-platform support (nvidia-smi, tegrastats) and decoupled presence heartbeats.

    \item Implemented bidirectional cloud-to-edge command gateways with HMAC-SHA256/RSA signature verification, sliding-window rate limiting, and exponential-backoff retry queues with dead-letter handling.

    \item Designed a local-first event sync engine with circuit breakers, deduplication, and watchdog-guarded drain loops --- resolved a production incident where 755 events stuck by implementing hung-promise detection.

    \item Optimized event delivery with size-aware batching (5 events / 4.75\,MB budget per MQTT publish) and dual-path media upload (HTTPS-first with base64-over-MQTT fallback) --- eliminating a 37\% image-missing rate.

    \item Engineered OTA firmware updates with a 6-stage pipeline (download, verify, backup, apply, health-check, rollback) and production fault recovery via circuit breakers and watchdog timers.

\end{itemize}

\textbf{Tech Stack:}
NestJS, PostgreSQL, Prisma, MQTT (EMQX), mTLS, Docker, NVIDIA Jetson, MinIO, AWS
\par
\vspace{4.0pt}

% --------------------------------------------------
% KEANU RESIDENCE
% --------------------------------------------------
\projectheader
    {Keanu Residence \textbar{} Luxury Real Estate Platform}
    {Production Project}

\textit{Full-stack Developer (Booking, Payment \& CRM Integration)}
\par
\vspace{2.0pt}

\begin{itemize}

    \item Led end-to-end full-stack development of a luxury real estate platform with an 11-table PostgreSQL schema and 60+ RESTful API endpoints covering property management, reservations, payments, and CRM integration.

    \item Built a 5-state reservation workflow (Pending, Confirmed, Expired, Cancelled, Failed) with real-time unit locking, Stripe payment processing, and automated expiration handling.

    \item Developed 31 responsive pages including a real-time availability calendar, multi-step reservation wizard, and admin dashboard with dynamic filtering and pagination across 11 database entities.

    \item Integrated GoHighLevel CRM via OAuth 2.0 authorization flow and bidirectional webhooks, building an automated pipeline for contact creation, lead tagging, and enquiry capture with retry on sync failure.

    \item Deployed and maintained production infrastructure on AWS Amplify (frontend) and EC2 (backend) with CloudWatch monitoring and Docker-based containerization.

\end{itemize}

\textbf{Tech Stack:}
ReactJS, NestJS, PostgreSQL, Stripe, AWS Amplify, EC2
\par
\vspace{4.0pt}

% --------------------------------------------------
% MOCHI E-LEARNING
% --------------------------------------------------
\projectheader
    {Mochi E-Learning \textbar{} Gamified Vocabulary Platform}
    {Personal Project}

\begin{itemize}

    \item Architected a full-stack e-learning platform with a 16-model PostgreSQL schema, 12 NestJS backend modules, and multi-language support (Japanese \& English) with dedicated routing and content pipelines.

    \item Engineered a spaced repetition review engine designed to help learners retain 1,000+ vocabulary words in 90 days --- tracking SRS level, lapses, streaks, and per-word accuracy with scheduled review queues and analytics for identifying frequently missed vocabulary.

    \item Built 6 gamified practice modes (matching, multiple-choice, voice recognition, typing romaji, reading hiragana, writing kanji) using a strategy pattern for pluggable exercise generation.

    \item Implemented a 4-state subscription system (Free/Trial/Active/Expired) with VNPay checkout integration, HMAC-SHA512 signature verification, and automated expiration via cron scheduling.

    \item Developed 3 admin panels (subscription management, user management, user analytics) with real-time course enrollment tracking, lesson progress calculation, and role-based access control.

    \item Integrated Gemini AI for context-aware vocabulary explanations, and containerized the full stack (5 Docker services: app, DB, Prisma Studio, client, daily backup) with automated PostgreSQL backups.

\end{itemize}

\textbf{Tech Stack:}
ReactJS, NestJS, PostgreSQL, Prisma, TailwindCSS, Docker, VNPay, Gemini AI, JWT, SRS
\par

% ==================================================
% AWARDS
% ==================================================
\Needspace{4\baselineskip}
\section{Awards}

\datedline
    {\textbf{Certificate of Appreciation}, PathTech (Excellence in Client Delivery)}
    {January 2026}

% ==================================================
% EDUCATION
% ==================================================
\Needspace{4\baselineskip}
\section{Education}

\datedline
    {\textbf{Lincoln University College (Malaysia)} -- Bachelor of Information Technology}
    {2023 -- 2027 (Expected)}

% ==================================================
% ADDITIONAL INFORMATION
% ==================================================
\Needspace{5\baselineskip}
\section{Additional Information}

\begin{itemize}

    \item \textbf{Interests:} Scalable Backend Systems, Distributed Systems, Event-driven Architecture, Edge Computing, Product Development, AI-powered Applications.

\end{itemize}

\end{document}
