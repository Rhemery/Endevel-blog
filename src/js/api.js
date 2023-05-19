export async function get(path) {
  return await fetch(import.meta.env.VITE_API_URL + path)
    .then(response => response.json())
    .then((data) => {
      return data;
    });
}

export async function update_tag(id, name) {
  return await fetch(import.meta.env.VITE_API_URL + 'tag/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  }).then((response) => {
    if (response.ok) {
      location.reload();
    }
    else {
      response.text().then((text) => {
        throw Error(text);
      });
    }
  })
}

export async function update_post_tags(post) {
  let post_detail = await get("blog/" + post.id);
  post_detail.tags = post.tags;
  delete post_detail.image;
  delete post_detail.thumbnail;
  return await fetch(import.meta.env.VITE_API_URL + 'blog/' + post_detail.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post_detail)
  })
    .then((response) => {
      if (!response.ok) {
        response.text().then((text) => {
          throw Error(text);
        });
      }
    })

}