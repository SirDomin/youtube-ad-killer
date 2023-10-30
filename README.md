# Ad Blocker Browser Extension

This browser extension is a simple JavaScript-based tool designed to help you remove side ads and automatically skip video ads on YouTube

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How does it work?](#how-does-it-work)


## **IMPORTANT**

**Before using this extension, please ensure that you have removed any existing ad blockers from YouTube.**

If you have an ad blocker installed for YouTube, it may interfere with the functionality of this extension. To ensure smooth operation, disable or remove any other ad-blocking extensions you might have on YouTube. Once you've done that, you can follow the installation and usage instructions provided above.

As this extension is still in development, it is not yet available on the Chrome Web Store or Firefox Add-ons. You can, however, install it in developer mode by following the instructions below.

There may be some missing filters, im trying to catch everything during my daily usage, but if you find something that is not blocked, please open an issue and i will try to fix it as soon as possible.

## Installation

Follow these steps to use the browser extension in developer mode:

1. **Clone the Repository**:
    - Clone this repository to your local machine.

      ```shell
      git clone git@github.com:SirDomin/youtube-ad-killer.git
      ```

2. **Open Extension Page**:
    - For **Google Chrome**, open a new tab and navigate to `chrome://extensions/`.
    - For **Mozilla Firefox**, visit `about:addons`.

3. **Enable Developer Mode**:
    - For **Google Chrome**, enable "Developer mode" using the toggle switch in the top right corner of the `chrome://extensions/` page.
    - For **Mozilla Firefox**, click on the gear icon in the top right corner of `about:addons` and select "Debug Add-ons." This will open the "about:debugging" page. Then, click on "Enable add-on debugging."

4. **Load the Extension**:
    - For **Google Chrome**, click on the "Load unpacked" button and select the directory where you cloned the repository.
    - For **Mozilla Firefox**, click on the "Load Temporary Add-on" button and select the `manifest.json` file from the cloned repository directory.

5. The extension is now loaded and active in your browser.

## Usage

Once the extension is loaded in developer mode, it will automatically remove side ads and skip video ads on YouTube. No additional user interaction is required. If you want to see debugging information in the console, set the `debug` parameter to `true` when creating an instance of the `AdBlocker` class, as shown in the provided code.

## How does it work?

When any Ad pops up on the screen, the extension will automatically remove it from the DOM. The extension will also automatically click the "Skip Ad" button on YouTube videos before it even renders (makes unskippable ads less annoying).