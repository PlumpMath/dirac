(ns dirac.tests.tasks.suite01.repl
  (:require [cljs.core.async]
            [cljs.test :refer-macros [is testing]]
            [dirac.automation :refer-macros [<!* go-task with-scenario with-devtools] :as a]))

(go-task
  (with-scenario "normal"
    (with-devtools
      (<!* a/switch-to-console-panel!)
      (<!* a/switch-prompt-to-dirac!)
      (<!* a/wait-for-prompt-to-enter-edit-mode)
      (<!* a/enable-console-feedback!)
      ; -------------------------------------------------------------------------------------------------------------------------
      (testing "simple REPL eval interactions"
        (<!* a/console-exec-and-match! "(+ 1 2)" "log> 3")
        (<!* a/console-exec-and-match! "(range 200)" "log> (0 1 2 3 4 …)")
        (<!* a/console-exec-and-match! "(doc filter)" "log> null")
        (<!* a/console-exec-and-match! "js/dirac" "log> Object")
        (<!* a/console-exec-and-match! "(x)" "err> TypeError: Cannot read property 'call' of undefined(…)")
        (<!* a/console-exec-and-match! "(in-ns)" (str "java-trace > java.lang.IllegalArgumentException: "
                                                      "Argument to in-ns must be a symbol."))
        (<!* a/wait-for-devtools-match "<elided stack trace log>")
        (<!* a/wait-for-devtools-match #"^JS.log")
        (<!* a/console-exec-and-match! "(in-ns 'my.ns)" "setDiracPromptNS('my.ns')")))))
