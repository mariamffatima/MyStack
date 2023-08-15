
import connectDB from '../Connection/mongoose'
import { Signup } from '@/models/User/page';

const handler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email, password });

    if (user) {
      // User credentials match, return a success response
      res.status(200).json({ message: 'Login successful' });
    } else {
      // User credentials don't match, return an error response
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error checking login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default connectDB(handler);
