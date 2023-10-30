const posts = [
    {
        id: 1,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        id: 2,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        id: 3,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

////////// Get posts element and loop through array //////////
let postsSectionEL = document.getElementById("posts-section-El")

function getPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
        addPostsToFeed(posts[i])  
    }

}
getPosts(posts)

////////// create the feed and add posts to it! //////////
function addPostsToFeed(posts) {
    const singlePost = document.createElement('div');
    singlePost.classList.add('singlePost');

    const postId = `post-${posts.id}`;
    const heartIconId = `heart-icon-${postId}`;
    const likesElementId = `likes-${postId}`;

    const imgDblClickId = `dbl-click-img-${postId}`;

    singlePost.innerHTML = 
        `
        <div class="container" id="${postId}">
            <section class="post">
                <div class="post-top">
                    <img class="post-avatar-img" src="${posts.avatar}" alt="${posts.name}">
                    <div class="name-location">
                        <h1 id="name-El">${posts.name}</h1>
                        <h2>${posts.location}</h2>
                    </div>
                </div>
                <img id="${imgDblClickId}" class="post-img" src="${posts.post}" alt="${posts.name}">
            </section>
            <section class="likes-comments">
                <img id="${heartIconId}" class="fav-icon" src="images/icon-heart.png" alt="icon of a heart">
                <img class="comment-icon" src="images/icon-comment.png" alt="icon of a chat bubble">
                <img class="dm-icon" src="images/icon-dm.png" alt="icon of a paper airplane">
                <p id="${likesElementId}" class="bold-txt">${posts.likes} likes</p>
                <p><span class="bold-txt">${posts.username} </span>${posts.comment}l</p>
            </section>
        </div>
        `
        
    postsSectionEL.appendChild(singlePost);
    
    ////////// Increase likes on click of heart icon! //////////
    const heartBtn = document.getElementById(heartIconId)
    const displayLikes = document.getElementById(likesElementId)
    const imgDblClick = document.getElementById(imgDblClickId)

    heartBtn.addEventListener('click', function () {
        addLikesAndHeartIcon()
    })
    imgDblClick.addEventListener('dblclick', function () {
        addLikesAndHeartIcon()
    })

    function addLikesAndHeartIcon() {
        posts.likes++
        displayLikes.textContent = `${posts.likes} likes`
        heartBtn.src = "images/icon-heart-red.png";
    }
}