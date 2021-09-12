import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const prices = await db
    .collection("pricechart")
    .find()
    .toArray();

  res.json(prices);
};