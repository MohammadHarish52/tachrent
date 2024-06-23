import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading={"For Renters"}
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
            textColor="text-white"
          >
            Find Your dream rentel property. Bookmark properties and contact
            owners
          </InfoBox>
          <InfoBox
            heading={"For Property Owners"}
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
            textColor="text-white"
          >
            List Your properties and reach potential tenants . Rent as an Airbnb
            or long term{" "}
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
