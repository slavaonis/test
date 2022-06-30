const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const request = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    console.log('Request Error: ', error);
  }
}

const state = {
  post: {},
  loading: false,
};

const getPost = async url => {
  try {
    state.loading = true;

    const { status, data: { id, userId, body, title } } = await request(`${url}/1`);
    if (status === 200) {
      state.post = { id, userId, body, title };
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    state.loading = false;
  }
}

await getPost(baseUrl);

console.log(state);
