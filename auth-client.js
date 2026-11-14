const authApiPath = "/api/auth";

const topbar = document.querySelector(".topbar-inner") || document.querySelector(".topbar");
if (!topbar) {
  throw new Error("The account controls need a page header.");
}

const controls = document.createElement("div");
controls.className = "auth-controls";
controls.setAttribute("aria-label", "Account");

const accountMessage = document.createElement("span");
accountMessage.className = "auth-inline-status";
accountMessage.setAttribute("role", "status");
accountMessage.setAttribute("aria-live", "polite");
accountMessage.hidden = true;

const accountActions = document.createElement("div");
accountActions.className = "auth-action-group";
controls.append(accountMessage, accountActions);

const brand = topbar.querySelector(".brand");
if (brand?.parentElement === topbar) {
  brand.insertAdjacentElement("afterend", controls);
} else {
  topbar.append(controls);
}

const dialog = document.createElement("dialog");
dialog.className = "auth-dialog";
dialog.setAttribute("aria-labelledby", "auth-title");

const dialogPanel = document.createElement("div");
dialogPanel.className = "auth-dialog-panel";

const dialogHeader = document.createElement("div");
dialogHeader.className = "auth-dialog-header";

const title = document.createElement("h2");
title.id = "auth-title";

const closeButton = document.createElement("button");
closeButton.className = "auth-close";
closeButton.type = "button";
closeButton.setAttribute("aria-label", "Close account dialog");
closeButton.textContent = "×";
closeButton.addEventListener("click", () => dialog.close());
dialogHeader.append(title, closeButton);

const modeTabs = document.createElement("div");
modeTabs.className = "auth-mode-tabs";
modeTabs.setAttribute("role", "group");
modeTabs.setAttribute("aria-label", "Account action");

function createTab(mode, label) {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "auth-mode-tab";
  tab.setAttribute("aria-pressed", "false");
  tab.dataset.authMode = mode;
  tab.textContent = label;
  tab.addEventListener("click", () => setMode(mode));
  modeTabs.append(tab);
  return tab;
}

const signInTab = createTab("sign-in", "Sign in");
const signUpTab = createTab("sign-up", "Create account");

const form = document.createElement("form");
form.className = "auth-form";

function createField({ id, label, type, autocomplete, maxLength }) {
  const wrapper = document.createElement("label");
  wrapper.className = "auth-field";
  wrapper.htmlFor = id;

  const caption = document.createElement("span");
  caption.textContent = label;

  const input = document.createElement("input");
  input.id = id;
  input.name = id;
  input.type = type;
  input.autocomplete = autocomplete;
  input.required = true;
  if (maxLength) input.maxLength = maxLength;

  wrapper.append(caption, input);
  return { wrapper, input };
}

const nameField = createField({
  id: "auth-name",
  label: "Your name",
  type: "text",
  autocomplete: "name",
  maxLength: 80,
});
nameField.wrapper.hidden = true;

const emailField = createField({
  id: "auth-email",
  label: "Email address",
  type: "email",
  autocomplete: "email",
  maxLength: 254,
});

const passwordField = createField({
  id: "auth-password",
  label: "Password",
  type: "password",
  autocomplete: "current-password",
  maxLength: 128,
});
passwordField.input.minLength = 8;

const formMessage = document.createElement("p");
formMessage.className = "auth-form-message";
formMessage.setAttribute("role", "status");
formMessage.setAttribute("aria-live", "polite");

const submitButton = document.createElement("button");
submitButton.className = "auth-submit";
submitButton.type = "submit";

const formNote = document.createElement("p");
formNote.className = "auth-form-note";
formNote.textContent = "Your account is stored securely and works across both learning paths.";

form.append(
  nameField.wrapper,
  emailField.wrapper,
  passwordField.wrapper,
  formMessage,
  submitButton,
  formNote,
);
dialogPanel.append(dialogHeader, modeTabs, form);
dialog.append(dialogPanel);
document.body.append(dialog);

let currentMode = "sign-in";
let currentUser = null;
let isBusy = false;

function setMode(mode) {
  currentMode = mode;
  const isSignUp = mode === "sign-up";
  nameField.wrapper.hidden = !isSignUp;
  nameField.input.required = isSignUp;
  passwordField.input.autocomplete = isSignUp ? "new-password" : "current-password";
  title.textContent = isSignUp ? "Create your account" : "Welcome back";
  submitButton.textContent = isSignUp ? "Create account" : "Sign in";
  signInTab.setAttribute("aria-pressed", String(!isSignUp));
  signUpTab.setAttribute("aria-pressed", String(isSignUp));
  formMessage.textContent = "";
  formMessage.dataset.tone = "";
}

function setAccountMessage(message) {
  accountMessage.textContent = message;
  accountMessage.hidden = !message;
}

function renderAccountActions() {
  accountActions.replaceChildren();

  if (currentUser) {
    const identity = document.createElement("span");
    identity.className = "auth-user-name";
    identity.textContent = currentUser.name || currentUser.email;
    identity.title = currentUser.email;

    const signOutButton = document.createElement("button");
    signOutButton.className = "auth-button auth-secondary";
    signOutButton.type = "button";
    signOutButton.textContent = "Sign out";
    signOutButton.addEventListener("click", signOut);
    accountActions.append(identity, signOutButton);
    return;
  }

  const signInButton = document.createElement("button");
  signInButton.className = "auth-button auth-secondary";
  signInButton.type = "button";
  signInButton.textContent = "Sign in";
  signInButton.addEventListener("click", () => openDialog("sign-in"));

  const signUpButton = document.createElement("button");
  signUpButton.className = "auth-button auth-primary";
  signUpButton.type = "button";
  signUpButton.textContent = "Create account";
  signUpButton.addEventListener("click", () => openDialog("sign-up"));

  accountActions.append(signInButton, signUpButton);
}

function openDialog(mode) {
  setMode(mode);
  form.reset();
  dialog.showModal();
  emailField.input.focus();
}

async function readJson(response) {
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error("The account service returned an unreadable response.");
  }

  if (!response.ok) {
    const message = typeof payload?.message === "string"
      ? payload.message
      : "That account request could not be completed.";
    throw new Error(message);
  }

  return payload;
}

async function refreshSession() {
  const response = await fetch(`${authApiPath}/get-session`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
    credentials: "same-origin",
  });
  const payload = await readJson(response);
  currentUser = payload?.user || null;
  setAccountMessage("");
  renderAccountActions();
}

async function signOut() {
  const signOutButton = accountActions.querySelector("button");
  if (signOutButton) signOutButton.disabled = true;

  try {
    const response = await fetch(`${authApiPath}/sign-out`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: "{}",
    });
    await readJson(response);
    currentUser = null;
    renderAccountActions();
    setAccountMessage("");
  } catch (error) {
    if (signOutButton) signOutButton.disabled = false;
    setAccountMessage(error instanceof Error ? error.message : "Sign out failed.");
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (isBusy) return;

  const isSignUp = currentMode === "sign-up";
  const body = {
    email: emailField.input.value.trim(),
    password: passwordField.input.value,
  };
  if (isSignUp) {
    body.name = nameField.input.value.trim();
  }

  isBusy = true;
  submitButton.disabled = true;
  submitButton.textContent = isSignUp ? "Creating account…" : "Signing in…";
  formMessage.textContent = "";

  try {
    const response = await fetch(
      `${authApiPath}/${isSignUp ? "sign-up/email" : "sign-in/email"}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(body),
      },
    );
    const payload = await readJson(response);
    currentUser = payload?.user || null;
    renderAccountActions();
    setAccountMessage(isSignUp ? "Account created." : "Signed in.");
    form.reset();
    dialog.close();
  } catch (error) {
    formMessage.textContent = error instanceof Error
      ? error.message
      : "The account request failed. Please try again.";
    formMessage.dataset.tone = "error";
  } finally {
    isBusy = false;
    submitButton.disabled = false;
    submitButton.textContent = currentMode === "sign-up" ? "Create account" : "Sign in";
  }
});

setMode("sign-in");
renderAccountActions();
refreshSession().catch(() => {
  setAccountMessage("Account status could not be checked. Try again shortly.");
});
