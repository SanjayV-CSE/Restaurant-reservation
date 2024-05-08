import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import food1 from "../../assets/Images/OurFav/food-1.jpg";
import food2 from "../../assets/Images/OurFav/food-2.jpg";
import food3 from "../../assets/Images/OurFav/food-3.jpg";
import food4 from "../../assets/Images/OurFav/food-4.jpg";
import food5 from "../../assets/Images/OurFav/food-5.jpg";
import food6 from "../../assets/Images/OurFav/food-6.jpg";
import food7 from "../../assets/Images/OurFav/food-7.jpg";
import food8 from "../../assets/Images/OurFav/food-8.jpg";
import food9 from "../../assets/Images/OurFav/food-9.jpg";

const OurFavourites = () => {
  const itemData = [
    {
      img: food1,
      title: "Bed",
    },
    {
      img: food2,
      title: "Kitchen",
    },
    {
      img: food6,
      title: "Sink",
    },
    {
      img: food9,
      title: "Books",
    },
    {
      img: food5,
      title: "Chairs",
    },

    {
      img: food8,
      title: "Laptop",
    },
    {
      img: food3,
      title: "Doors",
    },
    {
      img: food7,
      title: "Coffee",
    },
    {
      img: food4,
      title: "Coffee",
    },
  ];

  return (
    <div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-bold text-3xl p-5">Our Favourites</h1>
        <div class="w-full md:w-96 flex justify-center items-center">
          <p class="text-center">
            When it comes to our favorites at the pizza restaurant, we've
            curated a delightful selection that captures the essence of what
            makes pizza so irresistible. </p>
        </div>
      </div>

      <br />
      <div className="flex justify-center">
        <ImageList
          sx={{ maxWidth: "1000px", height: "auto", gap: 16, margin: " auto" }}
          variant="masonry"
          cols={4}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default OurFavourites;
