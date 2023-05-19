export function init(per_page, filter_tags, page = get_page()) {
  console.log('init pagination');
  console.log('page: ' + page);
  let items = document.querySelectorAll('#items .post-item:not(.hide)');
  let pages = Math.ceil(items.length / per_page);
  let pagination = document.querySelector('#pagination');

  if(page > pages) {
    page = pages;
  }

  pagination.innerHTML = '';

  let chevron_left = document.createElement('li');
  let chevron_left_link = null;
  if (page == 1) {
    chevron_left_link = document.createElement('div');
    chevron_left.classList.add('disabled');
  }
  else {
    chevron_left_link = document.createElement('a');
    chevron_left_link.href = '?page=' + (page - 1) + '&tags=' + filter_tags.join(',');
  }

  let chevron_left_icon = document.createElement('i');
  chevron_left_icon.classList.add('material-icons');
  chevron_left_icon.innerText = 'chevron_left';
  chevron_left_link.appendChild(chevron_left_icon);

  chevron_left.appendChild(chevron_left_link);
  pagination.appendChild(chevron_left);

  for (var i = 0; i < pages; i++) {
    let page_button = document.createElement('li');
    let link = document.createElement('a');
    if (i == page - 1) {
      page_button.classList.add('active');
    }
    link.href = '?page=' + (i + 1) + '&tags=' + filter_tags.join(',');
    link.innerText = i + 1;
    page_button.appendChild(link);
    pagination.appendChild(page_button);
  }

  let chevron_right = document.createElement('li');

  let chevron_right_link = null;
  if (page == pages) {
    chevron_right_link = document.createElement('div');
    chevron_right.classList.add('disabled');
  }
  else {
    chevron_right_link = document.createElement('a');
    chevron_right_link.href = '?page=' + (page + 1) + '&tags=' + filter_tags.join(',');
  }

  let chevron_right_icon = document.createElement('i');
  chevron_right_icon.classList.add('material-icons');
  chevron_right_icon.innerText = 'chevron_right';
  chevron_right_link.appendChild(chevron_right_icon);

  chevron_right.appendChild(chevron_right_link);
  pagination.appendChild(chevron_right);

  for (var i = 0; i < items.length; i++) {
    if (i >= (page - 1) * per_page && i < page * per_page) {
      items[i].classList.remove('hide-page');
    }
    else {
      items[i].classList.add('hide-page');
    }
  }
}

export function filter(tags, posts) {
  let items = document.querySelectorAll('#items .post-item');
  if(tags.length == 0) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('hide');
    }
    return;
  }

  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    let item_tags = posts[i].tags;
    let display = false;
    for (var j = 0; j < tags.length; j++) {
      if (item_tags.includes(tags[j])) {
        display = true;
      }
      else {
        display = false;
        break;
      }
    }
    if (display) {
      item.classList.remove('hide');
    }
    else {
      item.classList.add('hide');
    }
  }
}

function get_query(query)
{
  const current_url = window.location.search;
  const url_params = new URLSearchParams(current_url);
  return url_params.get(query);
}

export function get_page()
{
  const query = get_query('page');
  return query ? parseInt(query) : 1;
}

export function get_filter()
{
  const query = get_query('tags');
  return query ? query.split(',') : [];
}