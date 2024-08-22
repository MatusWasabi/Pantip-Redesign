function GetResponseJson(url: string) {
  // Header of Pantip
  const headers = {
    'Accept': 'application/json, text/plain, /',
    'ptauthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
    'Referer': 'https://pantip.com/',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
  };

  // Fetch Function
  fetch(url, {
    method: 'GET',
    headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}${url}`);
      }
      return response.json(); // or response.text(), depending on the expected response
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
};
export { GetResponseJson };
