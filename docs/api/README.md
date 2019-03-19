# API

The API: All actions performed by the controller are available by an API. This enables you to do whatever you want with the controller. Making it truly universal

with the bug api, we ensure that the app is connected to the server.
The programming languages we used for this are:

## Docker
* Docker is a computer program to virtualize the computer's file system. Docker is used to execute software packages that are called 'containers'. Containers are isolated from each other and bundle their own application, tools, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are executed by a single kernel of the operating system and are therefore lighter than virtual machines. Containers are made from 'images' that specify their precise content. Images are often created by combining and modifying standard images downloaded from public archives.

![Docker](https://github.com/vives-projectwerk2-2019/BUG-Bug-Universal-Gamecontroller/blob/master/logo_documentatie/Docker-logo-011.png)

## JavaScript:
* JavaScript is a widely used scripting language to make web pages interactive and develop web applications. The script is transferred to the web browser by means of HTML and is executed in it.

![JavaScript](https://github.com/vives-projectwerk2-2019/BUG-Bug-Universal-Gamecontroller/blob/master/logo_documentatie/javascript.png)

# Code
## For the connection with the database
We have a database connection with IP-address 127.0.0.1 --> this is a loopback-address, this means that the database connects with your home computer. It runs on port 3000. 

Then we have the res object, this is an enhanced version of Node's own response object and supports all built-in-fields and methods. With other words, it sets the HTTP status for the response. It is a chainable alias of Node's response.statusCode. 

If it is correct, you get the 200 notification which means OK. then it goes to the next line code, there it sets your header (=content-type + plain text). And at least it sends Hello World. 



