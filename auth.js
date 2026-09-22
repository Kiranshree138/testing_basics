const users = [];

function signup(name, email, password) {
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return {
            success: false,
            message: "User already exists"
        };
    }

    const user = {
        id: users.length + 1,
        name,
        email,
        password
    };

    users.push(user);

    return {
        success: true,
        message: "Signup successful",
        user
    };
}

function login(email, password) {
    const user = users.find(user => user.email === email);

    if (!user) {
        return {
            success: false,
            message: "User not found"
        };
    }

    if (user.password !== password) {
        return {
            success: false,
            message: "Invalid password"
        };
    }

    return {
        success: true,
        message: "Login successful",
        user
    };
}

module.exports = {
    signup,
    login
};