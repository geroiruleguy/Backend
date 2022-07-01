import MongoStore from 'connect-mongo'

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

const app = express()

app.use(session({
    
    store: MongoStore.create({
        mongoOptions: advancedOptions
    }),
    
    resave: false,
    saveUninitialized: false
}))