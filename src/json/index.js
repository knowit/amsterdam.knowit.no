export const villages = [];

const year = '2019';
const season = {
  short: 'høst',
  shortCapitalized: 'Høst',
  long: 'høsten',
  longCapitalized: 'Høsten',
};
const startDate = '31. oktober';
const endDate = '3. november';

export const eventData = {
  date: `${startDate} - ${endDate} ${year}`,
  longDate: `${startDate} - ${endDate} ${year}`,
  venue: 'Hotel NH Amsterdam Centre',
  venueUrl: 'https://g.page/NHAmsterdamCentre',
  address: 'Stadhouderskade 7',
  addressUrl: 'https://goo.gl/maps/h7tCL8JE2qFNiKuY7',
  city: 'Amsterdam',
  country: 'Nederland',
  year,
  monthNumber: 10,
  season,
  startDate,
  endDate,
  cities: [
    'Berlin',
    'København',
    'Madrid',
    'Svalbard',
    'Reykjavik',
    'Praha',
  ],
};

const viewmodel = {
  title: `Fagseminar ${eventData.season.longCapitalized} ${eventData.year}`,
  event: {
    ...eventData,
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.411401630002!2d4.87751221580164!3d52.36295987978485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609e61695c79d%3A0xa9a7aa7ec8fa5ea1!2sHotel%20NH%20Amsterdam%20Centre!5e0!3m2!1sen!2sno!4v1570529514760!5m2!1sen!2sno',
  },
  meta: {
    title: `Knowit Stavanger Fagseminar ${eventData.year}`,
    description: `Knowit Stavanger arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. ${season.longCapitalized} ${year} vil den bli avholdt ${eventData.date} i ${eventData.city}, ${eventData.country}.`,
    keywords: `Fagseminar, ${eventData.city}, ${eventData.country}, Fag, Foredrag`,
  },
  days: [
    {
      date: '31',
      label: 'Torsdag 31.10',
    },
    {
      date: '1',
      label: 'Fredag 1.11',
    },
    {
      date: '2',
      label: 'Lørdag 2.11',
    },
    {
      date: '3',
      label: 'Søndag 3.11',
    },
  ],
  schedules: [],
  talks: {},
  villages: [],
};

export default viewmodel;
