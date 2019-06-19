import {
  Position,
} from './coordinate';

interface IData {
  position?: Position;
}

const connections: Connection[] = [];

class Connection {
  private id: any;

  push(id: string, data?: IData) {
    if (connections.indexOf(this) === -1) {
      this.id = id;
      connections.push(this);
    }
  }

  pull(id: string, data?: IData) {}

  end() {
    connections.filter((value) => value !== this);
  }
}

export default Connection;

export {
  connections,
}

/*
[
    {
        "id": "864893031530374",
        "manufacturer": "Honda",
        "model": "CG 160 Fan",
        "update": [
            {
                "date": 1560374854067,
                "position": {
                    "lat": -2.9138815,
                    "lon": -41.760162333333334
                }
            },
            {
                "date": 1560374937966,
                "position": {
                    "lat": -2.9138815,
                    "lon": -41.760162333333334
                }
            }
        ]
    }
]
*/