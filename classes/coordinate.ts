interface IPosition {
  lat: number;
  lon: number;
}

interface ICoordinates {
  lat: string;
  lon: string;
}

class Position {
  private lat: number;
  private lon: number;

  constructor(position: IPosition) {
    this.lat = position.lat;
    this.lon = position.lon;
  }

  get getLat() {
    return this.lat;
  }

  get getLon() {
    return this.lon;
  }
}

function dms(coordinates: ICoordinates): Position {
  return new Position({
    lat: 0,
    lon: 0,
  });
}

function ddm(coordinates: any): number {
  const regexr = /^(\d{2,3})\°?\s?(\d{2}.\d{1,})\'?\s?(\w)$/;
  
  if (regexr.test(coordinates)) {
    const data = coordinates.split(regexr);

    const degree = Number(data[1]);
    const seconds = Number(data[2]);
    const result = degree + (seconds / 60);

    switch (data[3].toUpperCase()) {
      case 'N': return result;
      case 'S': return 0 - result;
      case 'E': return result;
      case 'W': return 0 - result;
      default: throw new Error("Invalid coordinate string");
    }
  } else {
    throw new Error("Invalid coordinate string"); 
  }
}

export {
  dms,
  ddm,
  Position,
};

/*
Degrees, minutes, and seconds (DMS): 41°24'12.2"N 2°10'26.5"E
Degrees and decimal minutes (DMM): 41 24.2028, 2 10.4418
Decimal degrees (DD): 41.40338, 2.17403
*/