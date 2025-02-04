// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     fullName:{
//         type:String,
//         required:true
//     },
//     username:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     gender:{
//         type:String,
//         required:true,
//         enum:['male','female']
//     },
//     profilePic:{
//         type:String,
//         default:""
//     }
// },{timestamps:true});

// const User = mongoose.model("User", userSchema);

// export default User;
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
    },
    profilePic: {
        type: String,
        default: "",
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
    },
    batch: {
        type: String,
        enum: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
    },
    monthlyFeePaid: {
        type: String,
        default: "Not Paid",
    },
    enrollmentDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
