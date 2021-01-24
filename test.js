const infernite = require("./index")

let inf = new infernite("test5", "test5")

let total_time = 0
let count = 0

inf.login().then(() => {

    for (let i = 0; i < 5; i++) {

        let start = Date.now()

        inf.run("alexnet", "cat.jpg").then(response => {
            // console.log(response.data)
            let time = Date.now() - start
            total_time += time
            count++
            console.log(time, "avg", total_time / count)
        }).catch(error => {
            console.error(error)
        })

        inf.run("alexnet", "cat.jpg").then(response => {
            // console.log(response.data)
            let time = Date.now() - start
            total_time += time
            count++
            console.log(time, "avg", total_time / count)
        }).catch(error => {
            console.error(error)
        })

    }

})


