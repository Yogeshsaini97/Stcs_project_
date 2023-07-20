


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJjODM2ZTNmMWY2NDZjOWQ3Mzg2ZDQyYzQzM2ViNThmNjBlNzhlOWVlZDdjOWY2OTA4YjY0MzkyNWJlIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjg5ODM1NTE3LCJleHAiOjE2ODk4MzYxMTcsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1NjaGVkdWxlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1NjaGVkdWxlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19TY2hlZHVsZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdHQuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.QRyg-D2HelC_HZt6VW5D0kexja049UF6KYmaIW7Hiqhx8VEs3a5vYROw0xzaAYntbRaiI3zf95796MCbh7Xr_lyaqsi6JGlQBolo4CsLETA6w6YL692WmL5TQjEETZcDjtRHlsyC2V4mhx_yEFipqK7K3Jvv78-nRsQ4heJ6TIJPdowqougy7BUPcdbP9D2gyNT6m1R0BykrwnNH8iESKhorSvAnZIcD5BiRBu2iF8xnVr75fBNji8P10ynt61w2geNY_4hP3gbcacNUIqVlGXL1ralSWs6rYMhwUBQel0DUaoRu75pWFoAG5L1IIuCnB_BRCGobBe4Allqi6y5oNA",
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












