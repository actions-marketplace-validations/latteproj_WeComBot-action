const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios')

try {
  
  const url = core.getInput('bot-url');
  const message = core.getInput('text-message');
  const body = {
    "msgtype": "text",
    "text": {
        "content": message
    }
}

const replacerFunc = () => {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};

axios
  .post(url, body)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(JSON.stringify(res, replacerFunc()))
    core.setOutput("response", res);
  })
  .catch(error => {
    core.setFailed(error.message);
  })

} catch (error) {
  core.setFailed(error.message);
}