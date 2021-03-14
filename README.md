# Grade Transfer
🚌ㅤA school [EAST](http://eastinitiative.org) project created to make grading faster for teachers.

### Cloning Locally
##### First
To clone this project locally for open source contribution, you will first need to clone the repository. If you are unaware on how to do this, see [the docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

##### Second
Next, you will need to install the required dependencies. To do this, use the following terminal command:

```
npm install
```

##### Third
After cloning the repository and installing the dependencies, you should create a `.env` file in your root directory. In this file you should paste the following:

```env
CLIENT_ID=
PROJECT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_PROVIDER=
CLIENT_SECRET=
REDIRECT_URI=
```

##### Fourth
Once you have completed all of the previous steps, you should enable the Google Classroom API. To do this, visit the [Google Classroom API Quickstart Page](https://developers.google.com/classroom/quickstart/nodejs). Here, you should see a blue button titled, "Enable the Classroom API," Enable the API for a web server. Once given the option, download the credentials. Then, paste your `CLIENT_ID`, `PROJECT_ID`, `AUTH_URL`, `TOKEN_URI`, `AUTH_PROVIDER`, `CLIENT_SECRET`, and `REDIRECT_URI`. **Note** that you should just include the first `REDIRECT_URI` from the array provided in the credentials.

**Extra:** If you want to host the project, you may need to use a service like [Glitch](https://glitch.com). This will allow you to easier develop and use redirects/auth links.

#### Notice

This project is licensed under the MIT license & developed by students.