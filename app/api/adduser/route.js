// app/api/adduser/route.js
import { NextRequest, NextResponse } from 'next/server';
import { User } from '../../../models/User/page'; // Make sure the import path is correct

export async function post(req) {
  try {
    const { email, name } = await req.json();
    const newUser = new User({ email, name });
    await newUser.save();
    
    return NextResponse.json({ message: 'User added successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error adding user:', error);
    return NextResponse.json({ error: 'An error occurred while adding user' }, { status: 500 });
  }
}

export async function get(req) {
  try {
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'An error occurred while fetching users' }, { status: 500 });
  }
}

export default function handler(req) {
  return NextResponse.status(405).end(); // Method Not Allowed
}
