# ML & Deep Learning Field Guide

An interactive learning site with separate machine-learning and deep-learning paths.

**Live website:** [ml-field-guide.rudra1358.workers.dev](https://ml-field-guide.rudra1358.workers.dev)

**Deep learning course:** [ml-field-guide.rudra1358.workers.dev/deep-learning](https://ml-field-guide.rudra1358.workers.dev/deep-learning)

**Machine learning course:** [ml-field-guide.rudra1358.workers.dev/ml](https://ml-field-guide.rudra1358.workers.dev/ml)

## What you'll find

- **01 · Project workflow:** Follow the stages of an ML project in a practical order, and see which topics belong to each stage.
- **02 · Choose an approach:** Explore guidance based on your data and the kind of problem you want to solve.
- **03 · Topic map:** Browse topics grouped by their place in the workflow.
- **04 · Hands-on learning library:** Open individual lessons with explanations of each topic type and subtopic, key hyperparameters or method settings, a sample dataset, complete Python code, representative output, a visual guide, and a walkthrough.
- **05 · Deep learning course:** A separate course with the same four-part structure—workflow, model chooser, topic map, and detailed lesson library—covering perceptrons and MLPs through CNNs, RNNs, attention, and Transformers.

The library covers data loading and exploration, preprocessing, missing values and outliers, feature engineering, train/validation/test splits, leakage, regression, classification, clustering, ensembles, evaluation, reproducibility, and deployment.

The ML lessons use an embedded customer dataset where applicable. Deep learning examples include clearly labeled synthetic teaching data and public Keras datasets such as MNIST and IMDB. Python examples can be downloaded from each deep learning lesson.

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

Before deploying to a new Worker, set `BETTER_AUTH_SECRET` as a Cloudflare Worker secret. Do not use the local `.dev.vars` value for production.

## Course access

Course pages and their lesson assets require a signed-in account. New accounts require both an email address in the Worker secret `AUTHORIZED_EMAILS` and the owner-provided invitation code in `SIGNUP_INVITE_CODE`. The Worker checks the email allowlist on every course request, so removing an address immediately revokes its access. Set `AUTHORIZED_EMAILS` to a comma-separated list of approved addresses and `SIGNUP_INVITE_CODE` to a strong random code in the Cloudflare dashboard under **Worker > Settings > Variables and Secrets**. Give the code only to invited users. This uses the existing Cloudflare Worker and D1 setup and does not require a paid email service.

For local development, put these values in `.dev.vars`:

```text
BETTER_AUTH_SECRET=<at least 32 random characters>
AUTHORIZED_EMAILS=<approved email addresses, comma-separated>
SIGNUP_INVITE_CODE=<strong invitation code>
```

Keep `.dev.vars` private; it is ignored by Git. The local database needs the Better Auth schema before account requests will work. With the app running, send a `POST` request to `/api/auth/_migrate` with an `Authorization: Bearer <local secret>` header. For production, configure all three values as Cloudflare Worker secrets, deploy, and run the protected migration request once against the live site using the production `BETTER_AUTH_SECRET`.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Learning-path chooser |
| `ml.html` | Machine-learning workflow guide |
| `topic.html` | Shared template for individual topic lessons |
| `topic-guides.js` | Lesson descriptions, examples, and learning metadata |
| `topic-details.js` | Per-topic subtopics, key settings, and representative example output |
| `topic-page.js` | Renders lesson content, visual guides, and code/data downloads |
| `deep-learning.html` | Standalone deep learning course interface |
| `deep-learning.js` | Deep learning curriculum, lesson rendering, examples, and visualizations |
| `auth-worker.ts` | Better Auth Worker routes and protected D1 schema migration endpoint |
| `auth-client.js` | Shared registration, sign-in, session, and sign-out controls |
| `auth.css` | Shared account controls and accessible dialog styling |
| `vite.config.ts` | Vite multi-page build configuration |
| `cloudflare.config.ts` | Cloudflare Workers project configuration |

## Built with

HTML, CSS, JavaScript, Vite, and Cloudflare Workers. Examples use Python with TensorFlow/Keras, NumPy, and scikit-learn.

## Learning note

The examples are designed to teach the workflow on a small dataset. For real projects, choose a validation strategy that matches how predictions will be used, keep test data out of model selection, and assess results in the context of your data and goals.

to redeploy if something happens after adding new email id to cloudflare
npm run deploy -- --force
