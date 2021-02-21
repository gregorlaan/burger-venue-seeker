export interface Venue {
    id: string;
    name: string;
    contact: object;
    location: object;
    categories: object[];
    verified: boolean;
    stats: object;
    allowMenuUrlEdit: boolean;
    beenHere: object;
    hereNow: object;
    referralId: string;
    venueChains: object[];
    hasPerk: boolean;
  }
