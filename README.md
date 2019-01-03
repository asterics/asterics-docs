# AsTeRICS Docs

Repository to manage AsTeRICS related documentation.

## Dependencies

Install needed dependencies with

    ~/asterics-docs $ npm i

## Development Instructions

Run

    ~/asterics-docs $ npm run dev

or alternatively, switch to folder `intermediate` and start the development server manually.

    ~/asterics-docs $ cd intermediate
    ~/asterics-docs/intermediate $ vuepress dev

## Utilties

Use

    ~/asterics-docs $ node util.js

to start the asterics-docs utility tool, which provides following capabilties:

    1. build and backup docs version
    2. create sidebar entry
    3. show configuration

### Configuration

Use variables in file `.env` to configure the utility tool

    ASTERICS_REPO = "source/asterics"

    ACS_HELP_SRC = "Documentation/ACS-Help/HTML"
    ACS_HELP_DEST = "help"
    ACS_HELP_FILES_EXT = "FIXME!"

    DOCS_PORT = 8080
    DOCS_LATEST = "v3.0.1 FIXME!"
    DOCS_SRC = "intermediate"
    DOCS_DEST = "intermediate/.vuepress/dist"
    BUILD_DEST = "intermediate/.vuepress/intermediate_build"
    SIDEBAR_DEST = "intermediate/.vuepress/sidebar"

    UTIL_TIMEOUT = 5000

## Build Instructions

To build for release, run

    ~/asterics-docs $ npm run build

or manually

    ~/asterics-docs $ cd intermediate
    ~/asterics-docs/intermediate $ vuepress build

and locate the result at  `intermediate/.vuepress/dist/`.

> Note: The build includes another folder, i.e., `intermediate/.vuepress/public/`, which is needed for the release.
