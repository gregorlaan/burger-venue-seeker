export interface Venue {
    id: string;
    name: string;
    contact: object;
    location: {
        lat: number;
        lng: number;
        address: string;
        formattedAddress: string[];
    };
    categories: object;
    verified: boolean;
    stats: object;
    allowMenuUrlEdit: boolean;
    beenHere: object;
    hereNow: object;
    referralId: string;
    venueChains: object;
    hasPerk: boolean;
  }
