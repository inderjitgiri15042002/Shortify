const express = require("express");
const app = express();
const path = require("path");
const connectToMongoDB = require("./connect");
const URL = require("./models/url");
const PORT = 8001;
const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectToMongoDB("mongodb://localhost:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
