module.exports.konversiBulan = (moonInNum) => {
  switch (moonInNum) {
    case 0:
      return "Januari";
    case 1:
      return "Februari";
    case 2:
      return "Maret";
    case 3:
      return "April";
    case 4:
      return "Mei";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "Agustus";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Desember";
    default:
      break;
  }
};

module.exports.konversiHari = (day) => {
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
  }
};

module.exports.timeConversion = (time) => {
  time = time.toString();

  if (time.length == 1) {
    return `0${time}`;
  }

  return time;
};

module.exports.updateTime = (t) => (t < 10 ? "0" + t : t);
