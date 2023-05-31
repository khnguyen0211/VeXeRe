const { create_ticket } = require("../services/ticket.service");

const createTicket = async (req, res) => {
    try {
        const ticket = req.body;
        const newTicket = await create_ticket(ticket);
        if(newTicket) {
            res.status(200).send(newTicket);
        } else {
            res.status(404).send(null);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {createTicket}