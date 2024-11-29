import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://Munna:Munna123@cluster0.1v0p1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
