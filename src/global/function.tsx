// Formata a data para padrão BR
const formatDateToBR = (isoDate:any) => {

  const date= new Date(isoDate);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const yer = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${yer} ${hours}:${minutes}`;

};

export {
  formatDateToBR
}