# Sample Webhook Node.js Server

This is a simple Node.js server with CORS enabled and a webhook route.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/meen2nont/local-webhook.git
    cd local-webhook
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Server

1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running on port `9009` by default. You can change the port by setting the `PORT` environment variable:
    ```sh
    PORT=9009 npm start
    ```

## Project Structure

- `server.js`: The main server file.
- `routes/webhookRoute.js`: The file where the webhook route is defined.

## API Endpoints

- `POST /api/v1/webhook`: Endpoint to handle webhook events.

## CORS

The server has CORS enabled for all origins and allows `POST` and `GET` methods.

## License

This project is licensed under the MIT License.
