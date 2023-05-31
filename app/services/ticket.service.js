const { Ticket } = require('../../models');
const create_ticket = async (ticket) => {
    try {
        const newTicket = await Ticket.create(ticket);
        if(newTicket) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
}

module.exports = {create_ticket}