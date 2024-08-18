require('dotenv').config();
const axios = require('axios');

const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
const commentText = "hello"; // Your comment text here

const commentOnLinkedInPost = async () => {
    // The corrected URN of the LinkedIn post you want to comment on
    const postUrn = 'urn:li:ugcPost:7138312624609394688';
    const apiUrl = `https://api.linkedin.com/v2/socialActions/${encodeURIComponent(postUrn)}/comments`;

    const commentContent = {
        actor: 'urn:li:person:GTm5VzECkI', // Replace with your LinkedIn user URN
        message: {
            text: commentText
        }
    };

    try {
        const response = await axios.post(apiUrl, commentContent, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'LinkedIn-Version': '202408',
                'X-Restli-Protocol-Version': '2.0.0'
            },
        });

        console.log('Comment posted successfully:', response.data);
    } catch (error) {
        console.error('Error posting comment on LinkedIn:', error.response ? error.response.data : error.message);
    }
};

commentOnLinkedInPost();
