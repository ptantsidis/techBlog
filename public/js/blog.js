console.log("Blog file loaded")
// let blog = document.querySelectorAll(".blogBtn");
let dataId = document.querySelector("span").value;

const blogFormHandler = async (event) => {
      event.preventDefault();
      
      const response = await fetch (`/api/blogRoutes/${dataId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    
    dataId.addEventListener('click', blogFormHandler)}