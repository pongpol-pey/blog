import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://powerful-lion-11937.upstash.io",
  token: "AS6hAAIjcDFiNTRkZWUyZjMyZjc0YTRlOWFiYTRlZTYyNTBmMzgyNnAxMA",
});

export default redis;