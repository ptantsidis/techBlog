console.log("commment file loaded")
let commentBtn = document.querySelector(".commentBtn")
let updateBlog = document.querySelector(".blogBtn")

//create function that gets
const commentFormHandler = async (event) => {
    event.preventDefault();
    const newComment = document.querySelector('#commentText').value
    const newBlogId = Number(event.target.dataset.blogid);
    console.log(newBlogId)
    if(newComment == ""){
        alert("Please enter valid comment")
    }
    else{
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
    const newUpdateBlog =document.querySelector('#update-blog-name').value
    const newBlogId =Number( event.target.dataset.blogid);
    const blogContent = document.querySelector('#update-blog-content').value
 console.log(newBlogId)

     const response = await fetch (`/api/blogRoute/updateBlog/${newBlogId}`, {
     method: 'PUT',
      body: JSON.stringify({ blogName: newUpdateBlog, content: blogContent, }),
     headers: {'Content-Type': 'application/json'},
 });
 if(response.ok){
     document.location.replace(`/api/blogRoute/${newBlogId}`)
 }


commentBtn.addEventListener('click', commentFormHandler);
 updateBlog.addEventListener('click', blogUpdateHandler );