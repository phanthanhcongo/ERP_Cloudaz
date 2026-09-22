\documentclass[10pt, a4paper]{article}

% Packages
\usepackage[
ignoreheadfoot,
top=1.35cm,
bottom=1.35cm,
left=1.45cm,
right=1.45cm,
footskip=1.0cm
]{geometry}

\usepackage{titlesec}
\usepackage{tabularx}
\usepackage{array}
\usepackage[dvipsnames]{xcolor}

\definecolor{primaryColor}{RGB}{0,0,0}

\usepackage{enumitem}
\usepackage{fontawesome5}
\usepackage{amsmath}
\usepackage{etoolbox}

\usepackage[
pdftitle={Phan Thanh Cong - Business Analyst CV},
pdfauthor={Phan Thanh Cong},
pdfcreator={LaTeX},
colorlinks=true,
urlcolor=primaryColor
]{hyperref}

\usepackage{calc}
\usepackage{bookmark}
\usepackage{changepage}
\usepackage{paracol}
\usepackage{ifthen}
\usepackage{needspace}
\usepackage{iftex}

% Machine-readable PDF
\ifPDFTeX
\input{glyphtounicode}
\pdfgentounicode=1
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\fi

\usepackage{charter}

% General settings
\raggedright
\AtBeginEnvironment{adjustwidth}{\partopsep0pt}
\pagestyle{empty}
\setcounter{secnumdepth}{0}
\setlength{\parindent}{0pt}
\setlength{\topskip}{0pt}
\setlength{\columnsep}{0.15cm}
\pagenumbering{gobble}

% Section formatting
\titleformat{\section}
{\needspace{4\baselineskip}\bfseries\large}
{}
{0pt}
{}
[\vspace{1pt}\titlerule]

\titlespacing{\section}
{-1pt}
{0.25cm}
{0.15cm}

% Bullet formatting
\renewcommand\labelitemi{
$\vcenter{\hbox{\small$\bullet$}}$
}

\newenvironment{highlights}
{
\begin{itemize}[
topsep=0.08cm,
parsep=0.04cm,
partopsep=0pt,
itemsep=0pt,
leftmargin=10pt
]
}
{
\end{itemize}
}

% One-column entry
\newenvironment{onecolentry}
{
\begin{adjustwidth}{0.00001cm}{0.00001cm}
}
{
\end{adjustwidth}
}

% Two-column entry
\newenvironment{twocolentry}[1]
{
\begin{onecolentry}
\def\secondColumn{#1}
\setcolumnwidth{\fill,4.5cm}
\begin{paracol}{2}
}
{
\switchcolumn
\raggedleft
\secondColumn
\end{paracol}
\end{onecolentry}
}

\begin{document}

% =========================
% HEADER
% =========================

\begin{flushleft}
\fontsize{25pt}{25pt}\selectfont \textbf{Phan Thanh Cong}


\vspace{4pt}
\normalsize Business Analyst

\vspace{8pt}
\small
\mbox{\faEnvelope \hspace{2pt} \href{mailto:congthomas123@gmail.com}{congthomas123@gmail.com}}
\hspace{12pt}
\mbox{\faPhone \hspace{2pt} 0352836713}
\hspace{12pt}
\mbox{\faMapMarker* \hspace{2pt} Hanoi, Vietnam}
\hspace{12pt}
\mbox{\faLinkedin \hspace{2pt} \href{https://linkedin.com/in/cong-thomas-phan}{linkedin.com/in/cong-thomas-phan}}

\vspace{4pt}


\end{flushleft}

% =========================
% PROFESSIONAL SUMMARY
% =========================

\section{Professional Summary}

\begin{onecolentry}
Business Analyst with \textbf{1+ year of professional experience} in a hybrid BA/developer role, combining requirement analysis with hands-on full-stack development. Direct experience communicating with international clients in \textbf{English} to elicit, clarify, and validate requirements across web applications, IoT edge systems, and third-party integrations (Stripe, GoHighLevel).

Strong analytical skills in translating business needs into actionable deliverables: user flows, acceptance criteria, API specifications, and database schemas --- with technical depth to evaluate feasibility, identify edge cases, and bridge communication between clients and developers.

\textbf{JLPT N3 certified}. Leverages \textbf{AI tools} for accelerated documentation, research, and prototyping.
\end{onecolentry}

% =========================
% CORE COMPETENCIES
% =========================

\section{Core Competencies}

\begin{onecolentry}

\textbf{Analysis \& Documentation:}
Requirement Elicitation, Functional Requirements, Business Rules,
Acceptance Criteria, Use Cases, User Stories, Functional Specifications,
Gap Analysis, Impact Analysis, Technical Feasibility Analysis.
\

\textbf{Stakeholder \& Delivery:}
Stakeholder Management, Client Communication, Cross-functional Collaboration, Progress Reporting,
Agile/Scrum, Backlog Clarification, UAT Support, Defect Clarification,
Change Analysis, Release Support.
\

\textbf{Process \& System Design:}
User Flows, System Flows, Integration Flows, Data Mapping,
State Transitions, Error Handling, Edge-case Analysis, API Documentation.
\

\textbf{Technical Understanding:}
RESTful APIs, Webhooks, Database Structures, Authentication,
MQTT, System Integrations, Cloud Deployment, Third-party Services.
\

\textbf{Tools \& Languages:}
Postman, Swagger/OpenAPI, DBeaver, Git, Jira, Draw.io, AWS, Docker.
English (IELTS 6.0), Japanese (JLPT N3).

\end{onecolentry}

% =========================
% WORK EXPERIENCE
% =========================


\section{Work Experience}

\begin{twocolentry}{May 2025 -- Present}
\textbf{Business Analyst / Full-stack Developer}, PathTech -- Hanoi, Vietnam
\end{twocolentry}

\vspace{0.10cm}

\begin{onecolentry}
\textit{Hybrid role in a small software company}

\begin{highlights}

\item Served as the primary BA contact for international clients, conducting weekly requirement sessions in English across 3 concurrent production projects (real estate platform, IoT surveillance system, e-learning platform).

\item Translated business requirements into comprehensive API specifications, database schemas, and multi-state workflow definitions for 2 production platforms deployed on AWS.

\item Identified 10+ critical edge cases per project --- including a race condition in the booking flow that would have caused double-charged customers --- preventing defects before production release.

\item Assessed change impact across 3+ integrated systems (Stripe, GoHighLevel, MQTT brokers, AWS) and proposed phased rollout strategies to minimize production risk.

\item Broke features into 20+ development and testing tasks per sprint, tracked progress across 3 projects, and maintained under 2-day turnaround on requirement clarifications.

\item Authored and maintained Swagger/OpenAPI documentation covering 60+ endpoints with request/response examples, and validated integration scenarios using Postman.

\item Supported feature validation, UAT, defect clarification, and production issue investigation --- applied hands-on development knowledge to explain technical constraints and reduce communication gaps.

\end{highlights}
\end{onecolentry}

% =========================
% SELECTED REQUIREMENT CASE
% =========================

\section{Selected Requirement Case}

\begin{twocolentry}{Production Project}
\textbf{Keanu Residence | Booking, Payment, and CRM Flow}
\end{twocolentry}

\vspace{0.10cm}

\begin{onecolentry}
\textit{Requirement Analysis, Client Communication, and Feature Validation}

\begin{highlights}

\item Received and clarified requirements from international stakeholders for a luxury real estate platform covering property browsing, unit availability, reservations, Stripe payments, lead collection, and CRM follow-up workflows.

\item Elicited business rules through structured follow-up questions: unit availability logic, reservation creation triggers, payment-status impact on bookings, and GoHighLevel synchronization scope --- reducing ambiguity before development started.

\item Mapped the end-to-end flow across a 5-state reservation lifecycle (Pending, Confirmed, Expired, Cancelled, Failed) from unit selection through Stripe checkout, payment confirmation, and CRM synchronization.

\item Identified 12+ edge cases across payment and CRM sync flows --- including concurrent bookings double-reserving units, delayed Stripe webhooks, duplicate webhook events, and failed CRM synchronization --- each documented with expected system behavior.

\item Translated clarified requirements into user flows, business rules, API behavior for 60+ endpoints, an 11-table database schema, frontend states, acceptance criteria, and testing scenarios.

\item Coordinated requirement clarification across frontend, backend, Stripe, GoHighLevel, and AWS deployment environments --- ensuring consistent behavior across all integration boundaries.

\item Validated API and integration behavior using Postman, supported feature testing and defect clarification, and reviewed the completed flow against original client expectations before release.

\item Produced comprehensive requirement documentation including user flow diagrams, state transition matrices, API behavior specifications, and 30+ acceptance test scenarios --- serving as the single source of truth for development and QA.

\end{highlights}

\textbf{Technologies involved:}
ReactJS, NestJS, PostgreSQL, Stripe, GoHighLevel, AWS Amplify, EC2

\end{onecolentry}

% =========================
% OTHER PROJECTS
% =========================

\section{Other Projects}

\begin{twocolentry}{Production Project}
\textbf{AI-Powered Smart Surveillance Edge System (PA-CAM)}
\end{twocolentry}

\vspace{0.10cm}

\begin{onecolentry}
\textit{Requirement Analysis, System Flow Design, and Integration Delivery}

\begin{highlights}

\item Analyzed requirements for a 5-state device onboarding lifecycle, real-time telemetry reporting (6 hardware metrics), bidirectional MQTT command protocol, event synchronization, and fault recovery on NVIDIA Jetson edge devices.

\item Designed data flow specifications between Jetson devices, MQTT brokers (EMQX), NestJS backend services, local PostgreSQL databases, MinIO storage, and cloud platforms --- covering both online and offline operation modes.

\item Specified heartbeat telemetry requirements for CPU, GPU, RAM, VRAM, temperature, and storage metrics, and defined presence-detection thresholds to prevent false offline alerts during heavy event processing.

\item Identified 10+ fault scenarios including hung MQTT connections, broker payload overflow (5\,MB limit), 755 events stuck during WAN outages, and delayed media synchronization --- each documented with expected recovery behavior.

\item Converted clarified requirements into MQTT message structures, API behavior, database schemas, security rules (HMAC-SHA256, mTLS), OTA firmware update workflows, and testing scenarios.

\item Validated that critical AI alerts were preserved and synchronized after WAN outages, confirming zero-loss behavior against the defined acceptance criteria for offline operation.

\end{highlights}

\textbf{Technologies involved:}
NestJS, PostgreSQL, Prisma, MQTT (EMQX), mTLS, Docker, NVIDIA Jetson, MinIO, AWS

\end{onecolentry}

\vspace{0.25cm}

\begin{twocolentry}{Personal Project}
\textbf{Mochi E-Learning | Gamified Vocabulary Platform}
\end{twocolentry}

\vspace{0.10cm}

\begin{onecolentry}
\textit{Product Analysis, Workflow Design, and Solution Validation}

\begin{highlights}

\item Analyzed learning objectives and defined a product scope targeting 1,000+ word retention in 90 days --- designing workflows for account registration, multi-language support (Japanese \& English), subscription management, course enrollment, spaced repetition review, and AI-generated vocabulary explanations.

\item Specified a 4-state subscription lifecycle (Free/Trial/Active/Expired) with business rules for trial activation limits, VNPay payment processing, secure callback integrity verification, automated expiration, and free-user vocabulary caps (50-word limit).

\item Designed the course enrollment and learning progress model across a 16-model database schema --- defining rules for premium content gating, lesson completion tracking, automatic progress calculation, and course completion state transitions.

\item Identified 15+ edge cases across payment and enrollment flows --- including duplicate VNPay callbacks, interrupted checkouts leaving orphaned pending subscriptions, trial-to-paid upgrade conflicts, and inconsistent access states after subscription expiration.

\item Defined acceptance criteria for 6 gamified practice modes (matching, multiple-choice, voice, typing, reading, writing) and 3 admin panels (subscription, user management, analytics) --- validating each against the specified business rules end-to-end.

\end{highlights}

\textbf{Technologies involved:}
ReactJS, NestJS, PostgreSQL, Prisma, TailwindCSS, Docker, VNPay, Gemini AI

\end{onecolentry}




% =========================
% EDUCATION
% =========================

\section{Education}

\begin{twocolentry}{2023 -- 2027 (Expected)}
\textbf{Lincoln University College, Malaysia}
-- Bachelor of Information Technology
\end{twocolentry}

% =========================
% AWARDS
% =========================

\section{Awards}

\begin{twocolentry}{January 2026}
\textbf{Certificate of Appreciation}, PathTech
-- Excellence in Client Delivery
\end{twocolentry}

% =========================
% ADDITIONAL INFORMATION
% =========================

\section{Additional Information}

\begin{onecolentry}
\textbf{Interests:} Product Requirements Engineering, Process Optimization, IoT System Analysis, Data-driven Decision Making, AI-assisted Workflows.
\end{onecolentry}

\end{document}

