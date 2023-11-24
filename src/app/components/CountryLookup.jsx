"use client";

import { useState, useEffect } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("india 1");
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/?key=ZRLNyi2GhC6X8LoXRwfQ")
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
}
