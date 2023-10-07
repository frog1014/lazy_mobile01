import {
    IS_PREVENT_CLOSE_TAB_TAG,
    IS_BOOKMARK_TITLE_SIMPLIFIER_TAG,
    LIST_RETURN_URL,
    NEW_TAB_URL,
} from "./common"
export default class Api {

    static async getCurrentTab() {
        return await chrome.tabs.query({
            active: true,
            currentWindow: true
        })
    }

    static getI18nMsg(key, ...vars) {
        return chrome.i18n.getMessage(key, vars) || ""
    }

    static getNow() {
        return +new Date;
    }
}