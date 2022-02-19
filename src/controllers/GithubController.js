
const api = require("../api_github");
require("dotenv/config");

module.exports = {
    async index(req, res) {
        try {
            let repositorios = []
            const response = await api.get("/orgs/takenet/repos");
            response.data.forEach(element => {
                (element.language === "C#")? repositorios.push(element) :""
            });
            repositorios.sort(function (a, b) {
                if (a.created_at > b.created_at) {
                    return 1;
                }
                if (a.created_at < b.created_at) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            repositorios = repositorios.splice(0, 5);

            return res.send(repositorios)
        } catch (error) {
            console.log("Erro github ", error)
        }
    },

}