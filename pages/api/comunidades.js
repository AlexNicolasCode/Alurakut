import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(req, res) {
    if(req.method === 'POST') {
        const TOKEN = "b8dad34140760baf42479925d23740";
        const client = new SiteClient(TOKEN);
        
        const registroCriado = await client.items.create({
            itemType: "967597", 
            ...req.body,
        })
    
        res.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        
        return;
    }

    res.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}