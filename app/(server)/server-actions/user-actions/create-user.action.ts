import { CreateUserParams } from "@/app/lib/types/user.types";
import { connectToDatabase } from "../../mongo";
import { User } from "../../mongo/models/user.model";

const createUser = async (params: CreateUserParams) => {
  const { clerkId, email, firstName, lastName, imageUrl } = params;

  try {
    await connectToDatabase();

    const existingUser = await User.findOne({ clerkId });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = await User.create({
      clerkId,
      email,
      firstName,
      lastName,
      imageUrl,
    });

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }
};

export default createUser;
