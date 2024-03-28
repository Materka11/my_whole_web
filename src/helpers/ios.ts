export const iOS = () =>
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
