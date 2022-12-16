import React, { createContext } from "react";

export const data = createContext();

const locations = [
  {
    id: "loc_1_for",
    title: "Forest House",
    text: "The greatest value of a house in the forest is the opportunity not to disturb natural surrounding. In this case we try to hide building by using black slate on elevation. This material is the very similar to dark color of bark of pine tree. Dark shell of slate is softened by using warm color of natural wood in niche. Big windows on the primary floor are opening to the surrounding. By using this scale of glazing, we will have filling that we we are sitting in the forrest. First floor is a cuboid block that is lying on the blocks of ground floor.",
    category: "forest",
    pricePerNight: 100,
    location: "UK",
    img: "https://images.unsplash.com/photo-1570793005386-840846445fed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  },
  {
    id: "loc_2_sea",
    title: "Sea House",
    text: "Luxury Sea House Resort complex situated itself in the most magnificent piece of land. The Sea House, is an impressive grand villa that sits majestically overlooking the ocean. Surrounded by absolute serenity offers countless possibilities to our dear guests. Start your morning ritual enjoying your first beverage and rich home made breakfast in our elegant restaurant. Choose your favourite way of relaxation, turquoise blue sea or tranquility of our private pool. Apartments are big and comfy and spotless clean.",
    category: "sea",
    pricePerNight: 300,
    location: "Hawaii",
    img: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/110188344.jpg?k=e8b3d1e7f9fac35378ee798f472cb39052ce2adc798589f8d5f49d92da034454&o=&hp=1",
  },
  {
    id: "loc_3_mountain",
    title: "Mountain Trip",
    text: "Mountain Trip’s guided Mount Everest Climbing Expeditions provide the highest level of service to give you the best chance to succeed on this climb. An expedition to the highest peak in the world, often represents the culmination of a climber’s mountaineering career, decisions of whether or not to attempt it and with whom to go climb it are not to be taken lightly.  We specialize in small teams, focused on safety and reaching the summit.  Our teams are led by experienced Everest Guides who love being there",
    category: "mountain",
    pricePerNight: 300,
    location: "Everest",
    img: "https://experitour.com/wp-content/uploads/2020/02/Edhit-Everst-Picture-19-768x576.jpg",
  },
  {
    id: "loc_4_arctic",
    title: "Arctic House",
    text: "Arctic TreeHouse Hotel providing a unique blend of luxury comfort in the heart of Arctic nature. Local Lappish traditions and modern Scandinavian design. In contrast to the meticulously designed accommodation and nest-like cosiness, the panoramic views from the windows provide impressive spectacles of the forest and Arctic skies: the Northern Lights and Midnight Sun can be admired from the comfort of your bed. Our exceptional Rakas Restaurant & Bar serves culinary delights made from Arctic ingredients.",
    category: "arctic",
    pricePerNight: 300,
    location: "Finland",
    img: "https://a0.muscache.com/im/pictures/be5ec43d-245a-4c09-9bb7-a5e1b8eb56b3.jpg?im_w=1200",
  },
  {
    id: "loc_5_monastery",
    title: "Resort Of Halkidiki",
    text: "Holy Mount Athos is located in Eastern Greece on the peninsula, and reaches a height of 2   033 meters. For Orthodox Christians all over the world, the holy Mount Athos is one of the main sacred places, revered as the earthly Lot of the Mother of God. Today the site is on the UNESCO World Heritage List. Athos is famous for its 20 monasteries, each of which has the status of patriarchal stavropegia. The creation of new monasteries on the territory of Athos is prohibited today. The Great Lavra Monastery was founded by St. Athanasius of Athos in 963.",
    category: "monastery",
    pricePerNight: 200,
    location: "Greece",
    img: "https://img.youtube.com/vi/2RwLvywlFC8/hqdefault.jpg",
  },
  {
    id: "loc_6_lake",
    title: "Lake San Marcos",
    text: "A deep breath of fresh air awaits you at Lakehouse Hotel & Resort, with Lake San Marcos as the centerpiece. Reminiscent of a lake house, the idyllic setting invites you to unwind with luxe amenities, signature service and everything that St. Mark Golf Club has to offer. Enjoy a championship golf course, executive golf course, multiple dining options and state of the art meeting spaces. Our full service marina offers electric and non-motorized boat rentals, and our guests love our pools and over-sized spa tubs. Lakehouse is also surprisingly close to all the action!",
    category: "lake",
    pricePerNight: 80,
    location: "California",
    img: "https://a0.muscache.com/im/pictures/a4550fcc-8aad-4f2a-a602-eabcca3cf3dd.jpg?im_w=720",
  },
];

export default function Context({ children }) {
  return <data.Provider value={locations}>{children}</data.Provider>;
}
