const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

//posts.name


let nameEl = document.getElementById("name-El")

function getItems(nameFromDB) {
    //let nameFromDB = posts[i]
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i])
        nameEl.innerHTML += posts[i].name

        let currentItem = posts[i]
        addItemToCommentsSection(currentItem)

        // this works above but why! hahahah!!

        // nameEl.innerHTML += posts[i].name[i]
        // this above needs to = the first name but also be able to get the rest of them for the other posts!
        // console.log(posts[i].name)
    }
}

getItems()



// just play with it! I can get the console log to log all the posts!
// and the names in the name spot! Just all of them instead of one! I'm probably overthinking it! :) 
// the point is that I learn and not rush through it!!! YAY!!