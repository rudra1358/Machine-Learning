export const topicDetails = {
  csv: {
    subtopics: ["Headers and column names", "Delimiters and quoting", "Missing-value markers", "Data types and encodings"],
    settings: ["sep: field delimiter", "encoding: text encoding", "na_values: strings to parse as missing"]
  },
  jsonSql: {
    subtopics: ["Nested JSON normalization", "SQLite tables", "SQL filtering and aggregation"],
    settings: ["sep: separator for flattened nested keys", "SQL: select only needed columns and rows"]
  },
  api: {
    subtopics: ["HTTP response validation", "Pagination", "Nested JSON normalization", "Rate limits"],
    settings: ["timeout: request time limit", "page size: records requested per page"]
  },
  scrape: {
    subtopics: ["HTML tables", "DOM selectors", "Ethical and permitted scraping"],
    settings: ["parser: HTML parser to use", "CSS selector: permitted page elements to extract"]
  },
  summary: {
    subtopics: ["Numeric summaries", "Categorical frequency counts", "Missing-value counts"],
    settings: ["include: choose numeric, categorical, or all column summaries"]
  },
  univariate: {
    subtopics: ["Histogram", "Quantiles and spread", "Skew and unusual values"],
    settings: ["bins: number of histogram intervals"]
  },
  bivariate: {
    subtopics: ["Scatter plots", "Correlation", "Association versus causation"],
    settings: ["x and y: choose variables that answer a specific question"]
  },
  profile: {
    subtopics: ["Column types and distributions", "Missingness and duplicates", "Pairwise relationships"],
    settings: ["explorative: include additional pairwise analysis"]
  },
  completeCase: {
    subtopics: ["Listwise deletion", "Missingness patterns", "Retained-sample bias"],
    settings: ["subset: columns that must be complete"]
  },
  numericImpute: {
    subtopics: ["Mean imputation", "Median imputation", "Constant-value imputation"],
    settings: ["strategy: median, mean, or constant; fit on training data"]
  },
  categoryImpute: {
    subtopics: ["Most-frequent category", "Explicit missing category", "Missingness indicators"],
    settings: ["strategy: most_frequent or constant"]
  },
  missingIndicator: {
    subtopics: ["Missingness flags", "Imputation plus indicator", "Informative missingness"],
    settings: ["features: select which columns receive missingness flags"]
  },
  knnImpute: {
    subtopics: ["Distance-based neighbors", "Feature scaling", "Uniform versus distance weighting"],
    settings: ["n_neighbors: number of nearby rows", "weights: uniform or distance"]
  },
  iterativeImpute: {
    subtopics: ["Initial imputation", "Feature-by-feature prediction", "Repeated rounds"],
    settings: ["max_iter: imputation rounds", "estimator: model used to predict missing values"]
  },
  scale: {
    subtopics: ["Standardization (z-score)", "Min-max scaling", "Robust scaling"],
    settings: ["feature_range: output range for min-max scaling", "with_mean / with_std: standardization options"]
  },
  ordinal: {
    subtopics: ["Ordinal categories", "Explicit category order", "Unknown-category handling"],
    settings: ["categories: define the true order; do not rank nominal categories"]
  },
  onehot: {
    subtopics: ["One binary column per category", "Unknown-category handling", "Dropped reference category"],
    settings: ["handle_unknown: behavior for unseen categories", "drop: optional reference category"]
  },
  columnTransformer: {
    subtopics: ["Numeric pipelines", "Categorical pipelines", "Column selection and combination"],
    settings: ["remainder: drop or pass through unlisted columns", "transformer weights: optional group weighting"]
  },
  pipeline: {
    subtopics: ["Sequential preprocessing", "Estimator chaining", "Leakage-safe cross-validation"],
    settings: ["step order: fit preprocessing before the estimator", "memory: optional caching for expensive transforms"]
  },
  functionTransform: {
    subtopics: ["Feature functions", "Log and power mappings", "Shape-preserving transformations"],
    settings: ["func: deterministic transformation", "validate: check input shape and type"]
  },
  power: {
    subtopics: ["Yeo-Johnson transform", "Box-Cox transform", "Skew diagnostics"],
    settings: ["method: yeo-johnson or box-cox", "standardize: scale transformed output"]
  },
  binning: {
    subtopics: ["Equal-width bins", "Quantile bins", "Domain-defined thresholds", "Binarization"],
    settings: ["bins: interval boundaries", "right/include_lowest: boundary behavior"]
  },
  mixed: {
    subtopics: ["Numeric imputation and scaling", "Categorical imputation and encoding", "ColumnTransformer plus estimator"],
    settings: ["numeric strategy: median in this example", "categorical strategy: most frequent", "handle_unknown: ignore unseen categories"]
  },
  dates: {
    subtopics: ["Calendar features", "Elapsed time", "Cyclical encodings", "Time-aware leakage checks"],
    settings: ["unit: date component or elapsed-time unit", "period: cycle length for sine/cosine encoding"]
  },
  zscore: {
    subtopics: ["Mean and standard deviation", "Z-score thresholds", "Review versus automatic removal"],
    settings: ["threshold: standard deviations from the mean"]
  },
  iqr: {
    subtopics: ["First and third quartiles", "Interquartile range", "Tukey fences"],
    settings: ["factor: fence multiplier, commonly 1.5"]
  },
  percentile: {
    subtopics: ["Lower-tail threshold", "Upper-tail threshold", "Domain-based cutoffs"],
    settings: ["lower / upper quantile: choose justified tail cutoffs"]
  },
  feature: {
    subtopics: ["Ratios and interactions", "Parsing or splitting fields", "Domain-specific features"],
    settings: ["feature formula: use only information available at prediction time"]
  },
  pca: {
    subtopics: ["Principal components", "Explained variance", "Dimensionality reduction"],
    settings: ["n_components: number or variance fraction to retain", "whiten: optional component rescaling"]
  },
  linear: {
    subtopics: ["Slope and intercept", "Residuals", "Simple versus multiple regression"],
    settings: ["fit_intercept: include a constant term", "positive: optionally constrain coefficients"]
  },
  regressionMetrics: {
    subtopics: ["MAE", "RMSE", "R-squared", "Baseline comparison"],
    settings: ["Choose a metric that reflects error costs; compute baselines from training targets only"]
  },
  multipleLinear: {
    subtopics: ["Multiple predictors", "Coefficient interpretation", "Multicollinearity and residual checks"],
    settings: ["fit_intercept: include a constant term", "feature selection and scaling should be fit within training folds"]
  },
  gradientDescent: {
    subtopics: ["Batch gradient descent", "Learning rate", "Loss and parameter updates"],
    settings: ["learning rate: update step size", "iterations: number of update rounds"]
  },
  gradientTypes: {
    subtopics: ["Batch: all training rows per update", "Stochastic: one row per update", "Mini-batch: a small group per update"],
    settings: ["batch size: rows per update", "learning rate: update step size", "epochs: passes over the training data"]
  },
  polynomial: {
    subtopics: ["Polynomial powers", "Feature interactions", "Degree selection and overfitting"],
    settings: ["degree: highest polynomial power (2 in this example)", "include_bias: add a constant feature"]
  },
  ridge: {
    subtopics: ["L2 regularization", "Coefficient shrinkage", "Alpha selection"],
    settings: ["alpha: regularization strength (1.0 in this example)", "fit_intercept: include a constant term"]
  },
  lasso: {
    subtopics: ["L1 regularization", "Sparse coefficients", "Feature selection and stability"],
    settings: ["alpha: regularization strength (10.0 in this example)", "max_iter: optimization limit (10,000 in this example)"]
  },
  elasticNet: {
    subtopics: ["L1 and L2 regularization", "Sparse coefficient shrinkage", "Correlated predictors"],
    settings: ["alpha: overall penalty strength (10.0 in this example)", "l1_ratio: L1/L2 balance (0.5 in this example)", "max_iter: optimization limit (10,000 in this example)"]
  },
  logistic: {
    subtopics: ["Logistic function and probabilities", "Decision boundary", "Regularization and class weighting"],
    settings: ["C: inverse regularization strength", "solver: optimization algorithm", "class_weight: optional class weighting", "max_iter: optimization iteration limit"]
  },
  classMetrics: {
    subtopics: ["Confusion matrix", "Precision and recall", "F1 score", "Per-class support"],
    settings: ["pos_label: class treated as positive", "zero_division: behavior when a metric denominator is zero"]
  },
  threshold: {
    subtopics: ["Predicted probabilities", "Decision threshold", "Precision-recall trade-off"],
    settings: ["threshold: probability cutoff; select on validation data"]
  },
  randomForest: {
    subtopics: ["Bootstrap sampling", "Feature subsampling", "Tree aggregation"],
    settings: ["n_estimators: number of trees (100 in this example)", "max_depth: maximum tree depth", "min_samples_leaf: minimum rows per leaf", "max_features: candidate features per split"]
  },
  adaboost: {
    subtopics: ["Weak learners", "Example reweighting", "Sequential ensemble voting"],
    settings: ["n_estimators: number of learners (30 in this example)", "learning_rate: contribution of each learner", "estimator: decision stump (depth 1) in this example"]
  },
  stacking: {
    subtopics: ["Base estimators", "Out-of-fold predictions", "Meta-estimator", "Holdout blending"],
    settings: ["estimators: base models", "final_estimator: model combining predictions", "cv: folds for out-of-fold predictions"]
  },
  gradientBoosting: {
    subtopics: ["Sequential residual fitting", "Shallow decision trees", "Learning-rate and tree-count trade-off"],
    settings: ["n_estimators: boosting stages (50 in this example)", "learning_rate: contribution per stage (0.05 in this example)", "max_depth: tree complexity", "subsample: rows per stage"]
  },
  kmeans: {
    subtopics: ["Centroid initialization", "Nearest-centroid assignment", "Centroid updates", "Choosing K"],
    settings: ["n_clusters: number of groups (3 in this example)", "init: centroid initialization", "n_init: independent initializations (10 in this example)", "max_iter: iteration limit"]
  },
  featureTarget: {
    subtopics: ["Feature matrix X", "Target vector y", "Prediction-time availability", "Leakage checks"],
    settings: ["Choose features known at prediction time; exclude identifiers and target-derived fields"]
  },
  split: {
    subtopics: ["Training set", "Validation set", "Final test set", "Stratified or chronological splits"],
    settings: ["test_size / validation_size: partition proportions", "random_state: repeatable random split", "stratify: preserve class proportions"]
  },
  leakage: {
    subtopics: ["Preprocessing leakage", "Target leakage", "Entity or time overlap"],
    settings: ["Split before fitting transforms; use pipelines and prediction-time feature audits"]
  },
  baseline: {
    subtopics: ["Mean or median regression baseline", "Majority-class baseline", "Simple domain rule"],
    settings: ["strategy: baseline rule", "Evaluate with the same split and metric as candidate models"]
  },
  crossValidation: {
    subtopics: ["K-fold validation", "Stratified folds", "Group-aware folds", "Time-series folds"],
    settings: ["n_splits: fold count", "shuffle / random_state: random-fold behavior", "scoring: metric to compare"]
  },
  tuning: {
    subtopics: ["Grid search", "Randomized search", "Cross-validation", "Final test evaluation"],
    settings: ["param_grid: candidate values", "cv: validation folds", "scoring: selection metric", "n_jobs: parallel workers"]
  },
  imbalance: {
    subtopics: ["Class weights", "Resampling within training folds", "Minority-aware metrics", "Threshold tuning"],
    settings: ["class_weight: balance class penalties", "sampling ratio: resampling target", "decision threshold: tune on validation data"]
  },
  deployment: {
    subtopics: ["Serialize the full pipeline", "Input schema validation", "Serving predictions", "Drift and outcome monitoring"],
    settings: ["artifact version: model and preprocessing version", "input schema: required fields and types", "monitor: latency, errors, drift, and outcomes"]
  },
  reproducibility: {
    subtopics: ["Random seeds", "Data and code versions", "Environment and parameter records"],
    settings: ["random_state: seed stochastic operations", "Record package versions and data/model settings"]
  },
  featureSelection: {
    subtopics: ["Filter methods", "Wrapper methods", "Embedded selection", "Selection within cross-validation"],
    settings: ["k: selected feature count", "score_func: feature scoring rule", "Fit selection inside each training fold"]
  },
  timeSplit: {
    subtopics: ["Chronological holdout", "Expanding-window validation", "Rolling-window validation"],
    settings: ["n_splits: forward validation folds", "test_size: future observations per fold", "gap: optional separation between train and validation"]
  }
};

export const subtopicExplanations = {
  csv: [
    "The first row often labels what each column represents.",
    "Separators and quoted fields control how text becomes cells.",
    "Tell pandas which strings should be interpreted as missing values.",
    "Correct types and text encodings prevent parsing mistakes."
  ],
  jsonSql: [
    "Nested records are flattened so fields can become DataFrame columns.",
    "SQLite lets you practice relational queries without setting up a database server.",
    "SQL filters or summarizes rows before further analysis."
  ],
  api: [
    "Check status and response structure before trusting returned records.",
    "Fetch multiple result pages when the API limits each response.",
    "Flatten nested response fields into analysis-ready columns.",
    "Respect service limits and retry guidance rather than sending unlimited requests."
  ],
  scrape: [
    "HTML table rows and cells can be converted into records.",
    "Selectors target specific page elements for extraction.",
    "Check site terms, robots guidance, and applicable law before collecting pages."
  ],
  summary: [
    "Numeric summaries describe ranges, centers, and spread.",
    "Frequency counts show which categories occur and how often.",
    "Missing-value counts reveal incomplete columns and records."
  ],
  univariate: [
    "A histogram groups one feature into intervals to show its shape.",
    "Quantiles summarize position and spread without relying only on the mean.",
    "Skew and tails can signal useful transformations or values needing investigation."
  ],
  bivariate: [
    "Scatter plots show paired numeric observations and possible patterns.",
    "Correlation summarizes the direction and strength of a linear association.",
    "Two variables moving together does not prove that one causes the other."
  ],
  profile: [
    "A profile report summarizes inferred types and individual-column patterns.",
    "Missing cells and duplicate records are common data-quality checks.",
    "Pairwise summaries can suggest relationships that deserve closer analysis."
  ],
  scale: [
    "Standardization centers values and measures them in standard deviations.",
    "Min-max scaling maps values into a chosen bounded range.",
    "Robust scaling uses medians and quantiles, making it less sensitive to extremes."
  ],
  ordinal: [
    "Ordinal encoding is appropriate only when categories have a meaningful order.",
    "Specify the real category order instead of relying on alphabetical order.",
    "Decide how a fitted encoder should handle categories not seen during training."
  ],
  onehot: [
    "Each category gets its own binary feature column.",
    "An explicit policy prevents unseen categories from breaking prediction.",
    "Dropping a reference column can reduce redundancy in some linear models."
  ],
  columnTransformer: [
    "Numeric columns can receive imputation or scaling steps.",
    "Categorical columns can receive imputation and one-hot encoding.",
    "The transformer combines each processed column group for the estimator."
  ],
  pipeline: [
    "Sequential steps fit and apply preprocessing before model training.",
    "A final estimator consumes transformed features to make predictions.",
    "Cross-validation refits the whole pipeline inside each training fold."
  ],
  functionTransform: [
    "A feature function maps inputs to a repeatable transformed representation.",
    "Log and power mappings can reduce skew when their domain assumptions hold.",
    "A transformer should preserve compatible row and feature shapes for later steps."
  ],
  power: [
    "Yeo-Johnson can transform positive, zero, or negative values.",
    "Box-Cox requires strictly positive input values.",
    "Skew diagnostics compare distribution shape before and after transformation."
  ],
  binning: [
    "Equal-width bins divide the numeric range into intervals of the same size.",
    "Quantile bins aim for similar numbers of observations in each interval.",
    "Domain thresholds use meaningful cut points chosen for the problem.",
    "Binarization converts values into indicators based on a threshold."
  ],
  mixed: [
    "Numeric columns often need numeric imputation and may need scaling.",
    "Categorical columns need category-aware imputation and encoding.",
    "A ColumnTransformer combines these branches before the estimator."
  ],
  dates: [
    "Calendar features include components such as month, weekday, or hour.",
    "Elapsed time measures duration from a meaningful reference point.",
    "Sine and cosine features encode repeating cycles without an artificial boundary.",
    "Only information available at the prediction timestamp may be used."
  ],
  completeCase: [
    "Listwise deletion removes any row missing a required field.",
    "A missingness pattern shows which columns and groups lose observations.",
    "The retained sample may differ systematically from the original dataset."
  ],
  numericImpute: [
    "Mean imputation is simple but can be sensitive to extreme values.",
    "Median imputation is more robust for skewed numeric features.",
    "A constant can represent a known sentinel or domain-specific replacement."
  ],
  categoryImpute: [
    "The most-frequent value fills gaps with the training-set mode.",
    "An explicit missing label preserves absence as its own category.",
    "A separate indicator can mark that the original value was missing."
  ],
  missingIndicator: [
    "A binary flag records whether a value was absent before imputation.",
    "Combining a flag with imputation supplies both a filled value and absence signal.",
    "Missingness may reflect a real process, but validate that signal on held-out data."
  ],
  knnImpute: [
    "Nearby complete rows provide candidate values for a missing feature.",
    "Scaling matters because distance calculations are affected by feature units.",
    "Uniform weighting averages neighbors equally; distance weighting favors closer rows."
  ],
  iterativeImpute: [
    "An initial strategy supplies temporary values so modeling can begin.",
    "Each incomplete feature is predicted from the other available features.",
    "Repeated rounds update estimates until the limit or stopping condition is reached."
  ],
  zscore: [
    "The mean and standard deviation describe center and spread under a distributional assumption.",
    "A z-score counts how many standard deviations a value is from the mean.",
    "A flagged value is a review candidate, not an automatic deletion."
  ],
  iqr: [
    "The first and third quartiles mark the lower and upper quarters of the data.",
    "The interquartile range is the difference between those quartiles.",
    "Tukey fences extend beyond the quartiles to flag unusual observations."
  ],
  percentile: [
    "A lower-tail threshold identifies unusually small values.",
    "An upper-tail threshold identifies unusually large values.",
    "Domain knowledge should justify cutoffs before they are used to alter data."
  ],
  feature: [
    "Ratios and interactions express relationships between existing columns.",
    "Parsing or splitting fields turns compound values into usable components.",
    "Domain-specific features encode useful knowledge while remaining available at prediction time."
  ],
  pca: [
    "Principal components are new, orthogonal combinations of original features.",
    "Explained variance measures how much variation each component retains.",
    "Dimensionality reduction keeps fewer components, trading detail for compactness."
  ],
  linear: [
    "The slope describes expected target change per predictor unit; the intercept is the baseline.",
    "Residuals are differences between observed and predicted target values.",
    "Simple regression has one predictor; multiple regression uses several."
  ],
  regressionMetrics: [
    "MAE is the average absolute prediction error in target units.",
    "RMSE penalizes larger errors more strongly by squaring them first.",
    "R-squared compares model fit with a mean-prediction reference and can be negative on test data.",
    "A baseline checks whether a model improves on a simple training-only rule."
  ],
  multipleLinear: [
    "Several predictors contribute to one numeric prediction.",
    "A coefficient describes an estimated contribution while other inputs are held fixed.",
    "Correlated predictors and residual patterns can make coefficients unstable or signal poor fit."
  ],
  gradientDescent: [
    "Batch gradient descent computes each update using the full training dataset.",
    "The learning rate controls how large each parameter update is.",
    "The loss measures prediction error; gradients guide repeated parameter updates."
  ],
  gradientTypes: [
    "Batch updates use every training row, usually making each step less noisy.",
    "Stochastic updates use one row, so steps are fast but noisy.",
    "Mini-batch updates use a small group to balance computation and update stability."
  ],
  polynomial: [
    "Powers of input features let a linear estimator represent curved patterns.",
    "Interactions add product terms to model combined feature effects.",
    "Higher degree increases flexibility but can overfit, so compare validation performance."
  ],
  ridge: [
    "L2 regularization penalizes large coefficients smoothly.",
    "Shrinkage reduces coefficient magnitude and can improve generalization.",
    "Alpha controls penalty strength and should be selected with validation or cross-validation."
  ],
  lasso: [
    "L1 regularization penalizes the absolute size of coefficients.",
    "The penalty can set some coefficients exactly to zero.",
    "Selected features can be unstable when predictors are correlated, so validate selection."
  ],
  elasticNet: [
    "Elastic Net combines absolute-value and squared-coefficient penalties.",
    "The combined penalty can shrink coefficients and set some to zero.",
    "Its L1/L2 balance can help when predictors are correlated."
  ],
  logistic: [
    "The logistic function maps a model score to a probability between zero and one.",
    "The decision boundary separates predicted classes at a chosen probability threshold.",
    "Regularization limits coefficient size; class weighting can emphasize rare classes."
  ],
  classMetrics: [
    "The confusion matrix counts correct and incorrect predictions by actual and predicted class.",
    "Precision measures how many predicted positives are correct; recall measures how many actual positives were found.",
    "F1 combines precision and recall using their harmonic mean.",
    "Per-class support is the number of actual examples for each class."
  ],
  threshold: [
    "Predicted probabilities express model confidence before converting to classes.",
    "The decision threshold determines when a probability becomes a positive prediction.",
    "Lower or higher thresholds trade precision against recall; choose using validation data."
  ],
  randomForest: [
    "Bootstrap samples train trees on different resampled versions of the training data.",
    "Feature subsampling makes trees less alike by limiting split candidates.",
    "Aggregation combines tree outputs, by voting for classification or averaging for regression."
  ],
  adaboost: [
    "Weak learners are simple models that perform only modestly better than chance.",
    "Training increases attention to examples that earlier learners predicted poorly.",
    "Weighted voting combines the sequence of learners into a final prediction."
  ],
  stacking: [
    "Base estimators make diverse predictions from the same input.",
    "Out-of-fold predictions give the meta-model training features without reusing in-fold labels.",
    "The meta-estimator learns how to combine base-model outputs.",
    "Holdout blending trains the combiner on a separate validation subset."
  ],
  gradientBoosting: [
    "Each new learner is fit to reduce the current ensemble's remaining errors.",
    "Shallow trees provide small corrective steps and help control model complexity.",
    "More trees can be balanced with a smaller learning rate and validation checks."
  ],
  kmeans: [
    "Initialization chooses starting centroid locations and can affect the final clusters.",
    "Each row is assigned to its closest centroid under the chosen distance.",
    "Centroids are recomputed from assigned rows until convergence or the iteration limit.",
    "K is the number of groups and must be chosen or compared using domain checks."
  ],
  featureTarget: [
    "X contains the input columns used to make predictions.",
    "y contains the outcome the model is trained to predict.",
    "Inputs must be known at the moment a real prediction is made.",
    "Identifiers or target-derived values can leak the answer into the inputs."
  ],
  split: [
    "Training rows fit preprocessing and model parameters.",
    "Validation rows guide model and threshold choices.",
    "Test rows provide a final evaluation and should not guide model selection.",
    "Stratified splits preserve class ratios; chronological splits preserve time order."
  ],
  leakage: [
    "Preprocessing leakage occurs when transforms learn from validation or test rows.",
    "Target leakage occurs when an input contains information derived from the answer.",
    "Entity or time overlap can make evaluation unrealistically easy."
  ],
  baseline: [
    "A regression baseline can predict a training-set mean or median.",
    "A classification baseline can always predict the most frequent training class.",
    "A simple domain rule can provide a useful minimum-performance comparison."
  ],
  crossValidation: [
    "K-fold validation rotates held-out folds across the training data.",
    "Stratified folds aim to preserve class proportions in classification.",
    "Group-aware folds keep related entities together across train and validation.",
    "Time-series folds train on earlier rows and validate on later rows."
  ],
  tuning: [
    "Grid search tests every specified parameter combination.",
    "Randomized search samples combinations and can cover wide ranges more efficiently.",
    "Cross-validation scores each candidate on multiple training folds.",
    "The final test set is used only after choosing settings."
  ],
  imbalance: [
    "Class weights increase the penalty for errors on underrepresented classes.",
    "Resampling changes class counts and must happen only inside training folds.",
    "Precision, recall, and PR-oriented metrics reveal minority-class performance.",
    "Threshold tuning changes the false-positive/false-negative trade-off."
  ],
  deployment: [
    "Saving the full pipeline keeps learned preprocessing with the estimator.",
    "Schema checks catch missing, extra, or wrongly typed prediction inputs.",
    "Serving code applies the artifact to new records and returns predictions.",
    "Monitoring checks operational health, changing inputs, and outcomes when labels arrive."
  ],
  reproducibility: [
    "Seeds make many randomized operations repeatable within a fixed environment.",
    "Data and code versions identify exactly what produced an experiment.",
    "Package versions and model settings help reproduce and compare results."
  ],
  featureSelection: [
    "Filter methods rank features using a statistic before model fitting.",
    "Wrapper methods compare feature subsets by repeatedly fitting a model.",
    "Embedded methods select or shrink features during model training.",
    "Selection must be refit inside each cross-validation training fold."
  ],
  timeSplit: [
    "Chronological holdout trains on earlier observations and tests on later ones.",
    "Expanding windows keep all past data and grow the training period over time.",
    "Rolling windows use a moving fixed-length history to reflect recent conditions."
  ]
};

export const sampleOutputs = {
  csv: `    age   income  visits   city   plan  purchased  revenue  event_date
0  22.0  32000.0       2  North  basic          0       85  2025-01-03
1  28.0  42000.0       4  South  basic          0      120  2025-01-05
...`,
  jsonSql: `   spend customer.city
0    120         North
1    210         South

    city  avg_revenue
0    NaN       550.00
1   East       353.33
...`,
  api: `    id   city  metrics_visits
0  101  North               5
1  102  South               8`,
  scrape: `  city  revenue
0 North       85
1 South      120
2  East      640
...`,
  summary: `Missing values by column:
age           1
income        1
city          1
visits        0
...`,
  univariate: `count       11.000000
mean     58454.545455
std      16391.239345
min      32000.000000
...

[A histogram of annual income is displayed.]`,
  bivariate: `           visits   revenue
visits   1.000000  0.926556
revenue  0.926556  1.000000

[A scatter plot of visits versus revenue is displayed.]`,
  profile: `Open customer-profile.html to inspect the report.`,
  scale: `Standardized first row: [-1.77 -1.77 -1.65]
Min-max first row:     [0. 0. 0.]`,
  ordinal: `    plan  plan_rank
0  basic        0.0
1  basic        0.0
2    pro        1.0
...`,
  onehot: `   city_East  city_North  city_South  city_West
0          0           1           0          0
1          0           0           1          0
...`,
  columnTransformer: `Transformed shape: (12, 9)`,
  pipeline: `Test R2: 0.886`,
  functionTransform: `   log_income
0   10.373522
1   10.645449
2   11.018646
3   11.238502
4   10.571343`,
  power: `Before skew: -0.09
After skew:  -0.11`,
  binning: `    age age_band  visits  high_visits
0  22.0    young       2            0
1  28.0    adult       4            0
...`,
  mixed: `Test accuracy: 1.0`,
  dates: `  event_date  month  weekday  day_of_year_sin
0 2025-01-03      1        4         0.051620
1 2025-01-05      1        6         0.085965
...`,
  completeCase: `Rows before: 12
Rows after:  9
    age   income   city
0  22.0  32000.0  North
...`,
  numericImpute: `    income
0  32000.0
1  42000.0
...
Training median: 59000.0`,
  categoryImpute: `    city
0  North
1  South
...
Most common city: East`,
  missingIndicator: `     income  income_was_missing
8   57000.0                   0
9   59000.0                   1
10  72000.0                   0
11  59000.0                   0`,
  knnImpute: `     age  income  visits
0  -1.70   -1.69   -1.65
1  -0.79   -1.05   -0.99
...`,
  iterativeImpute: `     age   income  visits
0   22.0  32000.0     2.0
...
8   32.9  57000.0     7.0
9   29.0  47445.3     5.0
...`,
  zscore: `Review these candidates; do not delete them automatically:
Empty DataFrame
Columns: [income]
Index: []`,
  iqr: `IQR candidate outliers:
   income
9     NaN`,
  percentile: `Review values outside [35500, 80500]:
    income
0  32000.0
7  85000.0
...`,
  feature: `   revenue  visits  revenue_per_visit customer_segment
0       85       2               42.5      North_basic
1      120       4               30.0      South_basic
...`,
  pca: `Explained variance: [0.983 0.011]
        PC1       PC2
0 -2.999887 -0.069631
...`,
  linear: `Slope: 97.66
Test R2: 0.892`,
  regressionMetrics: `MAE:  330.56
RMSE: 335.49
R2:   -0.257`,
  multipleLinear: `Test R2: -4.896
Coefficients: [-1.1747e+02  1.0000e-01 -1.6358e+02]`,
  gradientDescent: `Learned weight and bias: 274.97 453.75`,
  gradientTypes: `batch learned weight: 0.93
stochastic learned weight: 0.926
mini-batch learned weight: 0.927`,
  polynomial: `Polynomial test R2: 0.923`,
  ridge: `Ridge test R2: 0.831`,
  lasso: `Lasso test R2: 0.619`,
  elasticNet: `Elastic Net test R2: 0.481`,
  logistic: `Predicted purchase probabilities: [0.95 0.47 0.64]`,
  classMetrics: `[[1 1]
 [0 1]]

              precision    recall  f1-score   support
           0       1.00      0.50      0.67         2
           1       0.50      1.00      0.67         1`,
  threshold: `0.3 [1 1 1]
0.5 [1 0 1]
0.7 [1 0 0]`,
  randomForest: `Random forest test accuracy: 0.67`,
  adaboost: `AdaBoost test accuracy: 0.67`,
  stacking: `Out-of-fold accuracy: [1.   1.   0.75]`,
  gradientBoosting: `Gradient boosting test accuracy: 0.67`,
  kmeans: `Cluster labels: [0 0 1 2 0 2 1 2 1 1 2 1]
Cluster sizes: {0: 3, 1: 5, 2: 4}`,
  featureTarget: `Feature columns: ['age', 'income', 'visits', 'city', 'plan']
Target values: [0, 1]
One feature row:
age          22.0
income    32000.0
...`,
  split: `Train / validation / test: 7 2 3`,
  leakage: `Leakage-safe fold scores: [1.   1.   0.75]`,
  baseline: `Mean baseline R2: -0.063
Linear model R2:  0.77`,
  crossValidation: `MAE in each fold: [109.8  84.  317.6]
Mean MAE: 170.5`,
  tuning: `Best settings: {'randomforestregressor__max_depth': 4, 'randomforestregressor__n_estimators': 60}
Best CV MAE: 95.82`,
  imbalance: `              precision    recall  f1-score   support

           0       0.94      0.88      0.91       115
           1       0.22      0.40      0.29        10

    accuracy                           0.84       125`,
  deployment: `Prediction: 484.69
Income median shift: 1000.0`,
  reproducibility: `Repeatable test R2: 0.826`,
  featureSelection: `Feature-selection CV MAE: 117.44`,
  timeSplit: `Forward-only fold MAE: [ 37.4 193.   86. ]`
};
