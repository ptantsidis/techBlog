let commentBtn = document.querySelectorAll(".commentBtn");

const commentFormHandler = async (event) => {
      event.preventDefault();
      
      const response = await fetch ('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({content:content,collectId:Number(collectid)}),
        headers: {'Content-Type': 'application/json'}
    });
    const content = event.target.previousElementSibling.value;
      const collectid =event.target.dataset.collectid;
      console.log(event.target)
      

commentBtn.forEach((comment)=>{
    comment.addEventListener('click', commentFormHandler)
})