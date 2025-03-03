# AsTeRICS Docs

Documentation of [AsTeRICS](https://github.com/asterics/AsTeRICS.git).

## Configuration

`asterics-docs` is a [VuePress](https://vuepress.vuejs.org/) based project that uses a theme based on the [Default Theme](https://ecosystem.vuejs.press/themes/default/config.html).
Hence, all configuration provided by the *Default Theme* of *VuePress* is available in the custom theme.

::: warning

The (true) sources of all VuePress configuration files are located at `src/vuepress/`and `src/vuepress/config`.

After setting up the project for editing, building and releasing, `asterics-docs` copies all relevant files in the folder `docs/`.
The source files for the VuePress configuration are copied to `docs/.vuepress` during this process.

:::

### Sidebar

The configration for the sidebar is specified in `src/vuepress/config.js` and in the folder `src/vuepress/config/sidebar/`.

In addition to the [sidebar configuration of the VuePress Default Theme](https://ecosystem.vuejs.press/themes/default/config.html#sidebar), this project contains helper function to assist or automate this process:

* `loadSingleSidebar`: Loads markdown files from a single directory (excluding subdirectories)
* `loadSidebarFrom`: Creates multi-level navigation for directories with nested content
* `loadSidebarFromWithPath`: Creates a flat list of links from a single directory

For better understanding, compare their usage within the existing configuration.

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

::: warning
Make sure you use [Node.js v14](https://nodejs.org/download/release/v14.21.3/) before for this setup.
:::

Install needed dependencies with

```bash
yarn install
```

or (better)

```bash
pnpm install
```

## Release Instructions

`TODO`: Write instructions

## Usage Instructions

Setup `asterics-docs` using the provided `docs` tools (cf. [DOCS Reference](#DOCS-Reference))

```bash
# Initialize asterics-docs
$ yarn docs init
$ pnpm run docs init

# Deinitialize asterics-docs
$ yarn docs deinit
$ pnpm run docs deinit

# Setup docs folder
$ yarn docs setup
$ pnpm run docs setup
```

Change and edit files

```bash
# Show status
$ yarn docs status
$ pnpm run docs status
```

Update changes

```bash
# Add files for commit
$ yarn docs add <file|folder> [<file|folder> ...]
$ pnpm run docs add <file|folder> [<file|folder> ...]

# Commit files
$ yarn docs commit
$ pnpm run docs commit

# Push changes to origin
$ yarn docs push
$ pnpm run docs push
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