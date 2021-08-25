import Ticket from '../entities/Ticket';

// we can test this repositories easily
//in a typicall architecture, the repositories are classes that connect with database

interface NotifierRepository {
  notify(ticket: Ticket, email: string): void;
}

export default NotifierRepository;
