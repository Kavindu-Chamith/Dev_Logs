//===Asynchronous===
console.log('Before');
// getUser(1, (user) => {
//     console.log('User', user);
//     getRepo(user.GithubUsername, (repos) => {
//         console.log('Repos:', repos);
            //callback hell issue
//     });
// });
// console.log('After');
getUser(1)
.then(user => getRepo(user.GithubUsername))
    .then(user =>console.log('User', user))
    .then(repo => console.log('Repo', repo));


//===synchronous===
// console.log('Before');
// const user = getUser(1);
// const repos = getRepo(user.GithubUsername);
console.log('After');



function getUser(id) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
                console.log('Reading user from database....');
                resolve({ id: id, GithubUsername: 'Kavindu' });
            }, 2000);
    });
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching repos for ${username}...`);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}
