# Alexa AI IoT Sample

**Sample code for using Alexa with an IoT thing and managed AI services.**

## About

Using the sample code you can connect an ESP32-CAM device to AWS IoT Core and have it take pictures on-demand and store them in Amazon S3 using Alexa. You can then have Alexa analyze the image using Amazon Rekognition.

 ![Alexa AI IoT Architecture](alexa-ai-iot-sample-architecture.png?raw=true "Alexa AI IoT Architecture")

## 1. Setup IoT thing

1. Open `device` subfolder in VS Code and install PlatformIO extension.
2. Create your device using the `Creating AWS IoT things` wizard in AWS Console (or using cli for power users). Take note of the thing name and download the certificates and CA certificate.
3. Create a policy using the AWS Console or cli. See `policy.json.template` for needed policies.
4. Create `lib/conf/conf.h` based on `lib/conf/conf.h.template`. Update WIFI_SSID, WIFI_PASSWORD, DEVICE_NAME, AWS_IOT_SUB_TOPIC, AWS_IOT_PUB_TOPIC, AWS_IOT_ENDPOINT and the three certificates. 
5. Flash your device. Keep an eye on the serial output to see that all goes well.

Read Nathan Glover's blog post for more information: https://devopstar.com/2020/05/16/aws-iot-esp32-cam-setup

## 2. Create a new Alexa skill

1. Click `Create skill` in Alexa developer console and give it a name.
2. Select `Custom` model and `Provision your own` backend.
3. Add `AnalyzePictureIntent` and `TakePictureIntent`.
4. Go to `Assets` > `Endpoint` and take note of `Your Skill ID` to use later.

Read more in the Alexa documentation: https://developer.amazon.com/en-US/docs/alexa/devconsole/create-a-skill-and-choose-the-interaction-model.html

## 3. Setup backend using AWS SAM and connect to Alexa skill

1. Open `backend` subfolder in VS Code.
2. Build using AWS SAM.
```bash
sam build
```
3. Deploy using AWS SAM guided.
```bash
sam deploy --guided
```
4. Enter values for `AlexaSkillId`, `IotEndpoint`, `IotTopicPub`, `IotTopicSub`, and `ObjectName`.
5. Take note of `AlexaSkillFunctionARN` in the SAM output.
6. Go to `Assets` > `Endpoint` in the Alexa developer console and enter `AlexaSkillFunctionARN` in `Default Region`. Click `Save Endpoints`.

## Questions

Reach out to [Gunnar Grosch](https://twitter.com/gunnargrosch) if you have any questions.

## Author

**Gunnar Grosch** - [GitHub](https://github.com/gunnargrosch) | [Twitter](https://twitter.com/gunnargrosch) | [LinkedIn](https://www.linkedin.com/in/gunnargrosch/)