import User from '../models/user.js'

export default async function addEmployee(id, newEmployee) {
     try {
        await User.findByIdAndUpdate(id, {
            $push: { data : newEmployee }
      });
       console.log("Employee added successfully");
     } catch (error) {
       console.error("Error adding employee:", error);
     }
}
