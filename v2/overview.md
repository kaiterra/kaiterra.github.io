# Overview

The Kaiterra API allows your programs to access the air quality data reported by your [Sensedge](https://www.kaiterra.com/sensedge), [Sensedge Mini](https://www.kaiterra.com/sensedge-mini), or other device.

How to get started:

1. Get your API key at [app.kaiterra.com](https://app.kaiterra.com). Once you've created an account, go to your [Account Settings](https://app.kaiterra.com/me/account/personal) and click **API Keys**. Finally, click **Generate API Key**.

2. If you're a Postman user, you can try out our API using our public [Demo workspace](https://www.postman.com/kaiterra/workspace/demo). Note that you'll need to [create a Postman environment](https://learning.postman.com/docs/sending-requests/environments/managing-environments/) with a variable called `api-key` (set to your Kaiterra API key) to try the examples in the collection.

3. Find the Unique Device IDs (UDIDs) for your Kaiterra devices in the device's settings (Sensedge) or in the Kaiterra mobile app.

4. Don't have any Kaiterra devices yet? Feel free to use our test devices from this documentation -- the ones with IDs beginning with "00000000-" -- to get familiar with the API:

   1. `00000000-0031-0101-0000-00007e57c0de` is a test Sensedge

   2. `00000000-0001-0101-0000-00007e57c0de` is a test Laser Egg
