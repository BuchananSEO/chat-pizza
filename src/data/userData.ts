import { User } from '../app/models/user'; // Implement with daata model at 'src/app/appmodule.ts'

export const data: User[] = [
  {
    id: 1,
    firstName: 'John Buchanan',
    lastName: 'Mckinney',
    contact: {
      email: 'john@buchananseo.com',
      phone: '3023321698',
      cell: '6105865784'
    },
    office: 'Sharon Hill, PA',
    birthDate: '1991-08-05T18:45:45.236Z',
    title: 'Corporate Team Leader',
    department: 'Owner',
    images: {
      large: '../src/assets/img/dev/ub-lg-drk-lg.png',
      medium: '../src/assets/img/dev/ub-lg-drk-md.png',
      thumbnail: '../src/assets/img/dev/ub-lg-drk-sm.png'
    }
  },
  {
    id: 2,
    firstName: 'Tony',
    lastName: 'Two Times',
    contact: {
      email: 'gayboi@#deznnutz.com',
      phone: '1-800-spank-it',
      cell: '912 444 4444'
    },
    office: 'Tybee Island, GA',
    birthDate: '1978-05-10T01:00:38.454Z',
    title: 'MUD',
    department: 'Lead Pain in my Ass',
    images: {
      large: '../src/assets/img/dev/ub-lg-primary-lg.png',
      medium: '../src/assets/img/dev/ub-lg-primary-md.png',
      thumbnail: '../src/assets/img/dev/ub-lg-primary-sm.png'
    }
  },
  {
    id: 3,
    firstName: 'Joel',
    lastName: 'Two Rollie Joel',
    contact: {
      email: 'yassification@imbuildingthisotocallyourbluff.deznutz',
      phone: '665-616-7174',
      cell: '020-334-2896'
    },
    office: 'San Francisco',
    birthDate: '1972-05-14T08:15:08.610Z',
    title: 'Dynamic Data Out Of Scope Orchestrator',
    department: 'J Knockout',
    images: {
      large: '../src/assets/img/dev/ub-lg-lght-lg.png',
      medium: '../src/assets/img/dev/ub-lg-lght-md.png',
      thumbnail: '../src/assets/img/dev/ub-lg-lght-sm.png'
    }
  }]