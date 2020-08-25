
# KenPile

This was originally cloned from the [Heroku go started template](https://github.com/heroku/go-getting-started)

## Running Locally

Make sure you have [Go](http://golang.org/doc/install) version 1.12 or newer and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/go-getting-started.git
$ cd go-getting-started
$ go build -o bin/go-getting-started -v . # or `go build -o bin/go-getting-started.exe -v .` in git bash
github.com/mattn/go-colorable
gopkg.in/bluesuncorp/validator.v5
golang.org/x/net/context
github.com/heroku/x/hmetrics
github.com/gin-gonic/gin/render
github.com/manucorporat/sse
github.com/heroku/x/hmetrics/onload
github.com/gin-gonic/gin/binding
github.com/gin-gonic/gin
github.com/heroku/go-getting-started
$ heroku local
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### On Windows

Change content in `Procfile` to  `web: bin\KenPile` ([Don't commit this change](https://github.com/heroku/go-getting-started/issues/14#issuecomment-605700693))

```
go build -o bin/KenPile.exe -v . && heroku local web
```