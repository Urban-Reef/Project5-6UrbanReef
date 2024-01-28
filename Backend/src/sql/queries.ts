/**
 * Gets all the users from the users table
 */
export const getAllUsers = "SELECT * FROM users";

/**
 * Gets a single user according to the given email
 */
export const getUserByEmail = "SELECT * FROM users WHERE email = ?";

/**
 * Gets all the reefs from the reeds table
 */
export const getAllReefs = "SELECT * FROM reefs";

/**
 * Gets a reef by its id
 */
export const getReefById = "SELECT * FROM reefs WHERE id = ?";

/**
 * Creates a new user with the given credentials
 */
export const createUser = "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";

/**
 * Creates a new reef with the given values
 */
export const createReef = "INSERT INTO reefs (name, location, active) VALUES (?, ?, ?)";

/**
 * Add a new picture entry that is linked to a reef via the reefId
 */
export const addPicture = "INSERT INTO pictures (picture, reefId) VALUES (?, ?)";

/**
 * Gets all the picture paths of the pictures that have the given reefId
 */
export const getPicturesById = "SELECT picture FROM pictures WHERE reefId = ?";

/**
 * Updates the email of the user with the given email
 */
export const updateUserEmailByEmail = "UPDATE users SET email = ? WHERE email = ?";

/**
 * Updates the username of the user with the given email
 */
export const updateUserNameByEmail = "UPDATE users SET name = ? WHERE email = ?";

/**
 * Updates the reference to the profile picture of the user with the given email
 */
export const updateUserProfilePictureByEmail = "UPDATE users SET profile_picture = ? WHERE email = ?";

/**
 * Updates the password of the user with the given email
 */
export const updateUserPasswordByEmail = "UPDATE users SET password = ? WHERE email = ?";

/**
 * Gets all the data of all the reefs
 */
export const getAllDataFromEveryReef = "SELECT * FROM reefs";

/**
 * Deletes an entry from the reefs table according to the given id
 */
export const deleteReefAtId = "DELETE FROM reefs WHERE id = ?";

/**
 * Gets the live data from a reef with the given ID
 */
export const getAllDataFromReefById = "SELECT * FROM reefs WHERE id = ?";

export const storeDataPerSecond = "";

export const storeDataPerDay = "";

export const storeDataPerWeek = "";

export const storeDataPerMonth = "";