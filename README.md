# AsTeRICS Docs

Documentation of [AsTeRICS](https://github.com/asterics/AsTeRICS.git).

## Dependencies

Install needed dependencies with

```bash
yarn install
```

## Release Instructions

`TODO`: Write instructions

## Usage Instructions

Setup `asterics-docs` using the provided `docs` tools (cf. [DOCS Reference](#DOCS-Reference))

```bash
# Initialize asterics-docs
$ yarn docs init

# Deinitialize asterics-docs
$ yarn docs init --clean

# Setup docs folder
$ yarn docs setup
```

Change and edit files

```bash
# Show status
$ yarn docs status
```

Update changes

```bash
# Add files for commit
$ yarn docs add <file|folder> [<file|folder> ...]

# Commit files
$ yarn docs commit

# Push changes to origin
$ yarn docs push
```

`NOTE`:
You can inspect and add files without the `docs` tool using `git` in folder setup by the tool.

## Configuration Reference

Use variables in file `.env` to configure the builds

```bash
# Deployment
## Host IP address
HOST="127.0.0.1"

## Host port number
PORT=8000

## Path to documentation on server
ENDPOINT="docs"

# docs tool
AUTHOR="Max Mustermann <m.mustermann@github.com>"
COMMITTER="Madeleine Musterfrau <m.musterfrau@github.com>"
```

## DOCS Reference

Start `docs` tool using `yarn`:

```bash
yarn docs <command>
```

For detailed instructions use:

```bash
yarn docs <command> --help
```

### DOCS Commands

```bash

# Main
yarn docs init
yarn docs setup
yarn docs add
yarn docs commit
yarn docs push

# Supplementary
yarn docs status
yarn docs index
yarn docs convert
```
### TODO

* yarn docs index: user selected entries
* yarn docs pull: basic functionality
* yarn docs push: credential handling
* yarn docs build/devel: required?