import { customerDataset, topicGuides } from "./topic-guides.js";

const parameters = new URLSearchParams(window.location.search);
const slug = parameters.get("topic");
const guide = slug ? topicGuides[slug] : null;
const root = document.getElementById("lesson");

function titleFromSlug(value) {
  const title = value.replace(/\.ipynb$/, "").replace(/[-_]/g, " ").replace(/\b\w/g, char => char.toUpperCase())
    .replace(/\b(Api|Csv|Iqr|Kmeans|Knn|Pca|Sql|Zscore)\b/g, word => ({
      Api: "API", Csv: "CSV", Iqr: "IQR", Kmeans: "K-means", Knn: "KNN", Pca: "PCA", Sql: "SQL", Zscore: "Z-score"
    })[word]);
  return title + (value.endsWith(".ipynb") ? " notebook" : "");
}

function createVisualization(type) {
  const diagrams = {
    flow: {
      title: "Data moves through deliberate steps",
      caption: "Each stage should preserve the information needed by the next one.",
      svg: `<svg viewBox="0 0 640 150" role="img" aria-label="Data flows from raw records through a transformation to a checked result">
        <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#789184"/></marker></defs>
        <rect x="18" y="46" width="160" height="58" rx="10" fill="#f2f3ee" stroke="#dedfd6"/><text x="98" y="71" text-anchor="middle" fill="#202a28" font-size="14">Input data</text><text x="98" y="91" text-anchor="middle" fill="#68736e" font-size="11">rows + columns</text>
        <path d="M180 75H244" stroke="#789184" stroke-width="2" marker-end="url(#arrow)"/>
        <rect x="250" y="46" width="160" height="58" rx="10" fill="#e6eee7" stroke="#b9cbbd"/><text x="330" y="71" text-anchor="middle" fill="#244b3b" font-size="14">Learn / transform</text><text x="330" y="91" text-anchor="middle" fill="#52675a" font-size="11">fit on training data</text>
        <path d="M412 75H476" stroke="#789184" stroke-width="2" marker-end="url(#arrow)"/>
        <rect x="482" y="46" width="140" height="58" rx="10" fill="#f5ecde" stroke="#e8d8c2"/><text x="552" y="71" text-anchor="middle" fill="#202a28" font-size="14">Check result</text><text x="552" y="91" text-anchor="middle" fill="#68736e" font-size="11">validate assumptions</text>
      </svg>`
    },
    distribution: {
      title: "A distribution reveals shape, spread, and tails",
      caption: "A histogram is a view of one feature; it can reveal skew, gaps, or unusual observations.",
      svg: `<svg viewBox="0 0 640 190" role="img" aria-label="Histogram showing values concentrated in the middle with thinner tails">
        <path d="M48 154H598M48 154V24" stroke="#89958e" stroke-width="1.5"/>
        <rect x="83" y="128" width="48" height="26" rx="3" fill="#b9cbbd"/><rect x="143" y="98" width="48" height="56" rx="3" fill="#91ae9b"/>
        <rect x="203" y="61" width="48" height="93" rx="3" fill="#638e74"/><rect x="263" y="36" width="48" height="118" rx="3" fill="#376b56"/>
        <rect x="323" y="52" width="48" height="102" rx="3" fill="#638e74"/><rect x="383" y="82" width="48" height="72" rx="3" fill="#91ae9b"/>
        <rect x="443" y="112" width="48" height="42" rx="3" fill="#b9cbbd"/><rect x="503" y="136" width="48" height="18" rx="3" fill="#d4dfd5"/>
        <text x="325" y="180" text-anchor="middle" fill="#68736e" font-size="11">Feature value</text><text x="18" y="25" fill="#68736e" font-size="10">count</text>
      </svg>`
    },
    scatter: {
      title: "Two features can move together—or not",
      caption: "A scatter plot shows paired observations. Association alone does not establish cause.",
      svg: `<svg viewBox="0 0 640 200" role="img" aria-label="Scatter plot with a positive trend line">
        <path d="M52 160H600M52 160V24" stroke="#89958e" stroke-width="1.5"/>
        <path d="M80 145L560 45" stroke="#ae7640" stroke-width="2" stroke-dasharray="6 5"/>
        <g fill="#55778c"><circle cx="105" cy="142" r="5"/><circle cx="150" cy="130" r="5"/><circle cx="190" cy="137" r="5"/><circle cx="230" cy="108" r="5"/><circle cx="275" cy="116" r="5"/><circle cx="318" cy="92" r="5"/><circle cx="360" cy="101" r="5"/><circle cx="410" cy="73" r="5"/><circle cx="455" cy="82" r="5"/><circle cx="505" cy="55" r="5"/><circle cx="552" cy="63" r="5"/></g>
        <text x="326" y="188" text-anchor="middle" fill="#68736e" font-size="11">Feature</text>
      </svg>`
    },
    pipeline: {
      title: "Preprocessing belongs inside the fitted pipeline",
      caption: "The same learned transformations are fit on training data and reused for future rows.",
      svg: `<svg viewBox="0 0 640 160" role="img" aria-label="Pipeline from split to preprocessing to model to prediction">
        <defs><marker id="pipeArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#789184"/></marker></defs>
        <g font-size="12" text-anchor="middle"><rect x="15" y="49" width="126" height="58" rx="9" fill="#f2f3ee" stroke="#dedfd6"/><text x="78" y="74">Train split</text><text x="78" y="92" fill="#68736e" font-size="10">fit here</text>
        <rect x="176" y="49" width="126" height="58" rx="9" fill="#e6eee7" stroke="#b9cbbd"/><text x="239" y="74">Transform</text><text x="239" y="92" fill="#52675a" font-size="10">impute / encode</text>
        <rect x="337" y="49" width="126" height="58" rx="9" fill="#e8eff2" stroke="#c6d5dc"/><text x="400" y="74">Estimator</text><text x="400" y="92" fill="#55778c" font-size="10">fit model</text>
        <rect x="498" y="49" width="126" height="58" rx="9" fill="#f5ecde" stroke="#e8d8c2"/><text x="561" y="74">Prediction</text><text x="561" y="92" fill="#80582e" font-size="10">new data</text></g>
        <path d="M143 78H171M304 78H332M465 78H493" stroke="#789184" stroke-width="2" marker-end="url(#pipeArrow)"/>
      </svg>`
    },
    regression: {
      title: "A regression line summarizes a numeric relationship",
      caption: "The fitted line minimizes a chosen loss on training data; residuals show what it misses.",
      svg: `<svg viewBox="0 0 640 200" role="img" aria-label="Observed points around a fitted regression line">
        <path d="M52 160H600M52 160V24" stroke="#89958e" stroke-width="1.5"/><path d="M78 145L565 42" stroke="#376b56" stroke-width="3"/>
        <g fill="#55778c"><circle cx="106" cy="137" r="5"/><circle cx="158" cy="124" r="5"/><circle cx="214" cy="132" r="5"/><circle cx="260" cy="99" r="5"/><circle cx="313" cy="109" r="5"/><circle cx="367" cy="91" r="5"/><circle cx="420" cy="84" r="5"/><circle cx="471" cy="65" r="5"/><circle cx="535" cy="69" r="5"/></g>
        <text x="326" y="188" text-anchor="middle" fill="#68736e" font-size="11">Predictor</text>
      </svg>`
    },
    sigmoid: {
      title: "A probability is not the same as a final class",
      caption: "A classifier produces a score or probability; a threshold turns it into a decision.",
      svg: `<svg viewBox="0 0 640 200" role="img" aria-label="S-shaped probability curve crossing a chosen decision threshold">
        <path d="M52 160H600M52 160V24" stroke="#89958e" stroke-width="1.5"/><path d="M52 95H600" stroke="#ae7640" stroke-dasharray="6 5"/>
        <path d="M72 145C180 145 194 140 248 119C298 99 315 54 372 38C421 25 498 27 578 27" fill="none" stroke="#376b56" stroke-width="3"/>
        <text x="582" y="87" fill="#80582e" font-size="10">threshold</text><text x="326" y="188" text-anchor="middle" fill="#68736e" font-size="11">Model score</text>
      </svg>`
    },
    matrix: {
      title: "A confusion matrix makes error types visible",
      caption: "Rows are actual classes and columns are predicted classes; check which mistake matters most.",
      svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Confusion matrix with true positives, false positives, false negatives, and true negatives">
        <text x="218" y="25" text-anchor="middle" fill="#68736e" font-size="12">Predicted</text><text x="52" y="112" transform="rotate(-90 52 112)" text-anchor="middle" fill="#68736e" font-size="12">Actual</text>
        <text x="190" y="53" text-anchor="middle" fill="#68736e" font-size="11">Negative</text><text x="302" y="53" text-anchor="middle" fill="#68736e" font-size="11">Positive</text>
        <rect x="110" y="64" width="110" height="54" fill="#e6eee7" stroke="#fff"/><rect x="220" y="64" width="110" height="54" fill="#f5ecde" stroke="#fff"/>
        <rect x="110" y="118" width="110" height="54" fill="#f5ecde" stroke="#fff"/><rect x="220" y="118" width="110" height="54" fill="#e6eee7" stroke="#fff"/>
        <g text-anchor="middle" fill="#202a28" font-size="12"><text x="165" y="96">True negative</text><text x="275" y="96">False positive</text><text x="165" y="150">False negative</text><text x="275" y="150">True positive</text></g>
      </svg>`
    },
    imbalance: {
      title: "Rare classes need metrics that expose missed cases",
      caption: "A high overall score can hide the fact that nearly every rare positive was missed.",
      svg: `<svg viewBox="0 0 540 190" role="img" aria-label="Bar chart showing a large majority class and a much smaller minority class">
        <path d="M56 155H495M56 155V25" stroke="#89958e" stroke-width="1.5"/>
        <rect x="142" y="46" width="100" height="109" rx="5" fill="#91ae9b"/><rect x="310" y="144" width="100" height="11" rx="4" fill="#ae7640"/>
        <text x="192" y="38" text-anchor="middle" fill="#244b3b" font-size="12">92% majority</text>
        <text x="360" y="133" text-anchor="middle" fill="#80582e" font-size="12">8% minority</text>
        <text x="192" y="177" text-anchor="middle" fill="#68736e" font-size="11">Class 0</text><text x="360" y="177" text-anchor="middle" fill="#68736e" font-size="11">Class 1</text>
      </svg>`
    },
    pca: {
      title: "PCA rotates features into new variance directions",
      caption: "Principal components are combinations of original features, ordered by captured variance.",
      svg: `<svg viewBox="0 0 600 200" role="img" aria-label="Correlated feature points with original axes and a rotated principal component axis">
        <path d="M48 164H570M48 164V24" stroke="#89958e" stroke-width="1.5"/>
        <path d="M88 148L520 48" stroke="#55778c" stroke-width="2" stroke-dasharray="6 5"/>
        <path d="M295 166L356 20" stroke="#376b56" stroke-width="3"/>
        <g fill="#91ae9b"><circle cx="115" cy="142" r="5"/><circle cx="160" cy="126" r="5"/><circle cx="202" cy="119" r="5"/><circle cx="248" cy="100" r="5"/><circle cx="299" cy="91" r="5"/><circle cx="351" cy="71" r="5"/><circle cx="404" cy="68" r="5"/><circle cx="456" cy="49" r="5"/></g>
        <text x="517" y="42" fill="#55778c" font-size="10">PC1</text><text x="360" y="27" fill="#376b56" font-size="10">PC2</text>
        <text x="310" y="190" text-anchor="middle" fill="#68736e" font-size="11">Original feature space</text>
      </svg>`
    },
    neighbors: {
      title: "K-nearest neighbors use nearby observations",
      caption: "Distance depends on feature scale, so standardize features before a distance-based imputer.",
      svg: `<svg viewBox="0 0 540 190" role="img" aria-label="A missing point and its three nearest neighboring data points">
        <path d="M45 155H510M45 155V24" stroke="#89958e" stroke-width="1.5"/>
        <g fill="#91ae9b"><circle cx="115" cy="123" r="6"/><circle cx="143" cy="99" r="6"/><circle cx="205" cy="130" r="6"/><circle cx="225" cy="87" r="6"/><circle cx="319" cy="119" r="6"/><circle cx="352" cy="78" r="6"/><circle cx="437" cy="116" r="6"/></g>
        <circle cx="270" cy="112" r="10" fill="#f5ecde" stroke="#ae7640" stroke-width="2"/><text x="270" y="116" text-anchor="middle" fill="#80582e" font-size="11">?</text>
        <circle cx="225" cy="87" r="18" fill="none" stroke="#55778c" stroke-dasharray="4 4"/><circle cx="319" cy="119" r="18" fill="none" stroke="#55778c" stroke-dasharray="4 4"/><circle cx="205" cy="130" r="18" fill="none" stroke="#55778c" stroke-dasharray="4 4"/>
        <text x="275" y="180" text-anchor="middle" fill="#68736e" font-size="11">Feature space</text>
      </svg>`
    },
    clusters: {
      title: "Clustering groups points by a chosen notion of distance",
      caption: "Cluster labels are discovered groupings, not known ground-truth classes.",
      svg: `<svg viewBox="0 0 640 210" role="img" aria-label="Three groups of points with centroid markers">
        <path d="M45 170H610M45 170V22" stroke="#89958e" stroke-width="1.5"/>
        <g fill="#55778c"><circle cx="100" cy="130" r="5"/><circle cx="123" cy="110" r="5"/><circle cx="146" cy="142" r="5"/><circle cx="165" cy="118" r="5"/><circle cx="135" cy="93" r="5"/></g>
        <g fill="#ae7640"><circle cx="292" cy="81" r="5"/><circle cx="322" cy="102" r="5"/><circle cx="343" cy="68" r="5"/><circle cx="365" cy="92" r="5"/><circle cx="329" cy="53" r="5"/></g>
        <g fill="#376b56"><circle cx="483" cy="135" r="5"/><circle cx="510" cy="114" r="5"/><circle cx="538" cy="146" r="5"/><circle cx="559" cy="123" r="5"/><circle cx="521" cy="98" r="5"/></g>
        <g fill="white" stroke="#202a28" stroke-width="2"><path d="M137 111l8 8-8 8-8-8z"/><path d="M330 72l8 8-8 8-8-8z"/><path d="M521 116l8 8-8 8-8-8z"/></g>
        <text x="327" y="198" text-anchor="middle" fill="#68736e" font-size="11">Feature 1</text>
      </svg>`
    },
    folds: {
      title: "Validation folds rotate which rows are held out",
      caption: "Every row is validation data once; the test set stays outside model selection.",
      svg: `<svg viewBox="0 0 640 190" role="img" aria-label="Three cross-validation folds with training and validation rows">
        <g font-size="11" text-anchor="middle"><text x="115" y="27">Fold 1</text><text x="320" y="27">Fold 2</text><text x="525" y="27">Fold 3</text></g>
        <g stroke="white" stroke-width="3">
          <rect x="30" y="42" width="55" height="38" fill="#f5ecde"/><rect x="85" y="42" width="55" height="38" fill="#e6eee7"/><rect x="140" y="42" width="55" height="38" fill="#e6eee7"/>
          <rect x="235" y="42" width="55" height="38" fill="#e6eee7"/><rect x="290" y="42" width="55" height="38" fill="#f5ecde"/><rect x="345" y="42" width="55" height="38" fill="#e6eee7"/>
          <rect x="440" y="42" width="55" height="38" fill="#e6eee7"/><rect x="495" y="42" width="55" height="38" fill="#e6eee7"/><rect x="550" y="42" width="55" height="38" fill="#f5ecde"/>
        </g>
        <g fill="#68736e" font-size="10"><text x="112" y="105" text-anchor="middle">Validation fold</text><text x="321" y="105" text-anchor="middle">Validation fold</text><text x="522" y="105" text-anchor="middle">Validation fold</text></g>
        <g fill="#376b56" font-size="11"><text x="320" y="154" text-anchor="middle">Green = training rows · amber = validation rows</text></g>
      </svg>`
    },
    ensemble: {
      title: "Ensembles combine several learners",
      caption: "Bagging, boosting, and stacking combine models in different ways; validate the full ensemble.",
      svg: `<svg viewBox="0 0 640 190" role="img" aria-label="Several model predictions feed into a combined prediction">
        <defs><marker id="ensArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#789184"/></marker></defs>
        <g text-anchor="middle" font-size="12"><rect x="30" y="25" width="145" height="36" rx="8" fill="#e6eee7"/><text x="102" y="48">Learner A</text>
        <rect x="30" y="77" width="145" height="36" rx="8" fill="#e8eff2"/><text x="102" y="100">Learner B</text>
        <rect x="30" y="129" width="145" height="36" rx="8" fill="#f5ecde"/><text x="102" y="152">Learner C</text>
        <rect x="415" y="64" width="190" height="58" rx="9" fill="#376b56"/><text x="510" y="89" fill="white">Combined prediction</text><text x="510" y="107" fill="#e6eee7" font-size="10">validated as one model</text></g>
        <path d="M180 43C276 43 314 71 410 86M180 95H410M180 147C276 147 314 117 410 101" fill="none" stroke="#789184" stroke-width="2" marker-end="url(#ensArrow)"/>
      </svg>`
    },
    split: {
      title: "Keep evaluation data separate from fitting",
      caption: "Choose splits that match the deployment setting: random, grouped, stratified, or chronological.",
      svg: `<svg viewBox="0 0 640 145" role="img" aria-label="Dataset divided into training, validation, and test partitions">
        <rect x="28" y="37" width="350" height="60" rx="8" fill="#e6eee7"/><rect x="383" y="37" width="110" height="60" fill="#e8eff2"/><rect x="498" y="37" width="112" height="60" rx="8" fill="#f5ecde"/>
        <text x="203" y="64" text-anchor="middle" fill="#244b3b" font-size="14">Training</text><text x="203" y="83" text-anchor="middle" fill="#52675a" font-size="10">fit transforms + model</text>
        <text x="438" y="64" text-anchor="middle" fill="#55778c" font-size="12">Validation</text><text x="554" y="64" text-anchor="middle" fill="#80582e" font-size="12">Test</text>
        <text x="320" y="125" text-anchor="middle" fill="#68736e" font-size="11">Test data is used once for the final estimate</text>
      </svg>`
    },
    transform: {
      title: "A transformation changes representation, not the underlying question",
      caption: "Inspect what information is preserved and fit data-dependent transformations on training rows.",
      svg: `<svg viewBox="0 0 640 160" role="img" aria-label="Original features pass through a transform and become model-ready features">
        <g text-anchor="middle" font-size="12"><rect x="18" y="39" width="165" height="72" rx="10" fill="#f2f3ee" stroke="#dedfd6"/><text x="100" y="67">Original values</text><text x="100" y="88" fill="#68736e" font-size="10">raw scale / categories</text>
        <rect x="237" y="39" width="165" height="72" rx="10" fill="#e6eee7" stroke="#b9cbbd"/><text x="319" y="67" fill="#244b3b">Transformation</text><text x="319" y="88" fill="#52675a" font-size="10">fit on training rows</text>
        <rect x="456" y="39" width="165" height="72" rx="10" fill="#e8eff2" stroke="#c6d5dc"/><text x="538" y="67">Model-ready</text><text x="538" y="88" fill="#55778c" font-size="10">consistent feature space</text></g>
        <path d="M187 75H232M406 75H451" stroke="#789184" stroke-width="2"/>
      </svg>`
    },
    descent: {
      title: "Gradient descent follows the loss downhill",
      caption: "The step size matters: very small steps are slow; overly large steps may overshoot.",
      svg: `<svg viewBox="0 0 640 190" role="img" aria-label="Parameter updates descend along a bowl-shaped loss curve">
        <path d="M50 155H600M50 155V25" stroke="#89958e" stroke-width="1.5"/><path d="M92 52C190 52 214 142 326 142C438 142 464 52 562 52" fill="none" stroke="#55778c" stroke-width="3"/>
        <g fill="#ae7640"><circle cx="132" cy="74" r="6"/><circle cx="228" cy="126" r="6"/><circle cx="304" cy="141" r="6"/></g><path d="M139 78L218 120M235 130L296 139" stroke="#ae7640" stroke-width="2"/>
        <text x="324" y="182" text-anchor="middle" fill="#68736e" font-size="11">Parameter value</text><text x="18" y="24" fill="#68736e" font-size="10">loss</text>
      </svg>`
    }
  };
  const aliases = {
    forest: "ensemble", boosting: "ensemble", stacking: "ensemble",
    comparison: "pipeline", search: "folds", leakage: "pipeline",
    deploy: "flow", cycle: "pipeline", calendar: "transform",
    errors: "regression", curve: "regression", shrinkage: "regression"
  };
  return diagrams[type] || diagrams[aliases[type]] || diagrams.flow;
}

function renderDataset(isImbalance) {
  if (isImbalance) {
    return `<p class="dataset-note">This lesson generates a reproducible synthetic dataset with 500 examples and approximately 8% minority-class cases. The code creates it using scikit-learn, so no download is needed.</p>
      <div class="table-scroll"><table><thead><tr><th>Class</th><th>Approximate rows</th><th>Share</th></tr></thead><tbody><tr><td>Majority (0)</td><td>460</td><td>92%</td></tr><tr><td>Minority (1)</td><td>40</td><td>8%</td></tr></tbody></table></div>`;
  }
  const header = customerDataset.columns.map(column => `<th>${column}</th>`).join("");
  const rows = customerDataset.rows.map(row => `<tr>${row.map(value => `<td>${value === null ? "—" : value}</td>`).join("")}</tr>`).join("");
  return `<p class="dataset-note">A tiny 12-row customer dataset is embedded in the code below. It contains numeric, categorical, date, target, and intentional missing values so examples run without downloading files.</p>
    <div class="dataset-toolbar"><span>Preview · ${customerDataset.rows.length} sample rows</span><button class="small-button" id="download-dataset" type="button">Download CSV</button></div>
    <div class="table-scroll"><table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderLesson() {
  if (!guide || !slug) {
    document.title = "Lesson not found — ML Field Guide";
    root.innerHTML = `<section class="error-state"><div class="eyebrow">Learning library</div><h1>Lesson not found</h1><p>This topic does not have a lesson link. Return to the library to choose a topic.</p><a class="back-link" href="index.html#topic-library">← Browse all lessons</a></section>`;
    return;
  }

  const title = titleFromSlug(slug);
  const visual = createVisualization(guide.visual);
  const isImbalance = slug === "class-imbalance";
  document.title = `${title} — ML Field Guide`;
  root.innerHTML = `
    <section class="lesson-hero">
      <div class="eyebrow">${guide.info[0]} · Hands-on lesson</div>
      <h1>${title}</h1>
      <p class="lead">${guide.info[1]}</p>
      <div class="badges"><span class="badge">${guide.packages.map(item => item === "scikit-learn" ? "scikit-learn" : item).join(" · ")}</span><span class="badge">Runnable Python example</span><span class="badge">Beginner-friendly dataset</span></div>
    </section>
    <div class="lesson-grid">
      <nav class="toc" aria-label="On this lesson">
        <strong>On this lesson</strong>
        <a href="#concept">The concept</a><a href="#dataset">Example dataset</a><a href="#implementation">Implementation</a><a href="#visual">Visual guide</a><a href="#checklist">What to remember</a>
      </nav>
      <article class="content">
        <section class="lesson-section" id="concept">
          <h2>The concept</h2>
          <p>${guide.info[1]}</p>
          <p class="when-note"><strong>When to use it:</strong> ${guide.info[2]}</p>
        </section>
        <section class="lesson-section" id="dataset">
          <h2>Example dataset</h2>
          <div id="dataset-content"></div>
        </section>
        <section class="lesson-section" id="implementation">
          <h2>Complete Python implementation</h2>
          <p>This script is self-contained and uses the small dataset shown above (or creates a synthetic set for the class-imbalance lesson).</p>
          <div class="requirements">Install: python -m pip install ${guide.packages.join(" ")}</div>
          <div class="code-toolbar"><span>Copy or save the complete example</span><div><button class="action-button" id="copy-code" type="button">Copy code</button> <button class="action-button" id="download-code" type="button">Download .py</button></div></div>
          <pre><code id="python-code"></code></pre>
        </section>
        <section class="lesson-section" id="walkthrough">
          <h2>Walk through the implementation</h2>
          <ol class="walkthrough">${guide.walkthrough.map(step => `<li>${step}</li>`).join("")}</ol>
        </section>
        <section class="lesson-section" id="visual">
          <h2>Visual guide</h2>
          <div class="visual">${visual.svg}<p class="visual-caption">${visual.caption}</p></div>
        </section>
        <section class="lesson-section" id="checklist">
          <h2>What to remember</h2>
          <p>${guide.info[2]}</p>
          <p class="takeaway">This example demonstrates the mechanics on a small teaching dataset. For a real project, compare against a baseline, use a validation strategy that matches how predictions will be made, and keep the final test data out of model selection.</p>
        </section>
      </article>
    </div>`;

  document.getElementById("dataset-content").innerHTML = renderDataset(isImbalance);
  document.getElementById("python-code").textContent = guide.code;
  const codeButton = document.getElementById("copy-code");
  codeButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(guide.code);
    codeButton.textContent = "Copied";
  });
  document.getElementById("download-code").addEventListener("click", () => {
    const file = new Blob([guide.code], { type: "text/x-python" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = `${slug.replace(/[^a-z0-9-]+/gi, "-")}.py`;
    link.click();
    URL.revokeObjectURL(link.href);
  });
  const datasetButton = document.getElementById("download-dataset");
  if (datasetButton) {
    datasetButton.addEventListener("click", () => {
      const csv = [customerDataset.columns, ...customerDataset.rows]
        .map(row => row.map(value => value === null ? "" : `"${String(value).replace(/"/g, '""')}"`).join(","))
        .join("\r\n");
      const file = new Blob([csv], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = "ml-field-guide-customers.csv";
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }
}

renderLesson();
