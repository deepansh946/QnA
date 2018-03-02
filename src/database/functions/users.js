import mongoose from "mongoose";

import User from "../models/User";

export async function create({ fullName, email, password }) {
  try {
    const user = new User({
      fullName: fullName,
      email: email,
      password: password
    });

    const { newUser } = await user.save();

    return {
      statusCode: 201,
      message: "User created",
      payload: user._id
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
//   fullName: "11111Dum1my Usaer",
//   email: "deepa1111123123nsa1h91@aagmail.com",
//   password: "ask1j11h1fsk1a23123djfas"
// })
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function get({ userId }) {
  try {
    const query = User.findById(userId);

    const user = await query.exec();

    if (!user) {
      return {
        statusCode: 404,
        message: "User not found"
      };
    }

    return {
      statusCode: 200,
      message: "User found",
      payload: user
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// get({ userId: "5a98f426447358712786e0ee" })
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function getAll() {
  try {
    const query = User.find();

    const users = await query.exec();

    return {
      statusCode: 200,
      message: "Users found",
      payload: users
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// getAll()
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function update({ userId, fullName, email, password }) {
  try {
    const query = User.findById(userId);

    let user = await query.exec();

    if (fullName) {
      user.fullName = fullName;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    const { res } = user.save();

    return {
      statusCode: 200,
      message: "User updated successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// update({
//   userId: "5a98f426447358712786e0ee",
//   fullName: "Update",
//   email: "update",
//   password: "update"
// })
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function Delete({ userId }) {
  try {
    const query = User.findById(userId);

    const user = await query.exec();

    const res = await user.remove();

    return {
      statusCode: 200,
      message: "User deleted successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// Delete({ userId: "5a98f426447358712786e0ee" })
//   .then(e => console.log(e))
//   .catch(e => console.log(e));
