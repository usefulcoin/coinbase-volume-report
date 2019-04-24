# Coinbase Price & Volume Report

This repository builds a trading volume report for Coinbase Prime that can be run on an Amazon S3 Static Website. Read (here)[https://docs.aws.amazon.com/AmazonS3/latest/user-guide/static-website-hosting.html] for more information.

## Node Modules and Dependencies

In order to work the distribution is built using node-fetch and ws modules. Additionally, pug-cli and the s3-cli developer dependencies are required.


## Building and Deploying the Distribution

```sh
yarn run build
yarn run deploy:www
```
