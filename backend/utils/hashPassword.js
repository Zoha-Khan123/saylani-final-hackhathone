import bcrypt from "bcrypt"

export async function hashMyPassword(plainPassword){
    const hashPassword = bcrypt.hash(plainPassword,10)
    return hashPassword
}

export async function comparePassword(plainPassword,hashedPassword){
    return bcrypt.compare(plainPassword,hashedPassword)
}