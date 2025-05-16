const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/", require("./routes/OrderRoutes"));
app.use("/api/", require("./routes/commentRoutes"));
app.use("/api/", require("./routes/reviewRoutes"));
app.use('/api/', require('./routes/supportRoutes'));
app.use("/api/", require("./routes/pdfRoutes")); 
app.use("/api/", require("./routes/deliveryTimeRoutes"));




app.get("/", (req, res) => {
  res.send("TiffinBox Backend Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
