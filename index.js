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

axios
  .post(url, body)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
    core.setOutput("response", res);
  })
  .catch(error => {
    core.setFailed(error.message);
  })

} catch (error) {
  core.setFailed(error.message);
}