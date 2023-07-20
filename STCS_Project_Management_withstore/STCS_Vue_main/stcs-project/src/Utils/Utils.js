


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiNmNiOTE4ZmE5ZmZhMjFjYTc2NzM3YTY2ZDE3YTk5ZTUzOTkzM2YxOTM1YTdlOWJhZWNmZGE2Y2NmOGYzIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjg5ODM2NTk3LCJleHAiOjE2ODk4MzcxOTcsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1NjaGVkdWxlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1NjaGVkdWxlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19TY2hlZHVsZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdHQuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.HYnqfKCnDvkol8BDxu-T08Q3TDmg6xiHBm9Ejal0m3aqudE_5_WzeiHgqJmkDCbN3vj7J3iWFwUKZ_5-cdbneOP4j5JJ_uIMOl8QTCHlo4F-WGMEudjEIy4AJtDvgXONcazuwAw7BOG1urbgr_7KM8GAUkHMwbcAiq7stDRASmxwwoRFZEAxdNiWpQMAH4PfQLS9cqDDtSQ8e0bXF9j2NOXtW-HiNd4WNxh0GtHnUZxZAJH82z-5dns-cyy0jrFr9Y-ULANMywSB_lgCqOEJvkqwBy0CYFz-i71fO-2RGNlYvqIlphr3UAaemZQmWz8MKDVaVd5T4vlvGhAkUuThDg",
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












