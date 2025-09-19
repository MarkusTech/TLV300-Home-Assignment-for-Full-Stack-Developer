import app from "./app";
import { CONFIG } from "./config/env";
import colors from "colors";

app.listen(CONFIG.PORT, () => {
  console.log(
    colors.bgCyan.white(`Server running on http://localhost:${CONFIG.PORT} `)
  );
});
