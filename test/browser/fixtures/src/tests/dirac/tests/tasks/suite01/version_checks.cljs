(ns dirac.tests.tasks.suite01.version-checks
  (:require [cljs.core.async]
            [cljs.test :refer-macros [is testing]]
            [dirac.settings :refer-macros [seconds minutes]]
            [dirac.automation :refer-macros [<!* go-task with-scenario with-devtools] :as a]))

(go-task
  (with-scenario "old-runtime"
    (with-devtools
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match "Version mismatch: Dirac Runtime installed in the page has different version")
      (<!* a/wait-for-devtools-match "console prompt focused")
      (<!* a/wait-for-prompt-to-enter-edit-mode)))
  (with-scenario "future-runtime"
    (with-devtools
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match "Version mismatch: Dirac Runtime installed in the page has different version")
      (<!* a/wait-for-devtools-match "console prompt focused")
      (<!* a/wait-for-prompt-to-enter-edit-mode)))
  (with-scenario "normal-with-feedback"
    (with-devtools {"mock_old_extension_version" 1}
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match #"Version mismatch: Dirac Runtime installed in the page has different version .*? than Dirac Chrome Extension \(v0\.0\.1\)\.")
      (<!* a/wait-for-match #"Version mismatch: Dirac Agent has different version .*? than Dirac Chrome Extension \(v0\.0\.1\)\.")
      (<!* a/wait-for-devtools-match "console prompt focused")
      (<!* a/wait-for-prompt-to-enter-edit-mode)))
  (with-scenario "normal-with-feedback"
    (with-devtools {"mock_future_extension_version" 1}
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match #"Version mismatch: Dirac Runtime installed in the page has different version .*? than Dirac Chrome Extension \(v1000\.0\.1\)\.")
      (<!* a/wait-for-match #"Version mismatch: Dirac Agent has different version .*? than Dirac Chrome Extension \(v1000\.0\.1\)\.")
      (<!* a/wait-for-devtools-match "console prompt focused")
      (<!* a/wait-for-prompt-to-enter-edit-mode)))
  (with-scenario "old-repl-api"
    (with-devtools
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match "Dirac REPL API version mismatch detected.")
      (<!* a/wait-for-devtools-match "console prompt focused")
      (<!* a/wait-for-devtools-match "setDiracPromptStatusStyle('error')")))
  (with-scenario "future-repl-api"
    (with-devtools
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match "Dirac REPL API version mismatch detected.")
      (<!* a/wait-for-devtools-match "console prompt focused")
      (<!* a/wait-for-devtools-match "setDiracPromptStatusStyle('error')")))
  (with-scenario "no-runtime"
    (with-devtools
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match "Dirac requires runtime support from the page context" (seconds 20))
      (<!* a/wait-for-devtools-match "setDiracPromptStatusStyle('error')" (seconds 20))))
  (with-scenario "no-repl"
    (with-devtools
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-match "Dirac requires runtime support from the page context" (seconds 20))
      (<!* a/wait-for-devtools-match "setDiracPromptStatusStyle('error')" (seconds 20)))))