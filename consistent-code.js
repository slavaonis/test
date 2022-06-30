const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

//Good approach

const request = async url => {
  try {
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.log('Request Error: ', error);
  }
}

const getData = async url => {
  try {
    const firstData = await request(`${url}/1`);
    console.log('First request data', firstData);

    const secondData = await request(`${url}/${firstData.id + 1}`);
    console.log('Second request data', secondData);
  }
  catch (err) {
    console.log('getData Error: ', err)
  }
  finally {
    // runs every time
  }
}

getData(baseUrl);

//Bad approach

const getDataPromise = url => {
  fetch(`${url}/1`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('First request data', data);
      return fetch(`${url}/${data.id + 1}`)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('Second request data', data);
    })
    .catch((error) => {
      console.log('Request failed', error)
    })
    .finally(() => {
      // runs every time
    });
}

getDataPromise(baseUrl);