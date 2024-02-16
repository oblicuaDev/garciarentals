// Función general para enviar eventos a Google Analytics
function sendAnalyticsEvent(
  category,
  action,
  label,
  additionalData = {},
  eventName
) {
  // Utiliza el nombre del evento proporcionado o un valor predeterminado ('custom_event')
  const eventToTrack = eventName || "custom_event";
  // Envía el evento a Google Analytics
  gtag("event", eventToTrack, {
    event_category: category,
    event_action: action,
    event_label: label,
    ...additionalData,
  });
}

function trackLoginSuccess(userId) {
  // Llama a sendAnalyticsEvent con el ID del usuario
  console.log("Tracking Login Success");
  sendAnalyticsEvent(
    "success",
    "login",
    "Inicio de sesión exitoso con el ID: " + userId,
    { id_user: userId },
    "login"
  );
}

function trackPurchases(purchaseData) {
  sendAnalyticsEvent(
    "success",
    "purchase",
    "Compra realizada de servicio",
    {
      transaction_id: purchaseData.transactionId,
      value: purchaseData.valueP,
      tax: purchaseData.taxP,
      currency: "USD",
      id_paypal: purchaseData.paypalId,
      items: [
        {
          item_id: purchaseData.productId,
          suscription_expiration: purchaseData.expirationDate,
          bilingual_user: purchaseData.bilingualUser,
          name: purchaseData.nameP,
          email: purchaseData.emailP,
          phone: purchaseData.phoneP,
          daycare_id: purchaseData.daycareIdP,
          licence: purchaseData.licenceP,
          zoho_id: purchaseData.zohoID,
          quantity: purchaseData.quantityP,
        },
      ],
    },
    "purchase"
  );
}
