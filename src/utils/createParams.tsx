const CreateParams = ({ data }: any) => {
  const transformToParams = () => {
    let count = 0;
    let params = "";

    for (const key in data) {
      if (data.hasOwnProperty(key) && data[key] !== "") {
        count++;
        if (count > 1) {
          params += "&";
        }
        params += `${key}=${encodeURIComponent(data[key])}`;
      }
    }
    if (count < 2) {
      params = "";
    }

    return params;
  };

  return transformToParams();
};

export default CreateParams;
