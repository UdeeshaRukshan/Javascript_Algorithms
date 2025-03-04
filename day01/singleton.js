const mongoose = require("mongoose");

class Database {
    static instance = null;

    constructor() {
        if (Database.instance) {
            return Database.instance; // Return the existing connection instance
        }

        this._connect();
        Database.instance = this;
    }

    async _connect() {
        try {
            this.connection = await mongoose.connect("mongodb://localhost:27017/mydatabasesample", {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("✅ Database connected successfully");
        } catch (error) {
            console.error("❌ Database connection failed:", error);
        }
    }

    getConnection() {
        return this.connection;
    }
}

// Usage Example
const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true (Same database instance)
console.log(db1.getConnection() === db2.getConnection()); // true (Same connection)

module.exports = Database;
