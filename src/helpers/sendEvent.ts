import ReactGa from "react-ga4";

export const sendEvent = (category: string, action: string, label: string) => {
  ReactGa.event({
    category,
    action,
    label,
  });
};
