function validate_reg()
{
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;
  var phoneNumber = document.getElementById("phone").value;

  var phoneRGEX = /^[1-9]{1}[0-9]{9}$/;
  var pwdRGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,16}$/;
  var emailRGEX = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[.A-Za-z]{2,}$/;

  var emailResult = emailRGEX.test(email);
  var pwdResult = pwdRGEX.test(pwd);
  var phoneResult = phoneRGEX.test(phoneNumber);

  var no_entry = true;

  if(emailResult == false)
  {
    no_entry = false;
    alert('Please enter a valid mail id !');
  }
  if(pwdResult == false)
  {
    no_entry = false;
    alert('Please enter a valid password !');
  }
  if(phoneResult == false)
  {
    no_entry = false;
    alert('Please enter a valid phone number !');
  }
  // if(no_entry == 1)
  // {
  //   var p_msg = document.createElement("p");
  //   p_msg.innerText = "Registration in progress..";
  //   document.body.appendChild(p_msg);
  //   setTimeout(() => 
  //   {   p_msg.remove();
  //       var s_msg = document.createElement("p");
  //       s_msg.innerText = "Registration Successful ! Welcome to Texta Living.";
  //       document.body.appendChild(s_msg); },
  //       2000);
  // }
  return no_entry;
}

function validate_upd()
{
  var id = document.getElementById("id").value;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;
  var phoneNumber = document.getElementById("phone").value;

  var phoneRGEX = /^[1-9]{1}[0-9]{9}$/;
  var pwdRGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,16}$/;
  var emailRGEX = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[.A-Za-z]{2,}$/;

  var idResult = phoneRGEX.test(id);
  var emailResult = emailRGEX.test(email);
  var pwdResult = pwdRGEX.test(pwd);
  var phoneResult = phoneRGEX.test(phoneNumber);

  var no_entry1 = true;

  if(idResult == false)
  {
    no_entry1 = false;
    alert('Please enter a valid number to be updated !');
  }
  if(emailResult == false)
  {
    no_entry1 = false;
    alert('Please enter a valid mail id !');
  }
  if(pwdResult == false)
  {
    no_entry1 = false;
    alert('Please enter a valid password !');
  }
  if(phoneResult == false)
  {
    no_entry1 = false;
    alert('Please enter a valid phone number !');
  }
  return no_entry1;
}

function validate_del()
{
  var del_id = document.getElementById("del_id").value;

  var phoneRGEX = /^[1-9]{1}[0-9]{9}$/;

  var delResult = phoneRGEX.test(del_id);

  var no_entry2 = true;

  if(delResult == false)
  {
    no_entry2 = false;
    alert('Please enter a valid number to be updated !');
  }
  return no_entry2;
}