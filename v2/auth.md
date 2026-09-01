# Auth

All requests to the API must be authenticated. Get your API key by signing up at [app.kaiterra.com](https://app.kaiterra.com).

When issuing an HTTP request, the client includes the key in a URL parameter called `key` (this is how e.g. Google Maps works). All requests must use HTTPS, so the key is [safe from eavesdropping](https://stackoverflow.com/questions/499591/are-https-urls-encrypted). This method is simple, but it's only suitable for clients that are running on trusted devices, such as a server you control, or a researcher's workstation. These keys must NOT be embedded directly into web pages, or iOS or Android apps.

Our platform allows you to generate and revoke these keys whenever you need to through a secure web application, giving you full control to manage your own key rotation policies. For your security, we strongly recommend you treat API keys like any other sensitive credential. To minimize the risk of a key being compromised, we suggest rotating your API keys at least once a year as a standard security practice.

If authentication information is required but not present, or if it is not accepted, HTTP 401 is returned (401 is called "Unauthorized", but it should really be called "Unauthenticated").
