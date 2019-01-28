# AsTeRICS Docs

AsTeRICS documentation (static site built with `vuepress`).

## Dependencies

Install needed dependencies with

    npm install

## Build Instructions

Build current release (_without legacy versions_):

    npm run build

and locate the result at  `docs/.vuepress/dist/`.

### Development Instructions

Build development release (hot module replacement):

    npm run dev

### Legacy Release

Build legacy releases:

    npm run legacy

### Release Instructions

Build release (legacy + build)

    npm run release

## Configuration Reference

Use variables in file `.env` to configure the builds

    # Host IP address
    HOST="127.0.0.1"

    # Host port number
    PORT=8000

    # Path to documentation on server
    ENDPOINT="docs"

## CLI Reference

Start CLI tool:

    npm run cli <command>

To pass commands and options, use `--` after script command:

    npm run cli -- -h

Commands

    npm run cli -- convert -h

    npm run cli -- sidebar -h