let commentBtn = document.querySelector(".commentBtn")
let updateBlog = document.querySelector(".blogBtn")
let deleteBlog = document.querySelector('#button-delete')

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
    const newUpdateBlog = document.querySelector('#update-blog-name').value
    const newBlogId = Number(event.target.dataset.blogid);
    const blogContent = document.querySelector('#update-blog-content').value
   
    const response = await fetch(`/api/blogRoute/updateBlog/${newBlogId}`, {
        method: 'PUT',
        body: JSON.stringify({ blogName: newUpdateBlog, content: blogContent}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace(`/dashboard`)
    }else {
        console.log(response);
    }
}
const blogDeleteHandler = async (event) => {
    event.preventDefault();
    
    const newBlogId = Number(event.target.dataset.blogid);
    const response = await fetch(`/api/blogRoute/delete/${newBlogId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace(`/dashboard`)
    }else {
        console.log(response);
    }
}
// console.log(owner)
// if (owner = false) {
    commentBtn.addEventListener('click', commentFormHandler);
    
// } else {
    updateBlog.addEventListener('click', blogUpdateHandler);
    deleteBlog.addEventListener('click', blogDeleteHandler)
// };
