module.exports = {
  // branch: "alija/task/101",
  repositoryUrl: "https://github.com/asterics/asterics-docs",
  tagFormat: "v${version}",
  plugins: [
    [
      "@semantic-release/npm",
      {
        npmPublish: false
        // tarballDir: "dist"
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [{ path: "package.json", label: "npm package" }]
      }
    ],
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [{ type: "docs", scope: "README", release: "patch" }, { type: "major", release: "major" }],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
        writerOpts: {
          commitsSort: ["subject", "scope"]
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ]
    // [
    //   "@semantic-release/exec",
    //   {
    //     prepareCmd: "node release.js ${nextRelease.version} ${options.branch} ${commits.length} ${Date.now()}",
    //     publishCmd: "node publish.js ${nextRelease.version} ${options.branch} ${commits.length} ${Date.now()}"
    //   }
    // ]
  ],
  dryRun: false,
  ci: false
};
