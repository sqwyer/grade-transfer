<div style="text-align:center">
<h1>Grade Transfer</h1>
<p>An EAST project made to help teachers submit grades faster.</p>
<br />
<a href="https://east-grade-transfer.herokuapp.com/">[View Site]</a>
</div>

#### What does Grade Transfer do?
Grade transfer is a tool that transfers pre-submitted grades from Google Classroom directly to eSchoolPlus. This saves unnecessary time spent reentering grades.

## General Contributing
**Note:** if you are contributing to the server or client please read the respective `CONTRIBUTING.md` file in the `server` or `client` directories.

#### Prerequisites
1. Node.js (v14.16.1+): [Install Here](https://nodejs.org/en/)
2. Git (any version): [Install Here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

#### Step One
The first thing you need to do is clone the repository locally. To do this run the following command in the terminal:
```
git clone https://github.com/sqwyer/grade-transfer
```
> If you encounter any issues, refer to the [Github Documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)

Then, navigate into the cloned repository by running the following command in the terminal:
```
cd ./grade-transfer
```

#### Step Two
Now that you have the repository cloned, you can start editing files. Try your best to avoid bugs by testing your code in your local browser, you can start the app by running the following commands in the terminal (you will need to have 2 terminals open in order to do this):

*Terminal One*
```
npm run start
```
*Terminal Two*
```
cd ./client && npm run start
```

**Please note:** if you are going to be contributing to the React frontend, try your best to stick to the [Figma Style Guide](https://www.figma.com/file/wQrzua8DkQuiAlVTA7FR9r/Grade-Transfer-React?node-id=0%3A1). If you think something in the style guide should be changed, please contact me via Discord or email (see [my profile](https://github.com/sqwyer) for contact information).

## License
- MIT - [See File](https://github.com/sqwyer/grade-transfer/blob/react/LICENSE.md) - [Information](https://opensource.org/licenses/MIT)