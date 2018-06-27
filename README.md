# GraphQL full stack example
Based on the [Udemy](https://www.udemy.com/) course [GraphQL with Angular & Apollo - The Full-stack Guide
](https://www.udemy.com/graphql-angular-apollo-full-stack/)


## Frontend
The frontend is written in Typescript.After cloning the repository do an

```bash
$ npm install
```

to resolve all required dependencies. To execute the application run

```bash
$ ng serve
```
Open a browser and go to http://localhost:4200/. 
## Backend
The backend is written in Javascript. After cloning the repository do an

```bash
$ npm install
```

to resolve all required dependencies. To execute the application run

```bash
$ npm run dev
```
The expected output after start of the application is
```
> backend@1.0.0 dev /home/stefan/fullstack_graphql/backend
> babel-watch server.js

Express server running on port 4000
```

You can open the URL  http://localhost:4000/graphiql in the browser to access
the GraphiQL UI. It can be used to query/ modify data. To e.g. retrieve the ids
of all known courses

```
query AllCourses {
  allCourses(searchTerm: "") {
    id
  }
}
```

### Database 
The course data is persisted in a [MongoDB](https://www.mongodb.com/) instance. 

Docker is used to make the instance available. The official MongoDB image is pulled 
from the [Docker hub](https://hub.docker.com/).

```bash
docker pull mongo
```

When creating an instance from the image, we forward the container port 27017
(MongoDB default port) to 27017 on localhost. At the same time a volume is attached
to the instance - it serves as persistent data store.
```
docker run -d -p 27017:27017 -v ~/data:/data/db mongo  
```

## FAQ

### MongoNetworkError: failed to connect to server [localhost:27017] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017]
The backend connects per default to a MongoDB running on localhost. Please ensure
that the MongoDB is up and running. The start order of the three componentes is
* MongoDB instance
* Javascript backend
* Angular frontend