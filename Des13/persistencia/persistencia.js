import MongoStore from 'connect-mongo'

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

const app = express()

app.use(session({
    
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://geroiruleguy:gero123@cluster0.6zgsv.mongodb.net/?retryWrites=true&w=majority`,
        mongoOptions: advancedOptions
    }),
    
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false
}))