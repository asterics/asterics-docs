# AsTeRICS Docs

Documentation of [AsTeRICS](https://github.com/asterics/AsTeRICS.git).

## Dependencies

Install needed dependencies with

```bash
npm install
```

## Release Instructions

Build current release with

```bash
npm run setup
```

and locate the result at  `dist/`.

**Note**: enable _verbose_ logging with by setting variable `VERBOSE`

```bash
VERBOSE=true npm run setup
```

## Development Instructions

Setup and build individual versions using the provided `cli` tools (cf. [CLI Reference](#CLI-Reference))

```bash
# Initialize asterics-docs
$ npm run cli -- init

# Index all possible version (cf. src/config/config.js)
$ npm run cli -- index

# Setup docs folder of requested version
$ npm run cli -- setup -v 2.3 -o docs/

# Build set up version,..
$ VERSION=2.3 npx vuepress build docs/ -d dist/

# ..or host it with the development server
$ VERSION=2.3 npx vuepress dev docs/
```

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

Start CLI tool, either using `npm`:

```bash
npm run cli <command>
```

**Note**: To pass commands and options, use `--` after script command:

```bash
npm run cli -- -h
```

---

Alternatively, launch the script directly, using `node`:

```bash
node src/scripts/cli.js -h
```

### Commands

```bash
npm run cli -- init  -h
npm run cli -- index -h
npm run cli -- setup -h
npm run cli -- clean -h
```