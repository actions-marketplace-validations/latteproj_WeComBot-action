# WeCom Bot action

This action use WeCom Bot HTTP API to send a text message.
## Inputs

## `bot-url`

**Required** The url generated when you created the WeCom Bot, e.g https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<key>

## `text-message`
**Required** The message to be sent.
## Outputs

## `response`

The response returned from WeCom Bot Api.

## Example usage

uses: actions/WeComBot-action@master
with:
  bot-url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<key>'
  text-message: 'Hello World!'