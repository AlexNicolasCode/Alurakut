import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(req, res) {
    if(req.method === 'POST') {
        const TOKEN = process.env.NEXT_PUBLIC_TOKEN_ALL_ACCESS;
        const client = new SiteClient(TOKEN);
        
        const registroCriado = await client.items.create({
            itemType: process.env.NEXT_PUBLIC_TOKEN_COMMUNITY_MODEL, 
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