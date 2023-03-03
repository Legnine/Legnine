// Octokit.js
// https://github.com/octokit/core.js#readme
const legnine = new Legnine({
  auth: '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'
})

await octokit.request('GET /repos/{owner}/{repo}/community/profile', {
  owner: 'Legnine',
  repo: 'Legnine',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

{
  "health_percentage": 100,
  "description": "My first repository on GitHub!",
  "documentation": null,
  "files": {
    "code_of_conduct": {
      "name": "Contributor Covenant",
      "key": "contributor_covenant",
      "url": "https://api.github.com/codes_of_conduct/contributor_covenant",
      "html_url": "https://github.com/octocat/Hello-World/blob/master/CODE_OF_CONDUCT.md"
    },
    "code_of_conduct_file": {
      "url": "https://api.github.com/repos/octocat/Hello-World/contents/CODE_OF_CONDUCT.md",
      "html_url": "https://github.com/octocat/Hello-World/blob/master/CODE_OF_CONDUCT.md"
    },
    "contributing": {
      "url": "https://api.github.com/repos/octocat/Hello-World/contents/CONTRIBUTING",
      "html_url": "https://github.com/octocat/Hello-World/blob/master/CONTRIBUTING"
    },
    "issue_template": {
      "url": "https://api.github.com/repos/octocat/Hello-World/contents/ISSUE_TEMPLATE",
      "html_url": "https://github.com/octocat/Hello-World/blob/master/ISSUE_TEMPLATE"
    },
    "pull_request_template": {
      "url": "https://api.github.com/repos/octocat/Hello-World/contents/PULL_REQUEST_TEMPLATE",
      "html_url": "https://github.com/octocat/Hello-World/blob/master/PULL_REQUEST_TEMPLATE"
    },
    "license": {
      "name": "MIT License",
      "key": "mit",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "html_url": "https://github.com/octocat/Hello-World/blob/master/LICENSE",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    "readme": {
      "url": "https://api.github.com/repos/octocat/Hello-World/contents/README.md",
      "html_url": "https://github.com/octocat/Hello-World/blob/master/README.md"
    }
  },
  "updated_at": "2017-02-28T19:09:29Z",
  "content_reports_enabled": true
}
