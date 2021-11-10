// let blog = document.querySelectorAll(".blogBtn");
let dataId = document.querySelector("span").value;

const blogFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/blogRoutes/${dataId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    console.log("success");
  } else {
    console.log('something went wrong');
  }

  dataId.addEventListener('click', blogFormHandler)
}


// document.getElementById("new-blog").addEventListener('submit', async function (event) {
//   event.preventDefault();
//   const data = {
//     blogName: document.getElementById('blog-name').value,
//     content: document.getElementById('blog-content').value
//   }
//   const response = await fetch(`/api/blogRoute/`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' }, 
//     body: JSON.stringify(data)
//   });
//   if (response.ok) {
//     console.log("New blog created")
//     location.reload();

//   }
//   else {
//     alert('Error creating new Blog"')
//   }
// })




