# ML Field Guide

An interactive, beginner-friendly guide to the end-to-end machine-learning workflow—from understanding a dataset to evaluating and deploying a model.

**Live website:** [ml-field-guide.rudra1358.workers.dev](https://ml-field-guide.rudra1358.workers.dev)

## What you'll find

- **01 · Project workflow:** Follow the stages of an ML project in a practical order, and see which topics belong to each stage.
- **02 · Choose an approach:** Explore guidance based on your data and the kind of problem you want to solve.
- **03 · Topic map:** Browse topics grouped by their place in the workflow.
- **04 · Hands-on learning library:** Open individual lessons with explanations of each topic type and subtopic, key hyperparameters or method settings, a sample dataset, complete Python code, representative output, a visual guide, and a walkthrough.

The library covers data loading and exploration, preprocessing, missing values and outliers, feature engineering, train/validation/test splits, leakage, regression, classification, clustering, ensembles, evaluation, reproducibility, and deployment.

Lessons use a small embedded customer dataset where applicable, so examples do not depend on downloading a dataset. Code and CSV downloads are available from the lesson pages.

## Run locally

You'll need [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

Python lesson examples can be copied or downloaded from each lesson. Install the packages listed on that lesson's page before running its example.

## Deploy

The site is configured for Cloudflare Workers. Sign in to Cloudflare with the `cf` CLI, then run:

```bash
npm run deploy
```

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Workflow guide, topic map, and learning library |
| `topic.html` | Shared template for individual topic lessons |
| `topic-guides.js` | Lesson descriptions, examples, and learning metadata |
| `topic-details.js` | Per-topic subtopics, key settings, and representative example output |
| `topic-page.js` | Renders lesson content, visual guides, and code/data downloads |
| `vite.config.ts` | Vite multi-page build configuration |
| `cloudflare.config.ts` | Cloudflare Workers project configuration |

## Built with

HTML, CSS, JavaScript, Vite, and Cloudflare Workers. The lesson examples use Python and, depending on the topic, libraries such as pandas, NumPy, and scikit-learn.

## Learning note

The examples are designed to teach the workflow on a small dataset. For real projects, choose a validation strategy that matches how predictions will be used, keep test data out of model selection, and assess results in the context of your data and goals.
