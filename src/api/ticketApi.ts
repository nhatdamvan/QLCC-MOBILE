import jwtAxios from './jwtAxios';

export const updateTicket = async (ticket: any) => {
  console.log('ticket api', ticket)
  return await jwtAxios.put('ticketRequest', ticket);
};
