(ns dirac.automation.helpers
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! <! chan timeout alts! close!]]
            [oops.core :refer [oget oset! ocall oapply]]
            [cuerdas.core :as cuerdas])
  (:import goog.Uri))

(defn get-body-el []
  (-> js/document (.getElementsByTagName "body") (.item 0)))

(defn get-el-by-id [id]
  (-> js/document (.getElementById id)))

(defn make-uri-object [url]
  (Uri. url))

(defn get-query-param [url param]
  (let [uri (make-uri-object url)]
    (.getParameterValue uri param)))

(defn get-matching-query-params [url re]
  (let [uri (make-uri-object url)
        query (.getQueryData uri)
        matching-params (filter #(re-find re %) (.getKeys query))]
    (into {} (map (fn [key] [key (.get query key)]) matching-params))))

(defn get-encoded-query [url]
  (let [uri (make-uri-object url)
        encoded-query (.getEncodedQuery uri)]
    encoded-query))

(defn get-document-url []
  (str (.-location js/document)))

(defn get-document-url-param [param]
  (let [url (get-document-url)]
    (get-query-param url param)))

(defn is-test-runner-present? []
  (let [url (get-document-url)]
    (boolean (get-query-param url "test_runner"))))

(defn prefix-text-block [prefix text]
  (->> text
       (cuerdas/lines)
       (map-indexed (fn [i line] (if-not (zero? i) (str prefix line) line)))                                                  ; prepend prefix to all lines except the first
       (cuerdas/unlines)))

(defn get-base-url []
  (str (oget js/location "protocol") "//" (oget js/location "host")))

(defn get-scenario-url [name & [additional-params]]
  (let [base-params (get-encoded-query (get-document-url))
        all-params (if additional-params (str base-params "&" additional-params) base-params)]
    (str (get-base-url) "/scenarios/" name ".html?" all-params)))                                                             ; we pass all query parameters to scenario page

(defn scroll-page-to-bottom! []
  (ocall js/window "scrollTo" 0 (oget js/document "body" "scrollHeight")))
