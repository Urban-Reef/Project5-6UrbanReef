import * as argon2 from 'argon2';

/**
 * Hashes a plaintext with the argon2 algorithm
 * @param plainTextPassword The password to hash
 * @returns the hashed password
 */
export async function hashPassword(plainTextPassword : string) {
    try {
        return await argon2.hash(plainTextPassword);
    } catch(error) {
        console.error('An error occurred while hashing the password:', error);
        throw error;
    }
}

/**
 * Takes a plain text and a hashed text and uses the verify function of argon2 to see if they match
 * @param plainTextPassword the password that gets send from the client
 * @param hashedPassword the password that is stored inside the database
 * @returns true if the passwords match and false if not
 */
export async function verifyPassword(plainTextPassword : string, hashedPassword : string) {
    try {
        return await argon2.verify(hashedPassword, plainTextPassword);
    } catch(error) {
        console.error('An error occurred while verifying the password:', error);
        throw error;
    }
}