const jwt = require('jsonwebtoken');
const db = require ('../../models');

const checkToken = async(token) =>{
    let localID = null;
    try {
        const id = await token.decode(token);
        localID = id;
    } catch (error) {
        return false;
    }

    const Usuario = await db.user.findOne({where:{
        id : localID
    }});
    
    if(Usuario){
        const token = encode(Usuario);
        return token;
    }else{
        return false;
    }
}

module.exports = {
    encode: async(Usuario) =>{
        const token = jwt.sign({
            id: Usuario.id,   
        }, 'FraseMuyCoolyD1F1C1LP4RaD3C0',{
            expiresIn: 350,
        });

        return token;
    },

    decode: async(token) =>{
        try{
            const { id } = await jwt.verify(token,'FraseMuyCoolyD1F1C1LP4RaD3C0');
            const user = await db.users.findOne({where: {
                id : id
            }});
            console.log(user);
            if(user){
                return user;
            }else{
                return false;
            }
        }catch(error){
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}