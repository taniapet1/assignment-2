const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "This returns a list of all the contacts." });
});

app.get("/:contactId/phones", (req, res) => {
  res.json({ message: "These are the numbers for the contact"." });
});

app.put("/", (req, res) => {
  res.json({ message: "This is how you create a new contact." });
});

app.delete("/:contactId", (req, res) => {
  res.json({ message: "This deletes a contact." });
});

app.put("/:contactId", (req, res) => {
  res.json({ message: "This updates attributes for a contact." });
});

app.post("/:contactId/Phone", (req, res) => {
  res.json({ message: "This updates the phone number for a contact". });
});

app.get("/:contactId/phone/phoneId", (req, res) => {
  res.json({ message: "This returns a phone ID." });
});

app.delete("/:contactId/phone/:phoneId", (req, res) => {
  res.json({ message: "This deletes a phone numbers ID." });
});

app.put("/:contactId/phones/:phoneId", (req, res) => {
  res.json({ message: "This updates the attributes of a particular phone number." });
});

require("./routes/contacts.routes")(app);
require("./routes/phones.routes")(app);
require("./routes/stats.routes")(app);

// set port, listen for requests
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});