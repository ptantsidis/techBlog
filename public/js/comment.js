let blog = document.querySelectorAll(".blogBtn");

const blogFormHandler = async (event) => {
      event.preventDefault();
      
      const response = await fetch ('/api/blog/', {
        method: 'POST',
        body: JSON.stringify({content:content,blogId:Blog(blogid)}),
        headers: {'Content-Type': 'application/json'}
    });
    const content = event.target.previousElementSibling.value;
      const collectid =event.target.dataset.collectid;
      console.log(event.target)


// commentBtn.forEach((comment)=>{
//     comment.addEventListener('click', commentFormHandler)
}