import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import _ from "lodash";

const RouteChangeTracker = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);
    const TRACKING_ID: string | undefined = process.env.REACT_APP_GA_KEY;

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            // 환경 변수 사용
            !_.isUndefined(TRACKING_ID) &&   ReactGA.initialize(TRACKING_ID);
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
}

export default RouteChangeTracker;