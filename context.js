// ─── context.js ───────────────────────────────────────────────────────────────
// This file contains ALL content the chatbot can answer from.
// Edit this freely — add research papers, project details, etc.
// The chatbot will ONLY answer based on what's here.
// ──────────────────────────────────────────────────────────────────────────────

const MANISH_CONTEXT = `
=== PERSONAL INFORMATION ===
Name: Manish Nadella
Email: manishnadella03@gmail.com
Phone: +1 614 974 3145
LinkedIn: https://linkedin.com/in/manish-nadella-893a02258/
Location: Michigan, USA
Status: Active — MS Artificial Intelligence student, expected graduation April 2026

=== SUMMARY ===
Manish Nadella is an ML Engineer and AI Researcher with 2.5 years of hands-on experience
designing intelligent systems that go beyond prototypes into production-grade deployments.
He holds a 4.0 GPA in his MS Artificial Intelligence program at the University of Michigan,
Dearborn. His expertise spans computer vision, large language models (LLMs), NLP, and
time-series analysis. He has 4 peer-reviewed publications and a strong commitment to
reproducibility, rigorous methodology, and real-world impact.

=== EDUCATION ===

1. MS — Artificial Intelligence
   University of Michigan, Dearborn | Michigan, USA
   Duration: Sep 2024 – Apr 2026 (Expected)
   GPA: 4.0 / 4.0
   Relevant Courses: AI, Algorithm Design & Analysis, Software Engineering,
   Text Mining & Information Retrieval, Intelligent Systems, Robot Vision

2. B.Tech — Computer Science Engineering (AI)
   Amrita Vishwa Vidyapeetham | Coimbatore, India
   Duration: Jul 2020 – Jul 2024
   CGPA: 8.3 / 10
   Relevant Courses: Machine Learning, Deep Learning, NLP, Signal & Image Processing,
   Computer Networks, Reinforcement Learning, Robotic Systems & Drones,
   Mathematics for Intelligent Systems

=== WORK EXPERIENCE ===

1. Machine Learning / Data Analyst
   Company: Freudenberg Xalt Energy Systems | Michigan, USA
   Duration: May 2025 – Oct 2025
   - Designed and deployed end-to-end ML pipelines in Python and scikit-learn to analyze
     battery performance data, generating actionable predictive insights.
   - Analyzed large-scale time-series data to identify performance degradation patterns,
     reducing failure diagnosis time by approximately 15%.
   - Achieved 20–25% improvement in anomaly detection accuracy.

2. ML Research Engineer — LLMs
   Organization: University of Michigan | Michigan, USA
   Duration: Dec 2024 – Aug 2025
   - Evaluated LLM architectures for code reasoning using quantitative metrics across
     comprehension, logical flow, and error identification.
   - Conducted fine-tuning experiments on code-related datasets using PyTorch and
     TensorFlow through structured evaluation workflows.

3. Deep Learning Engineer
   Company: Aptagrim Pvt. Ltd. | Hyderabad, India
   Duration: Sep 2023 – Jun 2024
   - Built and deployed object detection and computer vision models with PyTorch,
     improving accuracy by 15–20% with near real-time inference.
   - Designed end-to-end ML pipelines covering data ingestion, preprocessing, feature
     engineering, training, and evaluation for image and text datasets.
   - Developed scalable data workflows using Pandas, MongoDB, and Snowflake for analytics
     and ML experimentation at scale.

=== SKILLS ===

Programming Languages: Python, C, C++, SQL

Machine Learning & AI: Machine Learning, Deep Learning, Computer Vision, NLP,
LLM Fine-tuning, Time-Series Analysis, Reinforcement Learning

Frameworks & Libraries: PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy

Data Infrastructure: MongoDB, Snowflake, FAISS, ChromaDB

Research Methods: Hypothesis Testing, Anomaly Detection, Model Evaluation,
RAG (Retrieval-Augmented Generation), Semi-supervised Learning

Domains: Anomaly Detection, Code Reasoning, Statistical Analysis,
Satellite Imagery, Visual Question Answering (VQA)

=== PROJECTS & PUBLICATIONS ===

1. Floodlight: A Vision-Language Integration for Flood Imagery
   - Semi-supervised ResNet-based model for flood imagery classification.
   - Integrated VQA (Visual Question Answering) and LLM APIs for image-aware
     question answering on disaster imagery.
   - Published at a peer-reviewed international conference.
   - DOI: https://doi.org/10.1007/978-981-96-0451-7_11
   - Tech stack: ResNet, Semi-supervised Learning, VQA, LLM APIs, Computer Vision

2. Satellite Image Dehazing
   - Comprehensive benchmark of ML and classical image processing dehazing techniques
     applied specifically to satellite imagery.
   - Constructed a synthetic hazy/ground-truth data pipeline for rigorous,
     reproducible evaluation.
   - Tech stack: Image Processing, Benchmarking, Synthetic Data Generation, Python,
     Computer Vision

3. EmoBot: Emotion-Aware Chatbot
   - A chatbot that combines facial emotion detection to improve comprehension and
     adapt responses dynamically.
   - When EmoBot identifies sad, fearful, or disgusted expressions, it responds with
     customized explanations or prompts for clarification.
   - Published peer-reviewed paper.
   - DOI: https://link.springer.com/chapter/10.1007/978-981-99-9043-6_11
   - Tech stack: Computer Vision, Python, LLMs, Facial Emotion Recognition

4. Telugu News Category Prediction
   - Comparative study of ML algorithms for Telugu-language news article classification.
   - W2Vec-skip gram with polynomial SVM proved to be the best-performing combination,
     addressing unique linguistic complexities of the Telugu language.
   - Published at ACL Anthology (DravidianLangTech workshop).
   - URL: https://aclanthology.org/2023.dravidianlangtech-1.14/
   - Tech stack: NLP, Python, Word2Vec skip-gram, Support Vector Machines (SVM)

=== PUBLICATIONS SUMMARY ===
Total peer-reviewed publications: 4
Venues: International conferences (Springer), ACL Anthology (DravidianLangTech)
Topics: Computer Vision, Flood Detection, Emotion AI, NLP, Telugu Language Processing

=== METRICS ===
Years of experience: 2.5
MS GPA: 4.0 / 4.0
Number of publications: 4
Anomaly detection improvement at Freudenberg: 20–25%
CV model accuracy improvement at Aptagrim: 15–20%

=== ADDITIONAL NOTES ===
// ─────────────────────────────────────────────────────────────────────────────
// ADD YOUR RESEARCH PAPER ABSTRACTS BELOW THIS LINE
// Example format:
//
// === RESEARCH PAPER: <Title> ===
// Abstract: <paste abstract here>
// Key findings: <bullet points>
// Methods used: <list>
//
// ADD PROJECT DETAILS BELOW:
// === PROJECT DETAIL: <Name> ===
// <Any extra context, architecture decisions, results, etc.>
// ─────────────────────────────────────────────────────────────────────────────
`;