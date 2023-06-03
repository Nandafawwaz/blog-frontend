import axios from 'axios';

async function getData() {
    try {
      const response = await axios.get('https://blog-backend-uvuwemyala-et.a.run.app/db-demo/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const postData = async (title,content) => {
    try {
      const response = await axios.post('https://blog-backend-uvuwemyala-et.a.run.app/db-demo/post', {
          id : (new Date()).getTime(),
          title: title,
          content: content,
          date: Date()
      }).then(()=>{console.log("post data")}) ;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const putData = async (id,title,content) => {
    try {
      const response = await axios.put('https://blog-backend-uvuwemyala-et.a.run.app/db-demo/put', {
          id : id,
          title: title,
          content: content,
          date: Date()
      }).then(()=>{console.log("post data")}) ;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const delData = async (id) => {
    try {
      const response = await axios.delete(`https://blog-backend-uvuwemyala-et.a.run.app/delete/${id}`).then(()=>{console.log("delete data")}) ;
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData,
    postData,
    putData,
    delData
}