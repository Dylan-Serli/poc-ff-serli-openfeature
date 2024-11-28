## FF-Serli OpenFeature Provider for the server
Here you can find a simple [express.js](https://expressjs.com/) application that showcase how to instanciate and use our provider.

### Usage
You can create the provider and associate it with openfeature with the following lines:
```js
import SerliProvider from "ff-serli-openfeature-provider-server";
OpenFeature.setProvider(new SerliProvider("your_api_key"));
```
You must replace `your_api_key` with your api key and that's it.

In the OpenFeature interface the methods to retrieve a flag value for the server application
are asynchronous so you must use the functions with the `await` or the `then`
keyword.

### Example
**Get the value of a flag**:
```js
const client: Client = OpenFeature.getClient();
const flag_value = await client.getStringValue(flag, "default string value"),
```

**Get the value and details of a flag**:
```js
const client: Client = OpenFeature.getClient();
const flag_value = await client.getStringDetails(flag, "default string value"),
```
