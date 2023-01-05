const posts = [
    {
        name: "Tom Holland",
        username: "tom1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-1.jpg",
        post: "images/post-spiderman.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Christian Bale",
        username: "chris1819",
        location: "Ornans, France",
        avatar: "images/avatar-2.jpg",
        post: "images/post-batman.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Josh Brolin",
        username: "jb1735",
        location: "Paris, France",
        avatar: "images/avatar-3.jpg",
        post: "images/post-thanos.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById("section")


function renderPost(posts) {
    let tempStr = ""
    for (let i = 0; i < posts.length; i++ ) {
        tempStr += `
        <div class="section-container">
            <img class="user-img" alt="avatar vangogh" src="${posts[i].avatar}"/>
            <div class="user-info-wrapper">
                <p class="name">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>
        <img class="post-img" alt="user post" src="${posts[i].post}"/>
        <div class="icon-img-wrapper">
            <img class="icon-img-heart" alt="icon heart" src="images/icon-heart.png"/>
            <img class="icon-img" alt="ico comment" src="images/icon-comment.png"/>
            <img class="icon-img" alt="icon dm" src="images/icon-dm.png"/>
        </div>
        <p class="post-likes">${posts[i].likes} likes</p>
        <p class="post-comment"><span class="comment-name">${posts[i].username}</span> ${posts[i].comment}</p>
        `
    }
    sectionEl.innerHTML = tempStr
}

renderPost(posts)