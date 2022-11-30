import { rest } from "msw";
import bulbasur from "./data/bulbasur.json";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/:name", (req, res, ctx) => {
    const { name } = req.params;

    if (name == "bulbasur") {
      return res(ctx.status(200), ctx.json(bulbasur));
    }

    return res(ctx.status(404));
  }),
];
