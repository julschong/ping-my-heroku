const axios = require('axios');
require('dotenv').config();

let cnt = 0;

axios
    .get(process.env.URL)
    .then((res) =>
        console.log(
            `${++cnt} request sent to ${process.env.URL}\nresult: ${res.data}`
        )
    );

setInterval(() => {
    axios
        .get(process.env.URL)
        .then((res) =>
            console.log(
                `${++cnt} request sent to ${process.env.URL}\nresult: ${
                    res.data
                }`
            )
        );
}, 25 * 60 * 1000);
