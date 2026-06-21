import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
            lowercase: true,
            trim:true,
            minLength: 1,
            maxLength:15,
        },

        password:{
            type:String,
            trim:true,
            minLength: 8,
            maxLength:100,
        },

        email:{
            type:String,
            required: true,
            unique: true,
            lowercase: true,
            trim:true,
            minLength: 1,
            maxLength:100,

        }

},
{
    timestamps:true,
}
)

export const User = mongoose.model("User",userSchema)