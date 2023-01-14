const posts = [
    {
        name: "Tom Holland",
        username: "tom1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-1.jpg",
        post: "images/post-spiderman.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked:false,
        id: '1'
    },
    {
        name: "Christian Bale",
        username: "chris1819",
        location: "Ornans, France",
        avatar: "images/avatar-2.jpg",
        post: "images/post-batman.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked:false,
        id: '2'
    },
        {
        name: "Josh Brolin",
        username: "jb1735",
        location: "Paris, France",
        avatar: "images/avatar-3.jpg",
        post: "images/post-thanos.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked:false,
        id: '3'
    }
]

document.addEventListener('click', function(e) {
    if (e.target.dataset.like) {
        handleLikesClick(e.target.dataset.like)
    }
})

function handleLikesClick(postId) {
    const targetPostObj = posts.filter(function(post) {
        return post.id === postId
    })[0]

    if (targetPostObj.isLiked === false) {
        targetPostObj.likes++ 
    } else {
        targetPostObj.likes-- 
    }
    targetPostObj.isLiked = !targetPostObj.isLiked
    renderPost()
}

function getPostHtml() {
    let post = ""

    for (let i = 0; i < posts.length; i++ ) {

        // Conditionally render the like image
        let likeIconSrc = ''
        if (posts[i].isLiked) {
            likeIconSrc = "images/icon-red-heart.png"
        } else {
            likeIconSrc = "images/icon-heart.png"
        }

        post += `
        <div class="section-container">
            <img class="user-img" alt="avatar vangogh" src="${posts[i].avatar}"/>
            <div class="user-info-wrapper">
                <p class="name">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>
        <img class="post-img" alt="user post" src="${posts[i].post}"/>
        <div class="icon-img-wrapper">
            <img class="icon-img-heart" id="icon-heart" data-like="${posts[i].id}" alt="icon heart" src="${likeIconSrc}"/>
            <img class="icon-img" alt="ico comment" src="images/icon-comment.png"/>
            <img class="icon-img" alt="icon dm" src="images/icon-dm.png"/>
        </div>
        <p class="post-likes" id="post-like-count">${posts[i].likes} likes</p>
        <p class="post-comment"><span class="comment-name">${posts[i].username}</span> ${posts[i].comment}</p>
        `
    }
    return post
}

function renderPost() {
    document.getElementById("section").innerHTML = getPostHtml()
}

renderPost()