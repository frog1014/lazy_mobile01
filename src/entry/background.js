import Api from "../assets/js/api"
import Commands from "../assets/js/commands.js"
// import {
//   WINDOW_ID_NONE,
// } from "../assets/js/common"
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// chrome.pageAction.onClicked.addListener(tab => {
//   console.log('pageAction', tab)
//   // chrome.tabs.create({
//   //   url: "chrome://extensions/shortcuts"
//   // })
// });


chrome.runtime.onInstalled.addListener(function () {
  console.log('onInstalled')
  chrome.action.disable();

  // chrome.storage.sync.set({
  //   color: '#3aa757'
  // }, function () {
  //   console.log("The color is green.");
  // });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          hostSuffix: 'mobile01.com'
        },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


chrome.commands.getAll(function (a) {
  console.log('getAll', a)
})

chrome.commands.onCommand.addListener(command => {
  console.log('onCommand', command)
  switch (command) {
    case "nextPage": {
      Commands.nextPage()
      break
    }
    case "listPage": {
      Commands.listPage()
      break
    }
    case "previousPage": {
      Commands.previousPage()
      break
    }
    case "firstPage": {
      Commands.firstPage()
      break
    }
    case "lastPage": {
      Commands.lastPage()
      break
    }
  }
});