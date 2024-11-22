<script setup>
import { ref, onMounted } from "vue";
import { OpenFeature } from "@openfeature/web-sdk";

//Import the serli provider
//for now it is linked with npm while waiting to publish it
import SerliProvider from "ff-serli-openfeature-provider-client";
let client = OpenFeature.getClient();

const selected_method = ref(null);
const requested_flag = ref("");
const flag_value = ref("");

onMounted(async () => {
    //create the provider
    const provider = await SerliProvider.create("your_api_key");
    OpenFeature.setProvider(provider);
});

function getFlag() {
    //get the flag value
    switch (selected_method.value) {
        case "getBooleanValue":
            flag_value.value = client.getBooleanValue(
                requested_flag.value,
                false,
            );
            break;
        case "getBooleanDetails":
            flag_value.value = client.getBooleanDetails(
                requested_flag.value,
                false,
            );
            break;
        case "getStringValue":
            flag_value.value = client.getStringValue(
                requested_flag.value,
                "default string",
            );
            break;
        case "getStringDetails":
            flag_value.value = client.getStringDetails(
                requested_flag.value,
                "default string",
            );
            break;
        case "getNumberValue":
            flag_value.value = client.getNumberValue(requested_flag.value, 0);
            break;
        case "getNumberDetails":
            flag_value.value = client.getNumberDetails(requested_flag.value, 0);
            break;
        case "getObjectValue":
            flag_value.value = client.getObjectValue(requested_flag.value, {});
            break;
        case "getObjectDetails":
            flag_value.value = client.getObjectDetails(
                requested_flag.value,
                {},
            );
            break;
        default:
            console.error("Invalid method selected");
            break;
    }
}

defineProps({
    msg: String,
});
</script>

<template>
    <h2>{{ msg }}</h2>

    <div class="card">
        <input type="text" placeholder="flag name" v-model="requested_flag" />
        <select name="flag-method" id="flag-method" v-model="selected_method">
            <option value="getBooleanValue">getBooleanValue</option>
            <option value="getBooleanDetails">getBooleanDetails</option>
            <option value="getStringValue">getStringValue</option>
            <option value="getStringDetails">getStringDetails</option>
            <option value="getNumberValue">getNumberValue</option>
            <option value="getNumberDetails">getNumberDetails</option>
            <option value="getObjectValue">getObjectValue</option>
            <option value="getObjectDetails">getObjectDetails</option>
        </select>
        <button @click="getFlag">Get flag !</button>
    </div>

    <textarea
        name="flag-value"
        id="flag-value"
        style="width: 100%; height: 150px"
    >
        {{ flag_value }}
    </textarea>
</template>

<style scoped></style>
