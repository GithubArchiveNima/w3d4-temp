# WEEK 3 DAY 4

## SERVERS IN THE REAL WORLD

Express has a cool name.

- HTTP
    - Hyper text transfer protocol
    - how some communication happens between a server and a client

*HTTP IS BUILT AROUND THE IDEA OF REQUEST AND RESPONSE*

    CLIENT -> MAKES A REQUEST
        - METHOD + PATH + { data (optional) } + extra stuff (HEADERS: cookies, ...)
        /get/all/the/dogs
        - GET /allTheDogs

HTTP IS A stateless protocol

- we treat every request as unique, not part of a line of requests

- POST /login --> stamp! ID: 53
- POST /logout
- GET /dogs
- POST /login
- GET /friends --> ID: 53


- Server
- Express

ASK ANY QUESTIONS TO CLARIFY STUFF...


## Middleware

Extensions (plugins) that can be added to an express project.

ANYTHING that happens between a request and a response.


Goals:
======

- installing some premade middleware
- make our own function that makes middleware!
- making our own protected routes
    - making our own super cool middleware
- RESTful routing

RESTful Routing in a nutshell
=============================

1. WHAT ARE THE RESOURCES?

    - TinyApp: URLs, users
    - Dog Web App: dogs, owners, chewToys

2. WHAT ARE YOU DOING TO THEM????

Path list:
    - /dogs
    - /dogs/12
    - /dogs/12/chewToys
    - /owners
    - /owners/15/dogs
    - /chewToys

Methods + Paths:
    - If I want to see all of the dogs
        - GET /dogs
    - Delete chewToy #5 from dog #13
        - DELETE /dogs/13/chewToys/5

- Express.router()
