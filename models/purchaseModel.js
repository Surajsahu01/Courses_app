import mongoose from 'mongoose';


const purchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref : "UserDetails" 
    },

    courseId: {
        type: mongoose.Types.ObjectId,
        ref : "User" 
    }
    
    
});

// export const Course = mongoose.model("Course", CourseSchema);
const Purchase = mongoose.model('Purchase', purchaseSchema);
export default Purchase;