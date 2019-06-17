# AsTeRICS Docs

Documentation of [AsTeRICS](https://github.com/asterics/AsTeRICS.git).


## Dependencies

Install needed dependencies with

```bash
yarn install
```

## Release Instructions

Build current release with

```bash
yarn run setup
```

and locate the result at  `dist/`.

**Note**: enable _verbose_ logging with by setting variable `VERBOSE`

```bash
VERBOSE=true yarn run setup
```

## Development Instructions

Setup and build individual versions using the provided `cli` tools (cf. [CLI Reference](#CLI-Reference))

```bash
# Initialize asterics-docs
$ yarn run cli -- init

# Index all possible version (cf. src/config/config.js)
$ yarn run cli -- index

# Setup docs folder of requested version
$ yarn run cli -- setup -v 2.3 -o docs/

# Build set up version,..
$ VERSION=2.3 npx vuepress build docs/ -d dist/

# ..or host it with the development server
$ VERSION=2.3 npx vuepress dev docs/
```

## New Devel (-> Task 135)

$ yarn docs init
$ yarn docs index
?? $ yarn docs clean aka. yarn docs init --clean

$ yarn docs setup
$ yarn docs dev
$ yarn docs build

$ yarn docs diff v2.3 -r AsTeRICS
$ yarn docs commit v2.3 -r AsTeRICS WebACS

$ yarn docs convert --html-to-markdown -i file/folder -o file/folder


* Blog
* Markdown Syntax Sugar
* Versions
* Layouts
* Fallback for Translation
* "Help us tranlate..." - Button
* Rather combine than single versions

## Configuration Reference

Use variables in file `.env` to configure the builds

```bash
# Host IP address
HOST="127.0.0.1"

# Host port number
PORT=8000

# Path to documentation on server
ENDPOINT="docs"
```

## CLI Reference

Start CLI tool, either using `yarn`:

```bash
yarn run cli <command>
```

**Note**: To pass commands and options, use `--` after script command:

```bash
yarn run cli -- -h
```

---

Alternatively, launch the script directly, using `node`:

```bash
node src/scripts/cli.js -h
```

### Commands

```bash
yarn run cli -- init  -h
yarn run cli -- index -h
yarn run cli -- setup -h
yarn run cli -- clean -h
```
