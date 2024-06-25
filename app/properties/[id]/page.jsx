"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSingleProperty } from "@/request";

const PropertPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchSingleProperty(id);
        setProperty(property);
      } catch (e) {
        console.log("Error fetching property", e);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  return <div>propertypage</div>;
};
export default PropertPage;
