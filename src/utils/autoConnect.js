import Cookie from "js-cookie";
import { getTronWeb } from "./contractInit";

export const autoConnect = async () => {
    if (Cookie.get("connected") == "true") {
        if (window.tronLink) {
            const res = await window.tronLink.request({ method: 'tron_requestAccounts', });
            if (res.code === 200) {
                await getTronWeb();
            }
        }
    }
}