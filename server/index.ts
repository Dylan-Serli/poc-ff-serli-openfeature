import express from "express";
import { OpenFeature, Client } from "@openfeature/server-sdk";

//Import the serli provider
//for now it is linked with npm while waiting to publish it
import SerliProvider from "ff-serli-openfeature-provider-server";

OpenFeature.setProvider(
  new SerliProvider(
    "b7f52e9092f744299fd5bdae115faeb11abbf819fd8e40d0a1cb72057a937b70",
    "d2af1c3b-d96f-44d5-a676-a23b064f6d68",
  ),
);
const client: Client = OpenFeature.getClient();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    message: "Hello from API route!",
  });
});

app.get("/boolean/:flag", async (req, res) => {
  const flag = req.params.flag;
  res.json({
    flag: await client.getBooleanValue(flag, false),
    flag_detail: await client.getBooleanDetails(flag, false),
  });
});

app.get("/number/:flag", async (req, res) => {
  const flag = req.params.flag;
  res.json({
    flag: await client.getNumberValue(flag, 0),
    flag_detail: await client.getNumberDetails(flag, 0),
  });
});

app.get("/string/:flag", async (req, res) => {
  const flag = req.params.flag;
  res.json({
    flag: await client.getStringValue(flag, "default string value"),
    flag_detail: await client.getStringDetails(flag, "default string value"),
  });
});

app.get("/object/:flag", async (req, res) => {
  const flag = req.params.flag;
  res.json({
    flag: await client.getObjectValue(flag, { default: "object value" }),
    flag_detail: await client.getObjectDetails(flag, {
      default: "object value",
    }),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
