


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxMGVhYzA4OGQwNGY4NTk3NzBlOGZjNzM5ZjM5NjA1NGFiOTI0NGI2M2E2OGUxYTgxMTViYmMzMzkxZTc0YTEiLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2ODk4NTI3OTksImV4cCI6MTY4OTg1MzM5OSwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfU2NoZWR1bGUuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1NjaGVkdWxlLmV2ZXJ5dGhpbmcgQ19Eb2N1bWVudC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19TY2hlZHVsZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdHQuZXZlcnl0aGluZyBDX0RvY3VtZW50LmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.PcGAMYn5rnpz0zflWjmjXURHLgHVQYSKjf9VQUQhJYhiNOwHBE376xv88GIUKH0PpB3ghL3-fsTGRTV47_FeaoGFb8sOIAtI1qQUpv1noOaz_y5IEG8eA4tzwK4_hrddL6CZEW3Ht0QjiK-sA5yzWZvIS_gbehVv9HlyBqNPf1n2i5aq0u28uFnSw7QfnmAmBpmWNi1IlSi3wO0v9Po65PB9uZ8Oag_eor4gy5wAlWhnUaH-_PHcCy10QKjXXFU_YVCI5JkGTd4JGJt1c3matJpjR0OvBpLHM9N6ubfCdLEDUgUALByPXtu-l25N3BXQ6MAMyUZKMtGvNDOj8sX8VQ",
          'Content-Type': 'application/json'
        }
      })
         
      response=await response.json();
   
  

  return response;    
}


export  function ChangeDateFormat(date)
{
    const originalDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    
    const formattedDate = originalDate.toLocaleDateString("en-US", options);
    return formattedDate;
}


export function formatTimeTo12HourFormat(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  return formattedTime;
}


export function GiveDayandmonthseperate(inputDate) {
  // Convert the input date string to a Date object
  const dateObj = new Date(inputDate);

  // Get the day of the month in the format "dd"
  const day = String(dateObj.getDate()).padStart(2, '0');

  // Get the month abbreviation (e.g., "Jul") and the year in 2-digit format (e.g., "'23")
  const monthAbbreviation = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
  const yearTwoDigits = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(dateObj);

  // Construct the formatted date string
  const formattedDate = `${monthAbbreviation} '${yearTwoDigits}`;

  return {day, formattedDate};
}









