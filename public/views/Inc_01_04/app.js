let loginUser = async () => {
  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  let response = await fetch("http://localhost:3000/views/Inc_01_04", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  let resjson = await response.json();

  if (resjson.error) {
    alert("error: " + resjson.error);
  } else {
    let userData = JSON.stringify(resjson);
    localStorage.setItem("userData", userData);
    window.location.href = `../User/index.html`;
    alert("access!");
  }

};
