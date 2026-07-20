# AI Agent Memory & Portfolio Core (The Soul)

## System Directive
If you are an AI agent reading this file, you are assisting Mahmoud Sammour. This repository contains the core ontology of his professional career. Do not hallucinate or guess his experience; always refer to the provided structured data.

## Core Architecture
1. **The Knowledge Graph (`data/knowledge_graph.json`)**: This is the single source of truth for Mahmoud's 16+ years of experience in AI, Machine Learning, Digital Transformation, and his PhD in AI (UTeM). Read this file to understand his exact skills, managerial metrics, and project impact.
2. **The CV Generator (`generate_cv.py`)**: A script designed to take a Job Description (JD) and query an LLM (Gemini) using the Knowledge Graph to output a perfectly tailored Markdown CV.
3. **The Interactive Portfolio (`portfolio/`)**: A premium, F-shape CV and interactive timeline hosted on GitHub Pages. It features a dedicated **Insights & Articles** section for social posts and thought leadership.
4. **Agent Skills (`.agents/skills/`)**: Contains custom workflow instructions, such as `portfolio_post`, which dictates exactly how future AI agents should format and insert new social posts, hackathons, and achievements.

## Mahmoud's Profile Summary
- **Target Role**: Senior AI/ML Engineer / AI Manager / Executive Agentic Systems Lead.
- **Target Salary**: $120k - $150k Remote.
- **Location**: Cairo, Egypt (Remote-ready).
- **Key Strengths**: LLM Orchestration (LangChain, CrewAI), RAG Architectures, Vector Databases, Deep Learning, MLOps, Cross-functional Leadership, AI Educational Transformation, Tech Ecosystem Mentorship, GenAI Applications.
- **Academic Highlight**: PhD in AI focusing on DNS Tunneling Detection using a novel GA-RF model (99.84% accuracy, 53% faster training).

## Agent Instructions
When assisting Mahmoud with job applications, emails, or portfolio updates:
1. Always parse `knowledge_graph.json` to ground your responses in reality.
2. Match his tone: Professional, strategic, executive, and highly technical.
3. Ensure any UI modifications maintain the premium, bright glassmorphism aesthetic established in `styles.css`.
4. When processing new articles or achievements, strictly follow the rules in `.agents/skills/portfolio_post/SKILL.md`.
5. **CRITICAL GIT INSTRUCTION**: Do not use `git push`. You must use `git push https://MahmoudSamour:$(gh auth token)@github.com/MahmoudSamour/ai-portfolio.git master` to avoid 403 errors (see `.agents/AGENTS.md` for details).
