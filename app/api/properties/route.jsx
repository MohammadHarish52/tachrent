import connectDB from "@/config/db";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

//GET api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
export const POST = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User id is required", { status: 401 });
    }
    const { userId } = sessionUser;

    const formData = await request.formData();

    // access all values from amenities and images
    const amenities = formData.getAll("amenities");
    const images = Array.from(formData.getAll("images")).filter(
      (image) => image.name !== ""
    );
    // create Prperty Data object for db
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },

      beds: parseInt(formData.get("beds")),
      baths: parseInt(formData.get("baths")),
      square_feet: parseInt(formData.get("square_feet")),
      amenities,
      rates: {
        nightly: parseInt(formData.get("rates.nightly")),
        weekly: parseInt(formData.get("rates.weekly")),
        monthly: parseInt(formData.get("rates.monthly")),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
      // images,
    };

    const newProperty = new Property(propertyData);
    await newProperty.save();

    // return new Response(JSON.stringify({ message: "Success", status: 200 }));
    return new Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
