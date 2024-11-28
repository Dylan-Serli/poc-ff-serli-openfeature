## FF-Serli OpenFeature Provider for the client
Here you can find a simple [VueJs](https://vuejs.org/) application that showcase how to instanciate and use our provider.

### Usage
The OpenFeature provider interface for the client being synchronous, we need to fetch the values
of the flag at the creation of the provider.
You can create the provider with the following lines:
```js
import SerliProvider from "ff-serli-openfeature-provider-client";
```

and then associate it to OpenFeature with
```js
const provider = await SerliProvider.create("your_api_key");
OpenFeature.setProvider(provider);
```

You must replace `your_api_key` with your api key and that's it.

### Example
**Get the value of a flag**:
```js
let client = OpenFeature.getClient();
const flag_value = client.getStringValue(flag, "default string value"),
```

**Get the value and details of a flag**:
```js
let client = OpenFeature.getClient();
const flag_value = client.getStringDetails(flag, "default string value"),
```
