# Job Posting API Server

You can access the hosted server at [https://jobapi-rmdh.onrender.com](https://jobapi-rmdh.onrender.com).

This is a simple API server for job postings. It's built with Node.js and Express.

## Installation

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the server with `npm start`.

## Endpoints

### POST /api/v1

Create a new job posting. The request body should be a JSON object with the following properties:

- `title`: The title of the job. (String)
- `description`: A description of the job.(String)
- `company`: The company offering the job.(String)
- `location`: The location of the job.(String)
- `salary`: The salary of the job.(Number)

### GET /api/v1

Get all job postings.

### PATCH /api/v1/:id

Update a job posting. The request body should be a JSON object with the properties you want to update.

### DELETE /api/v1/:id

Delete a job posting.

## Error Handling

If there's an error, the server will respond with a status code and an error message.

## Testing

You can test the API with a tool like Postman or curl.

## Contributing

Feel free to open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the ISC License.