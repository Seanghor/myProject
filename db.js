// // const mongoose = require('mongoose');


// // const dbConn = mongoose.connect('mongodb://localhost:27017/CountryManager',(err)=>{
// //     if(!err){
// //         console.log("MongoDB connection Succed")
// //     }else{
// //         console.log("Error in DB connection"+JSON.stringify(err))
// //     }
// // })

// module.exports = dbConn;

const mongoose = require('mongoose');

//update:
// const dbURI = "mongodb+srv://emp_detail:seanghor12345@cluster0.d3x24.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const dbURI = "mongodb://emp_detail:seanghor12345@cluster0-shard-00-00.d3x24.mongodb.net:27017,cluster0-shard-00-01.d3x24.mongodb.net:27017,cluster0-shard-00-02.d3x24.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-cbbbyv-shard-0&authSource=admin&retryWrites=true&w=majority"
const dbConn = async() => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log("connection Database error❌:", err);
        process.exit(1);
    }
};

module.exports = dbConn;