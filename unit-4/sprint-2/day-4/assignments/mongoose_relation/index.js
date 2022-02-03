const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    // mongodb://127.0.0.1:27017/web14
    "mongodb+srv://aman_638:aman_638@cluster0.txhrb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
//--------Section Model----------------------//
//step 2:- create a schema
const sectionSchema = new mongoose.Schema({
    book_name:{type:String,required:true},
    author_first_name:{type:String,required:true},
    author_last_name:{type:String,required:true},
    book_id:{type:Number,required:false},
},{
    versionKey:false,
    timestamps:true,
});

//step 3:- create a model

const Section = mongoose.model("section",sectionSchema);

//----------book model-----------//

const bookSchema = new mongoose.Schema({
    book_name:{type:String,required:true},
    author_first_name:{type:String,required:true},
    author_last_name:{type:String,required:true},
    book_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"section",
    },
    author_ids:[{type:mongoose.Schema.Types.ObjectId,ref:"author"}],

},{
    versionKey:false,
    timestamps:true,
});

const Book = mongoose.model("book",bookSchema);

//---------Author Model--------------/

const authorSchema = new mongoose.Schema({
    author_first_name:{type:String,required:true},
    author_last_name:{type:String,required:true},
    book_ids:[{type:mongoose.Schema.Types.ObjectId,ref:"book"}],
},{
    versionKey:false,
    timestamps:true,
});

const Author = mongoose.model("author",authorSchema);


//--------------Section CRUD--------------//

app.post("/sections",async(req,res) => {
    try{
        const section = await Section.create(req.body);

        return res.status(201).send(section);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

app.get("/sections",async(req,res) => {
    try{
        const section = await Section.find().lean().exec();

        return res.send(section);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

app.get("/sections/:id", async (req, res) => {
    try {
      const section = await Section.findById(req.params.id).lean().exec();
  
      if (section) {
        return res.send(section);
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  app.patch("sections/:id",async(req,res) => {
    try {
        const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
          .lean()
          .exec();
    
        res.status(201).send(section);
      } catch (err) {
        return res.status(500).send(err.message);
      } 
  });

  app.delete("sections/:id",async (req,res) => {
    try {
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
    
        res.send(section);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });


  //-----------Book CRUD----------------------//

  app.post("/books",async(req,res) => {
    try{
        const book = await Book.create(req.body);

        return res.status(201).send(book);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

app.get("/books",async(req,res) => {
    try{
        const book = await Book.find()
        .populate({path:"book_id"})
        .populate({path:"author_ids"})
        .lean().exec();

        return res.send(book);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

app.get("/books/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).lean().exec();
  
      if (book) {
        return res.send(book);
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  app.patch("books/:id",async(req,res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
          .lean()
          .exec();
    
        res.status(201).send(book);
      } catch (err) {
        return res.status(500).send(err.message);
      } 
  });

  app.delete("books/:id",async (req,res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
    
        res.send(book);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

//-------------Author CRUD---------------------//

app.get("/authors", async (req, res) => {
    try {
      const author = await Author.find()
        .populate({path:"book_ids"})
        .lean()
        .exec();
  
      return res.send(author);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  app.post("/authors", async (req, res) => {
    try {
      const author = await Author.create(req.body);
  
      return res.send(author);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  app.get("/authors/:id", async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).lean().exec();
  
      return res.send(author);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  app.patch("/authors/:id", async (req, res) => {
    try {
      const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(author);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  app.delete("/authors/:id", async (req, res) => {
    try {
      const author = await Author.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.send(author);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });




  app.listen(3001, async function () {
    try {
      await connect();
      console.log("listening on port 3001");
    } catch (e) {
      console.log(e.message);
    }
  });