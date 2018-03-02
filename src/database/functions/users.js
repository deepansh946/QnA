import mongoose from "mongoose";

import User from "../models/User";

export async function create({ userId, fullName, email, password }) {
  try {
    const user = new User({
      userId: userId,
      fullName: fullName,
      email: email,
      password: password
    });

    const { newUser } = await user.save();

    return {
      statusCode: 201,
      message: "User created"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// create({
//   userId: "test11",
//   fullName: "Dum1my User",
//   email: "deepans1h91@aagmail.com",
//   password: "askjh1fskdjfas"
// })
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function get({ userId }) {
  try {
    const query = User.findOne({ userId });

    await query.exec((err, user) => {
      if (err) {
        console.error(err);
      }
      console.log(1, user);
    });

    // if (!user) {
    //   return {
    //     statusCode: 404,
    //     message: "User not found"
    //   };
    // }
    // console.log(user);
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// get({ userId: "deepan1sh1123" })
//   .then(e => console.log(e))
//   .catch(e => console.log(e));
