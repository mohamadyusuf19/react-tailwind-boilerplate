export const convertPackages = (params) => {
  if (params === "Telkomsel") {
    return "3GB + 1GB OMG/30Hari";
  } else if (params === "Indosat") {
    return "Freedom 8GB/30Hari";
  } else if (params === "XL") {
    return "4,5 GB/30Hari";
  } else if (params === "Smartfren") {
    return "10 GB/30Hari";
  } else if (params === "Tri") {
    return "3 GB/30Hari";
  } else if (params === "Axis") {
    return "3 GB/30Hari";
  } else if (params === "TelkomselVoucher") {
    return "1 GB, 2 GB OMG/30Hari";
  } else if (params === "AxisVoucher") {
    return "3 GB OMG/30Hari";
  } else {
    return "Pulsa 35.000";
  }
};

export const pricePackages = (params) => {
  if (params === "Telkomsel") {
    return 46000;
  } else if (params === "Indosat") {
    return 37000;
  } else if (params === "XL") {
    return 30000;
  } else if (params === "Smartfren") {
    return 29000;
  } else if (params === "Tri") {
    return 28000;
  } else if (params === "Axis") {
    return 42000;
  } else if (params === "TelkomselVoucher") {
    return 30000;
  } else if (params === "AxisVoucher") {
    return 30600;
  } else {
    return 38500;
  }
};

export const totalPrice = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += pricePackages(array[i].operator);
  }
  return total;
};

export const formatCurrency = (n) => {
  return n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export const convertPhone = (phone) => {
  return phone.split("-").join("");
};

export const textApiWhatsapp = (params, phone) => {
  if (params === "Telkomsel") {
    return `https://api.whatsapp.com/send?phone=6285736255587&text=3GB.${convertPhone(
      phone
    )}.555333`;
  } else if (params === "Indosat") {
    return `https://api.whatsapp.com/send?phone=6285736255587&text=IDF8.${convertPhone(
      phone
    )}.555333`;
  } else if (params === "XL") {
    return `https://api.whatsapp.com/send?phone=6285736255587&text=4GB.${convertPhone(
      phone
    )}.555333`;
  } else if (params === "Smartfren") {
    return `https://api.whatsapp.com/send?phone=6285736255587&text=10GB.${convertPhone(
      phone
    )}.555333`;
  } else if (params === "Tri") {
    return `https://api.whatsapp.com/send?phone=6285736255587&text=3GB.${convertPhone(
      phone
    )}.555333`;
  } else if (params === "Axis") {
    return `https://api.whatsapp.com/send?phone=6285736255587&text=3GB.${convertPhone(
      phone
    )}.555333`;
  } else if (params === "TelkomselVoucher") {
    return `https://api.whatsapp.com/send?phone=6285736255587&text=VTD3.${convertPhone(
      phone
    )}.555333`;
  }
};
