const express = require('express');
const cors = require('cors');
const port = 8081;
const app = new express();
YAML = require('yamljs');

const serverDelayConstant = 100;
// Simulate a small amount of delay to demonstrate app's async features
app.use((req,res,next)=>{
    const delay = (Math.random() * 15 + 5) * serverDelayConstant;
    setTimeout(next,delay);
});

nativeObject = YAML.load('database.yml',(database)=>{
	
  app.get("/inventory", (req, res) => {
    
      const inventory = database.inventory;
      if (!inventory) {
          return res
              .status(500)
              .json({
                  error:"No inventories found",
              })
      } else {
          res.status(200).json(inventory)
      }
  });

  app.get("/inventory/:id",(req,res)=>{
    const inventory_id = req.params.id;
    const inventory = database.items.filter(item => item.inventory === inventory_id);
    if (!inventory) {
        return res
            .status(500)
            .json({
                error:"No user with the specified ID",
                id
            })
    } else {
        res
            .status(200)
            .json(inventory)
    }
  });

  app.listen(port,()=>{
      console.log(`server is listening on ${port}`)
  });

});

app.use(cors());

