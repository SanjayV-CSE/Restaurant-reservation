import React from "react";

const ServicePage = () => {
  return (
    <div className="container mx-auto p-8">
      <div class="w-full md:w-96 flex flex-col justify-center items-center mx-auto">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">
          Our Services
        </h1>
        <p class="text-center">
          We deliver fast, you can eat here or take it home. Nice people, fresh
          stuff, and really good pizza!
        </p>
      </div>
<br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard
          title="Food Delivery"
          description="Enjoy our delicious dishes from the comfort of your home. We offer fast and reliable food delivery services."
          icon="🚚"
        />
        <ServiceCard
          title="Dine-in Experience"
          description="Immerse yourself in a cozy atmosphere and savor our mouthwatering meals with your friends and family."
          icon="🍽️"
        />
        <ServiceCard
          title="Catering Services"
          description="Planning an event? Let us handle the food! Our catering services ensure your guests are treated to delightful cuisine."
          icon="🎉"
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="text-2xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServicePage;
