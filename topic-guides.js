export const topicInfo = {
  "working with csv files": ["Load tabular files", "Read a CSV into a DataFrame, inspect its shape and columns, and check parsing options such as separators, encodings, and missing-value markers.", "Use when your dataset is provided as a CSV. Confirm the file loaded as expected before analysis."],
  "working-with-json-and-sql": ["Load structured data", "Read nested or record-based JSON and select relevant tables or rows with SQL before making an analysis-ready table.", "Use when data arrives as API-style JSON, exports, or relational database tables."],
  "api-to-dataframe": ["Collect data", "Request data from an API, check the response and pagination, then normalize records into a tabular DataFrame.", "Use when a documented API is the appropriate source; keep credentials private and respect usage limits."],
  "pandas-dataframe-using-web-scraping": ["Collect data", "Extract table-like information from web pages and turn it into a DataFrame.", "Use only when the site permits it and the data is not better obtained through an API."],
  "understanding-your-data-descriptive-stats": ["Understand data", "Summarize numeric ranges, categorical counts, spread, and missingness to spot data-quality issues and establish context.", "Use early, before deciding how to clean or model the data."],
  "univariate-analysis": ["Understand data", "Study one feature at a time using summaries and plots to understand its distribution, rare values, and possible errors.", "Use during initial exploration and when diagnosing skew or unusual values."],
  "bivariate-analysis": ["Understand data", "Explore how pairs of features relate, especially how candidate features relate to the target.", "Use to form hypotheses, not as proof of causation or a reason to tune on the test set."],
  "pandas-profiling": ["Understand data", "Generate a quick overview of column types, distributions, missingness, and pairwise patterns.", "Use as a first-pass survey, then verify important findings directly."],
  "normalization": ["Prepare data", "Rescale numeric features to a common range or scale so magnitude does not dominate a distance- or gradient-based method.", "Useful for K-means, KNN-style imputation, PCA, and many linear models. Usually unnecessary for tree ensembles."],
  "ordinal-encoding": ["Prepare data", "Map categories to ordered numbers when the categories have a meaningful order, such as small, medium, large.", "Use only when an ordering is real; arbitrary numeric codes can mislead models."],
  "one-hot-encoding": ["Prepare data", "Represent nominal categories as separate binary indicator columns.", "Use for unordered categories, particularly with linear models. Handle unseen categories through a pipeline encoder."],
  "column-transformer": ["Prepare data", "Apply different preprocessing steps to numeric, categorical, or other column groups in a single fitted transformer.", "Use when columns need different transformations; place it inside a Pipeline."],
  "sklearn-pipelines": ["Prepare data", "Chain preprocessing and an estimator so the same transformations are fitted correctly during training and applied consistently later.", "Use for nearly every model, especially during validation and cross-validation, to avoid leakage."],
  "function-transformer": ["Prepare data", "Wrap a custom feature function in a scikit-learn-compatible transformer.", "Use when a repeatable, custom transformation needs to live safely inside a pipeline."],
  "power-transformer": ["Prepare data", "Apply a learned transformation that can reduce skew and make numeric distributions more suitable for some models.", "Consider for skewed numeric features; fit on training data and compare validation results."],
  "binning-and-binarization": ["Build features", "Convert continuous ranges into buckets or values into binary indicators.", "Use when meaningful thresholds or a simpler nonlinear representation help; avoid arbitrary bins that discard useful detail."],
  "handling-mixed-variables": ["Prepare data", "Recognize that one table may contain numeric, nominal, ordinal, text-like, and date columns that each need different treatment.", "Use while designing the column-specific preprocessing pipeline."],
  "handling-date-and-time": ["Prepare data", "Parse dates and derive useful features such as month, weekday, elapsed time, or cyclical seasonality.", "Use when dates encode patterns relevant to the prediction time; prevent features from using future information."],
  "complete-case-analysis": ["Prepare data", "Remove rows with missing values instead of filling them in.", "Use only when the amount and pattern of missingness make row removal defensible; compare how many records and which groups are lost."],
  "imputing-numerical-data": ["Prepare data", "Fill missing numeric values with a training-fitted strategy such as a median or mean.", "Use when rows should be retained. Choose a strategy based on distributions and fit it within the pipeline."],
  "handling-missing-categorical-data": ["Prepare data", "Fill missing category values, for example with the most frequent category or an explicit missing label.", "Use when categorical features have missing values; decide whether missingness itself is informative."],
  "missing-indicator": ["Prepare data", "Add a feature that marks whether a value was missing before imputation.", "Use when the fact that a value is absent may carry information. Create it from training-fitted preprocessing."],
  "knn-imputer": ["Prepare data", "Estimate missing numeric values from nearby rows in feature space.", "Consider when relationships between numeric features are useful; scale first and account for added computation."],
  "iterative-imputer": ["Prepare data", "Estimate each incomplete feature using models fitted from the other features, iteratively.", "Consider when missing features have useful relationships; compare with simpler imputation and fit only on training data."],
  "outlier-removal-using-zscore": ["Prepare data", "Flag values unusually far from a mean in standard-deviation units.", "Use as a diagnostic under distributional assumptions; investigate flagged records before deciding what to do."],
  "outlier-removal-using-iqr-method": ["Prepare data", "Flag observations outside fences based on the interquartile range.", "Use for exploratory robust flagging, not automatic deletion; extreme valid cases may matter."],
  "outlier-detection-using-percentiles": ["Prepare data", "Flag values in extreme tails using selected percentiles.", "Use when tail cutoffs fit domain knowledge; choose cutoffs using training data and a clear rationale."],
  "feature-construction-and-feature-splitting": ["Build features", "Create useful columns from existing ones, or split compound values into meaningful components.", "Use when domain knowledge suggests a feature expresses the signal more clearly; preserve consistent train/inference logic."],
  "pca": ["Build features", "Compress correlated numeric features into a smaller number of variance-capturing components.", "Scale first and fit PCA within the training pipeline. Useful for dimensionality reduction, but components are less interpretable."],
  "simple-linear-regression": ["Train a model", "Model a numeric target from one feature with a straight-line relationship.", "Use as an easy-to-explain baseline when a single predictor is relevant."],
  "regression-metrics": ["Evaluate & improve", "Measure numeric prediction errors, using measures such as MAE, RMSE, or R².", "Choose metrics based on error costs and target scale; compare with a simple baseline."],
  "multiple-linear-regression": ["Train a model", "Extend linear regression to use multiple features.", "Use as an interpretable numeric baseline; inspect assumptions and overfitting."],
  "gradient-descent": ["Train a model", "Optimize model parameters iteratively by moving in the direction that reduces a loss function.", "Learn the optimization mechanism used by many estimators; it is not itself a model family."],
  "types-of-gradient-descent": ["Train a model", "Compare batch, stochastic, and mini-batch updates, which use different amounts of data per optimization step.", "Use to understand training behavior and efficiency in iterative optimization."],
  "polynomial-regression": ["Build features", "Add powers or interactions of input features, then fit a linear model to capture curved patterns.", "Try when residuals suggest nonlinearity; control complexity and compare on validation data."],
  "regularized-linear-models": ["Train a model", "Penalize overly large coefficients to reduce variance and improve generalization.", "Consider when features are numerous or correlated; scale features and tune regularization using training validation."],
  "lasso-regression": ["Train a model", "Use L1 regularization for numeric prediction; it can shrink some coefficients to zero.", "Consider when a sparse linear model is useful. Scale features and tune the penalty without touching test data."],
  "elasticnet-regression": ["Train a model", "Combine L1 and L2 penalties for numeric prediction.", "Consider when features are correlated and a balance of shrinkage and sparsity is useful."],
  "logistic-regression": ["Train a model", "Estimate class probabilities with a linear decision boundary, despite the word regression in its name.", "A strong interpretable classification baseline; scale numeric features and assess class balance."],
  "classification-metrics": ["Evaluate & improve", "Measure class predictions using a confusion matrix and metrics such as precision, recall, F1, or ROC-AUC.", "Select metrics around the cost of false positives/negatives and class imbalance—not accuracy alone."],
  "logistic-regression-contd": ["Train a model", "Explore logistic regression details such as decision thresholds, regularization, and probability-based predictions.", "Use after understanding the basic classifier; choose thresholds on validation data for the real use case."],
  "random-forest": ["Train a model", "Average many decision trees trained on resampled data and feature subsets.", "Try as a nonlinear tabular baseline; scaling is usually unnecessary, but validate generalization."],
  "adaboost": ["Train a model", "Build an ensemble that sequentially focuses more on examples earlier learners handled poorly.", "Try for supervised classification or regression where supported; compare against a simple baseline."],
  "stacking-and-blending": ["Evaluate & improve", "Combine predictions from different base models with a second-level model or holdout blending.", "Use only after solid individual models. Generate training meta-features out of fold to prevent target leakage."],
  "gradient-boosting": ["Train a model", "Build trees sequentially, with each new tree helping reduce the current loss.", "Try for strong tabular prediction; tune complexity and learning rate using validation or cross-validation."],
  "kmeans": ["Train a model", "Partition observations into K groups around centroids by minimizing within-cluster distances.", "Use when there is no target and numeric, suitably scaled features make distance meaningful. Validate usefulness and sensitivity to K."],
  "adaboost_demo.ipynb": ["Train a model", "A notebook demonstration of AdaBoost and its training or prediction behavior.", "Use to accompany the AdaBoost topic; focus on the workflow and evaluate results on held-out data."],
  "day68-stacking": ["Evaluate & improve", "A stacking-focused lesson or exercise that combines predictions from multiple models.", "Use after learning model evaluation and cross-validation; prevent leakage when creating meta-model training data."],
  "feature-vs-target": ["Understand data", "Separate input features (X) from the target (y) you want to predict. Every feature must be available at prediction time.", "Do this before splitting or training. Never include the target, an identifier, or future information among input features."],
  "train-validation-test-split": ["Prepare data", "Reserve separate data for fitting, model selection, and a final unbiased evaluation.", "Split before learning preprocessing. Use stratification for classification and respect time/group structure when observations are dependent."],
  "data-leakage": ["Prepare data", "Leakage occurs when training or model selection uses information unavailable at prediction time or from the evaluation set.", "Audit feature timestamps, duplicate entities, preprocessing order, and target-derived fields before trusting any score."],
  "baseline-models": ["Train a model", "Compare a simple rule—such as predicting the training mean or majority class—with learned models.", "Establish a baseline before tuning. A complex model should improve a relevant validation metric."],
  "cross-validation": ["Evaluate & improve", "Repeatedly fit and score a model on different training/validation folds to estimate how results vary.", "Use on training data for model selection when data is limited; keep the final test set untouched."],
  "hyperparameter-tuning": ["Evaluate & improve", "Search settings chosen before fitting, such as tree depth or regularization strength, using validation or cross-validation.", "Tune inside the training process with a fixed scoring metric; never select settings from test-set results."],
  "class-imbalance": ["Prepare data", "Handle classification tasks where one class is much rarer than another, so accuracy can hide poor minority-class performance.", "Inspect class counts, use suitable metrics and thresholds, and compare class weights or resampling within training folds."],
  "model-deployment-and-monitoring": ["Evaluate & improve", "Package the fitted preprocessing and estimator together, serve predictions, and monitor input and outcome changes over time.", "Deploy only a validated pipeline. Track data quality, drift, latency, failures, and delayed ground-truth performance."],
  "reproducibility-and-random-seeds": ["Evaluate & improve", "Fix random seeds and record data, code, package versions, and model settings so experiments can be repeated.", "Use throughout development. Seeds improve repeatability but do not guarantee identical results across all hardware and library versions."],
  "feature-selection": ["Build features", "Select a useful subset of inputs to simplify a model or reduce noise and compute.", "Fit selection only on training folds, ideally inside a pipeline; compare validation performance and retain domain-relevant features."],
  "time-series-validation": ["Evaluate & improve", "Evaluate forecasting models in chronological order so training never includes observations from the future.", "Use when rows are time-ordered or observations depend on previous periods; prefer rolling or expanding windows over random splits."]
};

export const additionalTopics = [
  "feature-vs-target", "train-validation-test-split", "data-leakage",
  "baseline-models", "cross-validation", "hyperparameter-tuning",
  "class-imbalance", "model-deployment-and-monitoring",
  "reproducibility-and-random-seeds", "feature-selection", "time-series-validation"
].map(slug => ({
  slug,
  stage: {
    "feature-vs-target": "understand",
    "train-validation-test-split": "prepare",
    "data-leakage": "prepare",
    "baseline-models": "model",
    "cross-validation": "evaluate",
    "hyperparameter-tuning": "evaluate",
    "class-imbalance": "prepare",
    "model-deployment-and-monitoring": "evaluate",
    "reproducibility-and-random-seeds": "evaluate",
    "feature-selection": "features",
    "time-series-validation": "evaluate"
  }[slug],
  info: topicInfo[slug]
}));

export const customerDataset = {
  columns: ["age", "income", "visits", "city", "plan", "purchased", "revenue", "event_date"],
  rows: [
    [22, 32000, 2, "North", "basic", 0, 85, "2025-01-03"],
    [28, 42000, 4, "South", "basic", 0, 120, "2025-01-05"],
    [34, 61000, 8, "East", "pro", 1, 640, "2025-01-08"],
    [41, 76000, 10, "West", "pro", 1, 820, "2025-01-12"],
    [26, 39000, 3, "North", "pro", 0, 210, "2025-01-16"],
    [37, 68000, 9, "South", "pro", 1, 710, "2025-01-20"],
    [31, 52000, 6, "East", "basic", 0, 245, "2025-01-24"],
    [45, 85000, 12, "West", "pro", 1, 930, "2025-01-29"],
    [null, 57000, 7, "North", "basic", 0, 200, "2025-02-01"],
    [29, null, 5, "East", "basic", 0, 175, "2025-02-05"],
    [39, 72000, 11, "South", "pro", 1, 760, "2025-02-09"],
    [33, 59000, 7, null, "pro", 1, 550, "2025-02-14"]
  ]
};

const csv = `age,income,visits,city,plan,purchased,revenue,event_date
22,32000,2,North,basic,0,85,2025-01-03
28,42000,4,South,basic,0,120,2025-01-05
34,61000,8,East,pro,1,640,2025-01-08
41,76000,10,West,pro,1,820,2025-01-12
26,39000,3,North,pro,0,210,2025-01-16
37,68000,9,South,pro,1,710,2025-01-20
31,52000,6,East,basic,0,245,2025-01-24
45,85000,12,West,pro,1,930,2025-01-29
,57000,7,North,basic,0,200,2025-02-01
29,,5,East,basic,0,175,2025-02-05
39,72000,11,South,pro,1,760,2025-02-09
33,59000,7,,pro,1,550,2025-02-14`;

const preamble = `from io import StringIO
import pandas as pd

CSV = """${csv}"""
df = pd.read_csv(StringIO(CSV))
`;

const examples = {
  csv: `${preamble}
customers = pd.read_csv(StringIO(CSV))
print(customers.head())
print(customers.dtypes)`,
  jsonSql: `${preamble}
import json
import sqlite3

records = [
    {"customer": {"city": "North"}, "spend": 120},
    {"customer": {"city": "South"}, "spend": 210},
]
flat = pd.json_normalize(records)
print(flat)

connection = sqlite3.connect(":memory:")
df.to_sql("customers", connection, index=False, if_exists="replace")
result = pd.read_sql_query(
    "SELECT city, AVG(revenue) AS avg_revenue FROM customers GROUP BY city",
    connection,
)
print(result)`,
  api: `${preamble}
# A sample API response. Replace this list with response.json() from an API.
response_json = [
    {"id": 101, "city": "North", "metrics": {"visits": 5}},
    {"id": 102, "city": "South", "metrics": {"visits": 8}},
]
api_df = pd.json_normalize(response_json, sep="_")
print(api_df)`,
  scrape: `${preamble}
from bs4 import BeautifulSoup

# Use this local HTML example to learn parsing without making a network request.
html = df[["city", "revenue"]].fillna("").to_html(index=False)
soup = BeautifulSoup(html, "html.parser")
rows = [
    [cell.get_text(strip=True) for cell in row.find_all(["th", "td"])]
    for row in soup.select("tr")
]
scraped_df = pd.DataFrame(rows[1:], columns=rows[0])
print(scraped_df.head())`,
  summary: `${preamble}
print(df.describe(include="all").T)
print("\\nMissing values by column:")
print(df.isna().sum().sort_values(ascending=False))`,
  univariate: `${preamble}
import matplotlib.pyplot as plt

income = df["income"].dropna()
print(income.describe())
plt.hist(income, bins=6, edgecolor="white")
plt.xlabel("Annual income")
plt.ylabel("Customer count")
plt.title("Income distribution")
plt.show()`,
  bivariate: `${preamble}
import matplotlib.pyplot as plt

sample = df.dropna(subset=["visits", "revenue"])
plt.scatter(sample["visits"], sample["revenue"])
plt.xlabel("Visits")
plt.ylabel("Revenue")
plt.title("Visits and revenue")
plt.show()
print(sample[["visits", "revenue"]].corr())`,
  profile: `${preamble}
from ydata_profiling import ProfileReport

report = ProfileReport(df, title="Customer data profile", explorative=True)
report.to_file("customer-profile.html")
print("Open customer-profile.html to inspect the report.")`,
  completeCase: `${preamble}
required = ["age", "income", "city"]
complete = df.dropna(subset=required)
print(f"Rows before: {len(df)}")
print(f"Rows after:  {len(complete)}")
print(complete[required].head())`,
  numericImpute: `${preamble}
from sklearn.impute import SimpleImputer

imputer = SimpleImputer(strategy="median")
df[["income"]] = imputer.fit_transform(df[["income"]])
print(df[["income"]].head())
print("Training median:", imputer.statistics_[0])`,
  categoryImpute: `${preamble}
from sklearn.impute import SimpleImputer

imputer = SimpleImputer(strategy="most_frequent")
df[["city"]] = imputer.fit_transform(df[["city"]])
print(df[["city"]].head())
print("Most common city:", imputer.statistics_[0])`,
  missingIndicator: `${preamble}
df["income_was_missing"] = df["income"].isna().astype(int)
df["income"] = df["income"].fillna(df["income"].median())
print(df[["income", "income_was_missing"]].tail(4))`,
  knnImpute: `${preamble}
from sklearn.impute import KNNImputer
from sklearn.preprocessing import StandardScaler

numeric = df[["age", "income", "visits"]]
scaled = StandardScaler().fit_transform(numeric)
imputed = KNNImputer(n_neighbors=3).fit_transform(scaled)
print(pd.DataFrame(imputed, columns=numeric.columns).round(2))`,
  iterativeImpute: `${preamble}
from sklearn.experimental import enable_iterative_imputer  # noqa: F401
from sklearn.impute import IterativeImputer

numeric = df[["age", "income", "visits"]]
imputed = IterativeImputer(max_iter=10, random_state=42).fit_transform(numeric)
print(pd.DataFrame(imputed, columns=numeric.columns).round(1))`,
  scale: `${preamble}
from sklearn.preprocessing import StandardScaler, MinMaxScaler

numeric = df[["age", "income", "visits"]].fillna(df.median(numeric_only=True))
standard = StandardScaler().fit_transform(numeric)
unit_range = MinMaxScaler().fit_transform(numeric)
print("Standardized first row:", standard[0].round(2))
print("Min-max first row:    ", unit_range[0].round(2))`,
  ordinal: `${preamble}
from sklearn.preprocessing import OrdinalEncoder

# Here "basic" < "pro" is a deliberate domain ordering.
encoder = OrdinalEncoder(categories=[["basic", "pro"]])
df["plan_rank"] = encoder.fit_transform(df[["plan"]])
print(df[["plan", "plan_rank"]].head())`,
  onehot: `${preamble}
encoded = pd.get_dummies(df, columns=["city"], dtype=int)
print(encoded.filter(regex="^city_").head())`,
  columnTransformer: `${preamble}
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

numeric = make_pipeline(SimpleImputer(strategy="median"), StandardScaler())
categorical = make_pipeline(
    SimpleImputer(strategy="most_frequent"),
    OneHotEncoder(handle_unknown="ignore"),
)
preprocess = ColumnTransformer([
    ("numbers", numeric, ["age", "income", "visits"]),
    ("categories", categorical, ["city", "plan"]),
])
X = preprocess.fit_transform(df)
print("Transformed shape:", X.shape)`,
  pipeline: `${preamble}
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

X = df[["age", "income", "visits", "city", "plan"]]
y = df["revenue"]
numeric = make_pipeline(SimpleImputer(strategy="median"), StandardScaler())
categorical = make_pipeline(SimpleImputer(strategy="most_frequent"),
                            OneHotEncoder(handle_unknown="ignore"))
preprocess = ColumnTransformer([
    ("num", numeric, ["age", "income", "visits"]),
    ("cat", categorical, ["city", "plan"]),
])
model = make_pipeline(preprocess, LinearRegression())
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)
model.fit(X_train, y_train)
print("Test R²:", round(model.score(X_test, y_test), 3))`,
  functionTransform: `${preamble}
import numpy as np
from sklearn.preprocessing import FunctionTransformer

log_income = FunctionTransformer(np.log1p, validate=False)
income = df[["income"]]
transformed = log_income.fit_transform(income)
print(pd.DataFrame(transformed, columns=["log_income"]).head())`,
  power: `${preamble}
from sklearn.preprocessing import PowerTransformer

values = df[["income"]].dropna()
transformed = PowerTransformer(method="yeo-johnson").fit_transform(values)
print("Before skew:", round(values["income"].skew(), 2))
print("After skew: ", round(pd.Series(transformed[:, 0]).skew(), 2))`,
  binning: `${preamble}
df["age_band"] = pd.cut(
    df["age"], bins=[0, 25, 35, 100],
    labels=["young", "adult", "older"], include_lowest=True
)
df["high_visits"] = (df["visits"] >= 8).astype(int)
print(df[["age", "age_band", "visits", "high_visits"]].head())`,
  mixed: `${preamble}
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

numeric = make_pipeline(SimpleImputer(strategy="median"), StandardScaler())
categorical = make_pipeline(SimpleImputer(strategy="most_frequent"),
                            OneHotEncoder(handle_unknown="ignore"))
features = ColumnTransformer([
    ("num", numeric, ["age", "income", "visits"]),
    ("cat", categorical, ["city", "plan"]),
])
model = make_pipeline(features, LogisticRegression(max_iter=1000))
X = df[["age", "income", "visits", "city", "plan"]]
y = df["purchased"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)
model.fit(X_train, y_train)
print("Test accuracy:", round(model.score(X_test, y_test), 2))`,
  dates: `${preamble}
import numpy as np

df["event_date"] = pd.to_datetime(df["event_date"])
df["month"] = df["event_date"].dt.month
df["weekday"] = df["event_date"].dt.dayofweek
df["day_of_year_sin"] = np.sin(2 * np.pi * df["event_date"].dt.dayofyear / 365)
print(df[["event_date", "month", "weekday", "day_of_year_sin"]].head())`,
  zscore: `${preamble}
income = df["income"]
z_score = (income - income.mean()) / income.std()
flagged = df.loc[z_score.abs() > 3, ["income"]]
print("Review these candidates; do not delete them automatically:")
print(flagged)`,
  iqr: `${preamble}
q1, q3 = df["income"].quantile([0.25, 0.75])
spread = q3 - q1
lower, upper = q1 - 1.5 * spread, q3 + 1.5 * spread
flagged = df.loc[~df["income"].between(lower, upper), ["income"]]
print("IQR candidate outliers:")
print(flagged)`,
  percentile: `${preamble}
lower, upper = df["income"].quantile([0.05, 0.95])
tail_candidates = df.loc[~df["income"].between(lower, upper), ["income"]]
print(f"Review values outside [{lower:.0f}, {upper:.0f}]:")
print(tail_candidates)`,
  feature: `${preamble}
df["revenue_per_visit"] = df["revenue"] / df["visits"].clip(lower=1)
df["customer_segment"] = df["city"].fillna("Unknown") + "_" + df["plan"]
print(df[["revenue", "visits", "revenue_per_visit", "customer_segment"]].head())`,
  pca: `${preamble}
from sklearn.decomposition import PCA
from sklearn.impute import SimpleImputer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

numeric = df[["age", "income", "visits"]]
pca = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                    PCA(n_components=2))
components = pca.fit_transform(numeric)
print("Explained variance:", pca[-1].explained_variance_ratio_.round(3))
print(pd.DataFrame(components, columns=["PC1", "PC2"]).head())`,
  linear: `${preamble}
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer

X, y = df[["visits"]], df["revenue"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)
model = make_pipeline(SimpleImputer(strategy="median"), LinearRegression())
model.fit(X_train, y_train)
print("Slope:", round(model[-1].coef_[0], 2))
print("Test R²:", round(model.score(X_test, y_test), 3))`,
  regressionMetrics: `${preamble}
import numpy as np
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split

train_target, actual = train_test_split(
    df["revenue"], test_size=0.25, random_state=42
)
predicted = np.full(len(actual), train_target.mean())  # training-mean baseline
print("MAE: ", round(mean_absolute_error(actual, predicted), 2))
print("RMSE:", round(np.sqrt(mean_squared_error(actual, predicted)), 2))
print("R²:  ", round(r2_score(actual, predicted), 3))`,
  multipleLinear: `${preamble}
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline

X, y = df[["age", "income", "visits"]], df["revenue"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)
model = make_pipeline(SimpleImputer(strategy="median"), LinearRegression())
model.fit(X_train, y_train)
print("Test R²:", round(model.score(X_test, y_test), 3))
print("Coefficients:", model[-1].coef_.round(2))`,
  gradientDescent: `${preamble}
import numpy as np

x = df["visits"].to_numpy(dtype=float)
y = df["revenue"].to_numpy(dtype=float)
x = (x - x.mean()) / x.std()
weight, bias, learning_rate = 0.0, y.mean(), 0.01
for _ in range(2000):
    prediction = weight * x + bias
    weight -= learning_rate * (-2 * np.mean(x * (y - prediction)))
    bias -= learning_rate * (-2 * np.mean(y - prediction))
print("Learned weight and bias:", round(weight, 2), round(bias, 2))`,
  gradientTypes: `${preamble}
import numpy as np
from sklearn.linear_model import SGDRegressor
from sklearn.preprocessing import StandardScaler

X = StandardScaler().fit_transform(df[["visits"]])
y = df["revenue"].to_numpy(dtype=float)
y = (y - y.mean()) / y.std()

def train_with_batch_size(batch_size):
    model = SGDRegressor(max_iter=1, tol=None, learning_rate="constant",
                         eta0=0.01, random_state=42)
    sections = int(np.ceil(len(y) / batch_size))
    for _ in range(100):
        for batch in np.array_split(np.arange(len(y)), sections):
            model.partial_fit(X[batch], y[batch])
    return model

for name, size in [("batch", len(y)), ("stochastic", 1), ("mini-batch", 4)]:
    model = train_with_batch_size(size)
    print(name, "learned weight:", round(model.coef_[0], 3))`,
  polynomial: `${preamble}
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures

X, y = df[["visits"]], df["revenue"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)
model = make_pipeline(PolynomialFeatures(degree=2, include_bias=False),
                      LinearRegression())
model.fit(X_train, y_train)
print("Polynomial test R²:", round(model.score(X_test, y_test), 3))`,
  ridge: `${preamble}
from sklearn.impute import SimpleImputer
from sklearn.linear_model import Ridge
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X = df[["age", "income", "visits"]]
y = df["revenue"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(), Ridge(alpha=1.0))
model.fit(X_train, y_train)
print("Ridge test R²:", round(model.score(X_test, y_test), 3))`,
  lasso: `${preamble}
from sklearn.impute import SimpleImputer
from sklearn.linear_model import Lasso
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X = df[["age", "income", "visits"]]
y = df["revenue"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(), Lasso(alpha=10.0, max_iter=10000))
model.fit(X_train, y_train)
print("Lasso test R²:", round(model.score(X_test, y_test), 3))`,
  elasticNet: `${preamble}
from sklearn.impute import SimpleImputer
from sklearn.linear_model import ElasticNet
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X = df[["age", "income", "visits"]]
y = df["revenue"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                      ElasticNet(alpha=10.0, l1_ratio=0.5, max_iter=10000))
model.fit(X_train, y_train)
print("Elastic Net test R²:", round(model.score(X_test, y_test), 3))`,
  logistic: `${preamble}
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X, y = df[["age", "income", "visits"]], df["purchased"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                      LogisticRegression(max_iter=1000))
model.fit(X_train, y_train)
print("Predicted purchase probabilities:", model.predict_proba(X_test)[:, 1].round(2))`,
  classMetrics: `${preamble}
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X, y = df[["age", "income", "visits"]], df["purchased"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                      LogisticRegression(max_iter=1000))
model.fit(X_train, y_train)
predicted = model.predict(X_test)
print(confusion_matrix(y_test, predicted))
print(classification_report(y_test, predicted, zero_division=0))`,
  threshold: `${preamble}
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X, y = df[["age", "income", "visits"]], df["purchased"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                      LogisticRegression(max_iter=1000))
model.fit(X_train, y_train)
probability = model.predict_proba(X_test)[:, 1]
for threshold in [0.3, 0.5, 0.7]:
    print(threshold, (probability >= threshold).astype(int))`,
  randomForest: `${preamble}
from sklearn.ensemble import RandomForestClassifier
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline

X, y = df[["age", "income", "visits"]], df["purchased"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)
model = make_pipeline(SimpleImputer(strategy="median"),
                      RandomForestClassifier(n_estimators=100, random_state=42))
model.fit(X_train, y_train)
print("Random forest test accuracy:", round(model.score(X_test, y_test), 2))`,
  adaboost: `${preamble}
from sklearn.ensemble import AdaBoostClassifier
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.tree import DecisionTreeClassifier

X, y = df[["visits", "income"]], df["purchased"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)
weak_tree = DecisionTreeClassifier(max_depth=1, random_state=42)
model = make_pipeline(SimpleImputer(strategy="median"),
                      AdaBoostClassifier(estimator=weak_tree, n_estimators=30,
                                         random_state=42))
model.fit(X_train, y_train)
print("AdaBoost test accuracy:", round(model.score(X_test, y_test), 2))`,
  stacking: `${preamble}
from sklearn.ensemble import RandomForestClassifier, StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler

X, y = df[["age", "income", "visits"]], df["purchased"]
base_models = [
    ("linear", make_pipeline(SimpleImputer(strategy="median"),
                             StandardScaler(), LogisticRegression(max_iter=1000))),
    ("forest", make_pipeline(SimpleImputer(strategy="median"),
                             RandomForestClassifier(n_estimators=50, random_state=42))),
]
model = StackingClassifier(estimators=base_models,
                           final_estimator=LogisticRegression(), cv=3)
scores = cross_val_score(model, X, y, cv=3)
print("Out-of-fold accuracy:", scores.round(2))`,
  gradientBoosting: `${preamble}
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline

X, y = df[["age", "income", "visits"]], df["purchased"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)
model = make_pipeline(SimpleImputer(strategy="median"),
                      GradientBoostingClassifier(n_estimators=50,
                                                 learning_rate=0.05,
                                                 random_state=42))
model.fit(X_train, y_train)
print("Gradient boosting test accuracy:", round(model.score(X_test, y_test), 2))`,
  kmeans: `${preamble}
from sklearn.cluster import KMeans
from sklearn.impute import SimpleImputer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X = df[["age", "income", "visits"]]
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                      KMeans(n_clusters=3, n_init=10, random_state=42))
clusters = model.fit_predict(X)
print("Cluster labels:", clusters)
print("Cluster sizes:", pd.Series(clusters).value_counts().sort_index().to_dict())`,
  featureTarget: `${preamble}
target = "purchased"
features = ["age", "income", "visits", "city", "plan"]
X = df[features]
y = df[target]
print("Feature columns:", X.columns.tolist())
print("Target values:", sorted(y.unique()))
print("One feature row:")
print(X.iloc[0])`,
  split: `${preamble}
from sklearn.model_selection import train_test_split

X, y = df[["age", "income", "visits"]], df["purchased"]
X_train, X_remaining, y_train, y_remaining = train_test_split(
    X, y, test_size=0.4, random_state=42, stratify=y
)
X_valid, X_test, y_valid, y_test = train_test_split(
    X_remaining, y_remaining, test_size=0.5, random_state=42,
    stratify=y_remaining
)
print("Train / validation / test:", len(X_train), len(X_valid), len(X_test))`,
  leakage: `${preamble}
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X, y = df[["age", "income", "visits"]], df["purchased"]
# Pipeline refits imputation and scaling within each training fold.
safe_model = make_pipeline(SimpleImputer(strategy="median"),
                           StandardScaler(),
                           LogisticRegression(max_iter=1000))
scores = cross_val_score(safe_model, X, y, cv=3)
print("Leakage-safe fold scores:", scores.round(2))`,
  baseline: `${preamble}
from sklearn.dummy import DummyRegressor
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer

X, y = df[["visits"]], df["revenue"]
baseline = DummyRegressor(strategy="mean")
candidate = make_pipeline(SimpleImputer(strategy="median"), LinearRegression())
print("Mean baseline R²:", cross_val_score(baseline, X, y, cv=3).mean().round(3))
print("Linear model R²: ", cross_val_score(candidate, X, y, cv=3).mean().round(3))`,
  crossValidation: `${preamble}
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer

X, y = df[["age", "income", "visits"]], df["revenue"]
model = make_pipeline(SimpleImputer(strategy="median"), LinearRegression())
scores = cross_val_score(model, X, y, cv=3, scoring="neg_mean_absolute_error")
print("MAE in each fold:", (-scores).round(1))
print("Mean MAE:", round(-scores.mean(), 1))`,
  tuning: `${preamble}
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestRegressor

X, y = df[["age", "income", "visits"]], df["revenue"]
pipeline = make_pipeline(SimpleImputer(strategy="median"),
                         RandomForestRegressor(random_state=42))
search = GridSearchCV(
    pipeline,
    {"randomforestregressor__max_depth": [2, 4],
     "randomforestregressor__n_estimators": [30, 60]},
    cv=3, scoring="neg_mean_absolute_error"
)
search.fit(X, y)
print("Best settings:", search.best_params_)
print("Best CV MAE:", round(-search.best_score_, 2))`,
  imbalance: `from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

X, y = make_classification(n_samples=500, weights=[0.92, 0.08],
                           random_state=42)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, stratify=y, random_state=42
)
model = LogisticRegression(class_weight="balanced", max_iter=1000)
model.fit(X_train, y_train)
print(classification_report(y_test, model.predict(X_test), zero_division=0))`,
  deployment: `${preamble}
import joblib
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline

X, y = df[["age", "income", "visits"]], df["revenue"]
model = make_pipeline(SimpleImputer(strategy="median"), LinearRegression())
model.fit(X, y)
joblib.dump(model, "revenue-model.joblib")

loaded = joblib.load("revenue-model.joblib")
new_customer = pd.DataFrame([{"age": 35, "income": 60000, "visits": 7}])
prediction = loaded.predict(new_customer)[0]
print("Prediction:", round(prediction, 2))
reference_median = df["income"].median()
batch_median = new_customer["income"].median()
print("Income median shift:", round(batch_median - reference_median, 2))`,
  reproducibility: `${preamble}
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

X, y = df[["age", "income", "visits"]], df["revenue"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, random_state=42
)
model = RandomForestRegressor(random_state=42, n_estimators=100)
model.fit(X_train.fillna(X_train.median()), y_train)
print("Repeatable test R²:", round(model.score(
    X_test.fillna(X_train.median()), y_test
), 3))`,
  featureSelection: `${preamble}
from sklearn.feature_selection import SelectKBest, f_regression
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X, y = df[["age", "income", "visits"]], df["revenue"]
model = make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                      SelectKBest(score_func=f_regression, k=2),
                      LinearRegression())
scores = cross_val_score(model, X, y, cv=3, scoring="neg_mean_absolute_error")
print("Feature-selection CV MAE:", round(-scores.mean(), 2))`,
  timeSplit: `${preamble}
from sklearn.model_selection import TimeSeriesSplit, cross_val_score
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer

ordered = df.assign(event_date=pd.to_datetime(df["event_date"])).sort_values("event_date")
X, y = ordered[["visits"]], ordered["revenue"]
folds = TimeSeriesSplit(n_splits=3)
model = make_pipeline(SimpleImputer(strategy="median"), LinearRegression())
scores = cross_val_score(model, X, y, cv=folds, scoring="neg_mean_absolute_error")
print("Forward-only fold MAE:", (-scores).round(1))`
};

const topicGroups = {
  "working with csv files": "csv",
  "working-with-json-and-sql": "jsonSql",
  "api-to-dataframe": "api",
  "pandas-dataframe-using-web-scraping": "scrape",
  "understanding-your-data-descriptive-stats": "summary",
  "univariate-analysis": "univariate",
  "bivariate-analysis": "bivariate",
  "pandas-profiling": "profile",
  "normalization": "scale",
  "ordinal-encoding": "ordinal",
  "one-hot-encoding": "onehot",
  "column-transformer": "columnTransformer",
  "sklearn-pipelines": "pipeline",
  "function-transformer": "functionTransform",
  "power-transformer": "power",
  "binning-and-binarization": "binning",
  "handling-mixed-variables": "mixed",
  "handling-date-and-time": "dates",
  "complete-case-analysis": "completeCase",
  "imputing-numerical-data": "numericImpute",
  "handling-missing-categorical-data": "categoryImpute",
  "missing-indicator": "missingIndicator",
  "knn-imputer": "knnImpute",
  "iterative-imputer": "iterativeImpute",
  "outlier-removal-using-zscore": "zscore",
  "outlier-removal-using-iqr-method": "iqr",
  "outlier-detection-using-percentiles": "percentile",
  "feature-construction-and-feature-splitting": "feature",
  "pca": "pca",
  "simple-linear-regression": "linear",
  "regression-metrics": "regressionMetrics",
  "multiple-linear-regression": "multipleLinear",
  "gradient-descent": "gradientDescent",
  "types-of-gradient-descent": "gradientTypes",
  "polynomial-regression": "polynomial",
  "regularized-linear-models": "ridge",
  "lasso-regression": "lasso",
  "elasticnet-regression": "elasticNet",
  "logistic-regression": "logistic",
  "classification-metrics": "classMetrics",
  "logistic-regression-contd": "threshold",
  "random-forest": "randomForest",
  "adaboost": "adaboost",
  "stacking-and-blending": "stacking",
  "gradient-boosting": "gradientBoosting",
  "kmeans": "kmeans",
  "adaboost_demo.ipynb": "adaboost",
  "day68-stacking": "stacking",
  "feature-vs-target": "featureTarget",
  "train-validation-test-split": "split",
  "data-leakage": "leakage",
  "baseline-models": "baseline",
  "cross-validation": "crossValidation",
  "hyperparameter-tuning": "tuning",
  "class-imbalance": "imbalance",
  "model-deployment-and-monitoring": "deployment",
  "reproducibility-and-random-seeds": "reproducibility",
  "feature-selection": "featureSelection",
  "time-series-validation": "timeSplit"
};

export const lessonMeta = {
  csv: { visual: "flow", packages: ["pandas"], walkthrough: ["Keep the source text intact.", "Let pandas infer column types, then inspect them.", "Check sample rows and missing-value markers before using the data."] },
  jsonSql: { visual: "flow", packages: ["pandas"], walkthrough: ["Flatten nested records into columns.", "Load the example table into in-memory SQLite.", "Use a SQL aggregate to create a compact analysis table."] },
  api: { visual: "flow", packages: ["pandas"], walkthrough: ["Start with a representative API response.", "Normalize nested fields into columns.", "Validate pagination, types, and rate limits when using a real API."] },
  scrape: { visual: "flow", packages: ["pandas", "beautifulsoup4"], walkthrough: ["Inspect page markup and select only the permitted table.", "Extract header and cell text.", "Convert the extracted rows into a DataFrame and validate them."] },
  summary: { visual: "distribution", packages: ["pandas"], walkthrough: ["Summarize each column with its own appropriate statistics.", "Count missing values explicitly.", "Investigate surprising values instead of cleaning them blindly."] },
  univariate: { visual: "distribution", packages: ["pandas", "matplotlib"], walkthrough: ["Choose one feature and inspect its range.", "Plot a histogram to reveal shape and tails.", "Consider transformations only after understanding the units."] },
  bivariate: { visual: "scatter", packages: ["pandas", "matplotlib"], walkthrough: ["Select two variables with a meaningful question.", "Plot their paired values.", "Use the pattern to form a hypothesis, not a causal claim."] },
  profile: { visual: "flow", packages: ["pandas", "ydata-profiling"], walkthrough: ["Generate a broad first-pass report.", "Review missingness, distributions, and duplicates.", "Verify important findings with focused analysis."] },
  completeCase: { visual: "transform", packages: ["pandas"], walkthrough: ["Define which fields are required for the task.", "Drop rows missing those fields.", "Compare the retained records and groups with the original data."] },
  numericImpute: { visual: "transform", packages: ["pandas", "scikit-learn"], walkthrough: ["Fit the median from training data.", "Fill missing numeric values with that fitted statistic.", "Keep the imputer inside a pipeline to prevent leakage."] },
  categoryImpute: { visual: "transform", packages: ["pandas", "scikit-learn"], walkthrough: ["Choose a category-based policy.", "Fit it on training rows only.", "Handle genuinely informative missingness separately if needed."] },
  missingIndicator: { visual: "transform", packages: ["pandas"], walkthrough: ["Capture the missing flag before filling the value.", "Impute the numeric column.", "Let validation determine whether the indicator helps."] },
  knnImpute: { visual: "neighbors", packages: ["pandas", "scikit-learn"], walkthrough: ["Put numeric features on comparable scales.", "Find nearby complete observations.", "Average neighbors to fill gaps; results depend on distance and K."] },
  iterativeImpute: { visual: "cycle", packages: ["pandas", "scikit-learn"], walkthrough: ["Initialize missing values.", "Predict one incomplete feature from the others.", "Repeat the estimates and compare against a simpler imputer."] },
  scale: { visual: "transform", packages: ["pandas", "scikit-learn"], walkthrough: ["Keep numeric columns in their original units for interpretation.", "Fit a scaler on training rows.", "Apply the stored scaler to later rows; trees usually do not need this."] },
  ordinal: { visual: "transform", packages: ["pandas", "scikit-learn"], walkthrough: ["Write down the real category order.", "Map each level consistently to a rank.", "Do not impose order on nominal categories."] },
  onehot: { visual: "transform", packages: ["pandas"], walkthrough: ["Create one indicator column for each observed category.", "Keep the same category mapping at prediction time.", "Use an encoder that can safely handle categories not seen during fitting."] },
  columnTransformer: { visual: "pipeline", packages: ["pandas", "scikit-learn"], walkthrough: ["Select columns by their data type or meaning.", "Fit a suitable numeric or categorical transformer for each group.", "Combine transformed columns for one estimator."] },
  pipeline: { visual: "pipeline", packages: ["pandas", "scikit-learn"], walkthrough: ["Place preprocessing before the estimator.", "Fit the full chain on training data.", "Reuse the fitted chain unchanged for validation, test, and new records."] },
  functionTransform: { visual: "transform", packages: ["pandas", "numpy", "scikit-learn"], walkthrough: ["Define a deterministic function with stable input/output shape.", "Wrap it with FunctionTransformer.", "Keep it inside the same fitted pipeline as the estimator."] },
  power: { visual: "distribution", packages: ["pandas", "scikit-learn"], walkthrough: ["Inspect skew in the original feature.", "Fit a power transform on training data.", "Check transformed distribution and model validation results."] },
  binning: { visual: "transform", packages: ["pandas"], walkthrough: ["Choose cut points with domain meaning.", "Map each value into a named interval.", "Check whether the simpler bins help without hiding useful variation."] },
  mixed: { visual: "pipeline", packages: ["pandas", "scikit-learn"], walkthrough: ["Separate numeric and categorical input columns.", "Give each group its own imputation/encoding steps.", "Join the transformations and model in one pipeline."] },
  dates: { visual: "calendar", packages: ["pandas", "numpy"], walkthrough: ["Parse strings into datetime values.", "Derive only time features available at prediction time.", "Use cyclical encodings when a feature wraps around."] },
  zscore: { visual: "distribution", packages: ["pandas"], walkthrough: ["Measure distance from the mean in standard deviations.", "Flag candidates using a threshold.", "Investigate valid extremes rather than deleting automatically."] },
  iqr: { visual: "distribution", packages: ["pandas"], walkthrough: ["Find the first and third quartiles.", "Use 1.5 times the IQR to form exploratory fences.", "Review the records outside the fences in context."] },
  percentile: { visual: "distribution", packages: ["pandas"], walkthrough: ["Choose tail percentiles based on domain needs.", "Flag observations beyond those quantiles.", "Treat cutoffs as a review signal, not proof of bad data."] },
  feature: { visual: "transform", packages: ["pandas"], walkthrough: ["Start from information available at prediction time.", "Combine or split columns into a meaningful feature.", "Apply the same deterministic construction at training and inference."] },
  pca: { visual: "pca", packages: ["pandas", "scikit-learn"], walkthrough: ["Impute and scale numeric columns.", "Find orthogonal directions that capture variance.", "Retain components based on validation and interpretability needs."] },
  linear: { visual: "regression", packages: ["pandas", "scikit-learn"], walkthrough: ["Choose a numeric target and predictor.", "Fit a line using training data.", "Check residuals and compare the test score with a baseline."] },
  regressionMetrics: { visual: "errors", packages: ["pandas", "numpy", "scikit-learn"], walkthrough: ["Compare each prediction with its actual value.", "Summarize error magnitude with MAE/RMSE and fit with R².", "Choose the metric that reflects real error costs."] },
  multipleLinear: { visual: "regression", packages: ["pandas", "scikit-learn"], walkthrough: ["Select several predictors for a numeric target.", "Fit coefficients while controlling correlated inputs.", "Inspect test error and assumptions, not only training fit."] },
  gradientDescent: { visual: "descent", packages: ["pandas", "numpy"], walkthrough: ["Define a loss that measures prediction error.", "Calculate the gradient of that loss.", "Update parameters repeatedly and monitor whether loss decreases."] },
  gradientTypes: { visual: "descent", packages: ["pandas", "numpy", "scikit-learn"], walkthrough: ["Batch updates use all rows per step.", "Stochastic updates use one row; mini-batches use a small group.", "Compare convergence stability and compute cost."] },
  polynomial: { visual: "curve", packages: ["pandas", "scikit-learn"], walkthrough: ["Expand input columns into powers/interactions.", "Fit a linear estimator over the expanded features.", "Limit degree and compare validation error to avoid overfitting."] },
  ridge: { visual: "shrinkage", packages: ["pandas", "scikit-learn"], walkthrough: ["Scale features to make coefficient penalties comparable.", "Add an L2 penalty to large coefficients.", "Tune alpha using validation or cross-validation."] },
  lasso: { visual: "shrinkage", packages: ["pandas", "scikit-learn"], walkthrough: ["Scale features before penalizing coefficients.", "L1 regularization can shrink some coefficients to zero.", "Treat selected features as candidates and validate stability."] },
  elasticNet: { visual: "shrinkage", packages: ["pandas", "scikit-learn"], walkthrough: ["Combine L1 and L2 penalties.", "Tune the overall penalty and L1/L2 balance.", "Use when correlated inputs make pure Lasso selection unstable."] },
  logistic: { visual: "sigmoid", packages: ["pandas", "scikit-learn"], walkthrough: ["Fit a linear score for a categorical target.", "Convert scores into class probabilities.", "Choose a decision threshold based on validation and error costs."] },
  classMetrics: { visual: "matrix", packages: ["pandas", "scikit-learn"], walkthrough: ["Count true/false positives and negatives.", "Compute precision, recall, and F1 for relevant classes.", "Use a baseline and consider class imbalance before interpreting accuracy."] },
  threshold: { visual: "sigmoid", packages: ["pandas", "scikit-learn"], walkthrough: ["Obtain probabilities rather than only hard labels.", "Try thresholds on validation data.", "Select the operating point using the cost of each mistake."] },
  randomForest: { visual: "forest", packages: ["pandas", "scikit-learn"], walkthrough: ["Fit decision trees on bootstrap samples and feature subsets.", "Aggregate their predictions.", "Tune depth/leaf size and evaluate on unseen data."] },
  adaboost: { visual: "boosting", packages: ["pandas", "scikit-learn"], walkthrough: ["Start with a weak learner.", "Increase focus on examples it handled poorly.", "Combine the sequence of learners and validate for overfitting."] },
  stacking: { visual: "stacking", packages: ["pandas", "scikit-learn"], walkthrough: ["Train different base estimators.", "Generate out-of-fold predictions for the meta-model.", "Evaluate the complete stack without reusing test labels."] },
  gradientBoosting: { visual: "boosting", packages: ["pandas", "scikit-learn"], walkthrough: ["Fit a small tree to current errors.", "Add it to the ensemble with a learning-rate weight.", "Tune tree depth and number of stages using validation data."] },
  kmeans: { visual: "clusters", packages: ["pandas", "scikit-learn"], walkthrough: ["Scale the numeric features used for distance.", "Assign points to the nearest centroid and update centroids.", "Inspect cluster sizes and stability; K-means does not reveal true labels."] },
  featureTarget: { visual: "flow", packages: ["pandas"], walkthrough: ["Identify the prediction outcome as y.", "Place only prediction-time inputs in X.", "Check IDs, future values, and target-derived fields for leakage."] },
  split: { visual: "split", packages: ["pandas", "scikit-learn"], walkthrough: ["Keep a training partition for fitting.", "Use validation data to make choices.", "Touch the test partition only for final evaluation."] },
  leakage: { visual: "leakage", packages: ["pandas", "scikit-learn"], walkthrough: ["List information available at the real prediction timestamp.", "Split before fitting preprocessing or feature selection.", "Keep learned transforms in a Pipeline and audit entity/time overlap."] },
  baseline: { visual: "comparison", packages: ["pandas", "scikit-learn"], walkthrough: ["Create a simple rule with no predictive sophistication.", "Measure it using the same validation scheme as candidates.", "Require a useful, repeatable improvement before adding complexity."] },
  crossValidation: { visual: "folds", packages: ["pandas", "scikit-learn"], walkthrough: ["Divide training data into folds.", "Fit on all-but-one fold and score the held-out fold.", "Summarize the scores and their spread; keep test data outside the loop."] },
  tuning: { visual: "search", packages: ["pandas", "scikit-learn"], walkthrough: ["Choose a small, meaningful hyperparameter grid.", "Search with cross-validation on training data.", "Refit the selected model, then evaluate once on the final test set."] },
  imbalance: { visual: "imbalance", packages: ["numpy", "scikit-learn"], walkthrough: ["Measure class frequency and choose minority-aware metrics.", "Try class weights or resampling inside training folds.", "Tune the probability threshold on validation data."] },
  deployment: { visual: "deploy", packages: ["pandas", "scikit-learn", "joblib"], walkthrough: ["Save preprocessing and estimator together as one artifact.", "Load it in the serving process and validate input schema.", "Monitor drift, service health, and outcomes when labels arrive."] },
  reproducibility: { visual: "flow", packages: ["pandas", "scikit-learn"], walkthrough: ["Set random states on splits and stochastic estimators.", "Record dataset versions and package/model settings.", "Re-run the same experiment and compare results."] },
  featureSelection: { visual: "transform", packages: ["pandas", "scikit-learn"], walkthrough: ["Choose a selection method suited to the target and estimator.", "Fit selection only on the current training fold.", "Check whether selected features and validation scores are stable."] },
  timeSplit: { visual: "split", packages: ["pandas", "scikit-learn"], walkthrough: ["Sort observations chronologically.", "Train on earlier periods and validate on later periods.", "Use rolling or expanding windows to reflect the deployment horizon."] }
};

export const topicGuides = Object.fromEntries(Object.entries(topicInfo).map(([slug, info]) => {
  const group = topicGroups[slug];
  if (!group || !examples[group] || !lessonMeta[group]) {
    throw new Error(`Missing tutorial content for topic: ${slug}`);
  }
  return [slug, {
    info,
    code: examples[group],
    group,
    ...lessonMeta[group]
  }];
}));
