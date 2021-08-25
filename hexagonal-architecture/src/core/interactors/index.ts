import saveBooking from './saveBooking.interactor';
import TripMongo from '../../dataSources/tripMongo.datasource';
import EmailNotifier from '../../dataSources/emailNotifier.datasource';

const tripRepository = new TripMongo();

//injecting dependecies
//it to sure that interactor don't know nothing of the implementations
const notifierRepository = new  EmailNotifier();
export default saveBooking(tripRepository, notifierRepository);
