# Infernite

This repo is the Javascript client for [Infernite](). For python client, please go to [Infernite-python]()

[Infernite]() is a Marchine Learning Inference API making AI easily available to small companies, indie developers and scientific researchers. We provide a fast-growing list of mature ML models ready to use through our API endpoints. Infernite holds a lot of advantages from any other existing ML services:

- Fraction of cost: Lower than 10% of cost comparing similar services from similar platforms.
- Extremely easy setup: no need for any ML knowledge, any people knows basic JS or python can use it.
- Blazing fast: All models running on Nvidia Tesla V100, fastest possible inference speed you will likely to get from anywhere.



## INSTALLATION
```bash
npm install infernite
```
## QUICK START

To use Infernite please firstly please signup at [HERE]().

### Image Classification
```javascript
const infernite = require("infernite")

let inf = new infernite("YOUR_USER_NAME", "YOUR_PASSWORD")

inf.run("alexnet", "cat.jpg")
    .then(response => {
        console.log(response.data)
    }).catch(error => {
        console.error(error)
    })
/*
This would give a result like:
{
    person: 0.45,
    xxx: 0.05,
    ...
}
*/
```

### Object Detection
```javascript
const infernite = require("infernite")

let inf = new infernite("test5", "test5")

inf.run("xxxxxxx", "cat.jpg")
    .then(response => {
        console.log(response.data)
    }).catch(error => {
        console.error(error)
    })
/*
This would give a result like:
{
    person: 0.45,
    xxx: 0.05,
    ...
}
*/
```


## AVAILABLE MODELS
### Image Classification
- Alexnet
- Densenet161

### Object Detection
- MaskRCNN

### Segmentation
- xxxxxx

We will constantly add new open-sourced models, If you are interested in a paricular one that we don't yet have, feel free to make a request Issues.

## FEATURES COMMING SOON
- Feature extraction output for classification models
- Python client
- Golang client
- NLP models

Please feel free to let us know at [Issues]() which feature you guys would like most, we will shift the priority accordingly. 



# Enjoy using AI!