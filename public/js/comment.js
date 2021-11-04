console.log("commment file loaded")
let commentBtn=document.querySelector(".commentBtn")

//create function that gets
const commentFormHandler = async (event) => {
       event.preventDefault();
    const newComment =document.querySelector('#commentText').value
    const newBlogId =Number( event.target.dataset.blogid);
    console.log(newBlogId)

        const response = await fetch ('/api/comments/', {
        method: 'POST',
         body: JSON.stringify({ newComment, newBlogId }),
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok){
        document.location.replace(`/api/blogRoute/${newBlogId}`)
    }

}
commentBtn.addEventListener('click',commentFormHandler);
