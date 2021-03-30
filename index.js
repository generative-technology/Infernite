const axios = require("axios");
const FormData = require('form-data');
const fs = require('fs');
const request = require('request');
const validUrl = require('valid-url');

class infernite {

    constructor(token) {
        this.token = token
        this.api = 'https://infernite.ai/predictions'
    }

    async predict(body) {

        const form = new FormData();

        if (!body.model) throw new Error("model field is required")

        if (body.image) {
            if (validUrl.isUri(body.image)) {
                form.append('image', request(body.image));
            } else {
                form.append('image', fs.createReadStream(body.image));
            }
            delete body.image
        }
        
        for (let key in body) {
            form.append(key, body[key].toString());
        }


        const request_config = {
            headers: {
                ...form.getHeaders(),
                Token: this.token
            },
        };

        try {
            let respoonse = await axios.post(this.api, form, request_config)
            return respoonse
        } catch (err) {
            if (err.response && err.response.data){
                throw new Error(`Status code ${err.response.status}: ${JSON.stringify(err.response.data)}`)
            }
            else throw new Error(err.message)
        }

    }

}

module.exports = infernite;