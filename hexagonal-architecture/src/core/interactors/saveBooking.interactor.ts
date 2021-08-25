import Passenger from '../entities/Passenger';
import Trip from '../entities/Trip';
import TripRepository from '../repositories/trip.repository';
import Ticket from '../entities/Ticket';
import NotifierRepository from '../repositories/notifier.repository';


//the bussines logic to execute
const saveBooking = ( tripRepository: TripRepository, notifierRepository: NotifierRepository) => async (passenger: Passenger, tripId: string) => {

  //get trip by id
  const trip: Trip = await tripRepository.getById(tripId);
  
  //managing erros
  if(!trip) throw Error('Something stange has happen')

  //create ticket
  //it can be a class or constructor
  //it posibly is DTO (data transference objects)
  const ticket: Ticket = {
    tripId: trip.id,
    tripName: trip.name,
    departureTime: trip.departureTime,
    arrivalTime: trip.arrivalTime,
    passengerName: passenger.name,
    passengerSurname: passenger.surname,
  };

  //notify passenger
  notifierRepository.notify(ticket, passenger.email);

  //devuelve ticket
  return ticket;
};

export default saveBooking;
