const allRoutes = require("express").Router();

// I am using this as a FAKE database
// Data in this fake database is not PERSISTED
const shoppingItems = [
  {
    id: 1,
    name: "LV Bag",
    price: "CA$ 15,000",
  },
];

allRoutes.get("/", function (request, response) {
  response.status(200).json({
    error: false,
    code: "WELCOME",
    details: "Welcome to Mimi's Shopping App",
  });
});

allRoutes.get("/fetch-shopping-items", function (request, response) {
  response.status(200).json({
    error: false,
    code: "FETCH_ITEMS",
    details: shoppingItems,
  });
});

allRoutes.post("/create-shopping-item", function (request, response) {
  try {
    if (!request.body) throw "Oga, you no put item for me to create na!";
    let data = request.body;
    data = typeof data === "string" ? JSON.parse(data) : data;

    shoppingItems.push({ ...data, id: shoppingItems.length + 1 });

    response.status(201).json({
      error: false,
      code: "CREATE_ITEM",
      details: shoppingItems[shoppingItems.length - 1],
    });
  } catch (error) {
    response.status(400).json({
      error: true,
      code: "CREATE_ITEM_ERROR",
      details:
        typeof error === "string"
          ? error
          : error?.message || "Could not create shopping item",
    });
  }
});

module.exports = allRoutes;
