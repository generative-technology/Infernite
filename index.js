const axios = require("axios");
const FormData = require('form-data');
const fs = require('fs');


class infernite {

    constructor(username, token) {
        this.username = username
        this.token = token
        this.client = axios.create({
            baseURL: "http://207.53.234.153"
        })

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async check_login() {

        if (this.login_response) {
            // while the session has already logged in
            return this.login_response

        } else if (this.waiting_to_login) {
            // while a login request has been sent but not yet responded
            while (!this.login_response)
                await this.sleep(50)
            return this.login_response

        } else {
            // initiat a login request
            this.waiting_to_login = true
            await this.login()
            this.waiting_to_login = false
            return this.login_response

        }

    }

    async login() {
        this.login_response = await this.client.post('/user/login', { username: this.username, password: this.password })
        console.log(this.login_response.data)
        return this.login_response
    }

    async run(model_name, file_path) {

        await this.check_login()

        const form = new FormData();
        form.append("model", model_name);
        form.append('file', fs.createReadStream(file_path));

        const request_config = {
            headers: {
                ...form.getHeaders(),
                Cookie: this.login_response.headers['set-cookie'][0]
            },
        };

        let response = await this.client.post('/models/inference', form, request_config)

        return response

    }

}

module.exports = infernite;