import { cleanEnv, port, str } from "envalid";

export default function envalidEnv() {
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str(),
        FOLDER_LOGS: str()
    })
}