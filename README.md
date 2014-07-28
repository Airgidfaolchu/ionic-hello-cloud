# FeedHenry Hello World Cloud Server

This is a blank 'hello world' FeedHenry Cloud Server. Use it as a starting point for building your APIs. 

# Group Hello World API

# hello [/hello]

'Hello world' endpoint.

## hello [POST] 

'Hello world' endpoint.

+ Request (application/json)
    + Body
            {
              "hello": "[USER_INPUT]"
            }

+ Response 200 (application/json)
    + Body
            {
              "msg": "Message from FeedHenry: Hello [USER_INPUT] !"
            }
