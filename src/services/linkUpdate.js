const db = require("../../models");

exports.update = async (indicador, linkDb, Link) => {
  try {
    const idL = linkDb;
    const indicadorLink = indicador;
    const newLink = Link;

    switch (indicadorLink) {
      case "LinkOne":
        const Linkss = await db.links.update(
          {
            link1: newLink,
          },
          {
            where: {
              id: idL.id,
            },
          }
        );

        return true;
      //break;
      case "LinkTwo":
        const Links = await db.links.update(
          {
            link2: newLink,
          },
          {
            where: {
              id: idL.id,
            },
          }
        );

        return true;
      case "LinkThree":
        const Linksss = await db.links.update(
          {
            link3: newLink,
          },
          {
            where: {
              id: idL.id,
            },
          }
        );

        return true;
      default:
        return false;
    }
  } catch (error) {
    return false;
  }
};
