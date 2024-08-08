# Rocky Territory

## License
[![License: None](https://img.shields.io/badge/License-None-brightgreen)](https://opensource.org/licenses/None)



## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Questions](#questions)

## Description
Rocky Territory is the new social media site dedicated to sharing all of your deepest thoughts, no matter how uncomfortable.

## Installation
In order to install rocky territory, simply use npm i in the command line to install the needed packages, then use insomnia, postman, or a similar service to utilize the api routes.

## Usage
In order to use Rocky Territory, first run npm run start to run your server, then you can use api routes to interact with posts! Here are the routes used:

/api/users

    GET all users

    GET a single user by its _id and populated thought and friend data
        Params: :id

    POST a new user
        Body: username, email

    PUT to update a user by its _id
        Params: :id
        Body: username and/or email

    DELETE to remove user and their thoughts by its _id
        Params: :id

/api/users/:userId/friends/:friendId

    POST to add a new friend to a user's friend list

    DELETE to remove a friend from a user's friend list

/api/thoughts

    GET to get all thoughts

    GET to get a single thought by its _id
        Params: :id

    POST to create a new thought
        Body: thoughtText, username

    PUT to update a thought by its _id
        Params: :id
        Body: thoughtText and/or username

    DELETE to remove a thought by its _id
        Params: :id

/api/thoughts/:thoughtId/reactions

    POST to create a reaction stored in a single thought's reactions array field
        Body: reactionBody, username

    DELETE to pull and remove a reaction by the reaction's reactionId value
        Params: :id

Here is a video recording demonstrating the process:
[Demonstration video](https://drive.google.com/file/d/1-1ajnLUroUllR3ORopQbrK4otH3ZUva6/view?usp=drive_link)

## Contribution
In order to contribute to this project, please contact the author, Vincent, with the information provided at the end of the README!

## Questions
Here is my [GitHub account](https://github.com/VPVelthuizen).

Email me with any questions: [VPVelthuizen@gmail.com](mailto:VPVelthuizen@gmail.com)