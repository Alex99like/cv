const day = 86400000;
const month = 2629746000;
const week = month / 3

const parseDate = (date: number) => {
  const today = new Date(date)
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${month}-${day}-${year}`;
}

export const calcDate = (date: string): string | null => {
  const prevDate = new Date(date).getTime()
  const currentDate = Date.now()
  
  if (prevDate + week < currentDate) {
    return parseDate(prevDate + week)
  } else if (prevDate + day < currentDate) {
    return parseDate(prevDate + day)
  } else {
    return null
  }
}


export const dateNow = () => {
  return parseDate(Date.now())
}

//   if (prevDate < currentDate) {
    // const today = new Date(prevDate + 86400)
    // const year = today.getFullYear();
    // const month = String(today.getMonth() + 1).padStart(2, "0");
    // const day = String(today.getDate()).padStart(2, "0");
    // return `${year}-${month}-${day}`;
//   } else {
//     console.log(`null`)
//     return null
//   }
