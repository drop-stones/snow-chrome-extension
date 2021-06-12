// This file is injected as a content script

import "./content.css";
import { MessageType } from "./types";

const body = document.getElementsByTagName("body");

const snowflakesContainer = document.createElement("div");
snowflakesContainer.className = "snowflakes";
snowflakesContainer.setAttribute("aria-hidden", "true");  // Accessible Rich Internet Applications (ARIA)

const snowflake = document.createElement("div");
snowflake.className = "snowflake";
snowflake.innerHTML = "&#10052";

for (let i = 0; i < 12; i++) {
  snowflakesContainer.appendChild(snowflake.cloneNode(true));
}

chrome.runtime.sendMessage({ type: "REQ_SNOW_STATUS" });

let snowing = false;
chrome.runtime.onMessage.addListener((message: MessageType) => {
  switch (message.type) {
    case "SNOW_STATUS":
      if (message.snowing) {
        console.log("message.snowing", message.snowing);
        if (!snowing) { // only toggle timing
          body[0]?.prepend(snowflakesContainer);
        }
      } else {
        console.log("message.snowing", message.snowing);
        snowflakesContainer.parentNode?.removeChild(snowflakesContainer);
      }
      snowing = message.snowing;
      break;
    default:
      break;
  }
});

//body[0]?.prepend(snowflakesContainer);
