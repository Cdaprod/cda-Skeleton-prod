// /api/github.js
module.exports = async (req, res) => {
  const GH_TOKEN = process.env.GH_TOKEN;
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GH_TOKEN}`
    },
    body: JSON.stringify({
      query: `
        query {
          viewer {
            repositories(first: 10) {
              nodes {
                name
                description
                owner {
                  login
                }
                openGraphImageUrl
                url
              }
            }
          }
        }
      `
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
};
