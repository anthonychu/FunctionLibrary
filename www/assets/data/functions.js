﻿[
    {
        "title": "Deploy Git Hosted Azure Function",
        "template": "https://raw.githubusercontent.com/jefking/FunctionLibrary/master/azuredeploy.any.json",
        "repository": "https://github.com/jefking/FunctionLibrary",
        "description": "Deploys an Azure Function(s) via a git Repository URL.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "Stripe Payment Service",
        "template": "https://raw.githubusercontent.com/toolboc/stripe-function/master/azuredeploy.json",
        "repository": "https://github.com/toolboc/stripe-function",
        "description": "Allows for incorporating Stripe payment functionality as a callable web service.",
        "language": "javascript",
        "type": "function",
        "blog": "http://pjdecarlo.com/2017/06/super-cheap-subscription-and-payment-services-with-stripe-on-microsoft-azure-using-serverless-code-via-azure-functions-node-js.html"
    },
    {
        "title": "Tug of War",
        "template": "https://raw.githubusercontent.com/joescars/TugOfWar-FunctionsDemo/master/azuredeploy.json",
        "repository": "https://github.com/joescars/TugOfWar-FunctionsDemo",
        "description": "This simple demo game is used to teach basic concepts around building Azure Functions with node.js.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "Raffle",
        "template": "https://raw.githubusercontent.com/anthonychu/azure-functions-raffle/master/azuredeploy.portal.json",
        "repository": "https://github.com/anthonychu/azure-functions-raffle/tree/master",
        "description": "A simple raffle application.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "Timer: Azure EA Billing",
        "template": "https://raw.githubusercontent.com/jefking/refreshusagedata/master/deploy.json",
        "repository": "https://github.com/jefking/refreshusagedata/tree/master",
        "description": "This project uses the Azure EA Billing API to download detailed usage information in CSV to Blob Storage so that it can be used with tools like PowerBI.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "HTTP: Generate SAS Token",
        "template": "https://raw.githubusercontent.com/Azure-Samples/functions-node-sas-token/master/azuredeploy.json",
        "repository": "https://github.com/Azure-Samples/functions-node-sas-token",
        "description": "This is a sample HTTP trigger Azure Function that returns a SAS token for Azure Storage for the specified container, blob, and permissions.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "Blob: PDF Extraction to Search",
        "template": "https://raw.githubusercontent.com/m-gagne/PDF2AzSearch/master/azuredeploy.json",
        "repository": "https://github.com/m-gagne/PDF2AzSearch",
        "description": "This Azure Function binds to an Azure Storage container to process PDF files, extract metadata (using Regular Expressions), stores the result in DocumentDB (extracted text + captured metadata) which can then be used by Azure Search",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "HTTP: Entity to SQL",
        "template": "https://raw.githubusercontent.com/AzureBytes/functionsstorsql/master/deploy/azuredeploy.json",
        "repository": "https://github.com/AzureBytes/functionsstorsql/tree/master/src/WebToDatabase",
        "description": "Stores a queue message in SQL Database; uses Entity Framework.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "Blob: Image Resize",
        "template": "https://raw.githubusercontent.com/jefking/fl-image-resize/master/azuredeploy.json",
        "repository": "https://github.com/jefking/fl-image-resize/tree/master/src/ImageResize",
        "description": "The easiest way to resize images stored in Blob Storage (on Azure); uses ImageProcessor.",
        "language": "csharp",
        "type": "function"
    },
    {
        "title": "Slack: User Change Alerts",
        "template": "https://raw.githubusercontent.com/anthonychu/slack-user-change-alerts/master/azuredeploy.portal.json",
        "repository": "https://github.com/anthonychu/slack-user-change-alerts/tree/master/src/SlackUserChangeAlerts.Function",
        "description": "An Azure Function that sends a Slackbot notification to specified users or channels when users are added or removed from Slack. Ported from https://github.com/cfe84/slack-users-change-alerts.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "EventHub: Closed Loop for IoT Hub",
        "template": "https://raw.githubusercontent.com/khilscher/AzureFunctions/master/ClosedLoopFunction/deploy/azuredeploy.json",
        "repository": "https://github.com/khilscher/AzureFunctions",
        "description": "The Closed-Loop function binds to the Event Hub compatible name of an IoT Hub. Each message into the IoT Hub will trigger the function. The sample function reads the JSON message payload, deserializes it, adds the two integer values (DataPoint1 and DataPoint2), and sends the sum back to the device, via IoT Hub, using a C2D message.",
        "addTemplate": "https://raw.githubusercontent.com/fashaikh/AzureFunctions/master/ClosedLoopFunction/deploy/addfunction.json",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "HTTP: Static Web Server",
        "template": "https://raw.githubusercontent.com/anthonychu/azure-functions-static-file-server/master/azuredeploy.portal.json",
        "repository": "https://github.com/anthonychu/azure-functions-static-file-server/tree/master/src",
        "description": "Serves a static website.",
        "blog": "http://anthonychu.ca/post/azure-functions-static-file-server",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "Blob: Static Web Server",
        "template": "https://raw.githubusercontent.com/jefking/fl-default-static/master/azuredeploy.json",
        "repository": "https://github.com/jefking/fl-default-static/tree/master/src",
        "description": "Defaults page (index.htm) for containers. No need for compute on top of raw storage; if you are running static sites.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "Blob: Static Server with CDN",
        "template": "https://raw.githubusercontent.com/jefking/fl-default-static/master/azuredeploy.cdn.json",
        "repository": "https://github.com/jefking/fl-default-static/tree/master/src",
        "description": "Defaults page (index.htm) for containers. No need for compute on top of raw storage; if you are running static sites. This deployment contains a CDN layered 'over top' of the function.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "HTTP: Azure Function Library (this)",
        "template": "https://raw.githubusercontent.com/jefking/FunctionLibrary/master/azuredeploy.json",
        "repository": "https://github.com/jefking/FunctionLibrary",
        "description": "An open source set of common use cases for Azure Functions that are ready to deploy!",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "HTTP: to Storage Queue",
        "template": "https://raw.githubusercontent.com/jefking/fn-http-queue-s/master/azuredeploy.json",
        "repository": "https://github.com/jefking/fn-http-queue-s/tree/master/src",
        "description": "Posted messages get added to Azure Storage Queue.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "HTTP: to Service Bus Queue",
        "template": "https://raw.githubusercontent.com/jefking/fn-http-queue-sb/master/azuredeploy.json",
        "repository": "https://github.com/jefking/fn-http-queue-sb/tree/master/src",
        "description": "Posted messages get added to Azure Service Bus Queue.",
        "language": "javascript",
        "type": "function"
    },
    {
        "title": "HTTP: to Service Bus Topic",
        "template": "https://raw.githubusercontent.com/jefking/fn-http-topic/master/azuredeploy.json",
        "repository": "https://github.com/jefking/fn-http-topic/tree/master/src",
        "description": "Posted messages get added to Azure Service Bus Topic.",
        "language": "javascript",
        "type": "function"
    }
]