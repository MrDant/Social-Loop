import profil from "../../models/profil";
import { z, useValidatedQuery, zh } from "h3-zod";

export default defineEventHandler(async (event) => {
  await useAuth(event);
  const body = await useValidatedQuery(event, {
    lat: zh.numAsString.optional(),
    long: zh.numAsString.optional(),
    zoom: zh.numAsString.optional().default("0.04"),
  });

  const filter: any = {};
  if (body.lat) {
    filter["attributes.address.lat"] = {
      $gte: body.lat - body.zoom,
      $lte: body.lat + body.zoom,
    };
  }
  if (body.long) {
    filter["attributes.address.long"] = {
      $gte: body.long - body.zoom,
      $lte: body.long + body.zoom,
    };
  }
  return await profil.find(filter);
});
