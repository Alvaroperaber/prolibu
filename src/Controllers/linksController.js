const db = require("../../models");
const updater = require("../services/linkUpdate")

exports.update = async (req, res, next) => {
  try {
    const oportunidadId = req.body.oportunidadId;
    const Link = req.body.link;
    const indicador = req.body.indicador;
    const linkDb = await db.links.findOne({
      where: { oportunidadId: oportunidadId },
    });
    if (linkDb) {
      const u = updater.update(indicador,linkDb,Link);
      if(u){
        res.status(200).send({
          message: "The information has been updated correctly",
        });
      }else{
        res.status(409).send({
          error: "Error updating information.",
        });
      }
      

    } else {
      res.status(409).send({
        error: "Opportunity ID error.",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "¡Server Error!",
    });
    console.log(error)
    next(error);
  }
};
