const units = [
  {
    title: "01 · Foundations & perceptrons",
    kind: "foundation",
    lessons: [
      "What is Deep Learning?",
      "Deep Learning vs Machine Learning",
      "Types of Neural Networks",
      "History of Deep Learning",
      "What is a Perceptron?",
      "Perceptron vs Neuron",
      "The Perceptron Trick",
      "How to Train a Perceptron",
      "Perceptron Part 2",
      "Perceptron Loss Function",
      "Hinge Loss",
      "Binary Cross-Entropy",
      "Sigmoid Function",
      "Problem with the Perceptron",
      "MLP Notation",
      "Multi-Layer Perceptron Intuition",
      "Multilayer Perceptron",
      "Forward Propagation",
      "How a Neural Network Predicts Output",
      "MLP Memoization"
    ]
  },
  {
    title: "02 · MLPs, training & backpropagation",
    kind: "mlp",
    lessons: [
      "Customer Churn Prediction using ANN",
      "Keras and TensorFlow",
      "Deep Learning Classification",
      "Handwritten Digit Classification using ANN",
      "MNIST Dataset",
      "Graduate Admission Prediction using ANN",
      "Loss Functions in Deep Learning",
      "Backpropagation Part 1: The What",
      "Backpropagation Part 2: The How",
      "Backpropagation Part 3: The Why",
      "Vanishing Gradient Problem",
      "Exploding Gradient Problem",
      "Vanishing and Exploding Gradients: Code Example",
      "Gradient Descent in Neural Networks",
      "Batch vs Stochastic vs Mini-Batch Gradient Descent",
      "How to Improve Neural Network Performance",
      "Early Stopping in Neural Networks",
      "Data Scaling in Neural Networks",
      "Feature Scaling in ANN",
      "Dropout Layer in Deep Learning",
      "Dropout Layers: Regression and Classification",
      "Regularization in Deep Learning",
      "L2 Regularization and Weight Decay",
      "L1 Regularization",
      "Activation Functions: Sigmoid, Tanh and ReLU",
      "ReLU Variants: Leaky ReLU, PReLU, ELU and SELU",
      "Weight Initialization: What Not to Do",
      "Xavier/Glorot and He Initialization",
      "Batch Normalization in Deep Learning",
      "Batch Normalization in Keras",
      "Optimizers in Deep Learning: Part 1",
      "Exponentially Weighted Moving Average",
      "SGD with Momentum",
      "Nesterov Accelerated Gradient",
      "AdaGrad",
      "RMSProp",
      "Adam Optimizer",
      "Keras Tuner: Hyperparameter Tuning"
    ]
  },
  {
    title: "03 · Convolutional neural networks",
    kind: "cnn",
    lessons: [
      "What is a Convolutional Neural Network?",
      "CNN Intuition",
      "CNN vs Visual Cortex",
      "The Cat Experiment and History of CNNs",
      "The Convolution Operation",
      "Padding and Strides in CNN",
      "Pooling Layer and MaxPooling",
      "CNN Architecture",
      "LeNet-5 Architecture",
      "CNN vs ANN",
      "Backpropagation in CNN: Part 1",
      "CNN Backpropagation: Convolution, Pooling and Flatten",
      "Cat vs Dog Image Classification Project",
      "Data Augmentation in Deep Learning",
      "Pretrained CNNs, ImageNet and ILSVRC",
      "What Does a CNN See?",
      "Visualizing CNN Filters and Feature Maps",
      "Transfer Learning in Keras",
      "Fine-Tuning vs Feature Extraction",
      "Keras Functional API: Non-Linear Neural Networks"
    ]
  },
  {
    title: "04 · Recurrent networks & sequence learning",
    kind: "sequence",
    lessons: [
      "Why RNNs Are Needed",
      "RNNs vs ANNs",
      "Recurrent Neural Network Architecture",
      "RNN Forward Propagation",
      "RNN Sentiment Analysis in Keras",
      "Many-to-Many, One-to-Many and Many-to-One RNNs",
      "Backpropagation Through Time",
      "Problems with RNNs",
      "LSTM: The What",
      "LSTM Architecture: The How",
      "LSTM Next-Word Predictor",
      "Gated Recurrent Unit (GRU)",
      "Deep RNNs: Stacked RNNs, LSTMs and GRUs",
      "Bidirectional RNN, BiLSTM and Bidirectional GRU",
      "The History of Large Language Models: LSTMs to ChatGPT"
    ]
  },
  {
    title: "05 · Sequence-to-sequence & attention",
    kind: "attention",
    lessons: [
      "Encoder-Decoder Sequence-to-Sequence Architecture",
      "The Attention Mechanism",
      "Bahdanau Attention vs Luong Attention",
      "Why Self-Attention Is Called Self-Attention",
      "Self-Attention vs Luong Attention"
    ]
  },
  {
    title: "06 · Transformers & language models",
    kind: "transformer",
    lessons: [
      "Introduction to Transformers",
      "What Is Self-Attention?",
      "Self-Attention in Transformers: Code",
      "Scaled Dot-Product Attention",
      "Geometric Intuition for Self-Attention",
      "Visualizing Self-Attention",
      "Multi-Head Attention vs Self-Attention",
      "Positional Encoding in Transformers",
      "Layer Normalization vs Batch Normalization",
      "Transformer Encoder Architecture",
      "Masked Self-Attention and Transformer Decoder",
      "Cross-Attention in Transformers",
      "Transformer Decoder Architecture",
      "Transformer Inference"
    ]
  },
  {
    title: "07 · End-to-end deep learning projects",
    kind: "projects",
    lessons: [
      "Project: Customer Churn Prediction with an ANN",
      "Project: Handwritten Digit Classification on MNIST",
      "Project: Graduate Admission Prediction",
      "Project: Cat vs Dog Image Classification",
      "Project: RNN Sentiment Analysis",
      "Project: Next-Word Prediction"
    ]
  }
];

const lessonList = units.flatMap((unit, unitIndex) =>
  unit.lessons.map((title, lessonIndex) => ({
    title,
    unit: unit.title,
    kind: unit.kind,
    unitIndex,
    lessonIndex,
    index: 0
  }))
);
lessonList.forEach((lesson, index) => { lesson.index = index; });

const lessonDetails = {
  "What is Deep Learning?": "Deep learning is a family of machine-learning methods that learns several levels of representation by composing parameterized layers. A network transforms an input into progressively more useful features, then adjusts its weights so a task-specific loss becomes smaller. The representation is learned from examples rather than specified entirely by hand.",
  "Deep Learning vs Machine Learning": "Deep learning is part of machine learning, not a competing field. The practical distinction is where the representation comes from: traditional workflows often rely on hand-designed features and compact estimators, while deep networks can learn feature hierarchies from raw images, audio, text, or large tables. That flexibility costs data, compute, tuning, and often interpretability.",
  "Types of Neural Networks": "Architecture should reflect the structure of the input and task. Dense MLPs combine fixed-size feature vectors; CNNs exploit local spatial structure and weight sharing; RNNs and gated variants process ordered sequences; encoder-decoder systems map one sequence to another; and Transformers use attention to exchange information across positions. These are design patterns, not mutually exclusive model categories.",
  "History of Deep Learning": "The field developed through connected ideas: early threshold neurons and perceptrons; multilayer networks trained with backpropagation; convolutional networks for visual recognition; recurrent and gated sequence models; and attention/Transformer systems that scale sequence learning with parallel computation. Compute, data, optimization, and architecture advances all contributed; no single paper or model explains the whole history.",
  "What is a Perceptron?": "A perceptron computes a weighted sum of input features plus a bias and applies a threshold. It is the simplest trainable artificial neuron and learns a linear decision boundary. It is useful for understanding weights, bias, mistakes, and the limitations that motivated multilayer networks.",
  "Perceptron vs Neuron": "A biological neuron is a living cell with complex temporal, biochemical, and network behavior. An artificial neuron is a deliberately simplified mathematical unit: weighted sum, bias, and activation. The analogy helps build intuition, but artificial units are not literal simulations of biological neurons.",
  "The Perceptron Trick": "For a misclassified labeled point, shift the decision boundary toward the correct side by adding a learning-rate-scaled input vector to the weights and changing the bias in proportion to the label. Repeating this update can find a separating hyperplane when the data is linearly separable; it does not minimize a smooth probability loss.",
  "Perceptron Loss Function": "The perceptron criterion penalizes examples whose signed margin is not positive. With labels y in {-1,+1} and score z=w·x+b, one common form is max(0,-y z). Only currently misclassified points have a nonzero loss; points barely on the correct side receive no penalty, unlike margin-based or probabilistic objectives.",
  "Hinge Loss": "Hinge loss asks for a margin, not just the correct side of the boundary: max(0, 1-yz). Correct but low-confidence examples can still contribute loss until their signed score reaches the margin. It is the classic objective for a linear support-vector classifier and is often paired with L2 regularization.",
  "Binary Cross-Entropy": "Binary cross-entropy measures the difference between a binary target and a predicted probability. For logits z, a numerically stable implementation combines sigmoid and log-loss directly. Incorrect confident predictions are penalized strongly, so this loss provides a useful gradient for probabilistic binary classification.",
  "Sigmoid Function": "The logistic sigmoid σ(z)=1/(1+e^-z) maps any real-valued logit to a number between zero and one. That makes it useful as a binary-classification output probability. Its derivative σ(z)(1-σ(z)) becomes small for saturated inputs, which is why it is usually avoided as the activation in deep hidden layers.",
  "Problem with the Perceptron": "A single perceptron has a linear decision boundary and the hard step activation has zero derivative almost everywhere. It cannot represent non-linearly separable patterns such as XOR, does not output calibrated probabilities, and does not provide the smooth gradients required by ordinary backpropagation. Hidden layers and differentiable activations address these limits.",
  "MLP Notation": "Let a⁽⁰⁾=x. For each layer l, compute z⁽ˡ⁾=W⁽ˡ⁾a⁽ˡ⁻¹⁾+b⁽ˡ⁾ and a⁽ˡ⁾=φ⁽ˡ⁾(z⁽ˡ⁾). Superscripts denote layer indices, not powers; a is an activation, z is a pre-activation, W is a weight matrix, and b is a bias. For a batch, examples are rows and matrix orientation must be kept consistent.",
  "MLP Memoization": "A neural network can memorize its training examples when capacity is high relative to the data or regularization is weak. Memorization is visible as improving training loss while validation performance stalls or degrades. Use a held-out validation set, early stopping, regularization, simpler architectures, and more representative data; do not confuse low training error with learned general rules.",
  "Forward Propagation": "Forward propagation applies each layer in order: multiply the current activation by a weight matrix, add bias, and apply an activation function. The final activation is the prediction. In a batch, matrix operations calculate many examples at once; intermediate activations are retained because backpropagation needs them.",
  "Backpropagation Part 1: The What": "Backpropagation is an efficient application of the chain rule. It computes how the loss changes with every weight and bias by propagating error derivatives from the output layer back toward the input. It calculates gradients; an optimizer uses those gradients to update parameters.",
  "Backpropagation Part 2: The How": "For layer l, first compute the gradient with respect to the pre-activation: δ(l)=(δ(l+1)W(l+1))⊙φ'(z(l)). Then dW(l)=a(l-1)ᵀδ(l)/batch_size and db(l) is the batch mean of δ(l). The output-layer delta depends on the selected loss and activation; a sigmoid with binary cross-entropy simplifies to prediction minus target.",
  "Backpropagation Part 3: The Why": "The chain rule lets us reuse local derivatives instead of recalculating the effect of every parameter independently. In a computation graph, each node receives the gradient from downstream and multiplies it by its local derivative. This makes gradient calculation scale efficiently with the number of operations in the forward pass.",
  "Gradient Descent in Neural Networks": "Gradient descent updates parameters opposite the loss gradient: θ←θ−η∇θL. The gradient gives a local direction of steepest increase, so a sufficiently small negative step tends to decrease the objective locally. Neural-network losses are nonconvex; learning rate, batch composition, conditioning, and initialization affect optimization.",
  "Batch vs Stochastic vs Mini-Batch Gradient Descent": "Batch gradient descent averages gradients over the full training set for each update; stochastic gradient descent uses one example; mini-batch gradient descent uses a small batch. Mini-batches enable efficient hardware parallelism and provide a noisy gradient estimate. The batch size changes update frequency and gradient noise, not just memory use.",
  "Early Stopping in Neural Networks": "Early stopping treats validation performance as a signal for when to stop fitting. Monitor a metric such as validation loss, wait for a small patience window to tolerate noise, and restore the best checkpoint. The validation set is used for model selection, so retain a separate test set for the final estimate.",
  "Vanishing Gradient Problem": "In a deep chain, repeated multiplication by derivatives smaller than one can make gradients shrink exponentially as they travel toward early layers. Those layers then learn very slowly. Saturated sigmoid/tanh activations, long recurrent sequences, and poor initialization can make this worse; ReLU-family activations, normalization, residual paths, gated recurrence, and careful initialization help.",
  "Exploding Gradient Problem": "Repeated multiplication by large Jacobian values can make gradients grow rapidly, producing unstable parameter updates, huge loss, or NaNs. Gradient-norm clipping limits the update magnitude, while appropriate initialization, normalization, learning rates, and gated architectures reduce the source of instability.",
  "Activation Functions: Sigmoid, Tanh and ReLU": "An activation supplies nonlinearity after an affine transformation. Sigmoid outputs (0,1), tanh outputs (-1,1), and ReLU outputs max(0,z). Sigmoid/tanh can saturate and yield small derivatives; ReLU is simple and often trains deep feed-forward layers well, though units can become inactive. Hidden activations and output activation serve different purposes.",
  "ReLU Variants: Leaky ReLU, PReLU, ELU and SELU": "Leaky ReLU gives a small fixed negative slope; PReLU learns that slope; ELU uses a smooth negative branch; SELU is designed around self-normalizing conditions. They address inactive ReLU units or activation statistics in different ways. They are not interchangeable defaults: architecture, initialization, normalization and implementation assumptions matter.",
  "Weight Initialization: What Not to Do": "Identical zero initialization for all weights in a layer preserves symmetry: equivalent neurons receive identical gradients and remain equivalent. Very large or small initial weights can also cause unstable or vanishing activations and gradients. Random, variance-aware initialization breaks symmetry while keeping signal scale controlled.",
  "Xavier/Glorot and He Initialization": "Glorot/Xavier initialization selects variance using both fan-in and fan-out, commonly for tanh-like activations. He/Kaiming initialization scales by fan-in for ReLU-family activations, accounting for the fraction of inactive outputs. Match initializer to activation and layer shape; initialization controls early signal flow, not final accuracy.",
  "Batch Normalization in Deep Learning": "Batch normalization normalizes layer activations using mini-batch statistics during training, then applies learned scale and offset. It maintains moving estimates for inference. Its behavior depends on batch composition and train/eval mode; small or nonrepresentative batches can make estimates noisy.",
  "Dropout Layer in Deep Learning": "Dropout randomly zeros a fraction of activations during training, discouraging units from relying too heavily on specific co-adaptations. At inference it is disabled (frameworks handle the expected scaling). The rate is a regularization strength: too much dropout can cause underfitting, and its placement should match the architecture.",
  "Regularization in Deep Learning": "Regularization discourages solutions that fit training data but generalize poorly. L1 adds an absolute-weight penalty and can encourage sparse parameters; L2 penalizes squared weights and smoothly shrinks them. Dropout, data augmentation, early stopping, weight decay, and smaller models are other controls. Select strength from validation evidence.",
  "L2 Regularization and Weight Decay": "An L2 penalty adds λ||w||² to the objective, contributing a gradient proportional to w. Decoupled weight decay (as in AdamW) applies shrinkage separately from an adaptive optimizer's gradient transformation; with plain SGD the formulations are closely related under common settings. Biases and normalization parameters are often excluded by convention.",
  "RNNs vs ANNs": "A conventional feed-forward ANN has no built-in state across input positions. An RNN reuses a transition at each timestep and passes a hidden state forward, so order is represented directly. CNNs, temporal convolutions, and Transformers are other sequence approaches; choose using sequence length, latency, context needs, and data scale.",
  "Recurrent Neural Network Architecture": "A vanilla RNN applies the same input-to-hidden and hidden-to-hidden matrices at every timestep, with the previous hidden state carrying context. It may emit an output at every step or only from a final state. Shared parameters support variable sequence lengths, but long-range dependencies are difficult to learn with a plain tanh recurrence.",
  "Many-to-Many, One-to-Many and Many-to-One RNNs": "Many-to-one maps a sequence to one label, as in sentiment classification. One-to-many generates a sequence from a context, such as a caption. Many-to-many can align one output per input timestep or use a separate encoder and decoder for sequences of different lengths. Padding and target alignment differ for each setup.",
  "Backpropagation Through Time": "Backpropagation through time unrolls a recurrent computation across timesteps and applies the chain rule through the unrolled graph. Shared recurrent weights collect gradient contributions from every step. Truncation limits memory/gradient horizon but biases long-term credit assignment; clipping can stabilize exploding gradients.",
  "LSTM Architecture: The How": "An LSTM combines a cell state with gates that control forgetting, writing, and exposing information. The forget gate scales old memory; the input gate controls candidate updates; the output gate controls the hidden state. Sigmoid gates lie in [0,1], while the candidate is typically tanh. This additive cell-state path helps preserve gradients over longer spans.",
  "Gated Recurrent Unit (GRU)": "A GRU uses update and reset gates and combines memory and hidden state into one vector, avoiding the separate LSTM cell state. It has fewer gates/parameters in common formulations and can train efficiently, but there is no universal accuracy or speed winner. Compare both under matched data, compute and tuning.",
  "The Attention Mechanism": "Attention replaces a single fixed-size encoder summary with a context vector computed from a distribution over encoder states for each decoder step. The decoder query scores source states; normalized weights form a weighted sum. This exposes alignment and improves access to long input sequences, with extra computation proportional to query-source interactions.",
  "Bahdanau Attention vs Luong Attention": "Bahdanau (additive) attention scores query and encoder state through a learned nonlinear combination; Luong (multiplicative) attention uses dot/general bilinear compatibility. Both produce normalized alignments and weighted context, but they differ in scoring and the decoder state used. Dimensions, masking, and encoder/decoder alignment must be consistent.",
  "Multi-Head Attention vs Self-Attention": "Self-attention describes the source of queries, keys, and values; multi-head describes parallel attention projections. Multi-head self-attention is therefore one combination, not a competing mechanism. Each head works in a learned subspace, outputs are concatenated and projected, and masks apply across the relevant sequence positions.",
  "Layer Normalization vs Batch Normalization": "Batch normalization uses per-feature statistics across examples in a batch and moving averages at inference. Layer normalization normalizes features within each example/token and does not depend on other examples in the batch. Layer norm is common in Transformers and small-batch sequence tasks; axis, epsilon and training behavior still matter.",
  "Transformer Encoder Architecture": "A standard encoder layer contains multi-head self-attention and a position-wise feed-forward network, each wrapped with a residual path and normalization. Padding masks prevent attention to empty tokens. Stacking layers builds contextual representations; a downstream head can pool token vectors or use a designated classification token.",
  "Masked Self-Attention and Transformer Decoder": "A causal mask prevents a position from attending to later target tokens. During teacher-forced training, this ensures the prediction at position t sees only the prefix through t. Padding masks are separate: they hide non-content positions. Incorrect mask polarity or shifted targets can silently leak future answers.",
  "Cross-Attention in Transformers": "Cross-attention lets decoder queries retrieve information from encoder outputs: queries come from the decoder, while keys and values come from the encoder. It is the bridge that conditions generated output on a source sequence. Source padding masks and autoregressive target masks have different roles and must be applied at the appropriate sublayer.",
  "What Is Self-Attention?": "Self-attention creates a contextual representation for each token by comparing its query vector with keys from tokens in the same sequence, normalizing the scores, and taking a weighted sum of their value vectors. It lets each position directly use information from other positions instead of passing it through a recurrent chain.",
  "Scaled Dot-Product Attention": "Scaled dot-product attention is softmax(QKᵀ/√dₖ)V. Dividing by the square root of the key dimension keeps dot-product magnitudes from growing with dimension, which would otherwise push softmax toward saturated distributions and weaken gradients. A mask can exclude padding or future tokens before softmax.",
  "Positional Encoding in Transformers": "Self-attention alone is permutation-equivariant: it does not know whether a token came first or last. Positional information is added to token representations or injected through relative-position mechanisms. Sinusoidal encodings are fixed functions of position; learned embeddings and rotary/relative methods are alternatives.",
  "Transformer Inference": "Autoregressive inference repeatedly predicts a distribution for the next token, selects or samples one, appends it to the context, and stops at a termination condition or token limit. A key-value cache stores earlier attention keys and values so they are not recomputed at every step; decoding strategy affects both output and latency.",
  "Multi-Layer Perceptron Intuition": "A hidden layer learns intermediate features that make the final task easier. In the XOR example, hidden units can form useful partitions of the input plane; an output unit combines them. Each layer is a learned representation, not a separate hand-coded rule. Width controls the number of features and depth controls composition.",
  "Multilayer Perceptron": "An MLP is a feed-forward stack of dense layers. For a batch of n examples with d inputs, a layer with h units has weights shaped (d,h), bias shaped (h,), and outputs shaped (n,h). Hidden nonlinearities are essential for expressing nonlinear functions; output units and losses are selected by task.",
  "How a Neural Network Predicts Output": "Inference runs the learned parameters forward without updates: prepare inputs exactly as during training, calculate each layer's activations, and interpret the output according to the head. A sigmoid is a binary probability, softmax gives multiclass probabilities, and a linear output gives a real-valued prediction. Thresholds or postprocessing are separate decisions.",
  "Loss Functions in Deep Learning": "Loss is a differentiable training objective, not automatically the same as the business evaluation metric. MSE emphasizes large squared regression errors; MAE is more robust to extreme errors; binary cross-entropy suits binary probabilities/logits; categorical cross-entropy suits mutually exclusive classes; and sparse categorical cross-entropy accepts integer class IDs. Match label shape and output activation carefully.",
  "Keras and TensorFlow": "TensorFlow supplies tensor operations, automatic differentiation, device execution, and model building; Keras provides a high-level API for layers, losses, optimizers, and fit/evaluate workflows. A model's input shape, call path, compile configuration, and training/evaluation mode define its behavior. Use callbacks and explicit validation data to make training observable.",
  "Deep Learning Classification": "A classifier maps inputs to class scores or probabilities. For two classes, one sigmoid logit and binary cross-entropy are common; for mutually exclusive K classes, K logits and softmax cross-entropy are typical. Class imbalance may require class weights, threshold selection, and precision/recall analysis rather than accuracy alone.",
  "MNIST Dataset": "MNIST contains 70,000 grayscale handwritten digit images at 28×28 pixels, split into 60,000 training and 10,000 test examples. Each image has an integer label from 0 to 9. Scale pixels, add the channel axis for a CNN, and use the provided test set only after model selection.",
  "Graduate Admission Prediction using ANN": "This regression-style example predicts a bounded score from applicant-like numeric features. Standardize from training statistics, use a linear or bounded output only if target semantics justify it, and report MAE/RMSE. The example generates synthetic scores for reproducibility; it must not be interpreted as a real admissions decision model.",
  "Customer Churn Prediction using ANN": "Define churn over a specified future window, use only features available at prediction time, and split by customer/time when repeated records could leak identity or future outcomes. Standardize numeric features, train a binary output, and choose a threshold using validation costs. The small included table is synthetic and teaches mechanics only.",
  "Vanishing and Exploding Gradients: Code Example": "A deep chain multiplies local derivatives during the backward pass. Thirty derivatives of 0.5 shrink to about 9.3×10⁻¹⁰; thirty of 1.5 grow to about 1.9×10⁵. This simple product illustrates the mechanism, while real networks multiply Jacobians. Global-norm clipping limits an update but does not fix a bad representation or learning rate.",
  "How to Improve Neural Network Performance": "Diagnose before adding layers: verify labels and preprocessing, compare against a simple baseline, inspect train/validation curves, and measure class-specific or error-specific performance. If both scores are poor, address underfitting or a data bug; if train improves while validation worsens, reduce capacity or regularize. Change one factor per experiment and log the result.",
  "Data Scaling in Neural Networks": "Feature scaling prevents large-magnitude inputs from dominating early gradients and helps optimizers navigate the loss surface. Fit a standardizer or other transform on training data only, then reuse it for validation, test, and inference. Do not normalize targets by the same input scaler; inverse-transform regression predictions when needed.",
  "SGD with Momentum": "Momentum maintains an exponentially weighted velocity of past gradients and uses it to smooth updates and accelerate consistently directed movement. A common form is vₜ=βvₜ₋₁+gₜ followed by θₜ₊₁=θₜ−ηvₜ. The momentum coefficient and learning rate interact; high momentum can overshoot when the step is too large.",
  "Nesterov Accelerated Gradient": "Nesterov momentum evaluates the gradient at a look-ahead parameter position, then applies the momentum update. This anticipatory gradient can correct overshoot earlier than classical momentum. Framework implementations define exact update conventions; compare with ordinary momentum under the same validation budget rather than assuming it always wins.",
  "AdaGrad": "AdaGrad accumulates squared gradients per parameter and divides each update by the square root of that history plus epsilon. Frequently updated coordinates get smaller effective learning rates; rare-feature coordinates keep comparatively larger steps. This can suit sparse features, but the accumulated sum grows monotonically and may shrink learning rates too much over long training.",
  "RMSProp": "RMSProp replaces AdaGrad's unbounded squared-gradient sum with an exponential moving average. Each parameter is scaled by the recent root-mean-square gradient plus epsilon, adapting to changing gradient magnitudes. Decay, epsilon and learning rate affect stability; it is an optimizer, not a substitute for validation or a sound architecture.",
  "Adam Optimizer": "Adam combines momentum-like first moments with an exponential average of squared gradients, using bias correction in early steps. It often provides a practical starting point, but is not guaranteed to generalize best. Tune learning rate, inspect validation metrics, and distinguish Adam's adaptive scaling from AdamW's decoupled weight decay.",
  "Keras Tuner: Hyperparameter Tuning": "Keras Tuner repeatedly builds models from a search space and ranks trials using a validation objective. RandomSearch samples configurations; Hyperband allocates budgets adaptively; BayesianOptimization models the objective. Bound the search, set a reproducible directory/seed, use the same validation protocol, and evaluate the selected model once on untouched test data.",
  "The Convolution Operation": "A 2D convolution computes a local dot product between a filter and each image patch, plus a bias, and repeats this across locations and output channels. One filter is shared spatially, reducing parameter count and making the response translation-equivariant. In deep-learning libraries the operation is technically cross-correlation, but conventionally called convolution.",
  "Padding and Strides in CNN": "Stride is the step between neighboring filter positions; increasing it reduces output resolution. Padding adds border values so filters can cover image edges. For kernel K, padding P and stride S, output width is floor((W+2P−K)/S)+1. Track channel count and height/width through every block to catch incompatible shapes.",
  "Pooling Layer and MaxPooling": "Max pooling selects the largest activation in each local window; average pooling averages. Pooling reduces spatial resolution and computation and can provide tolerance to small shifts, but it discards precise location information. Strided convolution is an alternative learned downsampling operation.",
  "LeNet-5 Architecture": "LeNet-5 is an influential early convolutional architecture for handwritten character recognition, combining convolution/subsampling stages with a classifier. It demonstrates local receptive fields, shared weights, and hierarchical features. Modern libraries use different pooling, activation, and tensor conventions, so historical diagrams are best read as design principles rather than copy-paste code.",
  "Backpropagation in CNN: Part 1": "A convolutional layer receives gradients for its feature-map outputs. The input gradient sums contributions from every filter placement; each kernel-weight gradient sums input patches multiplied by output gradients; bias gradients sum across spatial positions and examples. Shared filters mean the same parameter collects signal from many locations.",
  "CNN Backpropagation: Convolution, Pooling and Flatten": "Convolution backpropagation accumulates gradients across receptive fields. Max pooling routes each output gradient to the location that won the forward maximum, so the argmax switches must be retained. Flatten is only a reshape: its gradient is reshaped back to the original tensor dimensions without changing values.",
  "Data Augmentation in Deep Learning": "Augmentation applies label-preserving transformations to training inputs to expose plausible variation and reduce overfitting. Random flips, crops, small rotations, or color changes are task-dependent; a transformation that changes the label teaches the wrong invariance. Apply augmentation only to training data and keep validation/test preprocessing deterministic.",
  "Pretrained CNNs, ImageNet and ILSVRC": "ImageNet is a large labeled image collection; ILSVRC was a benchmark/challenge associated with large-scale visual recognition. A pretrained CNN has weights learned on a source task and can provide useful visual features. Check the exact model's input size, channel order, pixel preprocessing, license, and source/target domain gap.",
  "What Does a CNN See?": "Early filters often respond to edges, orientations, and color contrasts; later feature maps combine these into larger patterns. Activations show where a filter responds, but are not automatically semantic explanations. Inspect input examples, feature-map ranges, and layer receptive fields together.",
  "Transfer Learning in Keras": "Load a pretrained convolutional base with its matching preprocessing, freeze it, and train a small task-specific head first. Then optionally unfreeze selected deeper layers and fine-tune with a much smaller learning rate. Keep validation/test data separate and avoid updating batch-normalization statistics on tiny or mismatched batches without a plan.",
  "Fine-Tuning vs Feature Extraction": "Feature extraction freezes all pretrained backbone parameters and learns only a new head, making it efficient on small datasets. Fine-tuning updates some or all backbone weights so features adapt to the target domain, but can overfit or erase useful representations. Compare frozen, partial-unfreeze, and full fine-tune strategies on validation data.",
  "LSTM: The What": "Long Short-Term Memory networks add a gated cell state to a recurrent network. The cell state carries information across time; gates regulate which old content is forgotten, which candidate content is written, and which state is exposed as hidden output. This improves the ability to preserve useful signals, though it does not guarantee learning arbitrarily long dependencies.",
  "LSTM Next-Word Predictor": "Train next-token prediction by shifting a tokenized sequence: the input prefix ends one position before its target sequence. At each position, predict the next vocabulary token with a softmax and sparse categorical cross-entropy. During generation, feed the latest context repeatedly; temperature/top-k sampling changes diversity, not model knowledge.",
  "The History of Large Language Models: LSTMs to ChatGPT": "Language modeling progressed from statistical n-gram methods through recurrent neural models and sequence-to-sequence attention to large Transformer pretraining and instruction tuning. Improvements combined architecture, data, compute, objectives, scaling, and alignment processes. This timeline is a conceptual map, not a claim that one model directly evolved into another.",
  "Encoder-Decoder Sequence-to-Sequence Architecture": "An encoder converts an input sequence into hidden representations; a decoder generates an output sequence conditioned on those representations. Early systems compressed context into one vector, while attention lets the decoder retrieve different encoder states at each output step. Training usually uses shifted targets and teacher forcing.",
  "Introduction to Transformers": "Transformers replace recurrence with attention and position-wise feed-forward computation, enabling parallel processing of training tokens. Encoder, decoder, and encoder-decoder variants differ in allowed attention and input/output flow. They still require position information, normalization, residual paths, tokenization, masks, and careful autoregressive training for language generation.",
  "Transformer Decoder Architecture": "A decoder-only block stacks masked self-attention and feed-forward layers with residual paths and normalization, then projects token states to vocabulary logits. A causal mask ensures each location only sees its prefix. Encoder-decoder decoders add cross-attention to encoder states between self-attention and feed-forward operations.",
  "Visualizing Self-Attention": "An attention map has query positions on one axis and key positions on the other; each unmasked query row typically sums to one after softmax. Bright cells indicate larger normalized weights for that head and input. Compare layers, heads, and examples, and do not infer causal or linguistic meaning from color alone."
};

const datasets = {
  foundation: "Perceptron toy data (AND gate):\nInputs: [0,0], [0,1], [1,0], [1,1]\nLabels: 0, 0, 0, 1\nThis is linearly separable, so a single threshold unit can learn it.",
  xor: "Tiny XOR dataset (non-linearly separable by a single perceptron):\nInputs: [0,0], [0,1], [1,0], [1,1]\nLabels: 0, 1, 1, 0\nA hidden layer with a nonlinear activation can represent this pattern.",
  mlp: "Customer churn teaching table (synthetic, illustrative):\nmonths, monthly_fee, support_calls, churn\n2, 85, 4, 1\n18, 60, 1, 0\n7, 92, 3, 1\n30, 55, 0, 0\n12, 72, 2, 0\n4, 105, 5, 1\nFeatures are made-up numeric examples; they are not customer records.",
  optimizer: "Small optimizer example:\nx: 1, 2, 3, 4\ny: 3, 5, 7, 9\nThe target relationship is y = 2x + 1. This tiny deterministic dataset makes update behavior easy to inspect.",
  cnn: "MNIST is a real public dataset of 70,000 labeled 28×28 grayscale digit images (60,000 train / 10,000 test). Keras downloads it when load_data() is called. Pixel values are scaled from 0–255 to 0–1.",
  sequence: "IMDB sentiment is a real Keras dataset of 25,000 training and 25,000 test movie reviews with positive/negative labels. The built-in integer-tokenized version downloads on first use; review text is encoded as word IDs.",
  attention: "Toy sequence for attention mechanics: ['the', 'animal', 'did', 'not', 'cross', 'the', 'street'].\nToken IDs and vectors are created by the model. In translation tasks, source tokens are encoder context and target tokens are generated one at a time.",
  transformer: "Transformer examples use short token sequences and explicit tensor shapes to show attention. For real language-model training, use a properly licensed, representative text corpus, tokenize it, and create shifted input/next-token targets.",
  projects: "Project data sources:\n• Churn: small synthetic tabular rows to make preprocessing and binary labels concrete.\n• MNIST: Keras public dataset; downloads automatically.\n• Admissions: synthetic reproducible scores with research/CGPA features.\n• Cats vs dogs: a local labeled image folder, e.g. a permitted Kaggle dataset.\n• IMDB: Keras public review dataset for sentiment."
};

const hyperparameters = {
  foundation: [
    ["learning_rate (η)", "Scales each perceptron weight update. Too large can oscillate; too small needs many passes."],
    ["epochs", "Maximum passes through training rows. Monitor mistakes or validation loss rather than assuming more is better."],
    ["threshold", "Decision cutoff for the perceptron score; with a bias term it is commonly represented by the bias."],
    ["input scaling", "Put features on comparable scales when magnitudes differ substantially."]
  ],
  mlp: [
    ["learning_rate", "Step size for the optimizer; tune on validation data. Diverging loss is a warning to lower it."],
    ["hidden_units / layers", "Capacity of the representation. Increase only when the model underfits and data supports it."],
    ["batch_size", "Examples per gradient update. Common starting range is 32–256; memory and noise both matter."],
    ["epochs + early stopping", "Maximum training passes and validation-based stop rule. Restore the best validation weights."],
    ["activation", "ReLU is a common hidden-layer default; choose output activation to match target and loss."],
    ["dropout / L1 / L2", "Regularize only when generalization evidence supports it; tune the strength, not just the layer."]
  ],
  cnn: [
    ["filters", "Number of learned feature maps. More channels cost memory and parameters."],
    ["kernel_size", "Spatial field of view, often 3×3. Stacked small kernels build larger receptive fields."],
    ["strides / padding", "Control output resolution. 'same' preserves dimensions at stride 1; valid shrinks them."],
    ["learning_rate", "Convolution models can be sensitive to step size; monitor validation metrics."],
    ["augmentation", "Use label-preserving flips/crops/rotations that match the image domain."]
  ],
  sequence: [
    ["embedding_dim", "Width of learned token vectors; larger embeddings increase parameters."],
    ["units", "Hidden-state size in the recurrent layer. It controls capacity and compute per time step."],
    ["sequence_length", "Padding/truncation limit. Choose from length statistics and available context."],
    ["dropout / recurrent_dropout", "Regularize the input/recurrent transformations; recurrent dropout may reduce optimized-kernel speed."],
    ["learning_rate / gradient clip", "Use stable updates; clipping by global norm is a common defense against exploding gradients."]
  ],
  attention: [
    ["attention dimension", "Query/key width controls compatibility scores; value width controls the combined context."],
    ["number of heads", "Parallel learned subspaces; model width is often divisible by head count."],
    ["mask", "Exclude padding or disallowed future positions before softmax, using a large negative score."],
    ["dropout", "Applied to attention weights or residual branches to regularize training."]
  ],
  transformer: [
    ["d_model", "Token representation width; projection dimensions and embedding sizes must agree."],
    ["num_heads", "Parallel attention heads. Typically d_model is divisible by the number of heads."],
    ["num_layers / d_ff", "Depth and feed-forward width control model capacity and compute."],
    ["context_length", "Maximum sequence positions supported by the positional representation and attention mask."],
    ["learning_rate + warmup", "Transformer training often uses a warmup schedule; validate the schedule for the dataset and batch size."],
    ["dropout", "Regularizes attention, embeddings, or feed-forward blocks; disable during inference."]
  ],
  projects: [
    ["train / validation / test split", "Keep final test examples untouched; stratify labels when appropriate."],
    ["batch_size", "Choose within hardware limits; confirm the last batch and input shapes work."],
    ["epochs + early stopping", "Set a ceiling and stop based on validation quality, restoring best weights."],
    ["random seed", "Seed split/data/model operations for closer reproducibility; GPU kernels may remain nondeterministic."]
  ]
};

const snippets = {
  xor: `import numpy as np

# XOR: one hidden layer is needed because one line cannot separate the labels
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=float)
y = np.array([[0], [1], [1], [0]], dtype=float)
rng = np.random.default_rng(7)
W1 = rng.normal(0, 0.7, size=(2, 4))
b1 = np.zeros((1, 4))
W2 = rng.normal(0, 0.7, size=(4, 1))
b2 = np.zeros((1, 1))
sigmoid = lambda z: 1 / (1 + np.exp(-z))

for epoch in range(10000):
    hidden = sigmoid(X @ W1 + b1)
    prediction = sigmoid(hidden @ W2 + b2)
    # Binary cross-entropy + sigmoid gives this simple output delta
    delta2 = (prediction - y) / len(X)
    dW2 = hidden.T @ delta2
    db2 = delta2.sum(axis=0, keepdims=True)
    delta1 = (delta2 @ W2.T) * hidden * (1 - hidden)
    dW1 = X.T @ delta1
    db1 = delta1.sum(axis=0, keepdims=True)
    W2 -= 1.0 * dW2
    b2 -= 1.0 * db2
    W1 -= 1.0 * dW1
    b1 -= 1.0 * db1

probabilities = sigmoid(sigmoid(X @ W1 + b1) @ W2 + b2)
print("probabilities:", probabilities.round(3).ravel())
print("classes:", (probabilities >= 0.5).astype(int).ravel())`,
  xorPerceptron: `import numpy as np

# XOR labels cannot be separated by one linear decision boundary
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=float)
y = np.array([0, 1, 1, 0])
weights = np.zeros(2)
bias = 0.0
for epoch in range(50):
    for features, target in zip(X, y):
        prediction = int(np.dot(features, weights) + bias >= 0.5)
        error = target - prediction
        weights += 0.1 * error * features
        bias += 0.1 * error
predictions = (X @ weights + bias >= 0.5).astype(int)
print("target:     ", y.tolist())
print("predictions:", predictions.tolist())
print("errors remain because XOR is not linearly separable.")`,
  perceptron: `import numpy as np

# Four examples of the AND logic gate
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=float)
y = np.array([0, 0, 0, 1])
weights = np.zeros(2)
bias = 0.0
learning_rate = 0.1

for epoch in range(12):
    mistakes = 0
    for features, target in zip(X, y):
        prediction = int(np.dot(features, weights) + bias >= 0.5)
        error = target - prediction
        weights += learning_rate * error * features
        bias += learning_rate * error
        mistakes += int(error != 0)
    if mistakes == 0:
        break

predictions = (X @ weights + bias >= 0.5).astype(int)
print("weights:", weights, "bias:", round(bias, 2))
print("predictions:", predictions.tolist())`,
  mlp: `import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Small synthetic churn example: tenure, monthly bill, support calls
X = np.array([
    [2, 85, 4], [18, 60, 1], [7, 92, 3], [30, 55, 0],
    [12, 72, 2], [4, 105, 5], [24, 64, 1], [3, 98, 4],
    [36, 52, 0], [10, 89, 3], [20, 67, 1], [6, 94, 4],
    [28, 58, 0], [14, 76, 2], [5, 101, 5], [32, 54, 0]
], dtype="float32")
y = np.array([1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0], dtype="float32")

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=7, stratify=y
)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)  # Never refit on test data

model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(3,)),
    tf.keras.layers.Dense(8, activation="relu"),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(1, activation="sigmoid")
])
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
              loss="binary_crossentropy", metrics=["accuracy"])
stop = tf.keras.callbacks.EarlyStopping(
    monitor="val_loss", patience=8, restore_best_weights=True
)
model.fit(X_train, y_train, validation_split=0.2, epochs=100,
          batch_size=4, callbacks=[stop], verbose=0)
print("Test loss, accuracy:", model.evaluate(X_test, y_test, verbose=0))
print("First churn probability:", model.predict(X_test[:1], verbose=0)[0, 0])`,
  optimizer: `# One-dimensional linear regression trained with mini-batch SGD
import numpy as np

X = np.array([1., 2., 3., 4.])
y = np.array([3., 5., 7., 9.])  # y = 2x + 1
w, b = 0.0, 0.0
learning_rate = 0.03

for epoch in range(300):
    prediction = w * X + b
    error = prediction - y
    dw = np.mean(error * X)       # d(MSE)/dw, constant factor absorbed in step
    db = np.mean(error)           # d(MSE)/db
    w -= learning_rate * dw
    b -= learning_rate * db

print(f"learned y ≈ {w:.2f}x + {b:.2f}")
print(f"prediction for x=5: {w * 5 + b:.2f}")`,
  cnn: `import tensorflow as tf
from tensorflow.keras import layers, models

# Public MNIST dataset: 60k train and 10k test grayscale digit images
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()
x_train = x_train[..., None].astype("float32") / 255.0
x_test = x_test[..., None].astype("float32") / 255.0

model = models.Sequential([
    layers.Input(shape=(28, 28, 1)),
    layers.Conv2D(32, 3, padding="same", activation="relu"),
    layers.MaxPooling2D(),
    layers.Conv2D(64, 3, padding="same", activation="relu"),
    layers.MaxPooling2D(),
    layers.Flatten(),
    layers.Dense(64, activation="relu"),
    layers.Dense(10, activation="softmax")
])
model.compile(optimizer="adam",
              loss="sparse_categorical_crossentropy",
              metrics=["accuracy"])
model.summary()
model.fit(x_train, y_train, validation_split=0.1,
          epochs=5, batch_size=64)
print("Test metrics:", model.evaluate(x_test, y_test, verbose=0))
print("Image tensor:", x_test[:1].shape, "class probabilities:",
      model.predict(x_test[:1], verbose=0).round(3))`,
  mnistAnn: `import tensorflow as tf
from tensorflow.keras import layers

# Public MNIST: 28x28 grayscale images, labels are integers 0 through 9
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()
x_train = x_train.astype("float32") / 255.0
x_test = x_test.astype("float32") / 255.0

# A dense ANN flattens each image; unlike a CNN, it does not preserve locality
model = tf.keras.Sequential([
    layers.Input(shape=(28, 28)),
    layers.Flatten(),
    layers.Dense(128, activation="relu"),
    layers.Dropout(0.2),
    layers.Dense(10, activation="softmax")
])
model.compile(optimizer="adam",
              loss="sparse_categorical_crossentropy",
              metrics=["accuracy"])
model.fit(x_train, y_train, validation_split=0.1,
          epochs=5, batch_size=64)
print("Test loss, accuracy:", model.evaluate(x_test, y_test, verbose=0))
print("First prediction:", model.predict(x_test[:1], verbose=0).argmax(axis=1))`,
  dropout: `import numpy as np
import tensorflow as tf
from tensorflow.keras import layers

# Synthetic examples show Dropout in both binary classification and regression
rng = np.random.default_rng(10)
X = rng.normal(size=(400, 4)).astype("float32")
y_class = ((X[:, 0] + X[:, 1] > 0).astype("float32"))
y_value = (2 * X[:, 0] - X[:, 1] + rng.normal(0, 0.1, 400)).astype("float32")

def build_model(output_activation):
    return tf.keras.Sequential([
        layers.Input(shape=(4,)),
        layers.Dense(32, activation="relu"),
        layers.Dropout(0.25),  # active only while training
        layers.Dense(16, activation="relu"),
        layers.Dropout(0.15),
        layers.Dense(1, activation=output_activation)
    ])

classifier = build_model("sigmoid")
classifier.compile(optimizer="adam", loss="binary_crossentropy",
                   metrics=["accuracy"])
classifier.fit(X, y_class, validation_split=0.2, epochs=20, verbose=0)

regressor = build_model(None)  # linear output for a continuous target
regressor.compile(optimizer="adam", loss="mse", metrics=["mae"])
regressor.fit(X, y_value, validation_split=0.2, epochs=20, verbose=0)
print("class probability:", classifier.predict(X[:1], verbose=0)[0, 0])
print("regression estimate:", regressor.predict(X[:1], verbose=0)[0, 0])`,
  sequence: `import tensorflow as tf
from tensorflow.keras import layers

# Real IMDB review data; integer tokens are already prepared by Keras
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.imdb.load_data(
    num_words=10000
)
max_length = 250
x_train = tf.keras.utils.pad_sequences(x_train, maxlen=max_length)
x_test = tf.keras.utils.pad_sequences(x_test, maxlen=max_length)

model = tf.keras.Sequential([
    layers.Embedding(input_dim=10000, output_dim=64, mask_zero=True),
    layers.LSTM(64, dropout=0.2),
    layers.Dense(1, activation="sigmoid")
])
model.compile(optimizer="adam", loss="binary_crossentropy",
              metrics=["accuracy", tf.keras.metrics.AUC(name="auc")])
model.fit(x_train, y_train, validation_split=0.2, epochs=5,
          batch_size=64,
          callbacks=[tf.keras.callbacks.EarlyStopping(
              patience=1, restore_best_weights=True)])
print("Test metrics:", model.evaluate(x_test, y_test, verbose=0))`,
  attention: `import tensorflow as tf
from tensorflow.keras import layers

# Two short token sequences, each with a 5-dimensional embedding
tokens = tf.random.normal((2, 6, 5))
attention = layers.MultiHeadAttention(
    num_heads=1, key_dim=5, dropout=0.0
)
context, scores = attention(
    query=tokens, key=tokens, value=tokens,
    return_attention_scores=True
)
print("input:", tokens.shape)
print("context:", context.shape)
print("attention scores:", scores.shape)
# Each row of scores distributes attention across the 6 key positions.`,
  transformer: `import tensorflow as tf
from tensorflow.keras import layers

class TransformerBlock(layers.Layer):
    def __init__(self, width, heads, ff_width, dropout=0.1):
        super().__init__()
        self.attn = layers.MultiHeadAttention(
            num_heads=heads, key_dim=width // heads
        )
        self.ffn = tf.keras.Sequential([
            layers.Dense(ff_width, activation="gelu"),
            layers.Dense(width)
        ])
        self.norm1 = layers.LayerNormalization(epsilon=1e-6)
        self.norm2 = layers.LayerNormalization(epsilon=1e-6)
        self.drop = layers.Dropout(dropout)

    def call(self, x, training=False, mask=None):
        attended = self.attn(x, x, attention_mask=mask, training=training)
        x = self.norm1(x + self.drop(attended, training=training))
        transformed = self.ffn(x, training=training)
        return self.norm2(x + self.drop(transformed, training=training))

x = tf.random.normal((2, 12, 64))  # batch, tokens, model width
block = TransformerBlock(width=64, heads=4, ff_width=128)
print("output shape:", block(x).shape)`,
  mnist: `import tensorflow as tf

(train_images, train_labels), (test_images, test_labels) = (
    tf.keras.datasets.mnist.load_data()
)
print("train:", train_images.shape, train_labels.shape)
print("test: ", test_images.shape, test_labels.shape)
print("pixel range before scaling:",
      train_images.min(), train_images.max())
train_images = train_images.astype("float32") / 255.0
test_images = test_images.astype("float32") / 255.0
print("label for first image:", int(train_labels[0]))`,
  admissions: `import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Reproducible synthetic admissions-style data (not real applicant records)
rng = np.random.default_rng(42)
n = 500
cgpa = rng.uniform(6.0, 10.0, n)
gre = rng.integers(280, 341, n)
research = rng.integers(0, 2, n)
noise = rng.normal(0, 0.08, n)
chance = np.clip(0.12 + 0.13 * (cgpa - 6) + 0.003 * (gre - 280)
                 + 0.08 * research + noise, 0, 1)
X = np.column_stack([cgpa, gre, research]).astype("float32")
X_train, X_test, y_train, y_test = train_test_split(
    X, chance.astype("float32"), test_size=0.2, random_state=42
)
scaler = StandardScaler().fit(X_train)
X_train, X_test = scaler.transform(X_train), scaler.transform(X_test)
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(3,)),
    tf.keras.layers.Dense(16, activation="relu"),
    tf.keras.layers.Dense(8, activation="relu"),
    tf.keras.layers.Dense(1, activation="sigmoid")
])
model.compile(optimizer="adam", loss="mse", metrics=["mae"])
model.fit(X_train, y_train, validation_split=0.2, epochs=60,
          callbacks=[tf.keras.callbacks.EarlyStopping(
              patience=6, restore_best_weights=True)], verbose=0)
print("Held-out MSE, MAE:", model.evaluate(X_test, y_test, verbose=0))`,
  cats: `import tensorflow as tf
from tensorflow.keras import layers

# Directory layout: data/train/cats/*.jpg, data/train/dogs/*.jpg
train = tf.keras.utils.image_dataset_from_directory(
    "data/train", image_size=(160, 160), batch_size=32,
    label_mode="binary", validation_split=0.2, subset="training",
    seed=42
)
valid = tf.keras.utils.image_dataset_from_directory(
    "data/train", image_size=(160, 160), batch_size=32,
    label_mode="binary", validation_split=0.2, subset="validation",
    seed=42
)
augment = tf.keras.Sequential([
    layers.RandomFlip("horizontal"),
    layers.RandomRotation(0.05),
])
model = tf.keras.Sequential([
    layers.Input((160, 160, 3)),
    augment, layers.Rescaling(1./255),
    layers.Conv2D(32, 3, activation="relu"), layers.MaxPooling2D(),
    layers.Conv2D(64, 3, activation="relu"), layers.MaxPooling2D(),
    layers.GlobalAveragePooling2D(),
    layers.Dense(1, activation="sigmoid")
])
model.compile(optimizer="adam", loss="binary_crossentropy",
              metrics=["accuracy"])
model.fit(train, validation_data=valid, epochs=10)`,
  nextWord: `import tensorflow as tf
from tensorflow.keras import layers

# Tiny teaching corpus. A real language model needs a much larger corpus.
text = [
    "deep learning learns useful representations",
    "neural networks learn from examples",
    "attention connects tokens across a sequence",
    "deep networks combine layers of computation"
]
vectorizer = layers.TextVectorization(
    max_tokens=1000, output_mode="int", output_sequence_length=7
)
vectorizer.adapt(text)
tokens = vectorizer(text)
inputs, targets = tokens[:, :-1], tokens[:, 1:]
vocab_size = len(vectorizer.get_vocabulary())
model = tf.keras.Sequential([
    layers.Embedding(vocab_size, 32),
    layers.LSTM(64, return_sequences=True),
    layers.Dense(vocab_size)
])
model.compile(optimizer="adam",
              loss=tf.keras.losses.SparseCategoricalCrossentropy(
                  from_logits=True
              ))
model.fit(inputs, targets, epochs=80, verbose=0)
print("token input shape:", inputs.shape)
print("vocabulary size:", vocab_size)
print("logits shape:", model(inputs[:1]).shape)`,
  gradients: `import numpy as np
import tensorflow as tf

# Repeated local derivatives illustrate how a chain can shrink or grow
vanishing = np.prod(np.full(30, 0.5))
exploding = np.prod(np.full(30, 1.5))
print("product of 30 small derivatives:", vanishing)
print("product of 30 large derivatives:", exploding)

# In a real model, global-norm clipping limits an unstable update
gradients = [tf.constant([120.0, -90.0]), tf.constant([60.0])]
clipped, global_norm = tf.clip_by_global_norm(gradients, clip_norm=1.0)
print("original global norm:", float(global_norm))
print("clipped global norm:", float(tf.linalg.global_norm(clipped)))`,
  tuner: `# Install once: pip install tensorflow keras-tuner scikit-learn
import numpy as np
import tensorflow as tf
import keras_tuner as kt
from sklearn.model_selection import train_test_split

rng = np.random.default_rng(4)
X = rng.normal(size=(500, 4)).astype("float32")
y = ((X[:, 0] - 0.5 * X[:, 1]) > 0).astype("float32")
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=4, stratify=y
)

def build_model(hp):
    model = tf.keras.Sequential([
        tf.keras.layers.Input(shape=(4,)),
        tf.keras.layers.Dense(
            hp.Choice("units", [16, 32, 64]), activation="relu"
        ),
        tf.keras.layers.Dropout(
            hp.Float("dropout", 0.0, 0.4, step=0.2)
        ),
        tf.keras.layers.Dense(1, activation="sigmoid")
    ])
    model.compile(
        optimizer=tf.keras.optimizers.Adam(
            learning_rate=hp.Choice("learning_rate", [1e-2, 1e-3, 1e-4])
        ),
        loss="binary_crossentropy", metrics=["accuracy"]
    )
    return model

tuner = kt.RandomSearch(
    build_model, objective="val_accuracy", max_trials=8,
    directory="tuning_runs", project_name="binary_demo", overwrite=True
)
tuner.search(X_train, y_train, validation_split=0.2, epochs=20, batch_size=32,
             callbacks=[tf.keras.callbacks.EarlyStopping(patience=3)])
best_model = tuner.get_best_models(1)[0]
print("best settings:", tuner.get_best_hyperparameters(1)[0].values)
print("held-out test loss/accuracy:", best_model.evaluate(X_test, y_test))`
};

function optimizerCode(title) {
  const lower = title.toLowerCase();
  if (lower.includes("moving average")) return snippets.optimizer +
    `\n\n# Exponential moving average smooths a noisy sequence\nvalues = [1.0, 3.0, 2.0, 5.0]\naverage, beta = 0.0, 0.9\nfor value in values:\n    average = beta * average + (1 - beta) * value\n    print(round(average, 3))`;
  let setting = 'tf.keras.optimizers.SGD(learning_rate=0.03)';
  if (lower.includes("nesterov")) setting = 'tf.keras.optimizers.SGD(learning_rate=0.03, momentum=0.9, nesterov=True)';
  else if (lower.includes("momentum")) setting = 'tf.keras.optimizers.SGD(learning_rate=0.03, momentum=0.9)';
  else if (lower.includes("weight decay")) setting = 'tf.keras.optimizers.AdamW(learning_rate=0.001, weight_decay=1e-4)';
  else if (lower.includes("adagrad")) setting = 'tf.keras.optimizers.Adagrad(learning_rate=0.05, initial_accumulator_value=0.1)';
  else if (lower.includes("rmsprop")) setting = 'tf.keras.optimizers.RMSprop(learning_rate=0.001, rho=0.9)';
  else if (lower.includes("adam")) setting = 'tf.keras.optimizers.Adam(learning_rate=0.001, beta_1=0.9, beta_2=0.999)';
  const batchSize = lower.includes("stochastic") ? 1 : lower.includes("mini-batch") ? 2 : 4;
  return `import numpy as np\nimport tensorflow as tf\n\n# Small deterministic regression data: y = 2x + 1\nX = np.array([[1.], [2.], [3.], [4.]], dtype=\"float32\")\ny = np.array([[3.], [5.], [7.], [9.]], dtype=\"float32\")\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Input(shape=(1,)),\n    tf.keras.layers.Dense(1)\n])\noptimizer = ${setting}\nmodel.compile(optimizer=optimizer, loss=\"mse\")\nmodel.fit(X, y, epochs=100, batch_size=${batchSize}, verbose=0)\nprint(\"learned weight and bias:\", model.layers[-1].get_weights())\nprint(\"prediction for x=5:\", model.predict([[5.]], verbose=0)[0, 0])`;
}

function chooseCode(lesson) {
  const title = lesson.title.toLowerCase();
  if (title.includes("problem with the perceptron")) return snippets.xorPerceptron;
  if (title.includes("churn")) return snippets.mlp;
  if (title.includes("mnist") || title.includes("handwritten")) return snippets.mnistAnn;
  if (title.includes("admission")) return snippets.admissions;
  if (title.includes("cat vs dog") || title.includes("cats vs dogs")) return snippets.cats;
  if (title.includes("next-word") || title.includes("next word")) return snippets.nextWord;
  if (title.includes("sentiment")) return snippets.sequence;
  if (title.includes("keras tuner") || title.includes("hyperparameter tuning")) return snippets.tuner;
  if (title.includes("vanishing and exploding")) return snippets.gradients;
  if (title.includes("dropout")) return snippets.dropout;
  if (title.includes("l1 regularization")) return snippets.mlp.replace(
    'Dense(8, activation="relu"),',
    'Dense(8, activation="relu", kernel_regularizer=tf.keras.regularizers.l1(1e-3)),'
  );
  if (title.includes("l2 regularization")) return snippets.mlp.replace(
    'Dense(8, activation="relu"),',
    'Dense(8, activation="relu", kernel_regularizer=tf.keras.regularizers.l2(1e-3)),'
  );
  if (lesson.kind === "projects") return snippets.mlp;
  if (lesson.kind === "foundation" && title.includes("perceptron")) return snippets.perceptron;
  if (lesson.kind === "foundation") return snippets.xor;
  if (lesson.kind === "mlp" && /gradient|momentum|adagrad|rmsprop|adam|average|optimizer|stochastic/.test(title)) return optimizerCode(title);
  if (title.includes("batch normalization")) return snippets.mlp.replace(
    'tf.keras.layers.Dense(8, activation="relu"),',
    'tf.keras.layers.Dense(8, use_bias=False),\n    tf.keras.layers.BatchNormalization(),\n    tf.keras.layers.Activation("relu"),'
  );
  if (lesson.kind === "mlp") return snippets.mlp;
  if (lesson.kind === "cnn") return snippets.cnn;
  if (lesson.kind === "sequence") return snippets.sequence;
  if (lesson.kind === "attention") return snippets.attention;
  return snippets.transformer;
}

function datasetFor(lesson) {
  const title = lesson.title.toLowerCase();
  if (title.includes("perceptron") && !title.includes("problem")) return datasets.foundation;
  if (lesson.kind === "foundation") return datasets.xor;
  if (title.includes("vanishing and exploding")) return "Gradient-flow demonstration:\nA chain of 30 scalar derivatives, each 0.5 or 1.5, illustrates vanishing or exploding products.\nThe example also clips a synthetic gradient list to a global norm of 1.";
  if (title.includes("optimizer") || title.includes("gradient descent") ||
      title.includes("momentum") || title.includes("adagrad") ||
      title.includes("rmsprop") || title.includes("moving average")) return datasets.optimizer;
  if (title.includes("churn")) return datasets.mlp;
  if (title.includes("mnist") || title.includes("handwritten")) return datasets.cnn;
  if (title.includes("admission")) return "Synthetic admissions-style data:\nCGPA, GRE score and research experience are generated with a fixed random seed; a bounded score combines those inputs plus noise.\nThese are fabricated teaching rows, not real applicant records or an admissions policy.";
  if (title.includes("cat vs dog") || title.includes("cats vs dogs")) return "Cats vs dogs image data:\nA local labeled image folder with class subdirectories, e.g. data/train/cats/*.jpg and data/train/dogs/*.jpg.\nUse a permitted dataset and inspect class counts and sample images.";
  if (title.includes("sentiment")) return datasets.sequence;
  if (title.includes("next-word") || title.includes("next word")) return "Tiny example corpus:\n• deep learning learns useful representations\n• neural networks learn from examples\n• attention connects tokens across a sequence\nThis is only for demonstrating next-token targets, not realistic language-model training.";
  return datasets[lesson.kind] || datasets.projects;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function describeLesson(lesson) {
  if (lessonDetails[lesson.title]) return lessonDetails[lesson.title];
  const title = lesson.title.replace(/^Project:\s*/, "");
  const descriptions = {
    foundation: `${title} is a building block in the path from a weighted sum to a deep model. Focus on the representation being learned, what signal the training objective supplies, and which assumptions the method makes. The same idea will reappear in larger networks, where each unit operates on learned features rather than raw inputs.`,
    mlp: `${title} is best understood by tracing one example through a network and then tracing the loss signal backward. Keep the target type, output activation, loss, preprocessing, and evaluation split consistent. Compare training and validation behavior so you can tell useful learning from memorization.`,
    cnn: `${title} uses the spatial structure of images. Convolutional filters reuse weights across locations, building feature maps that respond to local patterns; deeper layers combine those responses into increasingly task-relevant evidence. Preserve label correctness when resizing or augmenting images.`,
    sequence: `${title} concerns ordered data, where position and context matter. Recurrent models carry a hidden state from one time step to the next; gating and sequence-aware batching help retain useful information. Be explicit about padding, masking, sequence length, and the direction in which information is allowed to flow.`,
    attention: `${title} connects a decoder or token position to relevant context through learned query-key compatibility scores and a weighted combination of values. The mask and the source of keys/values determine what information is available at each step.`,
    transformer: `${title} is part of the Transformer recipe: token representations, position information, attention, feed-forward blocks, normalization, residual connections, and masks work together. Tensor shapes and masking rules are central; check them before scaling a model.`,
    projects: `${title} ties together data loading, a leakage-safe split, preprocessing, an architecture matched to the input, training callbacks, and held-out evaluation. First establish a small reproducible baseline; improve one component at a time and keep the final test set untouched.`
  };
  return descriptions[lesson.kind];
}

function unitMechanics(kind, title) {
  const mechanics = {
    foundation: `<p>Begin with an input vector <code>x</code>. A unit computes <code>z = w·x + b</code>, then maps <code>z</code> through an activation. During learning, a loss compares the output with the target and an update changes parameters. This creates a feedback loop: predict → measure error → adjust → repeat.</p><div class="math">z = Σᵢ wᵢxᵢ + b&nbsp;&nbsp; · &nbsp;&nbsp;a = φ(z)&nbsp;&nbsp; · &nbsp;&nbsp;prediction = g(a)</div><p>For a single perceptron, the feature-space boundary is a hyperplane. A multilayer perceptron composes several affine transformations with nonlinear activations, allowing it to bend that boundary. Without the nonlinearities, several linear layers collapse to one linear transformation.</p>`,
    mlp: `<p>For a dense layer, collect a batch of activations into a matrix. Multiply by a weight matrix, add a bias row-wise, and apply a nonlinearity. The final layer converts the learned representation to the target space. Training alternates a forward pass, a scalar loss calculation, backward gradient calculation, and an optimizer update.</p><div class="math">Z⁽ˡ⁾ = A⁽ˡ⁻¹⁾W⁽ˡ⁾ + b⁽ˡ⁾<br>A⁽ˡ⁾ = φ(Z⁽ˡ⁾)<br>θ ← θ − η ∇θ L(y, ŷ)</div><p>For binary classification, a single sigmoid output with binary cross-entropy is a common pairing. For K classes, use one logit per class with softmax/categorical cross-entropy, or sparse categorical cross-entropy for integer class IDs. For scalar regression, use a linear output and a regression loss such as MAE or MSE.</p>`,
    cnn: `<p>A convolution slides a small learned kernel over height and width. At each position it computes a weighted local sum, producing a feature map. Stride controls how far the kernel moves; padding controls border behavior. Pooling or strided convolution reduces spatial size; stacking blocks expands the effective receptive field.</p><div class="math">Hout = floor((H + 2P − K) / S) + 1<br>One filter: feature map = input * kernel + bias</div><p>Channels encode different learned responses. A common image pipeline is input → convolution + activation → downsampling → repeated feature extraction → global pooling or flatten → task-specific output. The output head and loss must match the label format.</p>`,
    sequence: `<p>At time step t, an RNN combines the current input with the previous hidden state. Parameters are shared across positions, so the model can process variable-length sequences. LSTM and GRU gates regulate what information is stored, forgotten, and exposed; bidirectional variants use both past and future context and therefore suit offline tasks, not strictly causal prediction.</p><div class="math">hₜ = φ(Wₓxₜ + Wₕhₜ₋₁ + b)<br>sequence output → pooling / final state → prediction</div><p>Training unfolds the recurrent computation across time and applies backpropagation through time. Long chains can be expensive and difficult to optimize. Padding must be masked so fake timesteps do not influence sequence representations.</p>`,
    attention: `<p>Project each representation into queries, keys, and values. Similarity between a query and each key yields a score; softmax turns scores into weights; the weighted value sum becomes a context vector. Cross-attention uses queries from one sequence and keys/values from another, while self-attention uses the same sequence as the source for all three.</p><div class="math">Attention(Q,K,V) = softmax(QKᵀ / √dₖ + mask) V</div><p>The mask is part of the model's information-flow contract: padding masks hide empty positions, and causal masks prevent a decoder from seeing future target tokens. Attention weights are useful diagnostics, but should not automatically be interpreted as causal explanations.</p>`,
    transformer: `<p>A Transformer block uses parallel attention to exchange information across positions, then a position-wise feed-forward network to transform each token representation. Residual connections preserve a path through depth; normalization stabilizes activations. Positional information breaks the permutation symmetry of attention. The encoder is typically bidirectional; an autoregressive decoder uses causal masking.</p><div class="math">Q = XWQ, K = XWK, V = XWV<br>MultiHead = Concat(head₁, …, headₕ)WO<br>Block = residual + attention + residual + feed-forward</div><p>During teacher-forced training, target sequences are shifted so each position predicts the next token. At inference, generation is autoregressive. Correct padding, causal masks, token shifts, and train/inference mode are critical to avoid leakage and shape bugs.</p>`,
    projects: `<p>Start by defining the prediction target and a simple baseline. Split the examples before fitting any data-dependent preprocessing, then prepare inputs in a reusable pipeline. Train a small model, track validation loss and task metrics, inspect errors, and only then tune capacity or regularization.</p><div class="math">raw examples → leakage-safe split → input pipeline → model → validation → final test</div><p>Keep evaluation aligned with the real task: use threshold-aware precision/recall for churn, per-class confusion for digits, regression error for admission scores, and class-aware metrics for images or sentiment. Report the dataset source and all preprocessing assumptions.</p>`
  };
  return mechanics[kind];
}

function subtopicsFor(lesson) {
  const keyIdeas = {
    foundation: [
      ["Representation", "What values the model learns and what information passes from one stage to the next."],
      ["Decision rule or activation", "How a numeric score becomes a hidden feature, probability, or class decision."],
      ["Objective and updates", "How the training signal is measured and how parameters move in response."],
      ["Assumptions and limits", "The conditions under which the method works, and the failure case it cannot represent."]
    ],
    mlp: [
      ["Inputs, targets and shapes", "Identify batch size, feature count, output shape, and target encoding before fitting."],
      ["Hidden representation", "Each dense layer transforms learned features; nonlinear activations make the composition expressive."],
      ["Loss and gradient", "The loss links predictions to targets; backpropagation calculates parameter gradients."],
      ["Generalization", "Compare training and validation curves; regularize only when held-out behavior calls for it."]
    ],
    cnn: [
      ["Receptive field", "The image neighborhood visible to a filter or downstream feature."],
      ["Feature map and channels", "Each filter detects a learned pattern at many spatial positions."],
      ["Resolution changes", "Kernel size, stride, padding and pooling determine spatial tensor dimensions."],
      ["Image input pipeline", "Resize, normalize, batch and augment in a way that preserves the task label."]
    ],
    sequence: [
      ["Time-step state", "The recurrent hidden state is the summary passed forward through the sequence."],
      ["Gating and memory", "LSTM/GRU gates control information flow to reduce the plain RNN's memory bottleneck."],
      ["Sequence alignment", "Padding, truncation, masks, and labels must line up with the time dimension."],
      ["Causality", "Choose unidirectional or bidirectional context based on what information exists at prediction time."]
    ],
    attention: [
      ["Query, key and value", "Queries ask what to retrieve; keys match against queries; values are combined."],
      ["Score normalization", "Softmax creates a distribution over permitted source positions."],
      ["Self vs cross attention", "The query source and key/value source define which sequence supplies context."],
      ["Mask and alignment", "Masks exclude invalid positions; alignment can be inspected without claiming causal explanation."]
    ],
    transformer: [
      ["Token and position representations", "Token identity and order are encoded before the block processes a sequence."],
      ["Attention heads", "Parallel projections can form different learned relation patterns."],
      ["Residual, norm and feed-forward", "The surrounding block preserves information paths and transforms each token."],
      ["Masks and inference", "Padding/causal masks and autoregressive decoding enforce valid information flow."]
    ],
    projects: [
      ["Dataset and target", "Document where examples come from, label meaning, feature types, and known limitations."],
      ["Preprocessing and split", "Separate train/validation/test data before learned transforms or tuning."],
      ["Model and training", "Match model input/output layers, loss, optimizer, callbacks, and batching to the task."],
      ["Evaluation and iteration", "Use held-out metrics and error analysis to choose the next experiment."]
    ]
  };
  const personalized = {
    "Batch vs Stochastic vs Mini-Batch Gradient Descent": ["Batch update", "Stochastic update", "Mini-batch update", "Gradient noise and throughput"],
    "Dropout Layers: Regression and Classification": ["Training-time random masking", "Inference-time scaling", "Regression placement", "Classification placement"],
    "Fine-Tuning vs Feature Extraction": ["Frozen backbone", "Trainable task head", "Selective unfreezing", "Small learning rate and validation"],
    "Many-to-Many, One-to-Many and Many-to-One RNNs": ["Many-to-one classification", "One-to-many generation", "Aligned many-to-many output", "Encoder-decoder sequences"],
    "Bahdanau Attention vs Luong Attention": ["Additive score", "Multiplicative score", "Alignment weights", "Compute and architecture trade-offs"],
    "Multi-Head Attention vs Self-Attention": ["Attention operation", "Parallel heads", "Concatenated projection", "Head dimension and masking"],
    "Layer Normalization vs Batch Normalization": ["Normalization axis", "Batch dependence", "Sequence and batch-size behavior", "Training vs inference statistics"],
    "Transfer Learning in Keras": ["Pretrained base", "Input preprocessing contract", "Frozen feature extractor", "Fine-tuning and evaluation"],
    "Early Stopping in Neural Networks": ["Monitor metric", "Patience", "Restore best weights", "Validation discipline"]
  };
  const labels = personalized[lesson.title];
  if (!labels) return keyIdeas[lesson.kind];
  const descriptions = keyIdeas[lesson.kind];
  return labels.map((label, index) => [label, descriptions[index][1]]);
}

function walkthroughFor(lesson) {
  const title = lesson.title.toLowerCase();
  if (title.includes("problem with the perceptron")) {
    return [
      ["Use XOR labels, which require a curved or piecewise-linear boundary."],
      ["Train one linear threshold unit; the update cannot make all four examples correct at once."],
      ["Compare the remaining errors with a hidden-layer network to see why nonlinear representations matter."]
    ];
  }
  if (lesson.kind === "foundation" && title.includes("perceptron")) {
    return [
      ["The AND inputs are feature vectors and the target is a 0/1 label."],
      ["A dot product plus bias produces a score; thresholding converts that score to a class."],
      ["For each mistake, update the weights and bias, then stop once all separable examples are correct."]
    ];
  }
  if (lesson.kind === "foundation") {
    return [
      ["The XOR dataset has four two-feature inputs and binary labels."],
      ["A hidden sigmoid layer learns intermediate features; the output sigmoid maps its score to a probability."],
      ["Backpropagation applies the chain rule through both layers and updates the complete batch."]
    ];
  }
  if (title.includes("keras tuner") || title.includes("hyperparameter tuning")) {
    return [
      ["Create an explicit held-out test split before searching; the tuner must not see the test labels."],
      ["The model-building function declares bounded choices for layer width, dropout, and learning rate."],
      ["Search ranks trials by validation accuracy, then the best saved model is evaluated on the untouched test split."]
    ];
  }
  if (title.includes("vanishing and exploding")) {
    return [
      ["Multiplying small or large local derivatives illustrates how a long chain can shrink or amplify gradients."],
      ["The TensorFlow example calculates the global norm of several gradients."],
      ["Global-norm clipping rescales the combined gradient when it exceeds the chosen threshold; it does not repair every cause of instability."]
    ];
  }
  if (lesson.kind === "mlp" && /gradient|momentum|adagrad|rmsprop|adam|average|optimizer|stochastic/.test(title)) {
    return [
      ["The deterministic y = 2x + 1 data makes the optimization path easy to compare."],
      ["The selected TensorFlow optimizer controls parameter updates; batch_size changes how many examples contribute to each step."],
      ["Inspect the learned weight, bias, and a prediction. Compare optimizers using matched seeds and validation procedures on real tasks."]
    ];
  }
  if (title.includes("cat vs dog") || title.includes("cats vs dogs")) {
    return [
      ["image_dataset_from_directory reads labeled class subfolders and resizes images to a consistent shape."],
      ["RandomFlip and RandomRotation augment training images; Rescaling converts pixel values to a compact numeric range."],
      ["Two convolution/pooling blocks extract visual features, then a sigmoid predicts the binary class."]
    ];
  }
  if (title.includes("mnist") || title.includes("handwritten")) {
    return [
      ["Keras loads 60,000 training and 10,000 test grayscale images with integer labels."],
      ["Scale pixels to [0,1], then Flatten converts each 28×28 image to 784 dense inputs."],
      ["The 10-unit softmax predicts digit classes; sparse categorical cross-entropy consumes integer labels."]
    ];
  }
  if (title.includes("dropout")) {
    return [
      ["The synthetic feature matrix is shared by a binary target and a continuous target."],
      ["Dropout randomly masks hidden activations during fit; the classification head uses sigmoid/BCE and the regression head uses a linear output/MSE."],
      ["Validation splits compare generalization. Dropout is disabled automatically for model.predict()."]
    ];
  }
  if (title.includes("next-word") || title.includes("next word")) {
    return [
      ["TextVectorization builds a vocabulary and converts the short corpus into padded token IDs."],
      ["Shifting tokens by one makes each input position predict the next token."],
      ["The LSTM returns a state at every time step; Dense produces vocabulary logits for sparse categorical cross-entropy."]
    ];
  }
  const steps = {
    foundation: [
      ["Represent examples as numeric feature vectors; keep the label separate from the input."],
      ["Compute a score, apply the decision/activation rule, and compare the result with the target."],
      ["Update parameters using only the training example; repeat and inspect errors on held-out data."]
    ],
    mlp: [
      ["Split before fitting a scaler. Fit it on training rows only, then reuse the same transform for test or production inputs."],
      ["The hidden Dense layer learns nonlinear feature combinations; the output activation and loss encode the target task."],
      ["Early stopping watches validation loss and restores the best epoch; evaluate the chosen model once on the test split."]
    ],
    cnn: [
      ["Load image tensors and scale pixel values so the numerical range is controlled."],
      ["Convolution learns local filters; pooling reduces spatial resolution. Flatten or global pooling prepares features for the output head."],
      ["Compile with a loss that matches label encoding, then inspect test performance and image-specific errors."]
    ],
    sequence: [
      ["Load integer-encoded review sequences and pad/truncate to a documented maximum length."],
      ["Embedding maps token IDs to vectors; the recurrent layer summarizes order and context."],
      ["A sigmoid produces a binary probability. Validation stopping and test evaluation check generalization."]
    ],
    attention: [
      ["Create token representations with shape (batch, sequence, width)."],
      ["Attention compares query/key positions and combines values; a mask controls which positions are visible."],
      ["Inspect output and score tensor shapes to verify the operation matches the intended sequence lengths."]
    ],
    transformer: [
      ["The block projects input representations to query, key, and value vectors and computes attention."],
      ["A residual connection and normalization stabilize the attention output; the feed-forward layer acts on each token."],
      ["For a decoder, supply a causal mask and train on shifted targets to prevent looking ahead."]
    ],
    projects: [
      ["Load or define the dataset and isolate a test split before selecting hyperparameters."],
      ["Fit preprocessing on training examples only and build an architecture that matches the data modality."],
      ["Track validation behavior, restore the best model, then evaluate held-out examples and report the task metric."]
    ]
  };
  return steps[lesson.kind];
}

function outputFor(lesson) {
  if (lesson.title === "Problem with the Perceptron") {
    return "XOR labels: [0, 1, 1, 0]\nA single linear threshold unit cannot separate these points. Adding hidden units with a nonlinear activation makes the pattern representable.";
  }
  if (lesson.kind === "foundation" && lesson.title.toLowerCase().includes("perceptron")) {
    return "predictions: [0, 0, 0, 1]\nThe toy AND examples are linearly separable. The exact learned weights depend on update order and the stopping epoch.";
  }
  if (lesson.kind === "foundation") {
    return "XOR predictions: approximately [0, 1, 1, 0]\nThe hidden layer creates nonlinear features that let the network separate the pattern. Small numerical differences depend on the initialization and training run.";
  }
  const title = lesson.title.toLowerCase();
  if (title.includes("vanishing and exploding")) {
    return "0.5 raised to 30 ≈ 9.31e-10 (vanishing)\n1.5 raised to 30 ≈ 191751 (exploding)\nAfter global-norm clipping, the gradient norm is at most 1.0.";
  }
  if (title.includes("keras tuner") || title.includes("hyperparameter tuning")) {
    return "The search reports validation accuracy for each trial, then prints the best selected settings and held-out test loss/accuracy.\nThe winning settings depend on the generated sample and search budget.";
  }
  if (title.includes("moving average")) {
    return "Learned regression line approaches y ≈ 2x + 1\nEMA values are printed sequentially; larger beta smooths more strongly but reacts more slowly.";
  }
  if (lesson.kind === "mlp" && /gradient|momentum|adagrad|rmsprop|adam|optimizer|stochastic/.test(title)) {
    return "The model learns a weight near 2 and a bias near 1 for y = 2x + 1.\nExact values vary slightly by optimizer and update batch size; the prediction for x=5 should approach 11.";
  }
  if (title.includes("mnist") || title.includes("handwritten")) {
    return "MNIST tensors: (60000, 28, 28) and (10000, 28, 28)\nDense ANN flattens each image to 784 inputs; output shape is (batch_size, 10)\nThe 10 softmax values represent digit-class probabilities.";
  }
  if (title.includes("cat vs dog") || title.includes("cats vs dogs")) {
    return "One image batch: (batch_size, 160, 160, 3)\nBinary model output: (batch_size, 1)\nThe sigmoid score is the model's probability for the positive directory class; confirm class_names before interpreting it.";
  }
  if (title.includes("admission")) {
    return "Input batch: (batch_size, 3)\nRegression output: (batch_size, 1)\nReport held-out MAE/RMSE. The example uses fabricated target values for teaching.";
  }
  if (title.includes("churn")) {
    return "Input batch: (batch_size, 3)\nChurn output: one sigmoid probability per customer\nSelect a threshold using validation costs; the small synthetic example is not an operational churn model.";
  }
  if (title.includes("next-word") || title.includes("next word")) {
    return "Input tokens: (batch_size, sequence_length - 1)\nPer-position vocabulary logits: (batch_size, sequence_length - 1, vocabulary_size)\nEach target position is the next token after its corresponding input position.";
  }
  if (lesson.kind === "cnn") return "MNIST tensors: (60000, 28, 28, 1) and (10000, 28, 28, 1)\nModel output for one image: (1, 10)\nThe 10 softmax values represent digit-class probabilities; exact accuracy varies with initialization and training.";
  if (lesson.kind === "sequence" || title.includes("sentiment")) return "Input batch: (batch_size, 250)\nAfter Embedding: (batch_size, 250, 64)\nAfter LSTM: (batch_size, 64)\nOutput: one sentiment probability per review.";
  if (lesson.kind === "attention") return "Input: (2, 6, 5)\nContext: (2, 6, 5)\nAttention scores: (2, 1, 6, 6)\nDimensions: batch, heads, query positions, key positions.";
  if (lesson.kind === "transformer") return "Input: (2, 12, 64)\nTransformer block output: (2, 12, 64)\nResidual connections preserve sequence length and model width.";
  if (lesson.kind === "projects" || lesson.kind === "mlp") return "Training reports loss/metrics per epoch; EarlyStopping restores the best validation weights.\nPredictions have one probability for binary classification, 10 class scores for MNIST, or one continuous value for regression.\nExact scores depend on the split, seed, runtime and training configuration.";
  return "The example prints parameter values, tensor shapes, or task metrics so you can verify the computation. Values that depend on training are intentionally not presented as guaranteed results.";
}

function diagramFor(kind, title) {
  const label = escapeHtml(title);
  if (kind === "foundation" && title.toLowerCase().includes("perceptron")) {
    return `<svg viewBox="0 0 620 180" role="img" aria-label="Perceptron computes a weighted sum, adds a bias, and applies a threshold">
      <defs><marker id="perceptronArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#8492b0"/></marker></defs>
      <g font-family="Segoe UI,Arial" text-anchor="middle">
       <rect x="28" y="52" width="115" height="62" rx="8" fill="#edf1ff" stroke="#a9b8ec"/><text x="85" y="78" font-size="12" fill="#33415b">Inputs x</text><text x="85" y="98" font-size="10" fill="#68758b">features</text>
       <path class="diagram-link" d="M148 83H217" fill="none" stroke="#8492b0" stroke-width="2" marker-end="url(#perceptronArrow)"/>
       <circle class="diagram-node" cx="265" cy="83" r="37"/><text x="265" y="88" font-size="20" fill="#33415b">Σ</text><text x="265" y="142" font-size="10" fill="#68758b">w·x + b</text>
       <path class="diagram-link" d="M305 83H380" fill="none" stroke="#8492b0" stroke-width="2" marker-end="url(#perceptronArrow)"/>
       <rect x="390" y="52" width="99" height="62" rx="8" fill="#fff3e8" stroke="#edbb8f"/><text x="439" y="78" font-size="12" fill="#45536b">Threshold</text><text x="439" y="98" font-size="10" fill="#68758b">activation</text>
       <path class="diagram-link" d="M494 83H547" fill="none" stroke="#8492b0" stroke-width="2" marker-end="url(#perceptronArrow)"/>
       <text x="570" y="88" font-size="16" fill="#33415b">ŷ</text>
       <text x="310" y="25" font-size="10" fill="#68758b">${label}</text>
      </g></svg>`;
  }
  if (kind === "cnn") {
    return `<svg viewBox="0 0 620 195" role="img" aria-label="CNN feature maps flow through convolution and pooling to class scores">
      <defs><marker id="cnnArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#8492b0"/></marker></defs>
      <g font-family="Segoe UI,Arial" text-anchor="middle">
       <rect x="25" y="48" width="100" height="96" rx="8" fill="#eaf0ff" stroke="#a9b8ec"/><path d="M39 62h72v68H39zM48 72l24 26 24-18 12 23" fill="none" stroke="#627fd7" stroke-width="2"/><text x="75" y="164" font-size="11" fill="#45536b">Image</text>
       <path d="M130 95H172" stroke="#8492b0" stroke-width="2" marker-end="url(#cnnArrow)"/>
       <g fill="#cbd6ff" stroke="#7186d0"><rect x="187" y="53" width="65" height="65" rx="5"/><rect x="198" y="64" width="65" height="65" rx="5"/><rect x="209" y="75" width="65" height="65" rx="5"/></g><text x="230" y="164" font-size="11" fill="#45536b">Convolution maps</text>
       <path d="M280 95H322" stroke="#8492b0" stroke-width="2" marker-end="url(#cnnArrow)"/>
       <g fill="#e9ddff" stroke="#a18bc9"><rect x="340" y="68" width="55" height="55" rx="5"/><rect x="351" y="79" width="55" height="55" rx="5"/></g><text x="375" y="164" font-size="11" fill="#45536b">Downsample + repeat</text>
       <path d="M414 95H455" stroke="#8492b0" stroke-width="2" marker-end="url(#cnnArrow)"/>
       <rect x="470" y="57" width="123" height="76" rx="8" fill="#edf8f4" stroke="#8ac4af"/><text x="531" y="86" font-size="12" fill="#33415b">Class scores</text><text x="531" y="107" font-size="10" fill="#68758b">0 · 1 · ... · 9</text>
      </g></svg>`;
  }
  if (kind === "sequence") {
    return `<svg viewBox="0 0 620 195" role="img" aria-label="A recurrent network passes hidden state from one time step to the next">
      <defs><marker id="rnnArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#8492b0"/></marker></defs>
      <g font-family="Segoe UI,Arial" text-anchor="middle">
       ${[85,250,415].map((x,i)=>`<rect x="${x}" y="62" width="112" height="66" rx="10" fill="#edf1ff" stroke="#a9b8ec"/><text x="${x+56}" y="88" font-size="12" fill="#33415b">Cell t${i+1}</text><text x="${x+56}" y="108" font-size="10" fill="#69758a">shared weights</text><text x="${x+56}" y="158" font-size="10" fill="#69758a">input x${i+1} → output</text>`).join("")}
       <path d="M198 95H244M363 95H409" stroke="#ed9650" stroke-width="2" marker-end="url(#rnnArrow)"/>
       <text x="225" y="83" font-size="9" fill="#bc7336">hidden state</text><text x="390" y="83" font-size="9" fill="#bc7336">hidden state</text>
       <path d="M465 60C500 22 534 22 543 56" fill="none" stroke="#8492b0" stroke-dasharray="4 4" marker-end="url(#rnnArrow)"/>
       <text x="510" y="27" font-size="9" fill="#69758a">recurrent memory</text>
      </g></svg>`;
  }
  if (kind === "attention" || kind === "transformer") {
    const cells = Array.from({length:36}, (_,i) => {
      const x = 56 + (i % 6) * 28, y = 44 + Math.floor(i / 6) * 24;
      const alpha = ((i * 13 + 19) % 70 + 18) / 100;
      return `<rect x="${x}" y="${y}" width="25" height="21" rx="2" fill="rgba(70,107,227,${alpha})"/>`;
    }).join("");
    return `<svg viewBox="0 0 620 205" role="img" aria-label="Self-attention compares token queries to keys to form a contextual representation">
      <defs><marker id="attArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#8492b0"/></marker></defs>
      <g font-family="Segoe UI,Arial">
       <text x="45" y="28" font-size="11" fill="#45536b">Token-to-token attention weights</text>
       ${cells}<text x="55" y="198" font-size="9" fill="#69758a">query positions →</text><text x="29" y="102" transform="rotate(-90 29 102)" font-size="9" fill="#69758a">key positions</text>
       <path d="M249 105H300" stroke="#8492b0" stroke-width="2" marker-end="url(#attArrow)"/>
       <rect x="314" y="70" width="90" height="66" rx="9" fill="#fff3e8" stroke="#edbb8f"/><text x="359" y="96" text-anchor="middle" font-size="12" fill="#45536b">Weighted</text><text x="359" y="115" text-anchor="middle" font-size="12" fill="#45536b">values</text>
       <path d="M410 105H455" stroke="#8492b0" stroke-width="2" marker-end="url(#attArrow)"/>
       <rect x="468" y="70" width="119" height="66" rx="9" fill="#edf8f4" stroke="#8ac4af"/><text x="527" y="96" text-anchor="middle" font-size="12" fill="#45536b">Contextual</text><text x="527" y="115" text-anchor="middle" font-size="12" fill="#45536b">token vectors</text>
       <text x="314" y="158" font-size="9" fill="#69758a">softmax(QKᵀ / √dₖ) V</text>
      </g></svg>`;
  }
  return `<svg viewBox="0 0 620 200" role="img" aria-label="Network layers transform an input, make a prediction, and send a loss gradient backward">
    <defs><marker id="netArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#8492b0"/></marker></defs>
    <g class="network-links">
      ${[[70,110],[210,110],[360,110],[500,110]].slice(0,3).map((layer,i)=>{
        const next=[[70,110],[210,110],[360,110],[500,110]][i+1];
        return Array.from({length:3},(_,j)=>Array.from({length:3},(_,k)=>{
          const y1=57+j*43, y2=67+k*39;
          return `<line class="diagram-link" x1="${layer[0]+34}" y1="${y1}" x2="${next[0]-15}" y2="${y2}"/>`;
        }).join("")).join("");
      }).join("")}
    </g>
    ${[70,210,360,500].map((x,i)=>Array.from({length:[3,4,3,2][i]},(_,j)=>{
      const count=[3,4,3,2][i], y=100-(count-1)*21+j*42;
      return `<circle class="diagram-node" cx="${x}" cy="${y}" r="11"/>`;
    }).join("")).join("")}
    <g font-family="Segoe UI,Arial" text-anchor="middle" fill="#45536b" font-size="10">
      <text x="70" y="182">Input</text><text x="210" y="182">Hidden features</text><text x="360" y="182">Representation</text><text x="500" y="182">Prediction</text>
    </g>
    <text x="310" y="22" text-anchor="middle" font-family="Segoe UI,Arial" font-size="10" fill="#68758b">${label}</text>
  </svg>`;
}

function currentIndex() {
  const match = window.location.hash.match(/^#lesson=(\d+)$/);
  return match ? Math.min(Number(match[1]), lessonList.length - 1) : 0;
}

let activeIndex = currentIndex();
const nav = document.getElementById("course-nav");
const article = document.getElementById("article");

function renderNav() {
  const query = document.getElementById("course-search").value.trim().toLowerCase();
  nav.innerHTML = units.map(unit => {
    const lessons = lessonList.filter(lesson => lesson.unit === unit.title &&
      (!query || lesson.title.toLowerCase().includes(query)));
    if (!lessons.length) return "";
    return `<div class="unit-heading">${escapeHtml(unit.title)}</div>${lessons.map(lesson =>
      `<button class="lesson-link" type="button" data-index="${lesson.index}" aria-current="${lesson.index === activeIndex ? "page" : "false"}">
        <span class="lesson-index">${String(lesson.index + 1).padStart(2, "0")}</span><span>${escapeHtml(lesson.title)}</span>
      </button>`).join("")}`;
  }).join("") || `<div class="empty-state">No matching lessons. Try a broader search.</div>`;
}

const workflowDescriptions = [
  "Start with a simple linear threshold unit and learn the vocabulary of weights, bias, and loss.",
  "Build dense networks, make predictions, and train them with forward/backpropagation.",
  "Control gradients, generalization, initialization, normalization, and optimizer behavior.",
  "Learn spatial features with convolutions, pooling, augmentation, and transfer learning.",
  "Model ordered data with recurrent state, LSTM/GRU gates, and sequence tasks.",
  "Connect input and output sequences with encoder-decoder models and learned attention.",
  "Study self-attention, masks, Transformer blocks, inference, and practical projects."
];

const modelChoices = {
  tabular: {
    title: "Tabular features → begin with an MLP baseline",
    description: "Scale numeric columns using training statistics, define a leakage-safe split, then choose a sigmoid classifier or a regression output to match the target.",
    lesson: "Customer Churn Prediction using ANN"
  },
  image: {
    title: "Images → convolutional neural network",
    description: "Start with a CNN that preserves local image structure. Normalize pixels, use label-preserving training augmentation, and compare a pretrained feature extractor when data is limited.",
    lesson: "What is a Convolutional Neural Network?"
  },
  sequence: {
    title: "Ordered sequences → RNN, LSTM/GRU, or attention",
    description: "Use an RNN/LSTM/GRU as a sequence-learning baseline; account for padding, masks, sequence length, and whether future context is available.",
    lesson: "RNN Sentiment Analysis in Keras"
  },
  text: {
    title: "Next-token generation → causal Transformer or language model",
    description: "Shift tokens to next-token targets, mask future positions, and generate autoregressively. Begin with a tiny corpus only to learn mechanics—not to claim useful language quality.",
    lesson: "Project: Next-Word Prediction"
  }
};

let activeUnitFilter = "all";
let activeModelChoice = "tabular";
const workflowGrid = document.getElementById("workflow-grid");
const topicMapGrid = document.getElementById("topic-map-grid");
const libraryGrid = document.getElementById("library-grid");
const libraryFilters = document.getElementById("library-filters");

function renderWorkflow() {
  workflowGrid.innerHTML = units.map((unit, index) => `
    <button class="workflow-card" type="button" data-unit-index="${index}">
      <span>STEP ${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(unit.title.replace(/^\d+ · /, ""))}</strong>
      <small>${escapeHtml(workflowDescriptions[index])}</small>
    </button>`).join("");
}

function renderModelChoice() {
  const choice = modelChoices[activeModelChoice];
  document.querySelectorAll("[data-model-choice]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.modelChoice === activeModelChoice));
  });
  document.getElementById("model-title").textContent = choice.title;
  document.getElementById("model-description").textContent = choice.description;
  document.getElementById("model-recommend").dataset.lessonTitle = choice.lesson;
}

function renderTopicMap() {
  topicMapGrid.innerHTML = units.map((unit, unitIndex) => {
    const lessons = lessonList.filter(lesson => lesson.unitIndex === unitIndex);
    return `<article class="topic-unit-card">
      <h3>${escapeHtml(unit.title.replace(/^\d+ · /, ""))}</h3>
      <p>${lessons.length} lessons · ${escapeHtml(unit.kind === "projects" ? "hands-on projects" : "concepts, code and visual guides")}</p>
      ${lessons.slice(0, 3).map(lesson =>
        `<button type="button" data-index="${lesson.index}">${escapeHtml(lesson.title)}</button>`).join("")}
      <button type="button" data-unit-index="${unitIndex}">Browse all ${lessons.length} →</button>
    </article>`;
  }).join("");
}

function renderLibraryFilters() {
  libraryFilters.innerHTML = `<button class="unit-filter" type="button" data-unit-filter="all" aria-pressed="${activeUnitFilter === "all"}">All lessons</button>` +
    units.map((unit, index) =>
      `<button class="unit-filter" type="button" data-unit-filter="${index}" aria-pressed="${String(index) === activeUnitFilter}">${String(index + 1).padStart(2, "0")}</button>`
    ).join("");
}

function renderLibrary() {
  const query = document.getElementById("library-search").value.trim().toLowerCase();
  const filtered = lessonList.filter(lesson =>
    (activeUnitFilter === "all" || lesson.unitIndex === Number(activeUnitFilter)) &&
    (!query || lesson.title.toLowerCase().includes(query) || lesson.unit.toLowerCase().includes(query))
  );
  document.getElementById("library-count").textContent =
    `Showing ${filtered.length} of ${lessonList.length} detailed lessons. Select a lesson to open its full tutorial.`;
  libraryGrid.innerHTML = filtered.length
    ? filtered.map(lesson => `
      <button class="library-card" type="button" data-index="${lesson.index}" aria-current="${lesson.index === activeIndex ? "page" : "false"}">
        <span>${String(lesson.unitIndex + 1).padStart(2, "0")} · ${escapeHtml(lesson.unit.replace(/^\d+ · /, ""))}</span>
        <strong>${escapeHtml(lesson.title)}</strong>
      </button>`).join("")
    : `<div class="no-library-results">No lessons match that search. Try another word or choose “All lessons.”</div>`;
}

function openLesson(index) {
  renderLesson(index, true);
  article.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start"
  });
}

function renderLesson(index, updateHash) {
  activeIndex = index;
  const lesson = lessonList[index];
  if (!lesson) return;
  if (updateHash) history.replaceState(null, "", `#lesson=${index}`);
  renderNav();
  renderLibrary();
  const code = chooseCode(lesson);
  const dataset = datasetFor(lesson);
  const parameterCards = hyperparameters[lesson.kind].map(([name, description]) =>
    `<div class="parameter"><code>${escapeHtml(name)}</code><p>${escapeHtml(description)}</p></div>`).join("");
  const subtopics = subtopicsFor(lesson).map(([name, description]) =>
    `<li><strong>${escapeHtml(name)}</strong>${escapeHtml(description)}</li>`).join("");
  const walkthrough = walkthroughFor(lesson).map(text => `<li>${escapeHtml(text)}</li>`).join("");
  const title = lesson.title;
  const description = describeLesson(lesson);
  const specifics = lesson.title === "Customer Churn Prediction using ANN" || lesson.title.includes("churn")
    ? "For a churn target, encode churn as 0/1, split with stratification, scale numeric inputs using training statistics, and output one sigmoid probability. Set a decision threshold based on retention costs; accuracy alone can conceal missed churners."
    : lesson.title.toLowerCase().includes("mnist") || lesson.title.toLowerCase().includes("handwritten")
      ? "MNIST labels are integer classes 0–9. A CNN keeps image locality, and sparse categorical cross-entropy matches integer labels with a 10-unit softmax output. Inspect per-class errors rather than relying only on aggregate accuracy."
      : lesson.title.toLowerCase().includes("admission")
        ? "Admission probability is a continuous target, so evaluate with MAE/RMSE and inspect calibration. The included generated data is only a mechanics demonstration, not a model of real admissions decisions."
        : lesson.title.toLowerCase().includes("cat vs dog") || lesson.title.toLowerCase().includes("cats vs dogs")
          ? "The image example expects labeled local class folders. Confirm the directory class order, inspect sample images, resize consistently, and reserve validation images before selecting augmentation or training duration."
          : lesson.title.toLowerCase().includes("sentiment")
            ? "IMDB has positive/negative labels and integer token sequences. Padding must be masked, and the output sigmoid plus binary cross-entropy fits the binary target. Review false positives and false negatives separately."
            : "";

  article.innerHTML = `
    <header class="article-header">
      <div class="article-kicker">${escapeHtml(lesson.unit)} · LESSON ${String(index + 1).padStart(2, "0")}</div>
      <h2>${escapeHtml(title)}</h2>
      <p class="article-lead">${escapeHtml(description)}</p>
      <div class="article-meta"><span class="pill">${lessonList.length} detailed lessons</span><span class="pill">Concept → math → code</span><span class="pill">${lesson.kind === "projects" ? "End-to-end project" : "Visual lesson"}</span></div>
    </header>
    <div class="lesson-nav">
      <button class="nav-button" data-previous type="button" ${index === 0 ? "disabled" : ""}>← Previous lesson</button>
      <button class="nav-button" data-next type="button" ${index === lessonList.length - 1 ? "disabled" : ""}>Next lesson →</button>
    </div>
    <section class="lesson-section" id="understanding">
      <h3>1. The core idea and intuition</h3>
      <p>${escapeHtml(description)}</p>
      <p>Think of this lesson as a component in a complete learning system, not an isolated formula. Ask: what representation enters, what transformation is learned, what target signal supervises it, and what evidence would show the method works on unseen examples?</p>
      <p class="takeaway">Key takeaway: choose the objective and architecture from the information structure and target—not from the trendiest model name.</p>
    </section>
    <section class="lesson-section" id="mechanics">
      <h3>2. How the concept works</h3>
      ${unitMechanics(lesson.kind, title)}
      ${specifics ? `<p>${escapeHtml(specifics)}</p>` : ""}
    </section>
    <section class="lesson-section" id="subtopics">
      <h3>3. Subtopics and concepts to master</h3>
      <p>Use these checkpoints to unpack the topic rather than memorizing a definition.</p>
      <ul class="subtopic-list">${subtopics}</ul>
    </section>
    <section class="lesson-section" id="visualization">
      <div class="visual-top"><strong>4. Visualize the computation</strong><button class="action-button" id="animate-diagram" type="button">Animate forward pass</button></div>
      <div class="visual" id="diagram">${diagramFor(lesson.kind, title)}</div>
      <p class="visual-caption" id="diagram-caption">The diagram is schematic. Follow the tensor information from input to output; training sends derivative information back through the same computation.</p>
    </section>
    ${lesson.kind === "foundation" && /activation|sigmoid|relu/i.test(title) ? `
    <section class="lesson-section">
      <h3>Interactive activation explorer</h3>
      <p>Move the logit to see how sigmoid and ReLU transform the same input value.</p>
      <div class="interactive">
        <label class="range-row" for="activation-input">Input z <input id="activation-input" type="range" min="-8" max="8" value="1" step="0.1"><span class="range-value" id="activation-value">1.0</span></label>
        <div class="activation-result" id="activation-result"></div>
      </div>
    </section>` : ""}
    <section class="lesson-section" id="example">
      <h3>5. Dataset and worked example</h3>
      <p>Know what one training example represents and keep target labels separate from model inputs.</p>
      <div class="dataset-box">${escapeHtml(dataset)}</div>
      <p style="margin-top:10px">A useful manual trace is: write down one input's shape, calculate one layer's pre-activation, apply its activation, and check the final output shape against the target. For a batch, the first dimension is the number of examples.</p>
    </section>
    <section class="lesson-section" id="implementation">
      <h3>6. Detailed implementation (Python)</h3>
      <div class="code-heading"><span>Runnable teaching example · ${code.includes("import tensorflow") ? "TensorFlow/Keras" : "NumPy"} · Python 3</span><div class="code-actions"><button class="action-button" id="download-code" type="button">Download .py</button></div></div>
      <pre><code>${escapeHtml(code)}</code></pre>
      <h4>Read the code line by line</h4>
      <ol class="walkthrough">${walkthrough}</ol>
    </section>
    <section class="lesson-section" id="output">
      <h3>7. What the output means</h3>
      <p class="output-label">Representative shapes/results (trained metrics vary by run)</p>
      <div class="output">${escapeHtml(outputFor(lesson))}</div>
      <p style="margin-top:9px">Treat output as a diagnostic: check expected dimensions, finite loss, class/probability ranges, and the gap between training and validation. A successful script run does not by itself establish generalization.</p>
    </section>
    <section class="lesson-section" id="tuning">
      <h3>8. Hyperparameters and important settings</h3>
      <p>These are influential starting points, not universally optimal values. Tune a small, justified search on validation data and keep compute, dataset size, and model size in view.</p>
      <div class="parameter-grid">${parameterCards}</div>
    </section>
    <section class="lesson-section" id="pitfalls">
      <h3>9. Failure modes, debugging and next steps</h3>
      <ul class="walkthrough">
        <li>Verify labels, tensor shapes, output activation and loss form one consistent task definition.</li>
        <li>Check that preprocessing is fit only on training data and then reused unchanged on validation/test data.</li>
        <li>Plot training and validation curves: both poor suggests underfitting or a pipeline bug; a widening gap suggests overfitting.</li>
        <li>Compare against a simple baseline and inspect representative errors, especially rare classes and edge cases.</li>
        <li>Record data provenance, random seeds, package versions, preprocessing, model settings and selected checkpoint.</li>
      </ul>
      <p class="takeaway" style="margin-top:12px">Completion check: explain the input representation, forward computation, training signal, key setting, one failure mode, and how you would measure success on unseen data.</p>
    </section>`;

  document.querySelector("[data-previous]").addEventListener("click", () => renderLesson(index - 1, true));
  document.querySelector("[data-next]").addEventListener("click", () => renderLesson(index + 1, true));
  document.getElementById("download-code").addEventListener("click", () => downloadCode(title, code));
  document.getElementById("animate-diagram").addEventListener("click", animateDiagram);
  const activationSlider = document.getElementById("activation-input");
  if (activationSlider) {
    const updateActivation = () => {
      const z = Number(activationSlider.value);
      document.getElementById("activation-value").textContent = z.toFixed(1);
      const sigmoid = 1 / (1 + Math.exp(-z));
      document.getElementById("activation-result").textContent =
        `sigmoid(${z.toFixed(1)}) = ${sigmoid.toFixed(3)}    ReLU(${z.toFixed(1)}) = ${Math.max(0, z).toFixed(1)}`;
    };
    activationSlider.addEventListener("input", updateActivation);
    updateActivation();
  }
}

function downloadCode(title, code) {
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + ".py";
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([code], { type: "text/x-python" }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function animateDiagram() {
  const button = document.getElementById("animate-diagram");
  const links = [...document.querySelectorAll("#diagram .diagram-link")];
  if (!links.length) {
    button.textContent = "Diagram shown";
    document.getElementById("diagram-caption").textContent =
      "Trace the arrows from image/sequence inputs to feature maps or contextual outputs. Spatial and token dimensions are preserved or changed according to the blocks.";
    return;
  }
  const backwards = button.dataset.direction === "backward";
  button.dataset.direction = backwards ? "forward" : "backward";
  button.textContent = backwards ? "Animate forward pass" : "Animate gradient flow";
  links.forEach((link, index) => {
    link.classList.toggle("active", backwards ? index >= links.length - 2 : index < 2);
  });
  document.querySelectorAll("#diagram .diagram-node").forEach((node, index) => {
    node.classList.toggle("active", backwards ? index > 4 : index < 4);
  });
  document.getElementById("diagram-caption").textContent = backwards
    ? "Gradient flow is highlighted from the prediction back toward earlier representations. Backpropagation computes derivatives; the optimizer then updates parameters."
    : "Forward pass is highlighted: each layer transforms its input representation and passes activations toward the prediction.";
}

nav.addEventListener("click", event => {
  const button = event.target.closest("[data-index]");
  if (button) openLesson(Number(button.dataset.index));
});
document.getElementById("course-search").addEventListener("input", renderNav);
document.getElementById("library-search").addEventListener("input", renderLibrary);
libraryFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-unit-filter]");
  if (!button) return;
  activeUnitFilter = button.dataset.unitFilter;
  renderLibraryFilters();
  renderLibrary();
});
libraryGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-index]");
  if (button) openLesson(Number(button.dataset.index));
});
workflowGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-unit-index]");
  if (!button) return;
  activeUnitFilter = button.dataset.unitIndex;
  renderLibraryFilters();
  renderLibrary();
  document.getElementById("section-04").scrollIntoView({ behavior: "smooth" });
});
topicMapGrid.addEventListener("click", event => {
  const lessonButton = event.target.closest("[data-index]");
  if (lessonButton) {
    openLesson(Number(lessonButton.dataset.index));
    return;
  }
  const unitButton = event.target.closest("[data-unit-index]");
  if (!unitButton) return;
  activeUnitFilter = unitButton.dataset.unitIndex;
  renderLibraryFilters();
  renderLibrary();
  document.getElementById("section-04").scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll("[data-model-choice]").forEach(button => button.addEventListener("click", () => {
  activeModelChoice = button.dataset.modelChoice;
  renderModelChoice();
}));
document.getElementById("model-recommend").addEventListener("click", event => {
  const lessonIndex = lessonList.findIndex(lesson => lesson.title === event.currentTarget.dataset.lessonTitle);
  if (lessonIndex >= 0) openLesson(lessonIndex);
});
window.addEventListener("hashchange", () => {
  if (/^#lesson=\d+$/.test(window.location.hash)) renderLesson(currentIndex(), false);
});
document.getElementById("lesson-total").textContent = `${lessonList.length} lessons · 7 learning units`;
renderWorkflow();
renderModelChoice();
renderTopicMap();
renderLibraryFilters();
renderLibrary();
renderLesson(activeIndex, false);
