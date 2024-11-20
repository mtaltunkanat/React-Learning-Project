import routes from "./routes";
import { generatePath } from "react-router-dom";

export const url = (path, params = {}) => {
    let lastRoute, url;
    path.split('.').map(p => {
        if (!lastRoute) {
            lastRoute = routes.find(r => r.name === p);
            url = lastRoute ? lastRoute.path : '';  // Eğer lastRoute bulunamazsa url boş string olur
        } else {
            lastRoute = lastRoute.children ? lastRoute.children.find(r => r.name === p) : undefined;
            if (lastRoute) url +=  '/' +  lastRoute.path ;
        }
    });
    return generatePath(url.replace(/\/\//gi, '/'), params);
}
