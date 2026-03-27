import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type TravelPlan = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  price: number;
  description?: string;
  transport_options?: { name: string; price: number }[];
  ac_options?: { name: string; price: number }[];
};

export type TravelPlanResponse = {
  contents: TravelPlan[];
  totalCount: number;
  offset: number;
  limit: number;
};

export const getTravelPlans = async () => {
  return await client.get<TravelPlanResponse>({ endpoint: "travel-plans" });
};

export const getTravelPlan = async (id: string) => {
  return await client.get<TravelPlan>({ endpoint: "travel-plans", contentId: id });
};
