console.log('linked')


let profileDiv = document.querySelector('#profile')

fetch('https://api.github.com/users/jessmerry',{
    method: 'GET',
    headers: {},
})
.then(function (response){
    return response.json()
})
.then(function (data){
    console.log(data)
    let nameDiv = document.createElement('p')
    nameDiv.classList.add('name')
    nameDiv.innerText = data.name
    profileDiv.appendChild(nameDiv)
})

fetch('https://api.github.com/users/jessmerry',{
    method: 'GET',
    headers: {},
})
.then(function (response){
    return response.json()
})
.then(function (data){
    
    let pictureDiv = document.createElement('img')
    pictureDiv.classList.add('img')
    pictureDiv.src = data.avatar_url
    profileDiv.appendChild(pictureDiv)

    let usernameDiv = document.createElement('div')
    usernameDiv.innerText = `Username: ${data.login}`
    profileDiv.appendChild(usernameDiv)

    let locationDiv = document.createElement('div')
    locationDiv.classList.add('location')
    locationDiv.innerText = `Location: ${data.location}`
    profileDiv.appendChild(locationDiv)

    // let gitDiv = document.createElement('div')
    // gitDiv.innerHTML = `Find me on GitHub: <a href= "${data.html_url}">${data.login}</a>`
    // profileDiv.appendChild(gitDiv)

    let urlDiv = document.createElement('a')
    profileDiv.append(urlDiv)
    console.log("url div created")
    urlDiv.href="github.com/users/jessmerry"
    urlDiv.innerText=`${data.html_url}`
})

fetch("https://api.github.com/users/jessmerry/repos", {
    method: "GET",
    headers: {},
})
    .then(function(response) {
        return response.json();
    })
    
    .then(function (data) {
        for (let i of data) {
            let repoDiv = document.createElement('a')
            console.log(i.url)
            repoDiv.innerText = i.url
            repoDiv.href=`${i.url}`
            repoDiv.classList.add('repoDiv')
            profileDiv.appendChild(repoDiv)
        }
})



// add repos
// add bold titles
// make repos links