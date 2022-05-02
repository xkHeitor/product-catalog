import app from "./main/config/app";
import { env } from "./main/config/env";

const PORT = env.port;
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));