const OPTIN_CONTENT = {
  // Inject the google map iframe.
  gmaps: (
    '<iframe src="https://www.google.com/maps/embed/v1/place?' +
    'key=AIzaSyAhMNXOEwBGUnS2CUKfXJjqS8YgS-3BOvQ&q=place_id:ChIJMY2ZFrcXhEcRP6gMmCUUAuU" ' +
    'width="100%" height="480"></iframe>'
  )
};
const OPTIN_FEATURES = [
  "gmaps"
];
const OPTIN_INITIAL = {};


/** Called when cookie consent has changed
 */
function cookieconsent_hook() {
  if (this.hasConsented()) {
    optins_enable();
  } else {
    optins_disable();
  }
}

/**
 * Initialise the cookieconsent library.
 *
 * Also stores the default "opted out" content to restore it in case of change.
 */
function cookieconsent_init(lang) {
  optins_save_defaults();
  window.cookieconsent.initialise({
    content: {
      allow: lang.allow,
      deny: lang.deny,
      href: lang.href,
      link: lang.link,
      message: lang.message,
      policy: lang.policy,
      target: null
    },
    palette: {
      button: {background: "#14a7d0"},
      popup: {background: "#252e39"}
    },
    position: "bottom-right",
    revokable: true,
    type: "opt-in",

    // Callback hooks
    onInitialise: cookieconsent_hook,
    onStatusChange: cookieconsent_hook,
    onRevokeChoice: cookieconsent_hook
  });
}
window.cookieconsent_init = cookieconsent_init;


/** Disable features on the page that require opt-in.
 */
function optins_disable() {
  for (feature of OPTIN_FEATURES) {
    let selector = $("#" + feature);
    if (!selector.length) {
      // Ignore features that are not in this page.
      continue;
    }

    let element = $(selector[0]);
    if (element.html() === OPTIN_INITIAL[feature]) {
      // Ignore features that are already inactive.
      continue;
    }
    element.empty();
    element.append(OPTIN_INITIAL[feature]);
  }
}

/** Enable features on the page that require opt-in.
 */
function optins_enable() {
  for (feature of OPTIN_FEATURES) {
    let selector = $("#" + feature);
    if (!selector.length) {
      // Ignore features that are not in this page.
      continue;
    }

    let element = $(selector[0]);
    element.empty();
    element.append(OPTIN_CONTENT[feature]);
  }
}

/** Set aside the current content of the opt-in sections.
 *
 * This is done as the initial HTML in the page is a language dependent
 * "opted out" content.
 *
 * To avoid complex localization and duplicate messages the "opt out"
 * logic restores the page elements back to their defaults.
 */
function optins_save_defaults() {
  for (feature of OPTIN_FEATURES) {
    let selector = $("#" + feature);
    if (!selector.length) {
      // Ignore features that are not in this page.
      continue;
    }
    OPTIN_INITIAL[feature] = selector.html();
  }
}
