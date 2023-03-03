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
