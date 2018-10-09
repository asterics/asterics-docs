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

## Build Instructions

To build for release, run

    ~/asterics-docs $ npm run build

or manually

    ~/asterics-docs $ cd intermediate
    ~/asterics-docs/intermediate $ vuepress build

and locate the result at  `intermediate/.vuepress/dist/`.

> Note: The build includes another folder, i.e., `intermediate/.vuepress/public/`, which is needed for the release.
