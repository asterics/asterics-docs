# AsTeRICS Docs

Documentation of [AsTeRICS](https://github.com/asterics/AsTeRICS.git).

## GitHub Workflows

This repository provides following workflows:

* [Release](https://github.com/asterics/asterics-docs/actions/workflows/release.yml): builds and deploys website to https://www.asterics.eu/
* [Prerelease](https://github.com/asterics/asterics-docs/actions/workflows/prerelease.yml): builds and deploys website to https://www.asterics.eu/next/
* [Algolia](https://github.com/asterics/asterics-docs/actions/workflows/algolia.yml): deletes previous, creates and uploads new index to Algolia

NOTE: Workflow `Release` runs `Algolia` after building the website automatically.
Don't run workflow `Algolia` after running `Prerelease` since it won't have any effect.
When running workflow `Algolia` manually, enable deletion of the previous index to avoid execeeding the allowed amount of index records.

## Algolia

To update the search index of Algolia manually, run following command:

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat ./src/vuepress/config/algolia.json | jq -r tostring)" algolia/docsearch-scraper
```

To run this command, you need following tools installed: `docker`, `jq`.
Additionally, create a file `.env` and specify following variables:

```bash
APPLICATION_ID=<APP_ID>
API_KEY=<API_KEY>
```


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
$ yarn docs deinit

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

* `yarn docs index`: user selected entries
* `yarn docs pull`: basic functionality
* `yarn docs push`: credential handling
* `yarn docs build/devel`: required?
* `config.js`: VERSION mappings