import type { Handle } from "@sveltejs/kit";
import redirect from "$lib/server/redirect";

export const handle: Handle = async ({resolve, event}) => {
  if (event.url.pathname === "/reunions") {
    return redirect("https://ilyva.notion.site/c723a5719b104f56951864d26fa48eda?v=f086a92593ee4f7fb1811a4d2e612b98", 301);
  } else if (event.url.pathname === "/notion") {
    return redirect("https://ilyva.notion.site/88b5c7f2f8e1423a8e817f3fe3abfc30?v=33a6902f1da842798b3c2d26d8ac519b", 301);
  }
  return await resolve(event);
}