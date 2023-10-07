import {
    // GOOGLE_SEARCH_URL,
    COMMAND_KEY,
    // TAB_ID_NONE
} from "./common.js"
import Api from "./api"


async function sendPageCommand(command) {
    let tabs = await Api.getCurrentTab()
    var current = tabs[0]
    console.log('current', current)
    current && chrome.tabs.sendMessage(current.id, {
        [COMMAND_KEY]: command
    });
}
export default class Commands {

    static nextPage() {
        sendPageCommand('nextPage');
    }

    static previousPage() {
        sendPageCommand('previousPage')
    }

    static lastPage() {
        sendPageCommand('lastPage')
    }

    static firstPage() {
        sendPageCommand('firstPage')
    }

    static listPage() {
        sendPageCommand('listPage')
    }

}