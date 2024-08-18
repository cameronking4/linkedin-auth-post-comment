require('dotenv').config();
const axios = require('axios');

const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
const articleContent = "hello"; // Add your article content here
const articleUrl = "google.com"; // Add your article URL here

const postToLinkedIn = async () => {
    const apiUrl = 'https://api.linkedin.com/v2/ugcPosts';

    const postContent = {
        author: `urn:li:person:GTm5VzECkI`, // Replace with your LinkedIn user URN
        lifecycleState: "PUBLISHED",
        specificContent: {
            "com.linkedin.ugc.ShareContent": {
                shareCommentary: {
                    text: articleContent
                },
                shareMediaCategory: "ARTICLE",
                media: [
                    {
                        status: "READY",
                        originalUrl: articleUrl
                    }
                ]
            }
        },
        visibility: {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    };

    try {
        const response = await axios.post(apiUrl, postContent, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'LinkedIn-Version': '202408',
                'X-Restli-Protocol-Version': '2.0.0'
            },
        });

        console.log('Post successful:', response.data);
    } catch (error) {
        console.error('Error posting to LinkedIn:', error.response ? error.response.data : error.message);
    }
};

postToLinkedIn();
