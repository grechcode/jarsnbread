export const MENU = {
  jars: {
    name: "Паштеты",
    dishes: [
      {
        id: "cream_turkey",
        name: "Индейка со сливками",
        price: 360,
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/61",
      },
      {
        id: "wine_duck",
        name: 'Парфе "Винная утка"',
        price: 340,
        hit: true,
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/49",
      },
      {
        id: "carrot_rabbit",
        name: "Печень кролика с морковкой",
        price: 300,
        isAvailable: true,
      },
      {
        id: "carrot_rabbit_cranberry",
        name: "Печень кролика с морковкой, клюква",
        price: 320,
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
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/56",
      },
      {
        id: "ciabatta_grande",
        name: "Чиабатта grande",
        price: 260,
        isAvailable: true,
      },
      {
        id: "rye_raisins_and_cumin",
        name: "Рожь, изюм и тмин",
        price: 100,
        isAvailable: false,
      },
      {
        id: "rye_bacon_and_onion",
        name: "Рожь, бекон и лук",
        price: 200,
        isAvailable: true,
        new: true,
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
        isAvailable: true,
        publicationUrl: "https://t.me/jarsnbread/45",
      },
      {
        id: "new_york_cheesecake",
        name: 'Чизкейк вида "Нью-Йорк"',
        price: 270,
        isAvailable: true,
        new: true,
        publicationUrl: "https://t.me/jarsnbread/48",
      },
      {
        id: "caramel",
        name: "Карамель (иногда соленая)",
        price: 320,
        isAvailable: true,
      },
    ],
  },
};
