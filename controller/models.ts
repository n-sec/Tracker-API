import mongoose from 'mongoose';

const Profile = mongoose.model('Profile', new mongoose.Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  }
},{
  _id: false,
}));

const Device = mongoose.model('Device', new mongoose.Schema({
  _id: String,
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  /*
  update: {
    type: [],
    required: true,
  },
  */
},{
  _id: false,
}));

export {
  Profile,
  Device,
};