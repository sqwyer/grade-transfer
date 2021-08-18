<div align="center">
<h1>(Grade Transfer) Server</h1>
<p>The directory for all server-related files of the Grade Transfer project.</p>
<p><a href="https://github.com/sqwyer/grade-transfer/issues/new">[Create Issues]</a> - <a href="https://github.com/sqwyer/grade-transfer/issues">[View Issues]</a> - <a href="https://east-grade-transfer.herokuapp.com/">[View Site]</a></p>
</div>

## Running locally
#### Step 1
Ensure that you have installed all of the required modules installed with
```
npm i
```

#### Step 2
Ensure that you have creted an OAuth 2.0 client for Google Classroom., as well as that you have added the required information to your `.env` file. Use the `.env.example` as a template. See [https://developers.google.com/classroom/guides/auth](https://developers.google.com/classroom/guides/auth).

#### Step 3
You're ready to go now! Just use the following command to start up your server:
```
node server/server
```

**Note:** If you have the `dev-dependency` nodemon installed you can use the following command to start the server:
```
npm run dev
```

## License
This project is licensed under the MIT license, see [LICENSE.md](https://github.com/grade-transfer/grade-transfer/blob/vanilla/LICENSE.md) or [The Open Source Initiative](https://opensource.org/licenses/MIT) for info.

-------------
**Create a [Pull Request](https://github.com/grade-transfer/grade-transfer/pulls) if you think something here should be changed.**
