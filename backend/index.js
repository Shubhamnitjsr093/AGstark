const express = require('express')
const app = express()
const dotenv = require("dotenv");
//app.use(express.json());
dotenv.config();

app.get('/api/jokes', (req, res) => {
     const joke=[
      {id:1,
      title:"gfldsa"
    }
      ,{
        it:2,
        title:"jsdfbfdgf"
      },
      {
        it:3,
        title:"jsdfbfdzfkjbfkdbdgf"
      }
      ,{
        it:4,
        title:"jsdfbfajfbvfdjbfdjlbvfdjvbndfakjbndgf"
      }
      ,{
        it:5,
        title:"jsda,jbgkf..gbafbfdgf"
      }
      ,{
        it:5,
        title:"jsda,jbgkf..gbafbfdgf"
      }
     ]
     res.send(joke);
})

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
