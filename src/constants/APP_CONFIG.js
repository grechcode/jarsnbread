export const MENU = {
  jars: {
    name: "Паштеты",
    dishes: [
      {
        id: "cream_turkey",
        name: "Индейка со сливками",
        price: 360,
        hit: false,
        new: false,
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/61",
      },
      {
        id: "wine_duck",
        name: 'Парфе "Винная утка"',
        price: 340,
        hit: true,
        new: false,
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/49",
      },
      {
        id: "carrot_rabbit",
        name: "Печень кролика с морковкой",
        price: 300,
        hit: false,
        new: false,
        isAvailable: true,
      },
      {
        id: "carrot_rabbit_cranberry",
        name: "Печень кролика с морковкой, клюква",
        price: 320,
        hit: false,
        new: false,
        isAvailable: true,
      },
    ],
  },
  breads: {
    name: "Хлеб",
    dishes: [
      {
        id: "baguette",
        name: "Багет",
        price: 160,
        hit: false,
        new: false,
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/56",
      },
      {
        id: "ciabatta",
        name: "Чиабатта",
        price: 260,
        hit: false,
        new: false,
        isAvailable: true,
      },
      {
        id: "rye_raisins_and_cumin",
        name: "Рожь, изюм и тмин",
        price: 160,
        hit: false,
        new: false,
        isAvailable: true,
      },
      {
        id: "rye_bacon_and_onion",
        name: "Рожь, бекон и лук",
        price: 200,
        hit: false,
        new: false,
        isAvailable: true,
      },
    ],
  },
  desserts: {
    name: "Десерты",
    dishes: [
      {
        id: "creme_brulee",
        name: "Крем-брюле",
        price: 220,
        hit: true,
        new: false,
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/45",
      },
      {
        id: "new_york_cheesecake",
        name: 'Чизкейк вида "Нью-Йорк"',
        price: 270,
        hit: false,
        new: false,
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/48",
      },
      {
        id: "caramel",
        name: "Карамель (иногда соленая)",
        price: 320,
        hit: false,
        new: false,
        isAvailable: true,
      },
    ],
  },
};

export const WORK_SHEDULE = {
  open: "9:00",
  close: "20:50",
};

export const ORDER_ADDRESS_REQUIRED_VALUE = "г. Екатеринбург, ";
