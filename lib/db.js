const {dbusername, dbpassword} = process.env

export const productsDBConnect = `mongodb+srv://${dbusername}:${dbpassword}@cluster0.x3oobzt.mongodb.net/productsDB?retryWrites=true&w=majority`