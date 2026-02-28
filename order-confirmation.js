// Order data comes from checkout process
const order = JSON.parse(localStorage.getItem("lastOrder")) || {};

document.getElementById("orderId").textContent =
  order.id || "—";

document.getElementById("paymentMode").textContent =
  order.payment || "—";

document.getElementById("deliveryDate").textContent =
  order.delivery || "Within 5–7 days";
