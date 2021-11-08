console.log("NewBlog file loaded")

let newBlogData = document.getElementById("new-blog");


 const addBlogData = async (event) => {
    event.preventDefault();
    const data = {
      blogName: document.getElementById('blog-name').value,
      content: document.getElementById('blog-content').value
    }
    const response = await fetch(`/api/addBlog/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("New blog created")
      location.reload();
  
    }
    else {
      alert('Error creating new Blog"')
    }
  };
  newBlogData.addEventListener('submit', addBlogData)