const fs = require("fs");


exports.getAllProducts = (req, res) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
        );
    res.status(200).json({
        status:"success",
        timwOfRequest:req.requestTime,
        results:products.length,
        data:{
            products,
        },
      });
    }

//Añadir productos
exports.addProduct =  (req, res) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
        );
      console.log(req.body);
      products.push(req.body);
      fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
      res.status(200).json({
        status:"success",
        });
    res.status(200).json({
        status:"success",
        data:{
            products,
        },
      });
    }

//buscar un producot
exports.getProductById = (req, res) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
        );
    
    const foundProduct = products.find(p =>p.id==req.params.id);
        if(foundProduct)
        {
            res.status(200).json({
            status:"success",
            data:{
                product:foundProduct,
            },
        });
        }
        else{
            res.status(404).json({
            status:"not found",
        });
        }
    }

//Delete products
exports.delProductById = (req, res) => {
      const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
        );
        const productos2 = products.filter(p =>p.id!=req.params.id)
        const del1 = fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(productos2));

        res.status(200).json({
            status:"Success Deleted Product",
            });
        res.status(404).json({
            status:"Delete Error",
          });
    }

//Update producto
exports.putProductById = (req, res) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
        );

      const productos2 = products.filter(p =>p.id!=req.params.id);
      fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(productos2));
      
      req.body.id = req.params.id;
      productos2.push(req.body);

      fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(productos2));
      res.status(200).json({
        status:"Edit Products Success",
        });
      res.status(200).json({
        status:"success Edit",
      });
 
    }
    