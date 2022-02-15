const Product = require("../models/product.model");
const permission = function (permittedRoles) {
    return async function (req, res, next) {
      // first get the user from the req
      const user = req.user;

      // check if user has any of the permittedRoles
      let isPermitted = false;
      //   ["seller", "admin"]
      permittedRoles.map((role) => {
        // seller
        // [ "customer" ]
        if (user.role.includes(role)) {
          isPermitted = true;
        }
        
      });
  
      // if not then throw an error
      if (!isPermitted) {
        return res.status(403).send({ message: "Permission denied" });
      }

      const product_id = await Product.findById(req.params.id).lean().exec();
      const seller_id = product_id.user_id
      if(req.user_id !== seller_id.toString()){
        return res.send("Permission Denied for You");
      }
      // if yes then return next
      return next();
    };
  };

  module.exports=permission;