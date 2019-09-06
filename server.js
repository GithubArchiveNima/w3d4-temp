const express = require('express')
const PORT = 31
const app = express()
const cookieSession = require('cookie-session')

app.use(cookieSession({
    name: 'session',
    keys: ['bop!', 'sizzle!', 'honourable c note'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))



/*
    - login page
    - registration page
    - friends (PROTECT THIS AND BELOW!)
        - friends/2
        - friends/2/images
*/

const protectRoutes = (req, res, next) => {
    // if logged in, continue
    if (req.session.user) {
        next()
    } else {
        // if not logged in, redirect to login page
        res.send('AYYY GET OUTTA HERE')
    }
}

const protectRoutesFromThomas = (req, res, next) => {
    // if logged in, continue
    if (req.session.user === 'thomas') {
        res.send('AYYY GET OUTTA HERE')
    } else {
        // if not logged in, redirect to login page
        next()
    }
}

app.use('/friends', protectRoutes)
app.use('/dogs', protectRoutesFromThomas)
// app.use('/cats', protectRoutes)



let counter = 0
app.use((req, res, next) => {
    counter++
    next()
})

// says a particular message every request.
const sayMessage = (message) => {
    const middlewareFunction = (req, res, next) => {
        console.log(message)
        next()
    }

    return middlewareFunction
}

app.use(sayMessage("What up!"))
app.use(sayMessage("Suh dude"))
app.use(sayMessage("Pchaw"))


app.use((req, res, next) => {
    res.cookie('tag', "you're it!")
    next()
})

app.use('/kanye', (req, res, next) => {
    res.cookie('AYY', "BOOM!")
    next()
})


// logging middleware
app.use((req, res, next) => {
    console.log('REQUEST WAS MADE!')
    console.log(req.method, req.path)
    // now it's time to call the next middleware function
    next()
})

// routing middleware
app.use((req, res, next) => {
    if (req.method === 'GET' && req.path === '/kanye') {
        res.send('Kanye Page ' + counter)
    } else if (req.path === '/dogs') {
        res.send('Dogs!')
    }

    next()
})

app.get('/cats', (req, res) => {
    res.send('Cats!')
})

app.get('/login/:name', (req, res) => {
    req.session.user = req.params.name
    res.send('Thanks for logging in!')
})

app.get('/logout', (req, res) => {
    req.session = null
    res.send('Thanks for logging out!')
})

app.get('/friends', (req, res) => {
    res.send('Imagine you had some friends')
})

// bring in the URL routes
const urlRoutes = require('./urls_routes')
app.use(urlRoutes)

// Catching middleware (invisible) ... returns 404

app.listen(PORT, () => {
    console.log('Listening on', PORT)
})
