# LinkedIn API Integration

This repository contains a set of scripts that interact with the LinkedIn API for various purposes, including OAuth authentication, posting comments, and sharing articles.

## Project Structure

- **index.js**: Handles OAuth authentication with LinkedIn and retrieves an access token.
- **API.js**: Provides utility functions for interacting with LinkedIn's OAuth and user information APIs.
- **comment.js**: Posts a comment on a LinkedIn post.
- **post.js**: Shares an article on LinkedIn.

## Prerequisites

Before running any of the scripts, ensure you have the following:

1. Node.js installed on your machine.
2. A LinkedIn Developer account to create an app and get your API credentials.
3. A `.env` file in the root directory with the following variables set:
```bash
   LINKEDIN_CLIENT_ID=your_client_id
   LINKEDIN_CLIENT_SECRET=your_client_secret
   LINKEDIN_AUTHORIZATION_URL=https://www.linkedin.com/oauth/v2/authorization
   LINKEDIN_ACCESS_TOKEN_URL=https://www.linkedin.com/oauth/v2/accessToken
   LINKEDIN_REDIRECT_URI=http://localhost:{__PORT__}/callback
   ACCESS_TOKEN_FILEPATH=path_to_your_access_token_file
   LINKEDIN_ACCESS_TOKEN=your_linkedIn_access_token # Required for comment.js and post.js
```
## Installation
```bash
git clone https://github.com/your-username/linkedin-api-integration.git
cd linkedin-api-integration
```
```
pnpm i
pnpm dev
```

## Running the Scripts to leverage Linkedin API

### 1. OAuth Authentication (index.js)

To start the OAuth flow and retrieve a LinkedIn access token:

```bash  
node index.js
```

This will open a browser window for you to authenticate with LinkedIn. After successful authentication, your access token will be saved to the file specified by `ACCESS_TOKEN_FILEPATH` in your `.env` file.

### 2. Posting a Comment (comment.js)

To post a comment on a LinkedIn post:

1. Ensure the `LINKEDIN_ACCESS_TOKEN` is set in your `.env` file.
2. Update the `commentText` and `postUrn` variables in `comment.js`.
3. Run the script:

```bash  
node comment.js
```
### 3. Posting to Linkedin Feed (post.js)

To make a post on LinkedIn:

1. Ensure the `LINKEDIN_ACCESS_TOKEN` is set in your `.env` file.
2. Update the `articleContent` and `articleUrl` variables in `post.js`.
3. Run the script:

```bash  
node post.js
```
### Notes

- Ensure that the LinkedIn access token is valid before running the `comment.js` or `post.js` scripts.
- The `index.js` script automatically checks for an existing valid access token before starting the OAuth flow.

