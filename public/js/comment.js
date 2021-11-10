let commentBtn = document.querySelector(".commentBtn")
let updateBlog = document.querySelector(".blogBtn")

//create function that gets
const commentFormHandler = async (event) => {
    event.preventDefault();
    const newComment = document.querySelector('#commentText').value
    const newBlogId = Number(event.target.dataset.blogid);
    console.log(newBlogId)
    if (newComment == "") {
        alert("Please enter valid comment")
    }
    else {
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ newComment, newBlogId }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace(`/api/blogRoute/${newBlogId}`)
        }
    }
}
const blogUpdateHandler = async (event) => {
    event.preventDefault();
    console.log("update clicked")
    const newUpdateBlog = document.querySelector('#update-blog-name').value
    console.log(newUpdateBlog)
    const newBlogId = Number(event.target.dataset.blogid);
    console.log(newBlogId)
    const blogContent = document.querySelector('#update-blog-content').value
    console.log(blogContent)
    
    console.log(newUpdateBlog, blogContent, newBlogId )

    const response = await fetch(`/api/blogRoute/updateBlog/${newBlogId}`, {
        method: 'PUT',
        body: JSON.stringify({ blogName: newUpdateBlog, content: blogContent}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace(`/api/blogRoute/${newBlogId}`)
    }else {
        console.log(response);
    }
}

if (owner = false) {
    commentBtn.addEventListener('click', commentFormHandler);
} else {
    updateBlog.addEventListener('click', blogUpdateHandler);
};
