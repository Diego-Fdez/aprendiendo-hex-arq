import { connect } from 'mongoose';

const MONGO_URI = `${process.env.MONGO_URI}`;

const dbInit = async () => {
  await connect(MONGO_URI);
  console.log('Connected to DB');
};

export default dbInit;
