async function editFormHandler(event) {
    event.preventDefault();
  
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_contents = document.querySelector('textarea[name="post-contents"]').value;
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_contents
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  

  async function navigateBackToDashboard() {
    window.location.href = "/dashboard";
  }  
  
  document.querySelector('#close-edit-post').addEventListener('click', navigateBackToDashboard);
  