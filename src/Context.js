import React, {createContext} from "react";

export const data = createContext();

const locations = [
    {
        id: "loc_1_for",
        title: "Forest House",
        category: "forest",
        pricePerNight: 100,
        location: "UK",
        img: "https://images.unsplash.com/photo-1570793005386-840846445fed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
    },
    {
        id: "loc_2_sea",
        title: "Sea House",
        category: "sea",
        pricePerNight: 300,
        location: "hawaii",
        img: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/110188344.jpg?k=e8b3d1e7f9fac35378ee798f472cb39052ce2adc798589f8d5f49d92da034454&o=&hp=1"
    
    },
    {
        id: "loc_3_mountain",
        title: "Mountain Trip",
        category: "mountain",
        pricePerNight: 300,
        location: "everest",
        img: "https://experitour.com/wp-content/uploads/2020/02/Edhit-Everst-Picture-19-768x576.jpg"
    
    },
    {
        id: "loc_4_arctic",
        title: "Arctic House",
        category: "arctic",
        pricePerNight: 300,
        location: "finland",
        img: "https://a0.muscache.com/im/pictures/be5ec43d-245a-4c09-9bb7-a5e1b8eb56b3.jpg?im_w=1200"
    
    }
]

export default function Context({children})
{
    return(
        <data.Provider value={locations}>
            {children}
        </data.Provider>
    )
}