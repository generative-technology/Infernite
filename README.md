# Infernite

This repo is the Javascript client for [Infernite](). For python client, please go to [Infernite-python]()

[Infernite]() is a Marchine Learning Inference API making AI easily available to small companies, indie developers and researchers. We provide a fast-growing list of mature ML models ready to use through our API endpoints. Infernite holds a lot of advantages from any other existing ML services:

- Fraction of cost: well, it's completely FREE now during alpha test : )
- Super easy setup: no need for any ML knowledge, any people knows basic JS or python can use it.
- Blazing fast: All models running on Nvidia Tesla V100, fastest possible inference speed you will likely to get from anywhere.



## INSTALLATION
```bash
npm install Infernite
```
## QUICK START

You would need a token to use the API.
Firstly please signup [HERE](). A token will be sent to your email immediatly.

### Image Classification
```javascript
import Infernite from "Infernite"
// Create the Infernite client instance
let client = Infernite("Token")
// Execute the inference
client.predict({model: "densenet161", image: "..."}).then(response=>{
    console.log(result)
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
import Infernite from "Infernite"
// Create the Infernite client instance
let client = Infernite("Token")
// Execute the inference
client.predict({model: "maskrcnn", image: "..."}).then(response=>{
    console.log(result)
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