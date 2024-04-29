import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact.model';
import { IhealthyDetails } from 'src/app/healthy-living/healthyliving.model';

export class InMemoryContactsApi implements InMemoryDbService{
  createDb() {
    
    let contacts: Contact[] = [
      {
        id: '5CehW',
        email: 'per@gmail.com',
        name: 'Doodleplumb',
        password: 'pass',
        favoritesRanking: 0,
        phones: [{ phoneNumber: '555-765-4321', phoneType: 'mobile', preferred: false }],
        address: {
          streetAddress: '777 Whimsy Lane',
          city: 'Gleeberg City',
          state: 'Colohoma',
          postalCode: 'A4321',
          addressType: 'home'
        }
      },
      {
        id: 'A6rwe',
        email: 'll@gmail.com',
        name: 'Doodleeeplumb',
        password: 'pass',
        favoritesRanking: 0,
        phones: [{ phoneNumber: '555-877-5678', phoneType: 'mobile', preferred: false }],
        address: {
          streetAddress: '543 Lullaby Lane',
          city: 'Sleepytown',
          state: 'Ulaska',
          postalCode: 'F2231',
          addressType: 'other'
        },
      },
      {
        id: '3bNGA',
        email: 'peru@gmail.com',
        name: 'ghgj',
        password: 'pass',
        favoritesRanking: 1,
        phones: [{ phoneNumber: '555-123-4567', phoneType: 'mobile' , preferred: false}],
        address: {
          streetAddress: '123 Merriment Avenue',
          city: 'Dorado City',
          state: 'Mezona',
          postalCode: 'Z2345',
          addressType: 'work'
        },
      },
    ]

    return { contacts }
  
  }
}
