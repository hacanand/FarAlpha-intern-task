# Overview 
This is a FarAlpha Intern Test Project. 
- This is a simple Nodejs backend application that uses Express to create a simple REST API. The API has the following endpoints: /sayHello
- This application is auto deployed to Azure Virtual machine using Github Actions. 
- The application is running on port 5000.
- The application is running on a Ubuntu 20.04 LTS virtual machine on Azure.
- The application is running on a Nginx server.

## How to run the application or test the API

- Just go to the browser and type the following URL:
```bash
 http://74.235.108.159/sayHello
 ```
 Response:
 ```bash
{
    "message": "Hello User ! Welcome to Test API"
}
```
- You can also test the API using Postman or any other API testing tool.
- push the code to the repository and the application will be auto deployed to the Azure Virtual machine.
